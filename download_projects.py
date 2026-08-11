import io
import re
import shutil
import sys
import tarfile
import time
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime
from pathlib import Path

import requests

API_URL = "https://api.v2.fxhash.xyz/v1/graphql"
PER_YEAR_DEFAULT = 10
PAGE_SIZE = 100
WORKERS = 5
MAX_RETRIES = 2
TIMEOUT = 30

VERSIONS = {
    "1": {"label": "fxhash-1.0-tezos", "chains": ["TEZOS"]},
    "2": {"label": "fxhash-2.0-evm", "chains": ["ETHEREUM", "BASE"]},
}

IPFS_GATEWAYS = [
    "https://ipfs.io",
    "https://dweb.link",
]
ONCHFS_HOST = "onchfs.fxhash2.xyz"

OUTPUT_DIR = Path(__file__).parent / "projects"

LIST_QUERY = """
query Projects($chains: [String!], $limit: Int!, $offset: Int!) {
  onchain {
    generative_token(
      where: {chain: {_in: $chains}}
      limit: $limit
      offset: $offset
      order_by: {mint_opens_at: asc}
    ) {
      id
      name
      mint_opens_at
      generative_uri
    }
  }
}
"""


def fetch_project_list(chains):
    projects = []
    offset = 0
    while True:
        payload = {"query": LIST_QUERY,
                   "variables": {"chains": chains,
                                 "limit": PAGE_SIZE, "offset": offset}}
        resp = requests.post(API_URL, json=payload, timeout=TIMEOUT)
        resp.raise_for_status()
        page = resp.json()["data"]["onchain"]["generative_token"]
        if not page:
            break
        projects.extend(page)
        print(f"  listed {len(projects)} projects", end="\r")
        offset += PAGE_SIZE
    print()
    return projects


def year_of(project):
    ts = project.get("mint_opens_at")
    if not ts:
        return None
    return datetime.fromisoformat(ts.replace("Z", "+00:00")).year


def sanitize_name(name):
    name = (name or "untitled").strip()
    name = re.sub(r'[<>:"/\\|?*\x00-\x1f]', "_", name)
    name = re.sub(r"\s+", " ", name).strip(" .")
    return (name or "untitled")[:80]


def extract_tar(tar_bytes, dest):
    dest = dest.resolve()
    with tarfile.open(fileobj=io.BytesIO(tar_bytes)) as tar:
        members = [m for m in tar.getmembers() if m.isfile() or m.isdir()]
        tops = {Path(m.name).parts[0] for m in members if Path(m.name).parts}
        strip = 1 if len(tops) == 1 else 0
        for member in members:
            parts = Path(member.name).parts[strip:]
            if not parts:
                continue
            target = (dest / Path(*parts)).resolve()
            if not str(target).startswith(str(dest)):
                continue
            if member.isdir():
                target.mkdir(parents=True, exist_ok=True)
            else:
                target.parent.mkdir(parents=True, exist_ok=True)
                extracted = tar.extractfile(member)
                if extracted is not None:
                    target.write_bytes(extracted.read())


def fetch_ipfs(cid, folder):
    for gateway in IPFS_GATEWAYS:
        for attempt in range(1, MAX_RETRIES + 1):
            try:
                resp = requests.get(f"{gateway}/ipfs/{cid}",
                                    params={"format": "tar"}, timeout=TIMEOUT)
                resp.raise_for_status()
                folder.mkdir(parents=True, exist_ok=True)
                extract_tar(resp.content, folder)
                return True
            except Exception:
                time.sleep(attempt)
    return False


def fetch_onchfs(hash_, folder):
    base = f"https://{hash_}.{ONCHFS_HOST}"
    try:
        resp = requests.get(base + "/", params={"format": "tar"},
                            timeout=TIMEOUT)
        if resp.ok and "tar" in resp.headers.get("content-type", ""):
            folder.mkdir(parents=True, exist_ok=True)
            extract_tar(resp.content, folder)
            return True
    except Exception:
        pass
    try:
        resp = requests.get(base + "/", timeout=TIMEOUT)
        resp.raise_for_status()
        folder.mkdir(parents=True, exist_ok=True)
        (folder / "index.html").write_bytes(resp.content)
        return True
    except Exception:
        return False


def fetch_code(uri, folder):
    if not uri:
        return False, "none"
    scheme, _, rest = uri.partition("://")
    if scheme == "ipfs":
        return fetch_ipfs(rest.split("?")[0], folder), "ipfs"
    if scheme == "onchfs":
        return fetch_onchfs(rest.split("?")[0], folder), "onchfs"
    return False, scheme


