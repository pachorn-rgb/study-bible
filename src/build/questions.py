"""Question bank: review topics, MCQs, bosses, Case Ladder cases and Dx Daily entries.

Stored per chapter in docs/q/<chapterId>.json  ({topics, boss, cases, dx}) plus docs/q/index.json ({parts, dxl}).
The app loads every part listed in index.json and merges them.

  python3 src/build/questions.py          # apply every src/questions/*.py generator
  python3 src/build/questions.py --split  # one-time: split legacy docs/questions.json into docs/q/

A generator file (src/questions/<name>.py) defines:
  M        atlas id it belongs to (must exist in library.json)
  T        {topic hash: [(question, [4 options], answer index, explanation), ...]}
  SUB / SUBS / DEFSUB   discipline for the checklist items (default "Pharmacology")
  RELINK   optional {existing checklist id: topic hash} to point old items at this atlas
  BOSS     optional chapter boss: dict(th, en, case, qs=[...6 questions], pass_)
  DX, DXL  optional Dx Daily cases and extra answer vocabulary
cases.py holds Case Ladder cases for all chapters.
Options are shuffled deterministically, so authors can always put the right answer first.
Hand-written data already in docs/q/*.json (e.g. the Renal chapter) is kept; generated items replace only their own ids.
Atlases marked "draft" in src/atlases/<id>.json are skipped.
"""
import sys, json, random, hashlib, importlib.util, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[2]
SRC, DOCS = ROOT / "src", ROOT / "docs"
QD = DOCS / "q"


def load_py(p):
    sp = importlib.util.spec_from_file_location(p.stem, p); m = importlib.util.module_from_spec(sp); sp.loader.exec_module(m); return m


def shuf(q, o, a, e, d=None, key=""):
    """d = optional difficulty 1 (recall) · 2 (one-step vignette) · 3 (two-step vignette)."""
    assert 0 <= a < len(o), (key, q)
    r = random.Random(int(hashlib.md5(key.encode()).hexdigest()[:8], 16)); idx = list(range(len(o))); r.shuffle(idx)
    out = {"q": q, "o": [o[i] for i in idx], "a": idx.index(a), "e": e}
    if d: out["d"] = d
    return out


FIXED = ("both", "neither", "all of", "none of", "above")


def balance(q, tid):
    """Legacy hand-written questions (no generator) were mostly keyed B. Re-order options into a fixed
    permutation keyed on the stem (idempotent: canonical sort first), unless an option refers to the others."""
    if any(w in o.lower() for o in q["o"] for w in FIXED): return q
    right = q["o"][q["a"]]; base = sorted(q["o"])
    r = random.Random(int(hashlib.md5((tid + q["q"]).encode()).hexdigest()[:8], 16)); r.shuffle(base)
    return {**q, "o": base, "a": base.index(right)}


def drafts():
    return {p.stem for p in (SRC / "atlases").glob("*.json") if json.loads(p.read_text()).get("draft")}


def read_bank():
    idx = json.loads((QD / "index.json").read_text())
    parts = {c: json.loads((QD / f"{c}.json").read_text()) for c in idx["parts"]}
    return idx, parts


def write_bank(idx, parts):
    QD.mkdir(exist_ok=True)
    idx["parts"] = sorted(c for c, p in parts.items() if any(p.get(k) for k in ("topics", "boss", "cases", "dx")))
    for c in idx["parts"]:
        (QD / f"{c}.json").write_text(json.dumps(parts[c], ensure_ascii=False, separators=(",", ":")))
    (QD / "index.json").write_text(json.dumps(idx, ensure_ascii=False, separators=(",", ":")))


def split_legacy():
    lib = json.loads((DOCS / "library.json").read_text()); q = json.loads((DOCS / "questions.json").read_text())
    owner = {x["id"]: c["id"] for s in lib["sections"] for c in s["chapters"] for x in c["checklist"]}
    parts = {}
    P = lambda c: parts.setdefault(c, {"topics": {}, "boss": None, "cases": [], "dx": []})
    for tid, qs in q["topics"].items():
        assert tid in owner, "topic without checklist owner: " + tid
        P(owner[tid])["topics"][tid] = qs
    for c, b in q.get("boss", {}).items(): P(c)["boss"] = b
    for x in q.get("cases", []): P(x["ch"])["cases"].append(x)
    for c, l in q.get("dx", {}).items(): P(c)["dx"] = l
    write_bank({"parts": [], "dxl": q.get("dxl", [])}, parts)
    print("split into", sorted(parts))


