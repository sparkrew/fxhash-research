import csv
import time
from pathlib import Path

import requests

API_URL = "https://api.v2.fxhash.xyz/v1/graphql"
PAGE_SIZE = 100          # API hard limit is 100 rows per request
REQUEST_PAUSE = 0.15
MAX_RETRIES = 4

VERSIONS = {
    "fxhash 1.0 (Tezos)": ["TEZOS"],
    "fxhash 2.0 (EVM)": ["ETHEREUM", "BASE"],
}

OUTPUT_DIR = Path(__file__).parent / "data"
OUTPUT_FILE = OUTPUT_DIR / "fxhash_tokens.csv"

QUERY = """
query Tokens($chains: [String!], $limit: Int!, $offset: Int!) {
  onchain {
    generative_token(
      where: {chain: {_in: $chains}}
      limit: $limit
      offset: $offset
      order_by: {created_at: asc}
    ) {
      id
      name
      chain
      created_at
      mint_opens_at
      supply
      iterations_count
      author {
        id
        name
      }
    }
  }
}
"""


def fetch_page(chains: list[str], offset: int, limit: int) -> list[dict]:
    payload = {
        "query": QUERY,
        "variables": {"chains": chains, "limit": limit, "offset": offset},
    }

    for attempt in range(1, MAX_RETRIES + 1):
        try:
            resp = requests.post(API_URL, json=payload, timeout=30)
            resp.raise_for_status()
            data = resp.json()
            if "errors" in data:
                raise RuntimeError(data["errors"])
            return data["data"]["onchain"]["generative_token"]
        except Exception as exc:
            wait = attempt * 2
            print(f"  ! error (attempt {attempt}/{MAX_RETRIES}): {exc}. "
                  f"Retrying in {wait}s")
            time.sleep(wait)

    raise RuntimeError(f"Failed to fetch page offset={offset} after "
                       f"{MAX_RETRIES} attempts")


def scrape_version(version: str, chains: list[str]) -> list[dict]:
    tokens: list[dict] = []
    offset = 0

    print(f"\n{version}  (chains: {', '.join(chains)})")
    while True:
        page = fetch_page(chains, offset, PAGE_SIZE)
        if not page:
            break

        for tok in page:
            author = tok.get("author") or {}
            tokens.append({
                "id": tok["id"],
                "name": tok["name"],
                "version": version,
                "chain": tok["chain"],
                "author_name": author.get("name"),
                "author_id": author.get("id"),
                "created_at": tok["created_at"],
                "mint_opens_at": tok["mint_opens_at"],
                "supply": tok["supply"],
                "iterations_count": tok["iterations_count"],
            })

        print(f"  fetched {len(page):>3} records "
              f"(total {len(tokens)}), offset={offset}")
        offset += PAGE_SIZE
        time.sleep(REQUEST_PAUSE)

    return tokens


def scrape_all() -> list[dict]:
    all_tokens: list[dict] = []
    for version, chains in VERSIONS.items():
        all_tokens.extend(scrape_version(version, chains))
    return all_tokens


def save_csv(tokens: list[dict], path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    fieldnames = ["id", "name", "version", "chain", "author_name", "author_id",
                  "created_at", "mint_opens_at", "supply", "iterations_count"]
    with path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(tokens)


def main() -> None:
    print("Scraping projects from fxhash")
    tokens = scrape_all()
    save_csv(tokens, OUTPUT_FILE)

    by_version: dict[str, int] = {}
    by_chain: dict[str, int] = {}
    for t in tokens:
        by_version[t["version"]] = by_version.get(t["version"], 0) + 1
        by_chain[t["chain"]] = by_chain.get(t["chain"], 0) + 1

    print(f"\nSaved {len(tokens)} projects to {OUTPUT_FILE}")
    print("By version:")
    for version, n in by_version.items():
        print(f"  {version}: {n}")
    print("By chain:")
    for chain, n in sorted(by_chain.items()):
        print(f"  {chain}: {n}")


if __name__ == "__main__":
    main()
