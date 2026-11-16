# -*- coding: utf-8 -*-
"""Per lesson plan: the Medical Council criteria block, and each session with its objectives."""
import re,sys,glob,os,json
STOP=re.compile(r'^(Key concept|In-Class|Out-of|Activities|Post-?class|Formative|Summative|Information|Learning resource|Reference|Evaluation|Assessment|Purpose|Time\s*:|Instructor|Lecturer|Topic\s*:|Title\s*:|\d+\.\s*(Objectives|Learning|Course|Evaluation|Teaching))',re.I)
def clean(x): return re.sub(r'\s+',' ',x).strip()

def mc_block(txt):
    m=re.search(r'Learning criteria required by Medical Council(.{0,9000}?)(?=\n\s*\d+\.\s+[A-Z])',txt,re.S)
    if not m: return []
    out=[]
    for l in m.group(1).splitlines():
        l=l.strip()
        c=re.match(r'^([A-Z]\d+(?:\.\d+)*)\s+(.+)$',l)
        if c: out.append(c.group(1)+" "+clean(c.group(2)))
        elif out and l and not re.match(r'^[\d\*]',l) and len(l)>6: out[-1]+=" "+clean(l)
    return out

def sessions(txt):
    txt=re.sub(r'(?m)^.*\.{6,}.*$','',txt)             # contents page
    txt=re.sub(r'(?m)^\s*Student guide.*$','',txt)      # running header
    out=[];cur=None;inlo=False
    for raw in txt.splitlines():
        l=raw.strip()
        h=re.match(r'^(?:Title|Topic)\s*:?\s*(.+)$',l)
        if h:
            cur={"t":clean(h.group(1)),"lo":[]};out.append(cur);inlo=False;continue
        if cur is None: continue
        if re.match(r'^Learning objectives?\s*:',l,re.I): inlo=True;continue
        if inlo:
            if STOP.match(l): inlo=False;continue
            o=re.match(r'^(\d{1,2})\s*[\.\)]\s*(.{4,})$',l)
            if o: cur["lo"].append(clean(o.group(2)))
            elif cur["lo"] and l and len(l)>4: cur["lo"][-1]+=" "+clean(l)
    return [x for x in out if x["lo"]]

res={}
for f in sorted(glob.glob(sys.argv[1]+"/*.txt")):
    b=os.path.basename(f)[:-4]
    if not re.search(r'(lesson.?plan|student.?guide|240-2|240-3)',b,re.I): continue
    t=open(f,encoding="utf-8",errors="replace").read()
    res[b]={"mc":mc_block(t),"s":sessions(t)}
json.dump(res,open(sys.argv[2],"w",encoding="utf-8"),ensure_ascii=False,indent=1)
for b,v in res.items():
    print(f'{b[:44]:46} sessions={len(v["s"]):3} obj={sum(len(x["lo"]) for x in v["s"]):4} MCcodes={len(v["mc"]):3}')
