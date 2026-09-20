# Reports the on-disk shape of the downloaded archive, for long-term archival
# (e.g. Software Heritage): total size, size per artwork folder, and file types.
# Run on any projects dir:  python archive_report.py [projects_dir]
# Outputs: data/folder_sizes.csv (per artwork) and data/file_type_totals.csv.
import csv
import sys
from collections import defaultdict
from pathlib import Path

ROOT = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).parent / "projects"
DATA = Path(__file__).parent / "data"


def is_junk(path):
    # Skip macOS archive cruft so it doesn't distort the counts.
    return "__MACOSX" in path.parts or path.name.startswith("._")


def human(n):
    for unit in ["B", "KB", "MB", "GB", "TB"]:
        if n < 1024 or unit == "TB":
            return f"{n:.1f} {unit}"
        n /= 1024


def project_folders(root):
    # A project folder is any that holds a _source.txt (written per download).
    return sorted((src.parent for src in root.rglob("_source.txt")),
                  key=lambda p: str(p))


def main():
    if not ROOT.exists():
        raise SystemExit(f"no such dir: {ROOT}")
    DATA.mkdir(parents=True, exist_ok=True)

    type_files = defaultdict(int)
    type_bytes = defaultdict(int)
    grand_files = grand_bytes = 0

    with (DATA / "folder_sizes.csv").open("w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["relpath", "files", "bytes", "size_human"])
        for folder in project_folders(ROOT):
            files = fbytes = 0
            for p in folder.rglob("*"):
                if not p.is_file() or is_junk(p.relative_to(ROOT)):
                    continue
                size = p.stat().st_size
                files += 1
                fbytes += size
                ext = p.suffix.lower() or "(no ext)"
                type_files[ext] += 1
                type_bytes[ext] += size
            rel = folder.relative_to(ROOT).as_posix()
            w.writerow([rel, files, fbytes, human(fbytes)])
            grand_files += files
            grand_bytes += fbytes

    with (DATA / "file_type_totals.csv").open("w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["extension", "files", "bytes", "size_human"])
        for ext in sorted(type_bytes, key=type_bytes.get, reverse=True):
            w.writerow([ext, type_files[ext], type_bytes[ext], human(type_bytes[ext])])

    n_folders = sum(1 for _ in project_folders(ROOT))
    print(f"projects:    {n_folders:,}")
    print(f"total files: {grand_files:,}")
    print(f"total size:  {human(grand_bytes)} ({grand_bytes:,} bytes)")
    print(f"wrote {DATA / 'folder_sizes.csv'} and {DATA / 'file_type_totals.csv'}")


if __name__ == "__main__":
    main()
