/* Renal Physiology I · Fluids, filtration & clearance — First Aid order, Guyton sections */
//@include _renal-guyton-base.js
//@include _renal-boron.js
/* keep this atlas's sections, regroup them into First Aid headings */
Object.assign(GN,{a:"Fluid compartments",b:"Filtration & blood flow",c:"Clearance",d:"Fluid regulation"});
(()=>{const G={balance:"a",compartments:"a",composition:"a",measure:"a",osmosis:"a",shifts:"a",
  overview:"b",urineform:"b",gfr:"b",rbf:"b",autoreg:"b",clearance:"c",edema:"d",micturition:"d"};
 const M={balance:"Water balance",compartments:"Compartments",composition:"ECF vs ICF",measure:"Measuring volumes",osmosis:"Osmolarity & tonicity",shifts:"Fluid shifts",
  overview:"Kidney functions",urineform:"Filtration · reabsorption · secretion",gfr:"GFR determinants",rbf:"Renal blood flow",autoreg:"Autoregulation & TGF",clearance:"Clearance · GFR · ERPF",edema:"Edema",micturition:"Micturition"};
 const m=new Map(SEC.map(s=>[s.id,s]));SEC.length=0;Object.keys(G).forEach(id=>{const s=m.get(id);s.k=G[id];s.mm=M[id];SEC.push(s)})})();
const EXTRA=["edema","micturition"];
applyBoron();
