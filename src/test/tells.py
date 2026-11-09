"""List MCQs whose correct option is conspicuously the longest (a test-wise 'tell').
usage: python3 src/test/tells.py [file.py|legacy ...]   (no args = summary of all sources)
A question is flagged when the keyed option is the longest and > RATIO x the next-longest."""
import sys, json, pathlib, importlib.util
RATIO = 1.25
Q = pathlib.Path(__file__).resolve().parents[1] / "questions"

def tell(o, a):
    L = sorted(len(x) for x in o)
    return len(o[a]) == L[-1] and L[-1] > RATIO * L[-2]

def load(p):
    sp = importlib.util.spec_from_file_location(p.stem, p); m = importlib.util.module_from_spec(sp); sp.loader.exec_module(m); return m

def items(name):
    """yield (where, q, o, a)"""
    if name == "legacy":
        L = json.loads((Q / "legacy.json").read_text())
        for t, qs in L["topics"].items():
            for i, q in enumerate(qs): yield f"topics[{t}][{i}]", q["q"], q["o"], q["a"]
        for c in L["cases"]:
            for i, s in enumerate(c["steps"]): yield f"case {c['id']} step {i}", s["q"], s["o"], s["a"]
        for c, b in L["boss"].items():
            for i, q in enumerate(b["qs"]): yield f"boss {c}[{i}]", q["q"], q["o"], q["a"]
        return
    p = Q / name; m = load(p)
    if name == "cases.py":
        for ch, cid, *_, steps in m.C:
            for i, st in enumerate(steps): yield f"case {cid} step {i}", st[2], st[3], st[4]
        return
    for t, qs in m.T.items():
        for i, q in enumerate(qs): yield f"T[{t}][{i}]", q[0], q[1], q[2]
    B = getattr(m, "BOSS", None)
    if B:
        for i, q in enumerate(B["qs"]): yield f"BOSS[{i}]", q[0], q[1], q[2]

if __name__ == "__main__":
    names = sys.argv[1:] or [p.name for p in sorted(Q.glob("*.py"))] + ["legacy"]
    tot = bad = 0
    for n in names:
        rows = list(items(n)); f = [r for r in rows if tell(r[2], r[3])]; tot += len(rows); bad += len(f)
        if sys.argv[1:]:
            for w, q, o, a in f: print(f"{n} {w}: {q[:70]!r} -> keyed {o[a]!r}")
        else: print(f"{n:24} {len(f):4}/{len(rows)}")
    print(f"TOTAL {bad}/{tot} = {bad/max(tot,1):.0%}")
