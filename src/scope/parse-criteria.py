# -*- coding: utf-8 -*-
"""Parse the OCR'd Medical Competency Assessment Criteria into a code tree."""
import re,sys,json,glob,os
FIX=[(r'\bBi\b','B1'),(r'\b81\b','B1'),(r'\b87\b','B7'),(r'\b88\b','B8'),(r'\b86\b','B6'),
     (r'\b85\b','B5'),(r'\b84\b','B4'),(r'\b83\b','B3'),(r'\b82\b','B2'),(r'e\.¢\.','e.g.'),
     (r'\birnmuno','immuno'),(r'\bsptenectomy','splenectomy'),(r'\bmainutrition','malnutrition'),
     (r'\baggtutination','agglutination')]
rows=[]
for f in sorted(glob.glob(sys.argv[1]+"/p-*.txt")):
    page=int(re.search(r'p-(\d+)',f).group(1))
    txt=open(f,encoding="utf-8",errors="replace").read()
    for a,b in FIX: txt=re.sub(a,b,txt)
    for l in txt.splitlines():
        l=l.rstrip()
        if re.match(r'^\s*หน้า',l): continue
        m=re.match(r'^\s*([AB]\d+(?:\.\d+)*)\s+(.+)$',l)
        if m:
            rows.append({"c":m.group(1),"t":re.sub(r'\s+',' ',m.group(2)).strip(),"p":page});continue
        s=re.match(r'^\s*\(?(\d{1,2})\)\s+(.{3,})$',l)
        if s and rows:
            rows.append({"c":rows[-1]["c"]+"("+s.group(1)+")","t":re.sub(r'\s+',' ',s.group(2)).strip(),"p":page});continue
        if rows and l.strip() and not re.match(r'^\s*[\(\d]',l) and len(l.strip())>3 and not re.search(r'[฀-๿]',l):
            rows[-1]["t"]+=" "+l.strip()
json.dump(rows,open(sys.argv[2],"w",encoding="utf-8"),ensure_ascii=False,indent=0)
top={}
for r in rows:
    k=re.match(r'^([AB]\d+(?:\.\d+)?)',r["c"]).group(1)
    top.setdefault(k,0); top[k]+=1
print("rows:",len(rows))
def key(k):
    m=re.match(r'([AB])(\d+)(?:\.(\d+))?',k); return (m.group(1),int(m.group(2)),int(m.group(3) or 0))
for k in sorted(top,key=key): print(f"  {k:8} {top[k]:4}")