def apply():
    lib = json.loads((DOCS / "library.json").read_text())
    chs = {c["id"]: c for s in lib["sections"] for c in s["chapters"]}
    mods = {m["id"]: c for c in chs.values() for m in c["modules"]}
    idx, parts = read_bank(); skip = drafts()
    P = lambda c: parts.setdefault(c, {"topics": {}, "boss": None, "cases": [], "dx": []})
    n = 0
    for f in sorted((SRC / "questions").glob("*.py")):
        if f.name == "cases.py": continue
        m = load_py(f)
        if m.M in skip: print("skip draft", m.M); continue
        assert m.M in mods, f"{f.name}: atlas {m.M} not in library.json (run integrate.py first)"
        c = mods[m.M]; mod = next(x for x in c["modules"] if x["id"] == m.M); titles = {h: t for t, h in mod["topics"]}
        c["checklist"] = [x for x in c["checklist"] if not x["id"].startswith(m.M + ":")]
        bank = P(c["id"])
        for h, qs in m.T.items():
            assert h in titles, f"{f.name}: topic {h} not in atlas"
            sub = getattr(m, "SUBS", {}).get(h) or getattr(m, "DEFSUB", None) or getattr(m, "SUB", "Pharmacology")
            tid = f"{m.M}:{h}"
            c["checklist"].append({"id": tid, "sub": sub, "t": titles[h], "link": {"m": m.M, "h": h}})
            bank["topics"][tid] = [shuf(*q, key=tid + str(i)) for i, q in enumerate(qs)]; n += len(qs)
        for oid, h in getattr(m, "RELINK", {}).items():
            for x in c["checklist"]:
                if x["id"] == oid: x["link"] = {"m": m.M, "h": h}
        B = getattr(m, "BOSS", None)
        if B: bank["boss"] = {"title": {"th": B["th"], "en": B["en"]}, "case": B["case"], "pass": B["pass_"],
                              "qs": [shuf(*q, key=c["id"] + "boss" + str(i)) for i, q in enumerate(B["qs"])]}
        for d in getattr(m, "DX", []):
            bank["dx"] = [x for x in bank["dx"] if x["id"] != d["id"]] + [d]
        for nm, ct in getattr(m, "DXL", []):
            if not any(x[0] == nm for x in idx["dxl"]): idx["dxl"].append([nm, ct])
    ids = {x["id"] for c in chs.values() for x in c["checklist"]}
    cs = load_py(SRC / "questions" / "cases.py").C
    for ch, i, th, en, sth, sen, steps in cs:
        if any(t.split(":")[0] in skip for *_, t in steps): print("skip draft case", i); continue
        st = []
        for k, (ith, ien, q, o, a, e, t) in enumerate(steps):
            assert t in ids, (i, t)
            s = shuf(q, o, a, e, key=i + str(k)); s["info"] = {"th": ith, "en": ien} if ith else None; s["t"] = t; st.append(s)
        b = P(ch); b["cases"] = [x for x in b["cases"] if x["id"] != i] + [{"id": i, "ch": ch, "title": {"th": th, "en": en}, "stem": {"th": sth, "en": sen}, "steps": st}]
    gen = {f"{load_py(f).M}:{h}" for f in (SRC / "questions").glob("*.py") if f.name != "cases.py" for h in load_py(f).T}
    for b in parts.values():
        for tid, qs in b["topics"].items():
            if tid not in gen: b["topics"][tid] = [balance(q, tid) for q in qs]
        for k in b["cases"]:
            if k["id"] not in {c[1] for c in cs}: k["steps"] = [balance(st, k["id"]) for st in k["steps"]]
    (DOCS / "library.json").write_text(json.dumps(lib, ensure_ascii=False, indent=1))
    write_bank(idx, parts)
    print("generated MCQs", n, "· parts", idx["parts"])


if __name__ == "__main__":
    split_legacy() if "--split" in sys.argv else apply()