def download_project(version_dir, year, project):
    name = project["name"]
    folder = (OUTPUT_DIR / version_dir / str(year)
              / f"{sanitize_name(name)}__{project['id']}")

    if folder.exists() and any(folder.iterdir()):
        return name, "skipped (already downloaded)"

    try:
        ok, scheme = fetch_code(project.get("generative_uri"), folder)
    except Exception as exc:
        return name, f"error: {exc}"

    if not ok:
        return name, f"download failed ({scheme})"

    (folder / "_source.txt").write_text(
        f"id: {project['id']}\nname: {name}\n"
        f"mint_opens_at: {project.get('mint_opens_at')}\n"
        f"generative_uri: {project.get('generative_uri')}\n",
        encoding="utf-8",
    )
    return name, "ok"


def even_pick(items, k):
    if k >= len(items):
        return list(items)
    if k <= 1:
        return items[:1]
    step = (len(items) - 1) / (k - 1)
    return [items[round(i * step)] for i in range(k)]


def existing_by_year(label):
    out = defaultdict(dict)
    root = OUTPUT_DIR / label
    if not root.exists():
        return out
    for year_dir in root.iterdir():
        if not (year_dir.is_dir() and year_dir.name.isdigit()):
            continue
        for proj in year_dir.iterdir():
            if proj.is_dir() and "__" in proj.name:
                out[int(year_dir.name)][proj.name.rsplit("__", 1)[1]] = proj
    return out


def run_version(version_key, per_year=None, pct=None, dry=False, sync=False):
    version = VERSIONS[version_key]
    label, chains = version["label"], version["chains"]

    print(f"\n=== {label}  (chains: {', '.join(chains)}) ===")
    print("Listing projects...")
    projects = fetch_project_list(chains)

    # onchfs projects are skipped: their on-chain resolver is unreliable.
    fetchable = [p for p in projects
                 if str(p.get("generative_uri", "")).startswith("ipfs://")]
    n_onchfs = len(projects) - len(fetchable)

    groups = defaultdict(list)
    for p in fetchable:
        y = year_of(p)
        if y is not None:
            groups[y].append(p)

    have = existing_by_year(label)
    total_have = sum(len(v) for v in have.values())
    print(f"{len(projects)} total, {n_onchfs} onchfs skipped, "
          f"{len(fetchable)} IPFS, {total_have} already on disk")

    to_download = []
    to_delete = []

    for year in sorted(groups):
        group = groups[year]
        on_disk = have.get(year, {})
        if pct is not None:
            target = max(1, round(len(group) * pct / 100))
        else:
            target = len(on_disk) + per_year

        if len(on_disk) > target:
            excess = list(on_disk.values())[target:]
            to_delete.extend(excess)
            picked = 0
        else:
            need = target - len(on_disk)
            fresh = [p for p in group if str(p["id"]) not in on_disk]
            for p in even_pick(fresh, need):
                to_download.append((year, p))
            picked = min(need, len(fresh))

        print(f"  {year}: total {len(group)}, target {target}, "
              f"on disk {len(on_disk)} -> +{picked} download, "
              f"-{max(0, len(on_disk) - target)} delete")

    print(f"\nPlan: download {len(to_download)}"
          + (f", delete {len(to_delete)} extras" if sync else "")
          + f"  ({label})")

    if dry:
        print("(dry run: nothing changed)")
        return

    if sync and to_delete:
        for path in to_delete:
            shutil.rmtree(path, ignore_errors=True)
        print(f"Deleted {len(to_delete)} extra projects")

    counts = {"ok": 0, "skipped": 0, "failed": 0}
    done = 0
    with ThreadPoolExecutor(max_workers=WORKERS) as pool:
        futures = {pool.submit(download_project, label, year, p): (year, p)
                   for year, p in to_download}
        for future in as_completed(futures):
            name, status = future.result()
            done += 1
            if status == "ok":
                counts["ok"] += 1
            elif status.startswith("skipped"):
                counts["skipped"] += 1
            else:
                counts["failed"] += 1
                print(f"  [{done}/{len(to_download)}] FAIL  {name}: {status}")

    print(f"\n{label}: ok={counts['ok']}, skipped={counts['skipped']}, "
          f"failed={counts['failed']}")


def main():
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

    args = sys.argv[1:]
    flags = {a for a in args if a.startswith("--")}
    pos = [a for a in args if not a.startswith("--")]

    amount = pos[0] if len(pos) > 0 else str(PER_YEAR_DEFAULT)
    which = pos[1] if len(pos) > 1 else "1"
    dry = "--dry" in flags
    sync = "--sync" in flags

    per_year = pct = None
    if amount.endswith("%"):
        pct = float(amount[:-1])
    else:
        per_year = int(amount)

    keys = list(VERSIONS) if which == "all" else [which]
    for key in keys:
        if key not in VERSIONS:
            raise SystemExit(f"Unknown version '{key}'. Use 1, 2, or all.")
        run_version(key, per_year=per_year, pct=pct, dry=dry, sync=sync)

    print(f"\nDone. Code in {OUTPUT_DIR}/")


if __name__ == "__main__":
    main()
