# Collects per-project economic metadata from the fxhash v2 API: how many times
# each project was minted, and how much cryptocurrency was exchanged (primary
# mints + secondary sales), in native currency (XTZ/ETH) and USD.
# Output: data/project_metadata.csv
import csv
import time
from pathlib import Path

import requests

API_URL = "https://api.v2.fxhash.xyz/v1/graphql"
PAGE_SIZE = 100
OUT = Path(__file__).parent / "data" / "project_metadata.csv"

# Native currency units per chain: Tezos amounts are in mutez (1 XTZ = 1e6),
# EVM (Ethereum/Base) amounts are in wei (1 ETH = 1e18).
DECIMALS = {"TEZOS": 10**6, "ETHEREUM": 10**18, "BASE": 10**18}
CURRENCY = {"TEZOS": "XTZ", "ETHEREUM": "ETH", "BASE": "ETH"}

QUERY = """
query Meta($limit: Int!, $offset: Int!) {
  onchain {
    generative_token(limit: $limit, offset: $offset, order_by: {id: asc}) {
      id
      name
      chain
      mint_opens_at
      supply
      iterations_count
      market_stat {
        prim_volume
        prim_volume_nb
        sec_volume
        sec_volume_nb
        total_volume
        total_volume_nb
        total_volume_fiat
      }
    }
  }
}
"""

FIELDS = ["id", "name", "version", "chain", "mint_opens_at", "supply",
          "minted", "currency", "primary_volume", "primary_sales",
          "secondary_volume", "total_volume", "total_sales", "total_volume_usd"]


def to_native(raw, chain):
    # Convert a raw on-chain amount to whole units of the chain's currency.
    try:
        return round(int(raw) / DECIMALS.get(chain, 10**18), 6)
    except (TypeError, ValueError):
        return ""


def to_usd(raw):
    # total_volume_fiat is returned in cents; convert to whole dollars.
    try:
        return round(int(raw) / 100, 2)
    except (TypeError, ValueError):
        return ""


def fetch_page(offset):
    for attempt in range(4):
        try:
            r = requests.post(API_URL, json={"query": QUERY,
                              "variables": {"limit": PAGE_SIZE, "offset": offset}},
                              timeout=60)
            r.raise_for_status()
            return r.json()["data"]["onchain"]["generative_token"]
        except Exception:
            time.sleep((attempt + 1) * 2)
    raise SystemExit(f"failed to fetch offset {offset}")


def row_of(t):
    chain = t.get("chain")
    ms = t.get("market_stat") or {}
    return {
        "id": t["id"],
        "name": t.get("name"),
        "version": "fxhash 1.0 (Tezos)" if chain == "TEZOS" else "fxhash 2.0 (EVM)",
        "chain": chain,
        "mint_opens_at": t.get("mint_opens_at"),
        "supply": t.get("supply"),
        "minted": t.get("iterations_count"),
        "currency": CURRENCY.get(chain, ""),
        "primary_volume": to_native(ms.get("prim_volume"), chain),
        "primary_sales": ms.get("prim_volume_nb"),
        "secondary_volume": to_native(ms.get("sec_volume"), chain),
        "total_volume": to_native(ms.get("total_volume"), chain),
        "total_sales": ms.get("total_volume_nb"),
        "total_volume_usd": to_usd(ms.get("total_volume_fiat")),
    }


def main():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    offset = total = 0
    with OUT.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDS)
        writer.writeheader()
        while True:
            page = fetch_page(offset)
            if not page:
                break
            for t in page:
                writer.writerow(row_of(t))
            total += len(page)
            print(f"  collected {total} projects", end="\r")
            offset += PAGE_SIZE
    print(f"\nDone. Saved {total} projects to {OUT}")


if __name__ == "__main__":
    main()
