/* ── DATA ── */
const CALCS=[
  {id:'emi',cat:'finance',title:'EMI Calculator',desc:'Monthly loan EMI, total interest paid, and full payment breakdown.',tags:['loan','interest'],rpm:'vh',hot:true},
  {id:'salary',cat:'finance',title:'Salary Calculator',desc:'Monthly take-home after income tax and PF. Old vs new regime.',tags:['take-home','tax'],rpm:'vh',hot:true},
  {id:'tax',cat:'finance',title:'Income Tax Calculator',desc:'Compare old vs new regime FY 2025-26. Instant savings verdict.',tags:['income tax','regime'],rpm:'vh',hot:true},
  {id:'sip',cat:'finance',title:'SIP Calculator',desc:'Monthly SIP corpus with estimated returns breakdown.',tags:['mutual fund','returns'],rpm:'h'},
  {id:'compound',cat:'finance',title:'Compound Interest',desc:'How money grows with compounding. Principal vs interest chart.',tags:['savings','growth'],rpm:'h'},
  {id:'mortgage',cat:'finance',title:'Mortgage / Home Loan',desc:'Home loan EMI with down payment and total interest breakdown.',tags:['home loan','property'],rpm:'vh'},
  {id:'roi',cat:'finance',title:'ROI Calculator',desc:'Return on investment for any project or business decision.',tags:['return','profit'],rpm:'h'},
  {id:'debt',cat:'finance',title:'Debt Payoff Planner',desc:'Avalanche vs snowball comparison. See when you will be debt-free.',tags:['debt','payoff'],rpm:'h'},
  {id:'networth',cat:'finance',title:'Net Worth Tracker',desc:'Assets minus liabilities. Saved locally — no login needed.',tags:['assets','wealth'],rpm:'h'},
  {id:'bmi',cat:'health',title:'BMI Calculator',desc:'Body mass index with visual scale, healthy range and category.',tags:['body mass','weight'],rpm:'h',hot:true},
  {id:'calorie',cat:'health',title:'Calorie / TDEE',desc:'Daily calorie needs based on age, weight, height and activity.',tags:['TDEE','diet'],rpm:'h'},
  {id:'pregnancy',cat:'health',title:'Pregnancy Due Date',desc:'Due date, current week, trimester and upcoming milestones.',tags:['due date','trimester'],rpm:'h'},
  {id:'sleep',cat:'health',title:'Sleep Calculator',desc:'Best bedtimes or wake-up times based on 90-minute sleep cycles.',tags:['cycles','wake up'],rpm:'m'},
  {id:'ideal',cat:'health',title:'Ideal Weight',desc:'Your ideal body weight range using four scientific formulas.',tags:['weight','body'],rpm:'h'},
  {id:'water',cat:'health',title:'Water Intake',desc:'Recommended daily water intake based on weight and activity.',tags:['hydration','daily'],rpm:'m'},
  {id:'macro',cat:'health',title:'Macro Calculator',desc:'Daily protein, carbs and fat targets for your fitness goal.',tags:['protein','nutrition'],rpm:'h'},
  {id:'pace',cat:'health',title:'Running Pace Calc',desc:'Pace, speed and finish time for 5K, 10K, half and full marathon.',tags:['running','marathon'],rpm:'h'},
  {id:'gpa',cat:'student',title:'GPA Calculator',desc:'Weighted GPA on 4.0 or 10-point scale. Add unlimited subjects.',tags:['grades','cgpa'],rpm:'m',hot:true},
  {id:'cgpa',cat:'student',title:'CGPA to Percentage',desc:'Convert CGPA to percentage using common university formulas.',tags:['cgpa','marks'],rpm:'m'},
  {id:'percent',cat:'student',title:'Percentage Calculator',desc:'What is X% of Y? Percentage change, increase, decrease — 4 modes.',tags:['percent','math'],rpm:'m'},
  {id:'num2words',cat:'student',title:'Number to Words',desc:'Convert numbers to words for cheques. Indian lakh/crore format.',tags:['cheque','words'],rpm:'m'},
  {id:'love',cat:'fun',title:'Love Calculator',desc:'Enter two names and discover your compatibility score. Just for fun!',tags:['compatibility','names'],rpm:'m'},
  {id:'lucky',cat:'fun',title:'Lucky Number',desc:'Life path number, name number and lucky colour from numerology.',tags:['numerology','lucky'],rpm:'m'},
  {id:'zodiac',cat:'fun',title:'Zodiac & Birth Chart',desc:'Sun sign, moon sign, Chinese zodiac and personality traits.',tags:['astrology','zodiac'],rpm:'h',isNew:true},
  {id:'wyr',cat:'fun',title:'Compatibility Quiz',desc:'5-question side-by-side quiz to see how compatible two people are.',tags:['quiz','couple'],rpm:'m'},
  {id:'age',cat:'utility',title:'Age Calculator',desc:'Exact age in years, months and days plus next birthday countdown.',tags:['DOB','birthday'],rpm:'h'},
  {id:'date',cat:'utility',title:'Date Calculator',desc:'Days between two dates or add/subtract days from any date.',tags:['days','deadline'],rpm:'m'},
  {id:'tip',cat:'utility',title:'Tip & Bill Splitter',desc:'Calculate tip and split the bill among any number of people.',tags:['restaurant','split'],rpm:'m'},
  {id:'discount',cat:'utility',title:'Discount Calculator',desc:'Final price after any discount percentage. Save amount shown.',tags:['sale','savings'],rpm:'l'},
  {id:'currency',cat:'utility',title:'Currency Converter',desc:'Convert between 30+ world currencies with approximate rates.',tags:['forex','exchange'],rpm:'h',isNew:true},
  {id:'unit',cat:'utility',title:'Unit Converter',desc:'Weight, length, temperature, volume, speed, area — all in one.',tags:['convert','metric'],rpm:'m'},
];
const RPM_STYLE={vh:'rpm-vh',h:'rpm-h',m:'rpm-m',l:'rpm-l'};
const RPM_LABEL={vh:'Very High',h:'High',m:'Medium',l:'Low'};
const HOT=new Set(['emi','bmi','salary','tax','gpa','age','pregnancy','sip']);
const RELATED={
  bmi:['calorie','ideal','water','macro'],emi:['mortgage','sip','compound','salary'],
  age:['date','pregnancy','sleep'],calorie:['bmi','macro','water','ideal'],
  gpa:['cgpa','percent'],sip:['compound','roi','emi'],compound:['sip','roi','emi'],
  salary:['tax','emi','compound'],tax:['salary','percent','roi'],
  pregnancy:['date','age','water'],mortgage:['emi','compound','salary'],
  macro:['calorie','bmi','water'],networth:['compound','sip','roi'],
  water:['bmi','calorie','sleep'],roi:['compound','sip','networth'],
  date:['age','pregnancy'],lucky:['wyr','love','zodiac'],
  tip:['discount','percent'],discount:['tip','percent'],
  percent:['gpa','cgpa','discount'],currency:['date','tip'],
  cgpa:['gpa','percent'],wyr:['love','lucky','zodiac'],zodiac:['lucky','wyr','love'],
  debt:['emi','networth','compound'],unit:['currency','date'],
  num2words:['percent','cgpa'],pace:['calorie','bmi','macro'],ideal:['bmi','calorie'],sleep:['water','bmi'],
};
const DAILY_QS=[
  {q:"Invest ₹10,000/month at 12% for 10 years — how much?",opts:["₹12 lakhs","₹23 lakhs","₹35 lakhs","₹50 lakhs"],ans:1,exp:"SIP of ₹10k/month at 12% for 10 years ≈ ₹23.2 lakhs. Time beats timing!"},
  {q:"A shirt costs ₹800. 25% off, then 10% more off. Final price?",opts:["₹500","₹520","₹540","₹560"],ans:2,exp:"After 25%: ₹600. Then 10% off ₹600 = ₹540. Two discounts ≠ combined discount!"},
  {q:"BMI of 27 falls in which category?",opts:["Underweight","Normal","Overweight","Obese"],ans:2,exp:"BMI 25–29.9 = Overweight. Normal range is 18.5–24.9."},
  {q:"₹50/day on coffee. How much per year?",opts:["₹14,600","₹16,000","₹18,250","₹20,000"],ans:2,exp:"₹50 × 365 = ₹18,250. Invested at 10% for 10 yrs ≈ ₹3 lakhs!"},
  {q:"Which loan strategy saves the most interest?",opts:["Pay minimum","Avalanche (high rate first)","Snowball (small first)","Pay randomly"],ans:1,exp:"Avalanche saves most total interest mathematically."},
  {q:"Healthy daily water for a 70kg person?",opts:["1 litre","2 litres","2.5 litres","3.5 litres"],ans:2,exp:"~35ml/kg = 2.45L for 70kg. Activity and heat increase this."},
  {q:"EMI on ₹5L loan at 10% p.a. for 5 years?",opts:["₹8,333","₹9,650","₹10,624","₹12,000"],ans:2,exp:"EMI = ₹10,624/month. Total repaid ≈ ₹6.37L on a ₹5L loan."},
];
const WOTD=[
  {w:"EPHEMERAL",pos:"adjective",def:"Lasting for only a short time; transitory."},
  {w:"SERENDIPITY",pos:"noun",def:"Finding something good by happy accident."},
  {w:"RESILIENT",pos:"adjective",def:"Able to recover quickly from difficulties; tough."},
  {w:"MELANCHOLY",pos:"noun/adj",def:"A feeling of pensive sadness with no obvious cause."},
  {w:"AUDACIOUS",pos:"adjective",def:"Showing willingness to take surprisingly bold risks."},
  {w:"LABYRINTH",pos:"noun",def:"A complicated network of passages; a maze."},
  {w:"NOSTALGIA",pos:"noun",def:"A sentimental longing or affection for the past."},
];

/* ── STATE ── */
let currentCat='all';
let currentCalcId=null;
let isCompact=false;

/* ── LS HELPER ── */
const LS={
  get:(k,d)=>{try{const v=localStorage.getItem(k);return v===null?d:JSON.parse(v);}catch(e){return d;}},
  set:(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
};

/* ── THEME ── */
function toggleTheme(){const d=document.documentElement.getAttribute('data-theme')==='dark';const t=d?'light':'dark';document.documentElement.setAttribute('data-theme',t);LS.set('ch-theme',t);document.getElementById('theme-btn').textContent=d?'◑ Dark':'☀ Light';}
function initTheme(){const t=LS.get('ch-theme','light');document.documentElement.setAttribute('data-theme',t);document.getElementById('theme-btn').textContent=t==='dark'?'☀ Light':'◑ Dark';}

/* ── STREAK ── */
function initStreak(){
  const s=LS.get('ch-streak',{count:0,last:''});const today=new Date().toDateString();
  if(s.last===today){showStreak(s.count);return;}
  const yest=new Date(Date.now()-86400000).toDateString();
  const nc=s.last===yest?s.count+1:1;
  LS.set('ch-streak',{count:nc,last:today});showStreak(nc);
}
function showStreak(n){const el=document.getElementById('streak-el');if(el)el.textContent=n>1?'🔥 '+n+' day streak':'';}

/* ── FREQ + HISTORY ── */
function bumpFreq(id){const f=LS.get('ch-freq',{});f[id]=(f[id]||0)+1;LS.set('ch-freq',f);}
function getTopFreq(n){return Object.entries(LS.get('ch-freq',{})).sort((a,b)=>b[1]-a[1]).slice(0,n).map(x=>x[0]);}
function addHistory(id,title){let h=LS.get('ch-hist',[]);h=h.filter(x=>x.id!==id);h.unshift({id,title});LS.set('ch-hist',h.slice(0,6));}

/* ── PINS ── */
function getPins(){return LS.get('ch-pins',[]);}
function togglePin(id,e){if(e)e.stopPropagation();let pins=getPins();pins=pins.includes(id)?pins.filter(x=>x!==id):[...pins,id].slice(0,8);LS.set('ch-pins',pins);renderPers();renderGrid(currentCat);}
function isPinned(id){return getPins().includes(id);}

/* ── PERSONALISATION ── */
function renderPers(){
  const pins=getPins(),freq=getTopFreq(5).filter(id=>!pins.includes(id)),hist=LS.get('ch-hist',[]),f=LS.get('ch-freq',{});
  const ps=document.getElementById('pers-pinned-section'),pstrip=document.getElementById('pinned-strip');
  if(ps&&pstrip){ps.style.display=pins.length?'':'none';pstrip.innerHTML=pins.map(id=>{const c=CALCS.find(x=>x.id===id);return c?`<button class="pin-btn" onclick="openCalc('${id}')">★ ${c.title}</button>`:''}).join('');}
  const fs=document.getElementById('pers-freq-section'),fstrip=document.getElementById('freq-strip');
  if(fs&&fstrip){const top=freq.filter(id=>f[id]>1).slice(0,4);fs.style.display=top.length>1?'':'none';fstrip.innerHTML=top.map(id=>{const c=CALCS.find(x=>x.id===id);return c?`<button class="freq-btn" onclick="openCalc('${id}')">${c.title}<span class="freq-count">${f[id]}×</span></button>`:''}).join('');}
  const rr=document.getElementById('recent-row');
  if(rr){const recent=hist.filter(x=>!pins.includes(x.id)).slice(0,4);rr.innerHTML=recent.map(x=>`<button class="recent-chip" onclick="window.location.href='${x.id}-calculator.html'">${x.title}</button>`).join('');}
}

/* ── GRID ── */
function renderGrid(cat){
  currentCat=cat;
  const list=cat==='all'?CALCS:CALCS.filter(c=>c.cat===cat);
  const pins=getPins(),freq=LS.get('ch-freq',{});
  document.querySelectorAll('.cat-tab').forEach(b=>b.classList.toggle('on',b.dataset.cat===cat));
  document.getElementById('count-label').textContent=list.length+' calculators';
  const sorted=[...list].sort((a,b)=>{
    const ap=pins.includes(a.id)?2:0,bp=pins.includes(b.id)?2:0;
    const ah=HOT.has(a.id)?1:0,bh=HOT.has(b.id)?1:0;
    return (bp-ap)||(bh-ah)||((freq[b.id]||0)-(freq[a.id]||0));
  });
  document.getElementById('calc-grid').innerHTML=sorted.map(c=>{
    const pinned=isPinned(c.id);
    const badges=(HOT.has(c.id)?'<span class="cc-badge badge-hot">Popular</span>':'')+(c.isNew?'<span class="cc-badge badge-new">New</span>':'');
    return`<div class="calc-card cat-${c.cat}" onclick="window.location.href='${c.id}-calculator.html'">
      <button class="cc-pin${pinned?' on':''}" onclick="togglePin('${c.id}',event)">★</button>
      <div class="cc-top"><div class="cc-cat">${c.cat}${badges}</div><div class="cc-rpm ${RPM_STYLE[c.rpm]}">${RPM_LABEL[c.rpm]}</div></div>
      <div class="cc-title">${c.title}</div>
      <div class="cc-desc">${c.desc}</div>
      <div class="cc-tags">${c.tags.map(t=>`<span class="cc-tag">${t}</span>`).join('')}</div>
    </div>`;
  }).join('');
  if(isCompact)document.getElementById('calc-grid').classList.add('compact');
}

/* ── SEARCH ── */
function handleSearch(){
  const q=document.getElementById('searchInput').value.toLowerCase().trim();
  const list=q?CALCS.filter(c=>c.title.toLowerCase().includes(q)||c.desc.toLowerCase().includes(q)||c.tags.some(t=>t.includes(q))):CALCS;
  document.getElementById('count-label').textContent=list.length+' calculators';
  document.getElementById('calc-grid').innerHTML=list.map(c=>`<div class="calc-card cat-${c.cat}" onclick="window.location.href='${c.id}-calculator.html'"><div class="cc-top"><div class="cc-cat">${c.cat}</div><div class="cc-rpm ${RPM_STYLE[c.rpm]}">${RPM_LABEL[c.rpm]}</div></div><div class="cc-title">${c.title}</div><div class="cc-desc">${c.desc}</div></div>`).join('');
}

/* ── TABS ── */
function updateTabCounts(){['finance','health','student','fun','utility'].forEach(cat=>{const el=document.getElementById('ct-'+cat);if(el)el.textContent=CALCS.filter(c=>c.cat===cat).length;});const all=document.getElementById('ct-all');if(all)all.textContent=CALCS.length;}
function switchTab(cat){showHome();renderGrid(cat);}
function initTabs(){document.getElementById('tab-bar').addEventListener('click',e=>{const btn=e.target.closest('.cat-tab');if(!btn)return;showHome();renderGrid(btn.dataset.cat);});}

/* ── COMPACT ── */
function toggleCompact(){isCompact=!isCompact;LS.set('ch-compact',isCompact);document.getElementById('calc-grid').classList.toggle('compact',isCompact);const btn=document.getElementById('compact-btn');if(btn){btn.textContent=isCompact?'⊞ Expanded':'⊞ Compact';btn.classList.toggle('on',isCompact);}}

/* ── VIEWS ── */
function showHome(){document.getElementById('home-view').style.display='';document.getElementById('calc-view').classList.remove('on');currentCalcId=null;clearInterval(window._autoSave);renderPers();}
function showCalcView(){document.getElementById('home-view').style.display='none';document.getElementById('calc-view').classList.add('on');window.scrollTo({top:0,behavior:'smooth'});}

/* ── RELATED ── */
function renderRelated(id){
  const ids=(RELATED[id]||[]).slice(0,3);const panel=document.getElementById('related-panel');const items=document.getElementById('related-items');
  if(!panel||!items)return;
  const tools=ids.map(rid=>CALCS.find(c=>c.id===rid)).filter(Boolean);
  if(!tools.length){panel.style.display='none';return;}
  panel.style.display='';
  items.innerHTML=tools.map(c=>`<button onclick="window.location.href='${c.id}-calculator.html'" style="display:flex;align-items:center;gap:10px;padding:.6rem .85rem;background:var(--bg);border:1px solid var(--border);border-radius:8px;cursor:pointer;text-align:left;width:100%;font-family:var(--font-sans);transition:border-color .15s" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border)'"><div style="width:8px;height:8px;border-radius:50%;background:var(--accent);flex-shrink:0"></div><div><div style="font-size:12px;font-weight:600;color:var(--ink)">${c.title}</div><div style="font-size:11px;color:var(--ink3);margin-top:1px">${c.desc.slice(0,52)}...</div></div></button>`).join('');
}

/* ── UTILS ── */
function shareResult(title,valId,sub){const val=document.getElementById(valId);if(!val)return;const text=title+': '+(val.textContent||'')+(sub?' — '+sub:'');navigator.clipboard.writeText(text).then(()=>toast('Copied!')).catch(()=>{});}
function toast(msg){let t=document.getElementById('ch-toast');if(!t){t=document.createElement('div');t.id='ch-toast';t.style.cssText='position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);background:var(--ink);color:var(--bg);font-family:var(--font-mono);font-size:12px;padding:.5rem 1.25rem;border-radius:20px;z-index:999;transition:opacity .3s';document.body.appendChild(t);}t.textContent=msg;t.style.opacity='1';clearTimeout(t._t);t._t=setTimeout(()=>{t.style.opacity='0';},2000);}
function saveState(id){const state={};document.querySelectorAll('#calc-widget input,#calc-widget select').forEach(el=>{if(el.id&&el.type!=='button')state[el.id]=el.value;});if(Object.keys(state).length)LS.set('ch-state-'+id,state);}
function restoreState(id){const s=LS.get('ch-state-'+id,null);if(!s)return;setTimeout(()=>{Object.entries(s).forEach(([eid,val])=>{const el=document.getElementById(eid);if(el&&val!==''&&val!==null)el.value=val;});},100);}

/* ── DAILY ── */
function initDaily(){
  const di=Math.floor(Date.now()/86400000)%DAILY_QS.length;const c=DAILY_QS[di];
  const saved=LS.get('ch-daily-'+di,null);
  const qEl=document.getElementById('daily-q'),oEl=document.getElementById('daily-opts');if(!qEl||!oEl)return;
  qEl.textContent=c.q;
  if(saved!==null){oEl.innerHTML=c.opts.map((o,i)=>`<div style="padding:7px 10px;border-radius:7px;font-size:12px;border:1px solid ${i===c.ans?'var(--accent2)':i===saved?'var(--accent)':'var(--border)'};background:${i===c.ans?'rgba(42,107,79,.12)':i===saved&&i!==c.ans?'rgba(212,80,10,.08)':'var(--bg)'};color:${i===c.ans?'var(--accent2)':i===saved&&i!==c.ans?'var(--accent)':'var(--ink2)'};margin-bottom:4px">${o}${i===c.ans?' ✓':i===saved&&i!==c.ans?' ✗':''}</div>`).join('')+`<div style="font-size:11px;color:var(--ink2);background:var(--bg);border-radius:7px;padding:.6rem;margin-top:.5rem;border:1px solid var(--border);line-height:1.55">${c.exp}</div>`;}
  else{oEl.innerHTML=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:5px">${c.opts.map((o,i)=>`<button onclick="answerDaily(${di},${i})" style="padding:7px 9px;border:1px solid var(--border);border-radius:7px;background:var(--surface);color:var(--ink2);font-size:11px;cursor:pointer;text-align:left;font-family:var(--font-sans);line-height:1.4">${o}</button>`).join('')}</div>`;}
  const wi=Math.floor(Date.now()/86400000)%WOTD.length;const ww=WOTD[wi];
  const wEl=document.getElementById('wotd-word');if(wEl){wEl.textContent=ww.w;document.getElementById('wotd-pos').textContent=ww.pos;document.getElementById('wotd-def').textContent=ww.def;}
}
function answerDaily(di,chosen){LS.set('ch-daily-'+di,chosen);initDaily();}

/* ══════════════════════════════════════════════
   OPEN CALC — SINGLE ENTRY POINT
   w.init() called for every widget that needs it
══════════════════════════════════════════════ */
function openCalc(id){
  const calc=CALCS.find(c=>c.id===id);if(!calc)return;
  currentCalcId=id;bumpFreq(id);addHistory(id,calc.title);
  const w=WIDGETS[id];
  if(!w){
    document.getElementById('calc-widget').innerHTML=`<div class="cv-title">${calc.title}</div><div class="cv-desc" style="margin-top:1rem;padding:2rem;text-align:center;background:var(--bg);border-radius:var(--radius)">Coming soon!</div>`;
    document.getElementById('calc-info').innerHTML=`<div class="cv-info-title">Coming Soon</div><div class="info-block"><p>We're building this now. All calculators are free.</p></div>`;
  } else {
    document.getElementById('calc-widget').innerHTML=w.html;
    document.getElementById('calc-info').innerHTML=w.info;
    /* ── PER-WIDGET INIT ── runs after HTML is injected ── */
    if(id==='gpa') initGPARows();
    else if(id==='networth') initNWRows();
    else if(id==='debt') initDebtRows();
    else if(id==='unit') renderUnitFields();
    else if(id==='percent') renderPctMode();
    else if(id==='currency') initCur();
    else if(id==='wyr') initWYR();
    else if(id==='num2words') liveN2W();
    /* state toggles that set default active button */
    if(id==='calorie'){ calGender='male'; }
    if(id==='bmi'){ bmiUnit='metric'; }
    if(id==='sleep'){ sleepMode='wake'; }
    if(id==='ideal'){ iwGender='male'; }
    if(id==='salary'){ salRegime='new'; }
    if(id==='pregnancy'){ pregMode='lmp'; }
    if(id==='pace'){ paceMode='time'; }
    if(id==='date'){ dateMode='between'; }
    restoreState(id);
    clearInterval(window._autoSave);
    window._autoSave=setInterval(()=>saveState(id),2000);
  }
  renderRelated(id);showCalcView();
}

/* ══════════════════════════════════════════════
   WIDGETS  { html, info }
══════════════════════════════════════════════ */
const WIDGETS={};

/* helper */
const sBtn=(title,mainId,sub)=>`<button class="share-btn-sm" onclick="shareResult('${title}','${mainId}','${sub}')">Share result</button>`;

/* ─── AGE ─── */
WIDGETS.age={
html:`<div class="cv-title">Age Calculator</div><div class="cv-desc">Find your exact age in years, months and days — plus next birthday countdown.</div>
<div class="field-group"><div class="field-label">Date of Birth</div><input type="date" id="dob" max="${new Date().toISOString().split('T')[0]}"></div>
<div class="field-group"><div class="field-label">Calculate as of</div><input type="date" id="calcDate" value="${new Date().toISOString().split('T')[0]}"></div>
<button class="calc-btn" onclick="calcAge()">Calculate Age</button>
<div class="result-panel" id="age-res"><div class="rp-main" id="age-main">-- years</div><div class="rp-sub" id="age-sub"></div>
<div class="rp-grid">
  <div class="rp-item"><div class="rp-item-l">Total months</div><div class="rp-item-v" id="age-months">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Total days</div><div class="rp-item-v" id="age-days">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Next birthday</div><div class="rp-item-v" id="age-next">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Days until</div><div class="rp-item-v" id="age-until">--</div></div>
</div>${sBtn('Age','age-main','CalcHive')}</div>`,
info:`<div class="cv-info-title">About Age Calculator</div><div class="info-block"><h4>How it works</h4><p>Calculates the precise difference between two dates, handling leap years and varying month lengths.</p></div><div class="faq-item"><div class="faq-q">Does it handle leap years?</div><div class="faq-a">Yes — all month-length variations and leap years are handled accurately.</div></div>`};

/* ─── BMI ─── */
WIDGETS.bmi={
html:`<div class="cv-title">BMI Calculator</div><div class="cv-desc">Body Mass Index with visual scale, healthy weight range and category.</div>
<div class="field-group"><div class="field-label">Unit System</div><div class="toggle-group"><button class="tg-btn on" id="bmi-m" onclick="setBMIUnit('metric')">Metric (kg/cm)</button><button class="tg-btn" id="bmi-i" onclick="setBMIUnit('imperial')">Imperial (lbs/in)</button></div></div>
<div class="field-group"><div class="field-label">Weight <span id="bmi-wu">kg</span></div><input type="number" id="bmi-weight" placeholder="70" min="1"></div>
<div class="field-group"><div class="field-label">Height <span id="bmi-hu">cm</span></div><input type="number" id="bmi-height" placeholder="170" min="1"></div>
<button class="calc-btn" onclick="calcBMI()">Calculate BMI</button>
<div class="result-panel" id="bmi-res"><div class="rp-main" id="bmi-main">--</div><div class="rp-sub" id="bmi-cat" style="font-size:15px;font-weight:600;margin-top:4px"></div>
<div style="margin-top:1rem;height:12px;border-radius:6px;background:linear-gradient(to right,#4CAF50,#8BC34A,#FFC107,#FF5722);position:relative"><div id="bmi-marker" style="display:none;position:absolute;top:-4px;width:4px;height:20px;background:var(--ink);border-radius:2px;transform:translateX(-50%)"></div></div>
<div style="display:flex;justify-content:space-between;margin-top:3px;font-size:10px;color:var(--ink3)"><span>Under</span><span>Normal</span><span>Over</span><span>Obese</span></div>
<div class="rp-grid">
  <div class="rp-item"><div class="rp-item-l">BMI value</div><div class="rp-item-v" id="bmi-val">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Category</div><div class="rp-item-v" id="bmi-cat2">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Healthy weight</div><div class="rp-item-v" id="bmi-range">--</div></div>
  <div class="rp-item"><div class="rp-item-l">From normal</div><div class="rp-item-v" id="bmi-diff">--</div></div>
</div>${sBtn('BMI','bmi-main','CalcHive')}</div>`,
info:`<div class="cv-info-title">BMI Ranges</div><div class="info-block"><ul><li>Under 18.5 — Underweight</li><li>18.5–24.9 — Normal</li><li>25–29.9 — Overweight</li><li>30+ — Obese</li></ul></div><div class="info-block"><h4>Formula</h4><p>BMI = weight(kg) ÷ height²(m²)</p></div><div class="info-block"><h4>Limitations</h4><p>Doesn't account for muscle mass, age, or ethnicity. Consult a doctor for medical decisions.</p></div>`};

/* ─── EMI ─── */
WIDGETS.emi={
html:`<div class="cv-title">EMI Calculator</div><div class="cv-desc">Monthly EMI, total interest paid, and full payment breakdown.</div>
<div class="field-group"><div class="field-label">Loan Amount <span>₹</span></div><input type="number" id="emi-p" placeholder="500000" min="1000"></div>
<div class="field-group"><div class="field-label">Annual Interest Rate <span>%</span></div><input type="number" id="emi-r" placeholder="8.5" min="0.1" step="0.1"></div>
<div class="field-group"><div class="field-label">Tenure <span>years</span></div><input type="number" id="emi-n" placeholder="5" min="1" max="30"></div>
<button class="calc-btn" onclick="calcEMI()">Calculate EMI</button>
<div class="result-panel" id="emi-res"><div class="rp-main" id="emi-main">₹--</div><div class="rp-sub">Monthly EMI payment</div>
<div style="margin-top:1rem;height:14px;border-radius:7px;overflow:hidden;display:flex"><div id="emi-p-bar" style="background:var(--accent3);height:100%;transition:width .4s"></div><div id="emi-i-bar" style="background:var(--accent);height:100%;transition:width .4s"></div></div>
<div style="display:flex;gap:1rem;margin-top:5px;font-size:10px"><span style="color:var(--accent3)">■ Principal</span><span style="color:var(--accent)">■ Interest</span></div>
<div class="rp-grid">
  <div class="rp-item"><div class="rp-item-l">Principal</div><div class="rp-item-v" id="emi-pr">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Total interest</div><div class="rp-item-v" id="emi-int">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Total payment</div><div class="rp-item-v" id="emi-tot">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Interest share</div><div class="rp-item-v" id="emi-pct">--</div></div>
</div>${sBtn('EMI','emi-main','Monthly payment | CalcHive')}</div>`,
info:`<div class="cv-info-title">About EMI</div><div class="info-block"><h4>Formula</h4><p>EMI = P × r × (1+r)ⁿ / ((1+r)ⁿ−1) where P=principal, r=monthly rate, n=total months.</p></div><div class="faq-item"><div class="faq-q">How to reduce EMI?</div><div class="faq-a">Increase tenure, make a larger down payment, or negotiate a lower interest rate.</div></div>`};

/* ─── GPA ─── */
WIDGETS.gpa={
html:`<div class="cv-title">GPA Calculator</div><div class="cv-desc">Weighted GPA on 4.0 or 10-point scale. Add unlimited subjects.</div>
<div class="field-group"><div class="field-label">Scale</div><div class="toggle-group"><button class="tg-btn on" id="gpa-s4" onclick="setGPAScale(4)">4.0 Scale</button><button class="tg-btn" id="gpa-s10" onclick="setGPAScale(10)">10-point</button></div></div>
<div id="gpa-rows"></div>
<button onclick="addGPARow()" style="font-size:12px;color:var(--accent);background:none;border:none;cursor:pointer;padding:4px 0;font-family:var(--font-sans);margin-bottom:8px">+ Add subject</button>
<button class="calc-btn" onclick="calcGPA()">Calculate GPA</button>
<div class="result-panel" id="gpa-res"><div class="rp-main" id="gpa-main">-- / 4.0</div><div class="rp-sub" id="gpa-grade"></div>
<div class="rp-grid"><div class="rp-item"><div class="rp-item-l">Total credits</div><div class="rp-item-v" id="gpa-cr">--</div></div><div class="rp-item"><div class="rp-item-l">Grade letter</div><div class="rp-item-v" id="gpa-let">--</div></div></div></div>`,
info:`<div class="cv-info-title">GPA Guide</div><div class="info-block"><h4>4.0 Scale</h4><ul><li>A/A+ = 4.0, A- = 3.7</li><li>B+ = 3.3, B = 3.0</li><li>C = 2.0, D = 1.0, F = 0</li></ul></div><div class="info-block"><h4>Weighted GPA</h4><p>Each grade × credits, divided by total credits. Higher-credit courses carry more weight.</p></div>`};

/* ─── TIP ─── */
WIDGETS.tip={
html:`<div class="cv-title">Tip & Bill Splitter</div><div class="cv-desc">Calculate tip and split the bill evenly among any number of people.</div>
<div class="field-group"><div class="field-label">Bill Amount</div><input type="number" id="tip-bill" placeholder="85.00" min="0" step="0.01"></div>
<div class="field-group"><div class="field-label">Tip % <span id="tip-pct-lbl">15%</span></div><input type="range" id="tip-pct" min="0" max="30" value="15" oninput="document.getElementById('tip-pct-lbl').textContent=this.value+'%'"></div>
<div class="field-group"><div class="field-label">People <span id="tip-ppl-lbl">2</span></div><input type="range" id="tip-ppl" min="1" max="20" value="2" oninput="document.getElementById('tip-ppl-lbl').textContent=this.value"></div>
<button class="calc-btn" onclick="calcTip()">Split Bill</button>
<div class="result-panel" id="tip-res"><div class="rp-main" id="tip-main">$--</div><div class="rp-sub">Per person total</div>
<div class="rp-grid">
  <div class="rp-item"><div class="rp-item-l">Tip amount</div><div class="rp-item-v" id="tip-amt">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Tip per person</div><div class="rp-item-v" id="tip-tpp">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Bill per person</div><div class="rp-item-v" id="tip-bpp">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Total bill</div><div class="rp-item-v" id="tip-tot">--</div></div>
</div></div>`,
info:`<div class="cv-info-title">Tipping Guide</div><div class="info-block"><ul><li>10% — minimum / poor service</li><li>15% — standard / good service</li><li>18–20% — above average</li><li>25%+ — exceptional</li></ul></div>`};

/* ─── LOVE ─── */
WIDGETS.love={
html:`<div class="cv-title">Love Calculator</div><div class="cv-desc">Enter two names and discover your compatibility score. Just for fun!</div>
<div class="field-group"><div class="field-label">Your Name</div><input type="text" id="love-n1" placeholder="Enter first name"></div>
<div class="field-group"><div class="field-label">Their Name</div><input type="text" id="love-n2" placeholder="Enter second name"></div>
<button class="calc-btn" onclick="calcLove()">Calculate Compatibility</button>
<div class="result-panel" id="love-res"><div class="rp-main" id="love-main" style="color:var(--accent)">--%</div><div class="rp-sub" id="love-msg"></div>
<div style="margin-top:1rem;height:14px;border-radius:7px;background:var(--border);overflow:hidden"><div id="love-bar" style="height:100%;background:var(--accent);border-radius:7px;transition:width .6s;width:0%"></div></div>
<div class="rp-grid" style="margin-top:1rem"><div class="rp-item"><div class="rp-item-l">Score</div><div class="rp-item-v" id="love-score">--</div></div><div class="rp-item"><div class="rp-item-l">Verdict</div><div class="rp-item-v" id="love-verdict">--</div></div></div>
${sBtn('Love Score','love-main','CalcHive')}</div>`,
info:`<div class="cv-info-title">Just for Fun!</div><div class="info-block"><p>Uses a playful algorithm based on name characters. Real compatibility is built on communication, trust and shared values — not algorithms!</p></div>`};

/* ─── PERCENT ─── */
WIDGETS.percent={
html:`<div class="cv-title">Percentage Calculator</div><div class="cv-desc">Calculate percentages, percentage change, increase or decrease.</div>
<div class="field-group"><div class="field-label">Mode</div><select id="pct-mode" onchange="renderPctMode()"><option value="of">What is X% of Y?</option><option value="is">X is what % of Y?</option><option value="change">Percentage change from X to Y</option><option value="increase">Increase X by Y%</option></select></div>
<div id="pct-fields"></div>
<button class="calc-btn" onclick="calcPct()">Calculate</button>
<div class="result-panel" id="pct-res"><div class="rp-main" id="pct-main">--</div><div class="rp-sub" id="pct-sub"></div></div>`,
info:`<div class="cv-info-title">Percentage Formulas</div><div class="info-block"><h4>X% of Y</h4><p>Result = (X÷100)×Y</p></div><div class="info-block"><h4>X is what % of Y</h4><p>Result = (X÷Y)×100</p></div><div class="info-block"><h4>Change</h4><p>((New−Old)÷|Old|)×100</p></div>`};

/* ─── DISCOUNT ─── */
WIDGETS.discount={
html:`<div class="cv-title">Discount Calculator</div><div class="cv-desc">Final price after any discount percentage. Save amount clearly shown.</div>
<div class="field-group"><div class="field-label">Original Price</div><input type="number" id="disc-price" placeholder="1000" min="0"></div>
<div class="field-group"><div class="field-label">Discount <span>%</span></div><input type="number" id="disc-pct" placeholder="20" min="0" max="100"></div>
<button class="calc-btn" onclick="calcDiscount()">Calculate</button>
<div class="result-panel" id="disc-res"><div class="rp-main" id="disc-main">--</div><div class="rp-sub">Final price after discount</div>
<div class="rp-grid"><div class="rp-item"><div class="rp-item-l">You save</div><div class="rp-item-v" id="disc-save">--</div></div><div class="rp-item"><div class="rp-item-l">Discount amount</div><div class="rp-item-v" id="disc-amt">--</div></div></div></div>`,
info:`<div class="cv-info-title">About Discounts</div><div class="info-block"><h4>Formula</h4><p>Discount = Price×(Discount%÷100). Final = Original−Discount.</p></div><div class="info-block"><h4>Stacked discounts</h4><p>Two 20%+10% discounts ≠ 30% off. Apply them separately for accuracy.</p></div>`};

/* ─── CALORIE ─── */
WIDGETS.calorie={
html:`<div class="cv-title">Calorie / TDEE Calculator</div><div class="cv-desc">Find your Total Daily Energy Expenditure — calories to maintain, lose, or gain weight.</div>
<div class="field-group"><div class="field-label">Gender</div><div class="toggle-group"><button class="tg-btn on" id="cal-m" onclick="setCalGender('male')">Male</button><button class="tg-btn" id="cal-f" onclick="setCalGender('female')">Female</button></div></div>
<div class="field-group"><div class="field-label">Age <span>years</span></div><input type="number" id="cal-age" placeholder="25" min="1" max="120"></div>
<div class="field-group"><div class="field-label">Weight <span>kg</span></div><input type="number" id="cal-wt" placeholder="70" min="1"></div>
<div class="field-group"><div class="field-label">Height <span>cm</span></div><input type="number" id="cal-ht" placeholder="170" min="1"></div>
<div class="field-group"><div class="field-label">Activity Level</div><select id="cal-act"><option value="1.2">Sedentary (desk job, little exercise)</option><option value="1.375">Lightly active (1–3 days/week)</option><option value="1.55" selected>Moderately active (3–5 days/week)</option><option value="1.725">Very active (6–7 days/week)</option><option value="1.9">Extra active (athlete)</option></select></div>
<button class="calc-btn" onclick="calcCalorie()">Calculate Calories</button>
<div class="result-panel" id="cal-res"><div class="rp-main" id="cal-main">-- kcal</div><div class="rp-sub">Daily calories to maintain weight (TDEE)</div>
<div class="rp-grid">
  <div class="rp-item"><div class="rp-item-l">Lose 0.5 kg/week</div><div class="rp-item-v" id="cal-lose1">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Lose 1 kg/week</div><div class="rp-item-v" id="cal-lose2">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Gain 0.5 kg/week</div><div class="rp-item-v" id="cal-gain">--</div></div>
  <div class="rp-item"><div class="rp-item-l">BMR (at rest)</div><div class="rp-item-v" id="cal-bmr">--</div></div>
</div></div>`,
info:`<div class="cv-info-title">About TDEE</div><div class="info-block"><h4>What is TDEE?</h4><p>Total Daily Energy Expenditure — total calories your body burns including activity.</p></div><div class="info-block"><h4>Formula</h4><p>Uses the Mifflin-St Jeor equation for BMR, multiplied by your activity factor.</p></div><div class="info-block"><h4>Safe deficit</h4><p>500 kcal/day deficit = ~0.5 kg/week loss. Never go below 1,200 (women) or 1,500 (men) kcal without medical guidance.</p></div>`};

/* ─── COMPOUND ─── */
WIDGETS.compound={
html:`<div class="cv-title">Compound Interest</div><div class="cv-desc">See how your money grows with the power of compounding over time.</div>
<div class="field-group"><div class="field-label">Principal <span>₹</span></div><input type="number" id="ci-p" placeholder="100000" min="1"></div>
<div class="field-group"><div class="field-label">Annual Rate <span>%</span></div><input type="number" id="ci-r" placeholder="12" min="0.1" step="0.1"></div>
<div class="field-group"><div class="field-label">Time <span>years</span></div><input type="number" id="ci-t" placeholder="10" min="1" max="50"></div>
<div class="field-group"><div class="field-label">Compounding</div><select id="ci-n"><option value="1">Annually</option><option value="2">Semi-annually</option><option value="4">Quarterly</option><option value="12" selected>Monthly</option><option value="365">Daily</option></select></div>
<button class="calc-btn" onclick="calcCompound()">Calculate</button>
<div class="result-panel" id="ci-res"><div class="rp-main" id="ci-main">₹--</div><div class="rp-sub">Final amount after compounding</div>
<div style="margin-top:1rem;height:14px;border-radius:7px;overflow:hidden;display:flex"><div id="ci-p-bar" style="background:var(--accent3);height:100%"></div><div id="ci-i-bar" style="background:var(--accent2);height:100%"></div></div>
<div style="display:flex;gap:1rem;margin-top:5px;font-size:10px"><span style="color:var(--accent3)">■ Principal <span id="ci-pv"></span></span><span style="color:var(--accent2)">■ Interest <span id="ci-iv"></span></span></div>
<div class="rp-grid"><div class="rp-item"><div class="rp-item-l">Growth multiple</div><div class="rp-item-v" id="ci-mult">--</div></div><div class="rp-item"><div class="rp-item-l">Effective rate</div><div class="rp-item-v" id="ci-eff">--</div></div></div>
${sBtn('Compound Interest','ci-main','CalcHive')}</div>`,
info:`<div class="cv-info-title">Compound Interest</div><div class="info-block"><h4>Formula</h4><p>A = P × (1 + r/n)^(n×t)</p></div><div class="info-block"><h4>Rule of 72</h4><p>72 ÷ interest rate = years to double money. At 12%, doubles in ~6 years.</p></div>`};

/* ─── SIP ─── */
WIDGETS.sip={
html:`<div class="cv-title">SIP Calculator</div><div class="cv-desc">Calculate returns on your monthly Systematic Investment Plan.</div>
<div class="field-group"><div class="field-label">Monthly Investment <span>₹</span></div><input type="number" id="sip-a" placeholder="5000" min="100"></div>
<div class="field-group"><div class="field-label">Expected Annual Return <span>%</span></div><input type="number" id="sip-r" placeholder="12" min="0.1" step="0.1"></div>
<div class="field-group"><div class="field-label">Period <span>years</span></div><input type="number" id="sip-t" placeholder="10" min="1" max="40"></div>
<button class="calc-btn" onclick="calcSIP()">Calculate Returns</button>
<div class="result-panel" id="sip-res"><div class="rp-main" id="sip-main">₹--</div><div class="rp-sub">Estimated corpus at end of period</div>
<div style="margin-top:1rem;height:14px;border-radius:7px;overflow:hidden;display:flex"><div id="sip-inv-bar" style="background:#8B4FA0;height:100%"></div><div id="sip-ret-bar" style="background:var(--accent2);height:100%"></div></div>
<div style="display:flex;gap:1rem;margin-top:5px;font-size:10px"><span style="color:#8B4FA0">■ Invested <span id="sip-iv"></span></span><span style="color:var(--accent2)">■ Returns <span id="sip-rv"></span></span></div>
<div class="rp-grid"><div class="rp-item"><div class="rp-item-l">Total invested</div><div class="rp-item-v" id="sip-inv">--</div></div><div class="rp-item"><div class="rp-item-l">Wealth ratio</div><div class="rp-item-v" id="sip-ratio">--</div></div></div>
${sBtn('SIP Returns','sip-main','CalcHive')}</div>`,
info:`<div class="cv-info-title">About SIP</div><div class="info-block"><h4>What is SIP?</h4><p>Invest a fixed amount in mutual funds monthly. Rupee cost averaging reduces risk over time.</p></div><div class="info-block"><h4>Power of SIP</h4><p>₹5,000/month at 12% for 20 years grows to ~₹50 lakhs from only ₹12 lakhs invested.</p></div>`};

/* ─── SLEEP ─── */
WIDGETS.sleep={
html:`<div class="cv-title">Sleep Calculator</div><div class="cv-desc">Find optimal bedtime or wake-up time based on 90-minute sleep cycles.</div>
<div class="field-group"><div class="field-label">Mode</div><div class="toggle-group"><button class="tg-btn on" id="slp-wake" onclick="setSleepMode('wake')">Wake up at a time</button><button class="tg-btn" id="slp-bed" onclick="setSleepMode('bed')">Go to bed now</button></div></div>
<div class="field-group" id="slp-time-field"><div class="field-label" id="slp-time-lbl">Wake-up time</div><input type="time" id="slp-time" value="07:00"></div>
<div class="field-group"><div class="field-label">Time to fall asleep</div><select id="slp-fall"><option value="7">7 minutes</option><option value="14" selected>14 minutes (average)</option><option value="20">20 minutes</option><option value="30">30 minutes</option></select></div>
<button class="calc-btn" onclick="calcSleep()">Find Best Times</button>
<div class="result-panel" id="slp-res"><div class="rp-sub" id="slp-heading" style="margin-bottom:.75rem"></div><div id="slp-times" style="display:flex;flex-direction:column;gap:8px"></div></div>`,
info:`<div class="cv-info-title">Sleep Cycles</div><div class="info-block"><h4>What is a sleep cycle?</h4><p>~90 minutes through light, deep, and REM sleep. Adults need 4–6 cycles nightly.</p></div><div class="info-block"><ul><li>6 cycles = 9 hours (ideal)</li><li>5 cycles = 7.5 hours (optimal)</li><li>4 cycles = 6 hours (minimum)</li></ul></div>`};

/* ─── IDEAL WEIGHT ─── */
WIDGETS.ideal={
html:`<div class="cv-title">Ideal Weight Calculator</div><div class="cv-desc">Your ideal body weight range using four scientific formulas.</div>
<div class="field-group"><div class="field-label">Gender</div><div class="toggle-group"><button class="tg-btn on" id="iw-m" onclick="setIWGender('male')">Male</button><button class="tg-btn" id="iw-f" onclick="setIWGender('female')">Female</button></div></div>
<div class="field-group"><div class="field-label">Height <span>cm</span></div><input type="number" id="iw-ht" placeholder="170" min="100" max="250"></div>
<button class="calc-btn" onclick="calcIdeal()">Calculate</button>
<div class="result-panel" id="iw-res"><div class="rp-main" id="iw-main">-- kg</div><div class="rp-sub">Average across four formulas</div>
<div class="rp-grid">
  <div class="rp-item"><div class="rp-item-l">Robinson (1983)</div><div class="rp-item-v" id="iw-rob">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Miller (1983)</div><div class="rp-item-v" id="iw-mil">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Devine (1974)</div><div class="rp-item-v" id="iw-dev">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Hamwi (1964)</div><div class="rp-item-v" id="iw-ham">--</div></div>
</div></div>`,
info:`<div class="cv-info-title">Ideal Weight Formulas</div><div class="info-block"><p>Different formulas for different medical contexts. The average gives a reliable target range.</p></div><div class="info-block"><h4>Note</h4><p>These are guidelines, not goals. Consult a doctor for personal health decisions.</p></div>`};

/* ─── WATER ─── */
WIDGETS.water={
html:`<div class="cv-title">Water Intake Calculator</div><div class="cv-desc">Recommended daily water intake based on weight, activity and climate.</div>
<div class="field-group"><div class="field-label">Body Weight <span>kg</span></div><input type="number" id="wat-wt" placeholder="70" min="1"></div>
<div class="field-group"><div class="field-label">Activity Level</div><select id="wat-act"><option value="0">Sedentary</option><option value="0.35" selected>Moderately active</option><option value="0.7">Very active</option><option value="1.0">Athlete</option></select></div>
<div class="field-group"><div class="field-label">Climate</div><select id="wat-clim"><option value="0">Cool / temperate</option><option value="0.3" selected>Warm / moderate</option><option value="0.6">Hot / humid</option><option value="0.9">Very hot</option></select></div>
<button class="calc-btn" onclick="calcWater()">Calculate</button>
<div class="result-panel" id="wat-res"><div class="rp-main" id="wat-main">-- L</div><div class="rp-sub">Recommended daily intake</div>
<div class="rp-grid">
  <div class="rp-item"><div class="rp-item-l">In glasses (250ml)</div><div class="rp-item-v" id="wat-gl">--</div></div>
  <div class="rp-item"><div class="rp-item-l">In ml</div><div class="rp-item-v" id="wat-ml">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Base amount</div><div class="rp-item-v" id="wat-base">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Extra for activity</div><div class="rp-item-v" id="wat-extra">--</div></div>
</div></div>`,
info:`<div class="cv-info-title">About Hydration</div><div class="info-block"><h4>Base formula</h4><p>~35ml per kg body weight per day. Activity and heat increase this significantly.</p></div>`};

/* ─── DATE ─── */
WIDGETS.date={
html:`<div class="cv-title">Date Calculator</div><div class="cv-desc">Days between two dates, or add/subtract days from any date.</div>
<div class="field-group"><div class="field-label">Mode</div><div class="toggle-group"><button class="tg-btn on" id="dt-btn-btw" onclick="setDateMode('between')">Between two dates</button><button class="tg-btn" id="dt-btn-add" onclick="setDateMode('add')">Add / subtract days</button></div></div>
<div id="dt-between-fields">
  <div class="field-group"><div class="field-label">Start Date</div><input type="date" id="dt-start"></div>
  <div class="field-group"><div class="field-label">End Date</div><input type="date" id="dt-end"></div>
</div>
<div id="dt-add-fields" style="display:none">
  <div class="field-group"><div class="field-label">Start Date</div><input type="date" id="dt-base"></div>
  <div class="field-group"><div class="field-label">Days to add (− for subtract)</div><input type="number" id="dt-add-val" placeholder="30"></div>
</div>
<button class="calc-btn" onclick="calcDate()">Calculate</button>
<div class="result-panel" id="dt-res"><div class="rp-main" id="dt-main">--</div><div class="rp-sub" id="dt-sub"></div>
<div class="rp-grid">
  <div class="rp-item"><div class="rp-item-l">Weeks</div><div class="rp-item-v" id="dt-wks">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Months (approx)</div><div class="rp-item-v" id="dt-mos">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Weekdays</div><div class="rp-item-v" id="dt-wkd">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Weekends</div><div class="rp-item-v" id="dt-wkn">--</div></div>
</div></div>`,
info:`<div class="cv-info-title">Date Calculator</div><div class="info-block"><h4>Use cases</h4><ul><li>Project deadlines</li><li>Lease and contract end dates</li><li>Days until an event</li></ul></div>`};

/* ─── CGPA ─── */
WIDGETS.cgpa={
html:`<div class="cv-title">CGPA to Percentage</div><div class="cv-desc">Convert your CGPA to percentage using common university formulas.</div>
<div class="field-group"><div class="field-label">Your CGPA</div><input type="number" id="cgpa-v" placeholder="8.5" min="0" max="10" step="0.01"></div>
<div class="field-group"><div class="field-label">Formula</div><select id="cgpa-f"><option value="9.5">CBSE / Most Indian universities (× 9.5)</option><option value="10">10-point scale (× 10)</option><option value="9.0">Some universities (× 9.0)</option><option value="20">5-point CGPA (× 20)</option></select></div>
<button class="calc-btn" onclick="calcCGPA()">Convert</button>
<div class="result-panel" id="cgpa-res"><div class="rp-main" id="cgpa-main">--%</div><div class="rp-sub" id="cgpa-grade"></div>
<div class="rp-grid"><div class="rp-item"><div class="rp-item-l">Your CGPA</div><div class="rp-item-v" id="cgpa-inp">--</div></div><div class="rp-item"><div class="rp-item-l">Percentage</div><div class="rp-item-v" id="cgpa-pct">--</div></div></div></div>`,
info:`<div class="cv-info-title">CGPA Conversion</div><div class="info-block"><h4>Most common</h4><p>CBSE and most Indian universities: Percentage = CGPA × 9.5. So 9.0 CGPA = 85.5%.</p></div>`};

/* ─── ROI ─── */
WIDGETS.roi={
html:`<div class="cv-title">ROI Calculator</div><div class="cv-desc">Return on investment for any project, purchase, or business decision.</div>
<div class="field-group"><div class="field-label">Initial Investment</div><input type="number" id="roi-c" placeholder="50000" min="0"></div>
<div class="field-group"><div class="field-label">Final Value / Revenue</div><input type="number" id="roi-r" placeholder="75000" min="0"></div>
<div class="field-group"><div class="field-label">Time Period <span>years (optional)</span></div><input type="number" id="roi-t" placeholder="2" min="0" step="0.1"></div>
<button class="calc-btn" onclick="calcROI()">Calculate ROI</button>
<div class="result-panel" id="roi-res"><div class="rp-main" id="roi-main">--%</div><div class="rp-sub">Return on Investment</div>
<div class="rp-grid">
  <div class="rp-item"><div class="rp-item-l">Net profit</div><div class="rp-item-v" id="roi-profit">--</div></div>
  <div class="rp-item"><div class="rp-item-l">ROI</div><div class="rp-item-v" id="roi-pct">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Annualised ROI</div><div class="rp-item-v" id="roi-ann">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Verdict</div><div class="rp-item-v" id="roi-verd">--</div></div>
</div></div>`,
info:`<div class="cv-info-title">About ROI</div><div class="info-block"><h4>Formula</h4><p>ROI = (Net Profit ÷ Cost) × 100</p></div><div class="info-block"><h4>Good ROI?</h4><ul><li>Stock market avg: ~10–12%/yr</li><li>Real estate: ~8–12%/yr</li><li>Business: 15–30%+ is strong</li></ul></div>`};

/* ─── LUCKY ─── */
WIDGETS.lucky={
html:`<div class="cv-title">Lucky Number Calculator</div><div class="cv-desc">Discover your life path number and numerology insights.</div>
<div class="field-group"><div class="field-label">Full Name</div><input type="text" id="lk-name" placeholder="Enter your full name"></div>
<div class="field-group"><div class="field-label">Date of Birth</div><input type="date" id="lk-dob"></div>
<button class="calc-btn" onclick="calcLucky()">Reveal Numbers</button>
<div class="result-panel" id="lk-res"><div class="rp-main" id="lk-main" style="color:var(--accent)">--</div><div class="rp-sub" id="lk-desc"></div>
<div class="rp-grid">
  <div class="rp-item"><div class="rp-item-l">Life path number</div><div class="rp-item-v" id="lk-life">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Lucky number</div><div class="rp-item-v" id="lk-lucky">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Name number</div><div class="rp-item-v" id="lk-namenum">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Lucky colour</div><div class="rp-item-v" id="lk-colour">--</div></div>
</div>${sBtn('Lucky Number','lk-main','Life path | CalcHive')}</div>`,
info:`<div class="cv-info-title">About Numerology</div><div class="info-block"><h4>Life Path Number</h4><p>Calculated from birth date, reduced to a single number (1–9, or 11/22/33). For entertainment only.</p></div>`};

/* ─── WYR ─── */
const WYR_QS=[
  {q:'Staying in or going out?',opts:['Staying in','Going out']},
  {q:'Morning person or night owl?',opts:['Morning person','Night owl']},
  {q:'Adventure or comfort?',opts:['Adventure','Comfort']},
  {q:'Talk conflict out or need space first?',opts:['Talk it out','Need space first']},
  {q:'Family time or personal time?',opts:['Family time','Personal time']},
];
let wyrA1=[],wyrA2=[];
WIDGETS.wyr={
html:`<div class="cv-title">Compatibility Quiz</div><div class="cv-desc">Answer 5 questions for yourself and your partner to see how compatible you are.</div>
<div id="wyr-qs"></div>
<button class="calc-btn" onclick="calcWYR()">See Compatibility</button>
<div class="result-panel" id="wyr-res"><div class="rp-main" id="wyr-main" style="color:var(--accent)">--%</div><div class="rp-sub" id="wyr-msg"></div>
<div style="margin-top:1rem;height:14px;border-radius:7px;background:var(--border);overflow:hidden"><div id="wyr-bar" style="height:100%;background:var(--accent);border-radius:7px;transition:width .6s;width:0%"></div></div>
<div class="rp-grid" style="margin-top:1rem"><div class="rp-item"><div class="rp-item-l">Matches</div><div class="rp-item-v" id="wyr-matches">--</div></div><div class="rp-item"><div class="rp-item-l">Score</div><div class="rp-item-v" id="wyr-score">--</div></div></div>
${sBtn('Compatibility','wyr-main','Quiz | CalcHive')}</div>`,
info:`<div class="cv-info-title">About This Quiz</div><div class="info-block"><p>Asks about lifestyle and preferences. More matching answers = higher score. For entertainment — real compatibility involves communication, respect and shared goals!</p></div>`};

/* ─── ZODIAC ─── */
const SIGNS=[
  {n:'Capricorn',s:'♑',d:'Dec 22–Jan 19',e:'Earth',p:'Saturn',t:'Ambitious, disciplined, patient and practical. Natural leaders who achieve through persistence.'},
  {n:'Aquarius',s:'♒',d:'Jan 20–Feb 18',e:'Air',p:'Uranus',t:'Innovative, independent, humanitarian. Visionaries who think ahead of their time.'},
  {n:'Pisces',s:'♓',d:'Feb 19–Mar 20',e:'Water',p:'Neptune',t:'Compassionate, artistic, intuitive and gentle. Deeply empathetic dreamers.'},
  {n:'Aries',s:'♈',d:'Mar 21–Apr 19',e:'Fire',p:'Mars',t:'Courageous, energetic, determined. Natural-born leaders who love a challenge.'},
  {n:'Taurus',s:'♉',d:'Apr 20–May 20',e:'Earth',p:'Venus',t:'Reliable, patient, practical and devoted. Lovers of beauty and comfort.'},
  {n:'Gemini',s:'♊',d:'May 21–Jun 20',e:'Air',p:'Mercury',t:'Adaptable, curious, witty. Quick minds who love learning and connection.'},
  {n:'Cancer',s:'♋',d:'Jun 21–Jul 22',e:'Water',p:'Moon',t:'Tenacious, imaginative, loyal. Deeply nurturing with strong intuition.'},
  {n:'Leo',s:'♌',d:'Jul 23–Aug 22',e:'Fire',p:'Sun',t:'Creative, passionate, generous. Natural performers who inspire others.'},
  {n:'Virgo',s:'♍',d:'Aug 23–Sep 22',e:'Earth',p:'Mercury',t:'Analytical, kind, hardworking. Perfectionists with great attention to detail.'},
  {n:'Libra',s:'♎',d:'Sep 23–Oct 22',e:'Air',p:'Venus',t:'Diplomatic, fair-minded, gracious. Seekers of harmony and balance.'},
  {n:'Scorpio',s:'♏',d:'Oct 23–Nov 21',e:'Water',p:'Pluto',t:'Resourceful, brave, passionate. Intensely loyal with magnetic energy.'},
  {n:'Sagittarius',s:'♐',d:'Nov 22–Dec 21',e:'Fire',p:'Jupiter',t:'Generous, idealistic, adventurous. Free spirits who love travel and freedom.'},
];
const CHINESE=['Rat','Ox','Tiger','Rabbit','Dragon','Snake','Horse','Goat','Monkey','Rooster','Dog','Pig'];
WIDGETS.zodiac={
html:`<div class="cv-title">Zodiac & Birth Chart</div><div class="cv-desc">Discover your sun sign, moon sign, Chinese zodiac and personality traits.</div>
<div class="field-group"><div class="field-label">Date of Birth</div><input type="date" id="zod-dob"></div>
<div class="field-group"><div class="field-label">Birth Hour (for moon sign)</div><select id="zod-hr"><option value="-1">Unknown</option>${Array.from({length:24},(_,i)=>`<option value="${i}">${(i<10?'0':'')+i}:00</option>`).join('')}</select></div>
<button class="calc-btn" onclick="calcZodiac()">Reveal Chart</button>
<div class="result-panel" id="zod-res"><div class="rp-main" id="zod-main" style="font-size:26px"></div><div class="rp-sub" id="zod-sub"></div>
<div class="rp-grid">
  <div class="rp-item"><div class="rp-item-l">Sun sign</div><div class="rp-item-v" id="zod-sun">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Moon sign</div><div class="rp-item-v" id="zod-moon">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Chinese zodiac</div><div class="rp-item-v" id="zod-chin">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Life path</div><div class="rp-item-v" id="zod-life">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Element</div><div class="rp-item-v" id="zod-elem">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Ruling planet</div><div class="rp-item-v" id="zod-plan">--</div></div>
</div>
<div style="margin-top:1rem;background:var(--bg);border-radius:8px;padding:.85rem;border:1px solid var(--border)" id="zod-traits"></div>
${sBtn('Zodiac','zod-main','Birth chart | CalcHive')}</div>`,
info:`<div class="cv-info-title">Astrology Guide</div><div class="info-block"><h4>Sun sign</h4><p>Based on birth date. Represents your core identity.</p></div><div class="info-block"><h4>Moon sign</h4><p>Based on date + hour. Represents emotions and inner self. Changes sign every 2.5 days.</p></div><div class="info-block"><p>For entertainment only. Astrology is not scientifically validated.</p></div>`};

/* ─── SALARY ─── */
WIDGETS.salary={
html:`<div class="cv-title">Salary Calculator</div><div class="cv-desc">Monthly take-home pay after income tax and PF deductions (India).</div>
<div class="field-group"><div class="field-label">Annual Gross Salary <span>₹</span></div><input type="number" id="sal-gross" placeholder="600000"></div>
<div class="field-group"><div class="field-label">Tax Regime</div><div class="toggle-group"><button class="tg-btn on" id="sal-new" onclick="setSalRegime('new')">New Regime</button><button class="tg-btn" id="sal-old" onclick="setSalRegime('old')">Old Regime</button></div></div>
<div class="field-group"><div class="field-label">PF % of basic (typically 12%)</div><input type="number" id="sal-pf" value="12" min="0" max="100"></div>
<button class="calc-btn" onclick="calcSalary()">Calculate Take-Home</button>
<div class="result-panel" id="sal-res"><div class="rp-main" id="sal-main">₹--</div><div class="rp-sub">Monthly take-home pay</div>
<div class="rp-grid">
  <div class="rp-item"><div class="rp-item-l">Annual take-home</div><div class="rp-item-v" id="sal-ann">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Income tax</div><div class="rp-item-v" id="sal-tax">--</div></div>
  <div class="rp-item"><div class="rp-item-l">PF deduction</div><div class="rp-item-v" id="sal-pfd">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Effective tax rate</div><div class="rp-item-v" id="sal-rate">--</div></div>
</div>${sBtn('Monthly Salary','sal-main','Take-home | CalcHive')}</div>`,
info:`<div class="cv-info-title">Tax FY2025-26</div><div class="info-block"><h4>New Regime Slabs</h4><ul><li>Up to ₹3L — Nil</li><li>₹3–7L — 5%</li><li>₹7–10L — 10%</li><li>₹10–12L — 15%</li><li>₹12–15L — 20%</li><li>Above ₹15L — 30%</li></ul></div><div class="info-block"><h4>Rebate u/s 87A</h4><p>Income up to ₹7L (new) or ₹5L (old) — zero tax after rebate.</p></div>`};

/* ─── TAX ─── */
WIDGETS.tax={
html:`<div class="cv-title">Income Tax Calculator</div><div class="cv-desc">Compare old vs new regime for FY 2025-26. See which saves more.</div>
<div class="field-group"><div class="field-label">Annual Income <span>₹</span></div><input type="number" id="itx-inc" placeholder="800000"></div>
<div class="field-group"><div class="field-label">80C Investments (old regime, max ₹1.5L)</div><input type="number" id="itx-80c" placeholder="150000" max="150000"></div>
<div class="field-group"><div class="field-label">HRA Exemption (old regime) <span>₹</span></div><input type="number" id="itx-hra" placeholder="0"></div>
<div class="field-group"><div class="field-label">Other Deductions 80D/NPS <span>₹</span></div><input type="number" id="itx-oth" placeholder="0"></div>
<button class="calc-btn" onclick="calcTax()">Compare Regimes</button>
<div class="result-panel" id="itx-res"><div class="rp-main" id="itx-main" style="font-size:20px">--</div><div class="rp-sub" id="itx-winner"></div>
<div class="rp-grid">
  <div class="rp-item"><div class="rp-item-l">Old regime tax</div><div class="rp-item-v" id="itx-old">--</div></div>
  <div class="rp-item"><div class="rp-item-l">New regime tax</div><div class="rp-item-v" id="itx-new">--</div></div>
  <div class="rp-item"><div class="rp-item-l">You save</div><div class="rp-item-v" id="itx-save">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Best regime</div><div class="rp-item-v" id="itx-best">--</div></div>
</div>${sBtn('Tax Comparison','itx-best','FY2025-26 | CalcHive')}</div>`,
info:`<div class="cv-info-title">Tax FY2025-26</div><div class="info-block"><h4>Standard deduction</h4><p>₹75,000 available in both regimes. Applied automatically.</p></div><div class="info-block"><h4>4% Cess</h4><p>Health & Education Cess applied on top of calculated tax in both regimes.</p></div>`};

/* ─── PREGNANCY ─── */
WIDGETS.pregnancy={
html:`<div class="cv-title">Pregnancy Due Date</div><div class="cv-desc">Calculate due date, current week, trimester and key milestones.</div>
<div class="field-group"><div class="field-label">Method</div><div class="toggle-group"><button class="tg-btn on" id="preg-lmp" onclick="setPregMode('lmp')">Last Period (LMP)</button><button class="tg-btn" id="preg-con" onclick="setPregMode('con')">Conception Date</button></div></div>
<div class="field-group"><div class="field-label" id="preg-lbl">First day of last period</div><input type="date" id="preg-date"></div>
<button class="calc-btn" onclick="calcPreg()">Calculate Due Date</button>
<div class="result-panel" id="preg-res"><div class="rp-main" id="preg-main">--</div><div class="rp-sub">Estimated due date</div>
<div class="rp-grid">
  <div class="rp-item"><div class="rp-item-l">Current week</div><div class="rp-item-v" id="preg-wk">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Trimester</div><div class="rp-item-v" id="preg-tri">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Days remaining</div><div class="rp-item-v" id="preg-days">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Conception est.</div><div class="rp-item-v" id="preg-con2">--</div></div>
</div>
<div style="margin-top:1rem;background:var(--bg);border-radius:8px;padding:.75rem;border:1px solid var(--border)" id="preg-ms"></div>
${sBtn('Due Date','preg-main','Pregnancy | CalcHive')}</div>`,
info:`<div class="cv-info-title">Pregnancy Timeline</div><div class="info-block"><h4>Naegele's Rule</h4><p>Due date = LMP + 280 days (40 weeks). ~80% of babies arrive within 2 weeks of this.</p></div><div class="info-block"><h4>Trimesters</h4><ul><li>1st: Weeks 1–12</li><li>2nd: Weeks 13–27</li><li>3rd: Weeks 28–40</li></ul></div><div class="info-block"><p>Estimate only — ultrasound confirms your due date.</p></div>`};

/* ─── MORTGAGE ─── */
WIDGETS.mortgage={
html:`<div class="cv-title">Mortgage / Home Loan</div><div class="cv-desc">Monthly EMI, total interest and payment breakdown for home loans.</div>
<div class="field-group"><div class="field-label">Home Price <span>₹</span></div><input type="number" id="mort-price" placeholder="5000000"></div>
<div class="field-group"><div class="field-label">Down Payment <span>₹</span></div><input type="number" id="mort-down" placeholder="1000000"></div>
<div class="field-group"><div class="field-label">Interest Rate <span>% per year</span></div><input type="number" id="mort-rate" placeholder="8.5" step="0.1"></div>
<div class="field-group"><div class="field-label">Tenure <span>years</span></div><input type="number" id="mort-yrs" placeholder="20" min="1" max="30"></div>
<button class="calc-btn" onclick="calcMortgage()">Calculate</button>
<div class="result-panel" id="mort-res"><div class="rp-main" id="mort-main">₹--</div><div class="rp-sub">Monthly EMI</div>
<div class="rp-grid">
  <div class="rp-item"><div class="rp-item-l">Loan amount</div><div class="rp-item-v" id="mort-loan">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Total interest</div><div class="rp-item-v" id="mort-int">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Total payment</div><div class="rp-item-v" id="mort-tot">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Interest share</div><div class="rp-item-v" id="mort-pct">--</div></div>
</div>${sBtn('Home Loan EMI','mort-main','Monthly payment | CalcHive')}</div>`,
info:`<div class="cv-info-title">Home Loan Guide</div><div class="info-block"><h4>Down payment</h4><p>Most Indian banks require 10–20% down. Larger down payment = lower EMI and less total interest.</p></div><div class="info-block"><h4>The interest trap</h4><p>On a 20-year loan you typically pay 80–100% of the principal again in interest. Prepaying early saves the most.</p></div>`};

/* ─── MACRO ─── */
WIDGETS.macro={
html:`<div class="cv-title">Macro Calculator</div><div class="cv-desc">Daily protein, carbs and fat targets for your fitness goal.</div>
<div class="field-group"><div class="field-label">Goal</div><select id="mac-goal"><option value="cut">Lose weight (cut)</option><option value="maintain" selected>Maintain</option><option value="bulk">Gain muscle (bulk)</option></select></div>
<div class="field-group"><div class="field-label">Body Weight <span>kg</span></div><input type="number" id="mac-wt" placeholder="70"></div>
<div class="field-group"><div class="field-label">Daily Calories (from Calorie Calc)</div><input type="number" id="mac-cals" placeholder="2000"></div>
<button class="calc-btn" onclick="calcMacro()">Calculate Macros</button>
<div class="result-panel" id="mac-res"><div class="rp-main" id="mac-main">-- kcal</div><div class="rp-sub" id="mac-sub"></div>
<div class="rp-grid">
  <div class="rp-item"><div class="rp-item-l">Protein</div><div class="rp-item-v" id="mac-pro">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Carbs</div><div class="rp-item-v" id="mac-carb">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Fats</div><div class="rp-item-v" id="mac-fat">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Protein/kg</div><div class="rp-item-v" id="mac-pkg">--</div></div>
</div>
<div style="margin-top:1rem"><div style="font-size:11px;color:var(--ink3);margin-bottom:5px">Macro split</div><div style="height:12px;border-radius:6px;overflow:hidden;display:flex"><div id="mac-pb" style="background:var(--accent3);height:100%"></div><div id="mac-cb" style="background:var(--accent2);height:100%"></div><div id="mac-fb" style="background:var(--accent);height:100%"></div></div><div style="display:flex;gap:1rem;margin-top:4px;font-size:10px"><span style="color:var(--accent3)">■ Protein</span><span style="color:var(--accent2)">■ Carbs</span><span style="color:var(--accent)">■ Fats</span></div></div></div>`,
info:`<div class="cv-info-title">About Macros</div><div class="info-block"><h4>Calorie density</h4><ul><li>Protein: 4 kcal/g</li><li>Carbs: 4 kcal/g</li><li>Fats: 9 kcal/g</li></ul></div><div class="info-block"><h4>Protein targets</h4><p>Cut: 2.0–2.4g/kg. Bulk: 1.6–2.0g/kg. Maintain: 1.2–1.6g/kg.</p></div>`};

/* ─── NET WORTH ─── */
WIDGETS.networth={
html:`<div class="cv-title">Net Worth Tracker</div><div class="cv-desc">Assets minus liabilities. No login — saved in your browser locally.</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem">
  <div><div style="font-size:11px;font-weight:600;color:var(--accent2);text-transform:uppercase;letter-spacing:.06em;margin-bottom:.5rem">Assets</div><div id="nw-a-list"></div><button onclick="addNWRow('a')" style="font-size:11px;color:var(--accent2);background:none;border:none;cursor:pointer;padding:3px 0;font-family:var(--font-sans)">+ Add asset</button></div>
  <div><div style="font-size:11px;font-weight:600;color:var(--accent);text-transform:uppercase;letter-spacing:.06em;margin-bottom:.5rem">Liabilities</div><div id="nw-l-list"></div><button onclick="addNWRow('l')" style="font-size:11px;color:var(--accent);background:none;border:none;cursor:pointer;padding:3px 0;font-family:var(--font-sans)">+ Add liability</button></div>
</div>
<button class="calc-btn" onclick="calcNetWorth()">Calculate Net Worth</button>
<div class="result-panel" id="nw-res"><div class="rp-main" id="nw-main">₹--</div><div class="rp-sub" id="nw-sub"></div>
<div class="rp-grid">
  <div class="rp-item"><div class="rp-item-l">Total assets</div><div class="rp-item-v" id="nw-assets">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Total liabilities</div><div class="rp-item-v" id="nw-liab">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Debt ratio</div><div class="rp-item-v" id="nw-ratio">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Status</div><div class="rp-item-v" id="nw-status">--</div></div>
</div>${sBtn('Net Worth','nw-main','Financial snapshot | CalcHive')}</div>`,
info:`<div class="cv-info-title">Net Worth</div><div class="info-block"><h4>Formula</h4><p>Net Worth = All Assets − All Liabilities.</p></div><div class="info-block"><h4>What to include</h4><ul><li>Assets: savings, FD, MF, property, EPF, gold</li><li>Liabilities: home loan, car loan, CC debt, personal loans</li></ul></div>`};

/* ─── NUM2WORDS ─── */
let n2wFmt='indian';
WIDGETS.num2words={
html:`<div class="cv-title">Number to Words</div><div class="cv-desc">Convert numbers to words for cheques, invoices and legal documents.</div>
<div class="field-group"><div class="field-label">Number</div><input type="number" id="n2w-num" placeholder="1234567" oninput="liveN2W()"></div>
<div class="field-group"><div class="field-label">Format</div><div class="toggle-group"><button class="tg-btn on" id="n2w-ind" onclick="setN2WFmt('indian')">Indian (lakh/crore)</button><button class="tg-btn" id="n2w-int" onclick="setN2WFmt('intl')">International</button></div></div>
<div class="result-panel on" id="n2w-res" style="display:block;margin-top:1rem">
  <div id="n2w-main" style="font-size:15px;font-weight:600;color:var(--ink);line-height:1.55">Enter a number above</div>
  <div id="n2w-cheque" style="font-size:12px;color:var(--ink3);margin-top:.5rem;font-style:italic"></div>
</div>`,
info:`<div class="cv-info-title">Number to Words</div><div class="info-block"><h4>Use cases</h4><ul><li>Writing cheques (legal requirement in India)</li><li>Legal and financial documents</li><li>Invoices</li></ul></div><div class="info-block"><h4>Indian vs International</h4><p>Indian: 1,00,000 = "one lakh". International: 100,000 = "one hundred thousand".</p></div>`};

/* ─── PACE ─── */
let paceMode='time';
WIDGETS.pace={
html:`<div class="cv-title">Running Pace Calculator</div><div class="cv-desc">Pace, speed or finish time for any race distance.</div>
<div class="field-group"><div class="field-label">Distance</div><select id="pace-dist" onchange="document.getElementById('pace-cust-f').style.display=this.value==='custom'?'':'none'"><option value="5">5 km</option><option value="10">10 km</option><option value="21.1">Half Marathon</option><option value="42.2">Full Marathon</option><option value="custom">Custom</option></select></div>
<div class="field-group" id="pace-cust-f" style="display:none"><div class="field-label">Custom km</div><input type="number" id="pace-cust" placeholder="15"></div>
<div class="field-group"><div class="field-label">Mode</div><div class="toggle-group"><button class="tg-btn on" id="pace-mt" onclick="setPaceMode('time')">I know my time</button><button class="tg-btn" id="pace-mp" onclick="setPaceMode('pace')">I know my pace</button></div></div>
<div id="pace-time-f"><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px" class="field-group"><div><div class="field-label">Hours</div><input type="number" id="pace-h" placeholder="0" min="0"></div><div><div class="field-label">Minutes</div><input type="number" id="pace-m" placeholder="30" min="0" max="59"></div><div><div class="field-label">Seconds</div><input type="number" id="pace-s" placeholder="0" min="0" max="59"></div></div></div>
<div id="pace-pace-f" style="display:none"><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px" class="field-group"><div><div class="field-label">Min/km</div><input type="number" id="pace-pm" placeholder="6"></div><div><div class="field-label">Sec/km</div><input type="number" id="pace-ps" placeholder="0" max="59"></div></div></div>
<button class="calc-btn" onclick="calcPace()">Calculate</button>
<div class="result-panel" id="pace-res"><div class="rp-main" id="pace-main">--</div><div class="rp-sub" id="pace-sub"></div>
<div class="rp-grid">
  <div class="rp-item"><div class="rp-item-l">Pace</div><div class="rp-item-v" id="pace-pkm">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Speed</div><div class="rp-item-v" id="pace-spd">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Finish time</div><div class="rp-item-v" id="pace-fin">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Per mile</div><div class="rp-item-v" id="pace-pmi">--</div></div>
</div></div>`,
info:`<div class="cv-info-title">Running Guide</div><div class="info-block"><h4>Average recreational times</h4><ul><li>5K: 25–35 min</li><li>10K: 50–70 min</li><li>Half marathon: 2:00–2:30 hr</li><li>Full marathon: 4:00–5:00 hr</li></ul></div>`};

/* ─── DEBT ─── */
WIDGETS.debt={
html:`<div class="cv-title">Debt Payoff Planner</div><div class="cv-desc">Compare Avalanche vs Snowball. See exactly when you will be debt-free.</div>
<div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:5px;margin-bottom:5px"><div style="font-size:10px;font-weight:600;color:var(--ink3);text-transform:uppercase;padding:0 6px">Debt</div><div style="font-size:10px;font-weight:600;color:var(--ink3);text-transform:uppercase">Balance ₹</div><div style="font-size:10px;font-weight:600;color:var(--ink3);text-transform:uppercase">Rate %</div><div style="font-size:10px;font-weight:600;color:var(--ink3);text-transform:uppercase">Min Pay</div></div>
<div id="debt-rows"></div>
<button onclick="addDebtRow()" style="font-size:11px;color:var(--accent);background:none;border:none;cursor:pointer;padding:4px 0;margin-bottom:.75rem;font-family:var(--font-sans)">+ Add debt</button>
<div class="field-group"><div class="field-label">Extra monthly payment <span>₹</span></div><input type="number" id="debt-extra" placeholder="2000" min="0"></div>
<button class="calc-btn" onclick="calcDebt()">Compare Strategies</button>
<div class="result-panel" id="debt-res">
<div class="rp-grid">
  <div class="rp-item"><div class="rp-item-l">Avalanche months</div><div class="rp-item-v" id="debt-av-m">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Avalanche interest</div><div class="rp-item-v" id="debt-av-i">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Snowball months</div><div class="rp-item-v" id="debt-sb-m">--</div></div>
  <div class="rp-item"><div class="rp-item-l">Snowball interest</div><div class="rp-item-v" id="debt-sb-i">--</div></div>
</div>
<div id="debt-winner" style="margin-top:1rem;padding:.75rem;border-radius:8px;border:1px solid var(--border);background:var(--bg)"></div></div>`,
info:`<div class="cv-info-title">Debt Strategies</div><div class="info-block"><h4>Avalanche method</h4><p>Pay extra toward highest-interest debt first. Saves the most money mathematically.</p></div><div class="info-block"><h4>Snowball method</h4><p>Pay extra toward smallest balance first. Psychological wins keep you motivated.</p></div><div class="faq-item"><div class="faq-q">Which is better?</div><div class="faq-a">Avalanche saves more interest. Snowball is better if you need motivation. The best method is the one you'll stick to.</div></div>`};

/* ─── CURRENCY ─── */
const CUR={USD:{s:'$'},EUR:{s:'€'},GBP:{s:'£'},INR:{s:'₹'},JPY:{s:'¥'},AUD:{s:'A$'},CAD:{s:'C$'},CHF:{s:'Fr'},CNY:{s:'¥'},HKD:{s:'HK$'},SGD:{s:'S$'},AED:{s:'AED'},SAR:{s:'SAR'},MYR:{s:'RM'},THB:{s:'฿'},KRW:{s:'₩'},MXN:{s:'MX$'},BRL:{s:'R$'},ZAR:{s:'R'},NOK:{s:'kr'},SEK:{s:'kr'},NZD:{s:'NZ$'},TRY:{s:'₺'},IDR:{s:'Rp'},PKR:{s:'₨'},BDT:{s:'৳'},NPR:{s:'₨'},QAR:{s:'QR'},OMR:{s:'OMR'},TWD:{s:'NT$'}};
const RATES={USD:1,EUR:0.921,GBP:0.787,INR:83.4,JPY:149.8,AUD:1.528,CAD:1.356,CHF:0.882,CNY:7.24,HKD:7.82,SGD:1.342,AED:3.673,SAR:3.75,MYR:4.68,THB:35.6,KRW:1330,MXN:17.2,BRL:4.97,ZAR:18.9,NOK:10.6,SEK:10.4,NZD:1.629,TRY:32.4,IDR:15700,PKR:278,BDT:110,NPR:133,QAR:3.64,OMR:0.385,TWD:31.8};
WIDGETS.currency={
html:`<div class="cv-title">Currency Converter</div><div class="cv-desc">Convert between 30+ world currencies with approximate mid-market rates.</div>
<div class="field-group"><div class="field-label">Amount</div><input type="number" id="cur-amt" placeholder="1000" oninput="liveCur()"></div>
<div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;align-items:center;margin-bottom:1rem">
  <div><div class="field-label" style="margin-bottom:5px">From</div><select id="cur-from" onchange="liveCur()" style="width:100%;padding:10px 12px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:13px;color:var(--ink);background:var(--bg);outline:none;font-family:var(--font-sans)"></select></div>
  <button onclick="swapCur()" style="margin-top:18px;padding:8px 10px;background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);cursor:pointer;font-size:16px;color:var(--ink2)">⇄</button>
  <div><div class="field-label" style="margin-bottom:5px">To</div><select id="cur-to" onchange="liveCur()" style="width:100%;padding:10px 12px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:13px;color:var(--ink);background:var(--bg);outline:none;font-family:var(--font-sans)"></select></div>
</div>
<div class="result-panel on" id="cur-res" style="display:block">
  <div class="rp-main" id="cur-main">--</div><div class="rp-sub" id="cur-sub">Enter an amount above</div>
  <div class="rp-grid" id="cur-grid" style="margin-top:1rem"></div>
  <div style="font-size:10px;color:var(--ink3);margin-top:.75rem;font-family:var(--font-mono)">Approximate mid-market rates. Not for trading.</div>
</div>`,
info:`<div class="cv-info-title">Currency Guide</div><div class="info-block"><h4>About rates</h4><p>Rates shown are approximate mid-market rates. Banks add a spread (usually 1–4%) on top.</p></div><div class="info-block"><h4>Best ways to convert</h4><ul><li>ATMs abroad: closest to mid-market</li><li>Banks: modest spread, safe for large amounts</li><li>Airport kiosks: worst rates — avoid</li></ul></div>`};

/* ─── UNIT ─── */
const UNIT_DEFS={
  weight:{units:['kg','lbs','oz','g','tonnes'],factors:[1,2.20462,35.274,1000,0.001]},
  length:{units:['cm','inches','feet','metres','km','miles'],factors:[1,0.393701,0.0328084,0.01,0.00001,0.0000062137]},
  temp:{units:['°C','°F','K'],factors:null},
  volume:{units:['Litres','ml','Gallons(US)','Cups','fl oz'],factors:[1,1000,0.264172,4.22675,33.814]},
  speed:{units:['km/h','mph','m/s','knots'],factors:[1,0.621371,0.277778,0.539957]},
  area:{units:['m²','ft²','Acres','Hectares','km²'],factors:[1,10.7639,0.000247105,0.0001,0.000001]},
};
WIDGETS.unit={
html:`<div class="cv-title">Unit Converter</div><div class="cv-desc">Weight, length, temperature, volume, speed, area — all in one place.</div>
<div class="field-group"><div class="field-label">Category</div><select id="unit-cat" onchange="renderUnitFields()"><option value="weight">Weight (kg, lbs, oz, g)</option><option value="length">Length (cm, inches, feet, metres)</option><option value="temp">Temperature (°C, °F, K)</option><option value="volume">Volume (L, ml, gallons, cups)</option><option value="speed">Speed (km/h, mph, m/s)</option><option value="area">Area (m², ft², acres)</option></select></div>
<div id="unit-fields"></div>
<div class="result-panel on" id="unit-res" style="display:block;margin-top:.5rem"><div id="unit-results"><div style="font-size:13px;color:var(--ink3)">Select a category and enter a value above.</div></div></div>`,
info:`<div class="cv-info-title">Common Conversions</div><div class="info-block"><ul><li>1 kg = 2.2046 lbs</li><li>1 inch = 2.54 cm</li><li>°F = °C × 9/5 + 32</li><li>1 mile = 1.6093 km</li><li>1 gallon = 3.785 L</li></ul></div>`};

/* ══════════════════════════════════════════════
   CALCULATION FUNCTIONS
══════════════════════════════════════════════ */

/* ─── AGE ─── */
function calcAge(){
  const dob=new Date(document.getElementById('dob').value);
  const to=new Date(document.getElementById('calcDate').value);
  if(isNaN(dob)||isNaN(to)||dob>to){alert('Enter a valid date of birth.');return;}
  let y=to.getFullYear()-dob.getFullYear(),m=to.getMonth()-dob.getMonth(),d=to.getDate()-dob.getDate();
  if(d<0){m--;d+=new Date(to.getFullYear(),to.getMonth(),0).getDate();}
  if(m<0){y--;m+=12;}
  const totalDays=Math.floor((to-dob)/86400000);
  const nextB=new Date(to.getFullYear(),dob.getMonth(),dob.getDate());
  if(nextB<=to)nextB.setFullYear(nextB.getFullYear()+1);
  const daysUntil=Math.floor((nextB-to)/86400000);
  document.getElementById('age-main').textContent=y+' years, '+m+' months, '+d+' days';
  document.getElementById('age-sub').textContent='Born '+dob.toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});
  document.getElementById('age-months').textContent=(y*12+m).toLocaleString();
  document.getElementById('age-days').textContent=totalDays.toLocaleString();
  document.getElementById('age-next').textContent=nextB.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
  document.getElementById('age-until').textContent=daysUntil===0?'Today! 🎂':daysUntil+' days';
  document.getElementById('age-res').classList.add('on');
}

/* ─── BMI ─── */
let bmiUnit='metric';
function setBMIUnit(u){
  bmiUnit=u;
  document.getElementById('bmi-m').classList.toggle('on',u==='metric');
  document.getElementById('bmi-i').classList.toggle('on',u==='imperial');
  document.getElementById('bmi-wu').textContent=u==='metric'?'kg':'lbs';
  document.getElementById('bmi-hu').textContent=u==='metric'?'cm':'inches';
  document.getElementById('bmi-weight').placeholder=u==='metric'?'70':'154';
  document.getElementById('bmi-height').placeholder=u==='metric'?'170':'67';
}
function calcBMI(){
  let w=parseFloat(document.getElementById('bmi-weight').value),h=parseFloat(document.getElementById('bmi-height').value);
  if(!w||!h){alert('Enter weight and height.');return;}
  if(bmiUnit==='imperial'){w*=0.453592;h*=2.54;}
  const hm=h/100,bmi=w/(hm*hm);
  let cat,pct;
  if(bmi<18.5){cat='Underweight';pct=10;}
  else if(bmi<25){cat='Normal weight';pct=35;}
  else if(bmi<30){cat='Overweight';pct=62;}
  else{cat='Obese';pct=87;}
  const low=18.5*hm*hm,high=24.9*hm*hm;
  const fmtW=v=>bmiUnit==='metric'?v.toFixed(1)+' kg':(v/0.453592).toFixed(1)+' lbs';
  document.getElementById('bmi-main').textContent=bmi.toFixed(1);
  document.getElementById('bmi-cat').textContent=cat;
  document.getElementById('bmi-val').textContent=bmi.toFixed(1);
  document.getElementById('bmi-cat2').textContent=cat;
  document.getElementById('bmi-range').textContent=fmtW(low)+' – '+fmtW(high);
  document.getElementById('bmi-diff').textContent=w<low?fmtW(low-w)+' under':w>high?fmtW(w-high)+' over':'In range ✓';
  const mk=document.getElementById('bmi-marker');
  if(mk){mk.style.display='block';mk.style.left=Math.min(Math.max(pct,2),98)+'%';}
  document.getElementById('bmi-res').classList.add('on');
}

/* ─── EMI ─── */
function calcEMI(){
  const p=parseFloat(document.getElementById('emi-p').value);
  const r=parseFloat(document.getElementById('emi-r').value)/12/100;
  const n=parseFloat(document.getElementById('emi-n').value)*12;
  if(!p||!r||!n){alert('Fill all fields.');return;}
  const emi=p*(r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);
  const tot=emi*n,int=tot-p;
  const fmt=v=>'₹'+Math.round(v).toLocaleString('en-IN');
  const pPct=Math.round((p/tot)*100);
  document.getElementById('emi-main').textContent=fmt(emi);
  document.getElementById('emi-pr').textContent=fmt(p);
  document.getElementById('emi-int').textContent=fmt(int);
  document.getElementById('emi-tot').textContent=fmt(tot);
  document.getElementById('emi-pct').textContent=((int/tot)*100).toFixed(0)+'%';
  document.getElementById('emi-p-bar').style.width=pPct+'%';
  document.getElementById('emi-i-bar').style.width=(100-pPct)+'%';
  document.getElementById('emi-res').classList.add('on');
}

/* ─── GPA ─── */
let gpaScale=4;
function setGPAScale(s){
  gpaScale=s;
  document.getElementById('gpa-s4').classList.toggle('on',s===4);
  document.getElementById('gpa-s10').classList.toggle('on',s===10);
  document.querySelectorAll('.gpa-g').forEach(el=>{el.max=s;el.placeholder=s===4?'3.5':'8.5';});
}
function gpaRowHTML(){
  return`<div class="gpa-row" style="display:grid;grid-template-columns:1fr 80px 70px;gap:6px;margin-bottom:6px">
    <input placeholder="Subject name" style="padding:7px 8px;border:1px solid var(--border);border-radius:6px;font-size:12px;color:var(--ink);background:var(--bg);outline:none;font-family:var(--font-sans)">
    <input type="number" placeholder="${gpaScale===4?'3.5':'8.5'}" min="0" max="${gpaScale}" step="0.1" class="gpa-g" style="padding:7px 8px;border:1px solid var(--border);border-radius:6px;font-size:12px;color:var(--ink);background:var(--bg);outline:none;font-family:var(--font-sans)">
    <input type="number" placeholder="Cr" min="1" max="6" value="3" class="gpa-c" style="padding:7px 8px;border:1px solid var(--border);border-radius:6px;font-size:12px;color:var(--ink);background:var(--bg);outline:none;font-family:var(--font-sans)">
  </div>`;
}
function initGPARows(){
  const el=document.getElementById('gpa-rows');
  if(!el)return;
  el.innerHTML='';
  [1,2,3].forEach(()=>{const d=document.createElement('div');d.innerHTML=gpaRowHTML();el.appendChild(d.firstChild);});
}
function addGPARow(){
  const el=document.getElementById('gpa-rows');
  if(el){const d=document.createElement('div');d.innerHTML=gpaRowHTML();el.appendChild(d.firstChild);}
}
function calcGPA(){
  let qp=0,cr=0;
  document.querySelectorAll('.gpa-row').forEach(r=>{
    const g=parseFloat(r.querySelectorAll('input')[1].value),c=parseFloat(r.querySelectorAll('input')[2].value);
    if(!isNaN(g)&&!isNaN(c)&&c>0){qp+=g*c;cr+=c;}
  });
  if(!cr){alert('Add at least one subject with grade and credits.');return;}
  const gpa=qp/cr;
  let letter='F';
  if(gpa>=gpaScale*.97)letter='A+';else if(gpa>=gpaScale*.93)letter='A';else if(gpa>=gpaScale*.9)letter='A-';
  else if(gpa>=gpaScale*.87)letter='B+';else if(gpa>=gpaScale*.83)letter='B';else if(gpa>=gpaScale*.8)letter='B-';
  else if(gpa>=gpaScale*.77)letter='C+';else if(gpa>=gpaScale*.7)letter='C';else if(gpa>=gpaScale*.6)letter='D';
  document.getElementById('gpa-main').textContent=gpa.toFixed(2)+' / '+gpaScale;
  document.getElementById('gpa-grade').textContent=letter+' average';
  document.getElementById('gpa-cr').textContent=cr;
  document.getElementById('gpa-let').textContent=letter;
  document.getElementById('gpa-res').classList.add('on');
}

/* ─── TIP ─── */
function calcTip(){
  const bill=parseFloat(document.getElementById('tip-bill').value);
  const pct=parseFloat(document.getElementById('tip-pct').value);
  const ppl=parseInt(document.getElementById('tip-ppl').value);
  if(!bill){alert('Enter a bill amount.');return;}
  const tip=bill*pct/100,tot=bill+tip;
  const fmt=v=>'$'+v.toFixed(2);
  document.getElementById('tip-main').textContent=fmt(tot/ppl);
  document.getElementById('tip-amt').textContent=fmt(tip);
  document.getElementById('tip-tpp').textContent=fmt(tip/ppl);
  document.getElementById('tip-bpp').textContent=fmt(bill/ppl);
  document.getElementById('tip-tot').textContent=fmt(tot);
  document.getElementById('tip-res').classList.add('on');
}

/* ─── LOVE ─── */
function calcLove(){
  const n1=document.getElementById('love-n1').value.trim();
  const n2=document.getElementById('love-n2').value.trim();
  if(!n1||!n2){alert('Enter both names.');return;}
  let hash=0;
  for(const c of (n1+n2).toLowerCase())hash=((hash<<5)-hash+c.charCodeAt(0))|0;
  const score=Math.abs(hash)%41+55;
  const msgs=[['90','Soulmates! Made for each other.'],['75','Great match! Strong compatibility.'],['60','Good potential — worth exploring!'],['40','Moderate. Give it time!'],['0','Opposites can attract too!']];
  const msg=msgs.find(m=>score>=parseInt(m[0]))[1];
  const verdict=score>=90?'Soulmates':score>=75?'Great match':score>=60?'Good match':score>=40?'Average':'Take a chance!';
  document.getElementById('love-main').textContent=score+'%';
  document.getElementById('love-msg').textContent=msg;
  document.getElementById('love-bar').style.width=score+'%';
  document.getElementById('love-score').textContent=score+'%';
  document.getElementById('love-verdict').textContent=verdict;
  document.getElementById('love-res').classList.add('on');
}

/* ─── PERCENT ─── */
function renderPctMode(){
  const m=document.getElementById('pct-mode').value;
  const inp=(id,ph)=>`<div class="field-group"><input type="number" id="${id}" placeholder="${ph}" style="width:100%;padding:10px 14px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:14px;color:var(--ink);background:var(--bg);outline:none;font-family:var(--font-sans)"></div>`;
  const f=document.getElementById('pct-fields');
  if(m==='of')f.innerHTML=inp('pct-a','Percentage e.g. 15')+inp('pct-b','Value e.g. 200');
  else if(m==='is')f.innerHTML=inp('pct-a','Part e.g. 30')+inp('pct-b','Total e.g. 150');
  else if(m==='change')f.innerHTML=inp('pct-a','From value')+inp('pct-b','To value');
  else f.innerHTML=inp('pct-a','Original value')+inp('pct-b','% to add');
  document.getElementById('pct-res').classList.remove('on');
}
function calcPct(){
  const m=document.getElementById('pct-mode').value;
  const a=parseFloat(document.getElementById('pct-a').value),b=parseFloat(document.getElementById('pct-b').value);
  if(isNaN(a)||isNaN(b)){alert('Enter both values.');return;}
  let res,sub;
  if(m==='of'){res=(a/100)*b;sub=a+'% of '+b+' = '+res.toFixed(2);}
  else if(m==='is'){res=(a/b)*100;sub=a+' is '+res.toFixed(2)+'% of '+b;}
  else if(m==='change'){res=((b-a)/Math.abs(a))*100;sub=(res>=0?'+':'')+res.toFixed(2)+'% change from '+a+' to '+b;}
  else{res=a*(1+b/100);sub=a+' increased by '+b+'% = '+res.toFixed(2);}
  document.getElementById('pct-main').textContent=(m==='of'||m==='increase'?res.toFixed(2):res.toFixed(2)+'%');
  document.getElementById('pct-sub').textContent=sub;
  document.getElementById('pct-res').classList.add('on');
}

/* ─── DISCOUNT ─── */
function calcDiscount(){
  const price=parseFloat(document.getElementById('disc-price').value);
  const pct=parseFloat(document.getElementById('disc-pct').value);
  if(!price||isNaN(pct)){alert('Enter price and discount.');return;}
  const amt=price*pct/100,final=price-amt;
  document.getElementById('disc-main').textContent=final.toFixed(2);
  document.getElementById('disc-save').textContent=amt.toFixed(2)+' ('+pct+'%)';
  document.getElementById('disc-amt').textContent=amt.toFixed(2);
  document.getElementById('disc-res').classList.add('on');
}

/* ─── CALORIE ─── */
let calGender='male';
function setCalGender(g){
  calGender=g;
  document.getElementById('cal-m').classList.toggle('on',g==='male');
  document.getElementById('cal-f').classList.toggle('on',g==='female');
}
function calcCalorie(){
  const age=parseFloat(document.getElementById('cal-age').value);
  const w=parseFloat(document.getElementById('cal-wt').value);
  const h=parseFloat(document.getElementById('cal-ht').value);
  const act=parseFloat(document.getElementById('cal-act').value);
  if(!age||!w||!h){alert('Fill all fields.');return;}
  const bmr=calGender==='male'?(10*w)+(6.25*h)-(5*age)+5:(10*w)+(6.25*h)-(5*age)-161;
  const tdee=Math.round(bmr*act);
  document.getElementById('cal-main').textContent=tdee+' kcal';
  document.getElementById('cal-bmr').textContent=Math.round(bmr)+' kcal';
  document.getElementById('cal-lose1').textContent=Math.round(tdee-500)+' kcal';
  document.getElementById('cal-lose2').textContent=Math.round(tdee-1000)+' kcal';
  document.getElementById('cal-gain').textContent=Math.round(tdee+500)+' kcal';
  document.getElementById('cal-res').classList.add('on');
}

/* ─── COMPOUND ─── */
function calcCompound(){
  const p=parseFloat(document.getElementById('ci-p').value);
  const r=parseFloat(document.getElementById('ci-r').value)/100;
  const t=parseFloat(document.getElementById('ci-t').value);
  const n=parseFloat(document.getElementById('ci-n').value);
  if(!p||!r||!t){alert('Fill all fields.');return;}
  const A=p*Math.pow(1+r/n,n*t),int=A-p;
  const fmt=v=>'₹'+Math.round(v).toLocaleString('en-IN');
  const pPct=Math.round((p/A)*100);
  document.getElementById('ci-main').textContent=fmt(A);
  document.getElementById('ci-mult').textContent=(A/p).toFixed(2)+'x';
  document.getElementById('ci-eff').textContent=((Math.pow(1+r/n,n)-1)*100).toFixed(2)+'%';
  document.getElementById('ci-pv').textContent=fmt(p);
  document.getElementById('ci-iv').textContent=fmt(int);
  document.getElementById('ci-p-bar').style.width=pPct+'%';
  document.getElementById('ci-i-bar').style.width=(100-pPct)+'%';
  document.getElementById('ci-res').classList.add('on');
}

/* ─── SIP ─── */
function calcSIP(){
  const P=parseFloat(document.getElementById('sip-a').value);
  const r=parseFloat(document.getElementById('sip-r').value)/100/12;
  const n=parseFloat(document.getElementById('sip-t').value)*12;
  if(!P||!r||!n){alert('Fill all fields.');return;}
  const FV=P*((Math.pow(1+r,n)-1)/r)*(1+r);
  const inv=P*n,ret=FV-inv;
  const fmt=v=>'₹'+Math.round(v).toLocaleString('en-IN');
  const invPct=Math.round((inv/FV)*100);
  document.getElementById('sip-main').textContent=fmt(FV);
  document.getElementById('sip-inv').textContent=fmt(inv);
  document.getElementById('sip-ratio').textContent=(FV/inv).toFixed(2)+'x';
  document.getElementById('sip-iv').textContent=fmt(inv);
  document.getElementById('sip-rv').textContent=fmt(ret);
  document.getElementById('sip-inv-bar').style.width=invPct+'%';
  document.getElementById('sip-ret-bar').style.width=(100-invPct)+'%';
  document.getElementById('sip-res').classList.add('on');
}

/* ─── SLEEP ─── */
let sleepMode='wake';
function setSleepMode(m){
  sleepMode=m;
  document.getElementById('slp-wake').classList.toggle('on',m==='wake');
  document.getElementById('slp-bed').classList.toggle('on',m==='bed');
  const tf=document.getElementById('slp-time-field');
  if(tf)tf.style.display=m==='wake'?'':'none';
  document.getElementById('slp-res').classList.remove('on');
}
function calcSleep(){
  const fall=parseInt(document.getElementById('slp-fall').value);
  let baseMin;
  if(sleepMode==='wake'){
    const t=document.getElementById('slp-time').value;if(!t){alert('Enter wake-up time.');return;}
    const[h,m]=t.split(':').map(Number);baseMin=h*60+m;
    document.getElementById('slp-heading').textContent='Best bedtimes for a '+t+' wake-up:';
  } else {
    const now=new Date();baseMin=now.getHours()*60+now.getMinutes();
    document.getElementById('slp-heading').textContent='Best wake-up times if you sleep now:';
  }
  const cycles=[6,5,4,3],labels=['9 hrs · 6 cycles','7.5 hrs · 5 cycles','6 hrs · 4 cycles','4.5 hrs · 3 cycles'];
  const quality=['Excellent','Optimal','Good','Minimum'];
  const qColors=['#2A6B4F','#1E4FA3','#8B4FA0','#D4500A'];
  const container=document.getElementById('slp-times');container.innerHTML='';
  cycles.forEach((c,i)=>{
    const mins=sleepMode==='wake'?baseMin-(c*90+fall):baseMin+(c*90+fall);
    const total=((mins%1440)+1440)%1440;
    const hh=Math.floor(total/60)%24,mm=total%60;
    const timeStr=(hh<10?'0':'')+hh+':'+(mm<10?'0':'')+mm;
    const div=document.createElement('div');
    div.style.cssText='display:flex;align-items:center;justify-content:space-between;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-sm);padding:.7rem 1rem';
    div.innerHTML='<div><div style="font-family:var(--font-serif);font-size:22px;font-weight:700;color:var(--ink)">'+timeStr+'</div><div style="font-size:11px;color:var(--ink3)">'+labels[i]+'</div></div><div style="font-size:11px;font-weight:600;padding:3px 9px;border-radius:8px;background:'+qColors[i]+'22;color:'+qColors[i]+'">'+quality[i]+'</div>';
    container.appendChild(div);
  });
  document.getElementById('slp-res').classList.add('on');
}

/* ─── IDEAL WEIGHT ─── */
let iwGender='male';
function setIWGender(g){
  iwGender=g;
  document.getElementById('iw-m').classList.toggle('on',g==='male');
  document.getElementById('iw-f').classList.toggle('on',g==='female');
}
function calcIdeal(){
  const h=parseFloat(document.getElementById('iw-ht').value);
  if(!h||h<100){alert('Enter a valid height (cm).');return;}
  const hIn=h/2.54,ex=hIn-60;
  let rob,mil,dev,ham;
  if(iwGender==='male'){rob=52+1.9*ex;mil=56.2+1.41*ex;dev=50+2.3*ex;ham=48+2.7*ex;}
  else{rob=49+1.7*ex;mil=53.1+1.36*ex;dev=45.5+2.3*ex;ham=45.5+2.2*ex;}
  const avg=(rob+mil+dev+ham)/4;
  const fmt=v=>v.toFixed(1)+' kg';
  document.getElementById('iw-main').textContent=fmt(avg);
  document.getElementById('iw-rob').textContent=fmt(rob);
  document.getElementById('iw-mil').textContent=fmt(mil);
  document.getElementById('iw-dev').textContent=fmt(dev);
  document.getElementById('iw-ham').textContent=fmt(ham);
  document.getElementById('iw-res').classList.add('on');
}

/* ─── WATER ─── */
function calcWater(){
  const w=parseFloat(document.getElementById('wat-wt').value);
  const act=parseFloat(document.getElementById('wat-act').value);
  const clim=parseFloat(document.getElementById('wat-clim').value);
  if(!w){alert('Enter your weight.');return;}
  const base=w*0.035,extra=(act+clim)*0.5,tot=base+extra;
  document.getElementById('wat-main').textContent=tot.toFixed(1)+' L';
  document.getElementById('wat-gl').textContent=Math.ceil(tot/0.25)+' glasses';
  document.getElementById('wat-ml').textContent=Math.round(tot*1000)+' ml';
  document.getElementById('wat-base').textContent=base.toFixed(1)+' L';
  document.getElementById('wat-extra').textContent=extra.toFixed(1)+' L';
  document.getElementById('wat-res').classList.add('on');
}

/* ─── DATE ─── */
let dateMode='between';
function setDateMode(m){
  dateMode=m;
  document.getElementById('dt-btn-btw').classList.toggle('on',m==='between');
  document.getElementById('dt-btn-add').classList.toggle('on',m==='add');
  document.getElementById('dt-between-fields').style.display=m==='between'?'':'none';
  document.getElementById('dt-add-fields').style.display=m==='add'?'':'none';
  document.getElementById('dt-res').classList.remove('on');
}
function calcDate(){
  if(dateMode==='between'){
    const s=new Date(document.getElementById('dt-start').value),e=new Date(document.getElementById('dt-end').value);
    if(isNaN(s)||isNaN(e)){alert('Select both dates.');return;}
    const days=Math.round(Math.abs(e-s)/86400000);
    let wkd=0,wkn=0;
    const cur=new Date(Math.min(s,e));
    for(let i=0;i<days;i++){const d=cur.getDay();if(d===0||d===6)wkn++;else wkd++;cur.setDate(cur.getDate()+1);}
    document.getElementById('dt-main').textContent=days.toLocaleString()+' days';
    document.getElementById('dt-sub').textContent='From '+s.toLocaleDateString()+' to '+e.toLocaleDateString();
    document.getElementById('dt-wks').textContent=(days/7).toFixed(1);
    document.getElementById('dt-mos').textContent=(days/30.44).toFixed(1);
    document.getElementById('dt-wkd').textContent=wkd;
    document.getElementById('dt-wkn').textContent=wkn;
  } else {
    const base=new Date(document.getElementById('dt-base').value);
    const add=parseInt(document.getElementById('dt-add-val').value);
    if(isNaN(base)||isNaN(add)){alert('Fill both fields.');return;}
    const result=new Date(base);result.setDate(result.getDate()+add);
    document.getElementById('dt-main').textContent=result.toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
    document.getElementById('dt-sub').textContent=(add>=0?'Adding ':'Subtracting ')+Math.abs(add)+' days';
    document.getElementById('dt-wks').textContent=Math.abs((add/7).toFixed(1));
    document.getElementById('dt-mos').textContent=Math.abs((add/30.44).toFixed(1));
    document.getElementById('dt-wkd').textContent='—';
    document.getElementById('dt-wkn').textContent='—';
  }
  document.getElementById('dt-res').classList.add('on');
}

/* ─── CGPA ─── */
function calcCGPA(){
  const cgpa=parseFloat(document.getElementById('cgpa-v').value);
  const mult=parseFloat(document.getElementById('cgpa-f').value);
  if(!cgpa||cgpa<=0){alert('Enter your CGPA.');return;}
  const pct=cgpa*mult;
  const grade=pct>=90?'Outstanding (O)':pct>=80?'Excellent (A+)':pct>=70?'Very Good (A)':pct>=60?'Good (B+)':pct>=50?'Average (B)':'Below Average';
  document.getElementById('cgpa-main').textContent=pct.toFixed(2)+'%';
  document.getElementById('cgpa-grade').textContent=grade;
  document.getElementById('cgpa-inp').textContent=cgpa;
  document.getElementById('cgpa-pct').textContent=pct.toFixed(2)+'%';
  document.getElementById('cgpa-res').classList.add('on');
}

/* ─── ROI ─── */
function calcROI(){
  const cost=parseFloat(document.getElementById('roi-c').value);
  const ret=parseFloat(document.getElementById('roi-r').value);
  const yrs=parseFloat(document.getElementById('roi-t').value)||0;
  if(!cost||!ret){alert('Fill investment and return fields.');return;}
  const profit=ret-cost,roi=(profit/cost)*100;
  const ann=yrs>0?(Math.pow(ret/cost,1/yrs)-1)*100:null;
  const verdict=roi<0?'Loss':roi<10?'Low':roi<25?'Moderate':roi<50?'Good':'Excellent';
  document.getElementById('roi-main').textContent=roi.toFixed(1)+'%';
  document.getElementById('roi-profit').textContent=(profit>=0?'+':'')+profit.toLocaleString();
  document.getElementById('roi-pct').textContent=roi.toFixed(1)+'%';
  document.getElementById('roi-ann').textContent=ann!==null?ann.toFixed(1)+'%/yr':'—';
  document.getElementById('roi-verd').textContent=verdict;
  document.getElementById('roi-res').classList.add('on');
}

/* ─── CURRENCY ─── */
function initCur(){
  const codes=Object.keys(CUR);
  ['cur-from','cur-to'].forEach((id,idx)=>{
    const sel=document.getElementById(id);if(!sel)return;
    sel.innerHTML=codes.map(c=>`<option value="${c}"${(idx===0?c==='USD':c==='INR')?' selected':''}>${c}</option>`).join('');
  });
  liveCur();
}
function liveCur(){
  const amt=parseFloat(document.getElementById('cur-amt')&&document.getElementById('cur-amt').value)||0;
  const from=document.getElementById('cur-from')&&document.getElementById('cur-from').value;
  const to=document.getElementById('cur-to')&&document.getElementById('cur-to').value;
  if(!from||!to||!RATES[from]||!RATES[to])return;
  const rate=(1/RATES[from])*RATES[to];
  const conv=amt*rate;
  const fmtNum=(v,code)=>v.toLocaleString('en',{maximumFractionDigits:code==='JPY'||code==='KRW'||code==='IDR'?0:2});
  const sym=c=>(CUR[c]&&CUR[c].s)||'';
  document.getElementById('cur-main').textContent=sym(to)+fmtNum(conv,to);
  document.getElementById('cur-sub').textContent='1 '+from+' = '+rate.toFixed(4)+' '+to;
  const majors=['USD','EUR','GBP','INR','JPY','AUD'];
  document.getElementById('cur-grid').innerHTML=majors.filter(c=>c!==from&&c!==to).slice(0,4).map(c=>{
    const r=(1/RATES[from])*RATES[c]*amt;
    return`<div class="rp-item"><div class="rp-item-l">${c}</div><div class="rp-item-v" style="font-size:13px">${sym(c)}${fmtNum(r,c)}</div></div>`;
  }).join('');
}
function swapCur(){
  const f=document.getElementById('cur-from').value,t=document.getElementById('cur-to').value;
  document.getElementById('cur-from').value=t;document.getElementById('cur-to').value=f;liveCur();
}

/* ─── UNIT ─── */
function renderUnitFields(){
  const cat=document.getElementById('unit-cat').value;
  const def=UNIT_DEFS[cat];
  document.getElementById('unit-fields').innerHTML=`<div class="field-group"><div class="field-label">Value</div><div style="display:grid;grid-template-columns:1fr 110px;gap:8px"><input type="number" id="unit-val" placeholder="Enter a number" oninput="convertUnits()" style="width:100%;padding:10px 14px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:14px;color:var(--ink);background:var(--bg);outline:none;font-family:var(--font-sans)"><select id="unit-from" onchange="convertUnits()" style="width:100%;padding:10px 12px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:13px;color:var(--ink);background:var(--bg);outline:none;font-family:var(--font-sans)">${def.units.map(u=>`<option>${u}</option>`).join('')}</select></div></div>`;
}
function convertUnits(){
  const cat=document.getElementById('unit-cat').value;
  const val=parseFloat(document.getElementById('unit-val').value);
  const fromEl=document.getElementById('unit-from');if(!fromEl)return;
  const from=fromEl.value;
  const def=UNIT_DEFS[cat];
  const res=document.getElementById('unit-results');if(!res)return;
  if(isNaN(val)){res.innerHTML='<div style="font-size:13px;color:var(--ink3)">Enter a value above to see all conversions.</div>';return;}
  let results=[];
  if(cat==='temp'){
    const c=from==='°C'?val:from==='°F'?(val-32)*5/9:val-273.15;
    results=[{u:'°C',v:parseFloat(c.toFixed(4))},{u:'°F',v:parseFloat((c*9/5+32).toFixed(4))},{u:'K',v:parseFloat((c+273.15).toFixed(4))}];
  } else {
    const fi=def.units.indexOf(from);const baseVal=val/def.factors[fi];
    results=def.units.map((u,i)=>({u,v:parseFloat((baseVal*def.factors[i]).toPrecision(6))}));
  }
  res.innerHTML='<div class="rp-grid">'+results.map(r=>`<div class="rp-item"><div class="rp-item-l">${r.u}</div><div class="rp-item-v" style="font-size:13px">${r.v.toLocaleString()}</div></div>`).join('')+'</div>';
}

/* ─── LUCKY ─── */
function calcLucky(){
  const name=document.getElementById('lk-name').value.trim();
  const dob=document.getElementById('lk-dob').value;
  if(!name||!dob){alert('Enter your name and date of birth.');return;}
  const dobStr=dob.replace(/-/g,'');
  let lp=0;for(const c of dobStr)lp+=parseInt(c);
  while(lp>9&&lp!==11&&lp!==22&&lp!==33){let s=0;for(const c of ''+lp)s+=parseInt(c);lp=s;}
  const nm={A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:1,K:2,L:3,M:4,N:5,O:6,P:7,Q:8,R:9,S:1,T:2,U:3,V:4,W:5,X:6,Y:7,Z:8};
  let ns=0;for(const c of name.toUpperCase())if(nm[c])ns+=nm[c];
  while(ns>9){let s=0;for(const c of ''+ns)s+=parseInt(c);ns=s;}
  const lucky=(lp+ns)%9||9;
  const colours=['Red','Orange','Yellow','Green','Blue','Indigo','Violet','Pink','Gold'];
  const descs=['Leader & pioneer','Diplomatic & sensitive','Creative & expressive','Practical & hardworking','Freedom-loving & adventurous','Nurturing & responsible','Spiritual & introspective','Ambitious & powerful','Humanitarian & compassionate'];
  document.getElementById('lk-main').textContent=lp;
  document.getElementById('lk-desc').textContent='Life path '+lp+': '+descs[(lp-1)%9];
  document.getElementById('lk-life').textContent=lp;
  document.getElementById('lk-lucky').textContent=lucky;
  document.getElementById('lk-namenum').textContent=ns;
  document.getElementById('lk-colour').textContent=colours[lucky-1];
  document.getElementById('lk-res').classList.add('on');
}

/* ─── WYR ─── */
function initWYR(){
  const container=document.getElementById('wyr-qs');if(!container)return;
  wyrA1=new Array(WYR_QS.length).fill(null);wyrA2=new Array(WYR_QS.length).fill(null);
  container.innerHTML=WYR_QS.map((q,i)=>`
    <div style="margin-bottom:1.25rem">
      <div style="font-size:12px;font-weight:600;color:var(--ink2);margin-bottom:8px">Q${i+1}: ${q.q}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
        ${q.opts.map((o,j)=>`
          <div><div style="font-size:10px;color:var(--ink3);margin-bottom:3px;text-align:center">You</div>
          <button id="wyr-${i}-0-${j}" onclick="setWYR(${i},0,${j})" style="width:100%;padding:8px;border:1px solid var(--border);border-radius:6px;background:var(--bg);font-size:12px;color:var(--ink2);cursor:pointer;font-family:var(--font-sans)">${o}</button></div>
          <div><div style="font-size:10px;color:var(--ink3);margin-bottom:3px;text-align:center">Partner</div>
          <button id="wyr-${i}-1-${j}" onclick="setWYR(${i},1,${j})" style="width:100%;padding:8px;border:1px solid var(--border);border-radius:6px;background:var(--bg);font-size:12px;color:var(--ink2);cursor:pointer;font-family:var(--font-sans)">${o}</button></div>
        `).join('')}
      </div>
    </div>`).join('');
}
function setWYR(qi,person,ans){
  if(person===0)wyrA1[qi]=ans;else wyrA2[qi]=ans;
  WYR_QS[qi].opts.forEach((_,j)=>{
    const btn=document.getElementById('wyr-'+qi+'-'+person+'-'+j);
    if(btn){btn.style.background=j===ans?'var(--ink)':'var(--bg)';btn.style.color=j===ans?'#fff':'var(--ink2)';btn.style.borderColor=j===ans?'var(--ink)':'var(--border)';}
  });
}
function calcWYR(){
  if(wyrA1.some(a=>a===null)||wyrA2.some(a=>a===null)){alert('Please answer all questions for both people.');return;}
  let matches=0;wyrA1.forEach((a,i)=>{if(a===wyrA2[i])matches++;});
  const score=Math.round((matches/WYR_QS.length)*100);
  const msgs=['Very different — opposites can attract!','Some differences — growth opportunities!','Good foundation — solid compatibility!','Great match — you think alike!','Near perfect — soulmates!'];
  document.getElementById('wyr-main').textContent=score+'%';
  document.getElementById('wyr-msg').textContent=msgs[Math.floor(score/25)];
  document.getElementById('wyr-bar').style.width=score+'%';
  document.getElementById('wyr-matches').textContent=matches+' / '+WYR_QS.length;
  document.getElementById('wyr-score').textContent=score+'%';
  document.getElementById('wyr-res').classList.add('on');
}

/* ─── ZODIAC ─── */
function getSunSign(m,d){
  const bounds=[[1,20],[2,18],[3,20],[4,19],[5,20],[6,20],[7,22],[8,22],[9,22],[10,22],[11,21],[12,21]];
  const idx=bounds.findIndex(([bm,bd])=>m===bm+1&&d<=bd);
  return idx>=0?SIGNS[(idx+1)%12]:SIGNS[m===12?0:m-1];
}
function calcZodiac(){
  const dob=new Date(document.getElementById('zod-dob').value);
  if(isNaN(dob)){alert('Enter a date of birth.');return;}
  const m=dob.getMonth()+1,d=dob.getDate(),y=dob.getFullYear();
  const hour=parseInt(document.getElementById('zod-hr').value);
  const sun=getSunSign(m,d);
  const moonIdx=Math.floor((Math.floor(dob/86400000)+(hour>=0?hour/24:0))/2.5)%12;
  const moon=SIGNS[((moonIdx%12)+12)%12];
  const chinIdx=((y-1900)%12+12)%12;
  const digits=(y+''+m+''+d).split('').map(Number);
  let lp=digits.reduce((a,b)=>a+b,0);
  while(lp>9&&lp!==11&&lp!==22&&lp!==33){let s=0;for(const c of ''+lp)s+=parseInt(c);lp=s;}
  document.getElementById('zod-main').textContent=sun.s+' '+sun.n;
  document.getElementById('zod-sub').textContent=sun.d+' · '+sun.e+' sign';
  document.getElementById('zod-sun').textContent=sun.s+' '+sun.n;
  document.getElementById('zod-moon').textContent=hour>=0?moon.s+' '+moon.n:'Unknown (no birth hour)';
  document.getElementById('zod-chin').textContent=CHINESE[chinIdx];
  document.getElementById('zod-life').textContent=lp;
  document.getElementById('zod-elem').textContent=sun.e;
  document.getElementById('zod-plan').textContent=sun.p;
  document.getElementById('zod-traits').innerHTML='<div style="font-size:10px;color:var(--ink3);text-transform:uppercase;letter-spacing:.06em;margin-bottom:.4rem">'+sun.n+' traits</div><div style="font-size:13px;color:var(--ink2);line-height:1.6">'+sun.t+'</div>';
  document.getElementById('zod-res').classList.add('on');
}

/* ─── SALARY ─── */
let salRegime='new';
function setSalRegime(r){salRegime=r;document.getElementById('sal-new').classList.toggle('on',r==='new');document.getElementById('sal-old').classList.toggle('on',r==='old');}
function calcTaxNew(inc){
  const t=Math.max(0,inc-75000);
  const sl=[[300000,0],[400000,.05],[300000,.10],[200000,.15],[300000,.20],[Infinity,.30]];
  let tx=0,rem=t;
  for(const[b,rt]of sl){const x=Math.min(rem,b);tx+=x*rt;rem-=x;if(rem<=0)break;}
  if(t<=700000)tx=0;
  return Math.round(tx+(tx>0?tx*.04:0));
}
function calcTaxOld(inc,ded){
  const t=Math.max(0,inc-50000-Math.min(ded,600000));
  const sl=[[250000,0],[250000,.05],[500000,.20],[Infinity,.30]];
  let tx=0,rem=t;
  for(const[b,rt]of sl){const x=Math.min(rem,b);tx+=x*rt;rem-=x;if(rem<=0)break;}
  if(t<=500000)tx=0;
  return Math.round(tx+(tx>0?tx*.04:0));
}
function calcSalary(){
  const g=parseFloat(document.getElementById('sal-gross').value)||0;
  const pf=parseFloat(document.getElementById('sal-pf').value)||12;
  if(!g){alert('Enter salary.');return;}
  const pfAmt=Math.round(g*.5*pf/100);
  const tx=salRegime==='new'?calcTaxNew(g):calcTaxOld(g,150000);
  const th=g-tx-pfAmt;
  const fmt=v=>'₹'+Math.round(v).toLocaleString('en-IN');
  document.getElementById('sal-main').textContent=fmt(th/12);
  document.getElementById('sal-ann').textContent=fmt(th);
  document.getElementById('sal-tax').textContent=fmt(tx);
  document.getElementById('sal-pfd').textContent=fmt(pfAmt);
  document.getElementById('sal-rate').textContent=((tx/g)*100).toFixed(1)+'%';
  document.getElementById('sal-res').classList.add('on');
}

/* ─── TAX ─── */
function calcTax(){
  const inc=parseFloat(document.getElementById('itx-inc').value)||0;
  const c80=Math.min(parseFloat(document.getElementById('itx-80c').value)||0,150000);
  const hra=parseFloat(document.getElementById('itx-hra').value)||0;
  const oth=parseFloat(document.getElementById('itx-oth').value)||0;
  if(!inc){alert('Enter income.');return;}
  const nt=calcTaxNew(inc),ot=calcTaxOld(inc,c80+hra+oth);
  const better=nt<=ot?'New Regime':'Old Regime';
  const save=Math.abs(nt-ot);
  const fmt=v=>'₹'+Math.round(v).toLocaleString('en-IN');
  document.getElementById('itx-main').textContent='Old: '+fmt(ot)+' | New: '+fmt(nt);
  document.getElementById('itx-winner').textContent=better+' saves you '+fmt(save);
  document.getElementById('itx-old').textContent=fmt(ot);
  document.getElementById('itx-new').textContent=fmt(nt);
  document.getElementById('itx-save').textContent=fmt(save);
  document.getElementById('itx-best').textContent=better;
  document.getElementById('itx-res').classList.add('on');
}

/* ─── PREGNANCY ─── */
let pregMode='lmp';
function setPregMode(m){
  pregMode=m;
  document.getElementById('preg-lmp').classList.toggle('on',m==='lmp');
  document.getElementById('preg-con').classList.toggle('on',m==='con');
  document.getElementById('preg-lbl').textContent=m==='lmp'?'First day of last period':'Conception date';
}
function calcPreg(){
  const d=new Date(document.getElementById('preg-date').value);
  if(isNaN(d)){alert('Enter a date.');return;}
  const lmp=pregMode==='lmp'?d:new Date(d-14*86400000);
  const due=new Date(lmp.getTime()+280*86400000);
  const now=new Date();
  const wk=Math.floor((now-lmp)/86400000/7);
  const dl=Math.max(0,Math.floor((due-now)/86400000));
  const tri=wk<=12?'1st (wk 1–12)':wk<=27?'2nd (wk 13–27)':'3rd (wk 28–40)';
  const con=new Date(lmp.getTime()+14*86400000);
  const fmt=x=>x.toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});
  document.getElementById('preg-main').textContent=fmt(due);
  document.getElementById('preg-wk').textContent=wk>0&&wk<=42?'Week '+wk:'—';
  document.getElementById('preg-tri').textContent=wk>0?tri:'—';
  document.getElementById('preg-days').textContent=dl+' days';
  document.getElementById('preg-con2').textContent=fmt(con);
  const ms=[{w:8,t:'Heartbeat detectable'},{w:12,t:'End of 1st trimester'},{w:20,t:'Anatomy scan'},{w:28,t:'3rd trimester begins'},{w:40,t:'Due date!'}].filter(x=>x.w>=wk).slice(0,4);
  document.getElementById('preg-ms').innerHTML='<div style="font-size:10px;color:var(--ink3);text-transform:uppercase;letter-spacing:.06em;margin-bottom:.4rem">Upcoming milestones</div>'+ms.map(x=>'<div style="display:flex;justify-content:space-between;font-size:12px;padding:3px 0;border-bottom:1px solid var(--border)"><span style="color:var(--ink2)">'+x.t+'</span><span style="font-family:var(--font-mono);color:var(--ink3)">Wk '+x.w+'</span></div>').join('');
  document.getElementById('preg-res').classList.add('on');
}

/* ─── MORTGAGE ─── */
function calcMortgage(){
  const price=parseFloat(document.getElementById('mort-price').value)||0;
  const down=parseFloat(document.getElementById('mort-down').value)||0;
  const p=price-down;
  const r=parseFloat(document.getElementById('mort-rate').value)/12/100;
  const n=parseFloat(document.getElementById('mort-yrs').value)*12;
  if(!p||!r||!n){alert('Fill all fields.');return;}
  const emi=p*(r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);
  const tot=emi*n,int=tot-p;
  const fmt=v=>'₹'+Math.round(v).toLocaleString('en-IN');
  document.getElementById('mort-main').textContent=fmt(emi);
  document.getElementById('mort-loan').textContent=fmt(p);
  document.getElementById('mort-int').textContent=fmt(int);
  document.getElementById('mort-tot').textContent=fmt(tot);
  document.getElementById('mort-pct').textContent=((int/tot)*100).toFixed(0)+'%';
  document.getElementById('mort-res').classList.add('on');
}

/* ─── MACRO ─── */
function calcMacro(){
  const goal=document.getElementById('mac-goal').value;
  const w=parseFloat(document.getElementById('mac-wt').value)||0;
  const base=parseFloat(document.getElementById('mac-cals').value)||2000;
  if(!w){alert('Enter body weight.');return;}
  const cals=goal==='cut'?base-500:goal==='bulk'?base+300:base;
  const pG=goal==='cut'?w*2.2:goal==='bulk'?w*2.0:w*1.6;
  const fG=cals*.25/9,cG=(cals-pG*4-fG*9)/4;
  const pP=Math.round(pG*4/cals*100),fP=Math.round(fG*9/cals*100),cP=100-pP-fP;
  document.getElementById('mac-main').textContent=Math.round(cals)+' kcal';
  document.getElementById('mac-sub').textContent=goal==='cut'?'Cutting deficit':goal==='bulk'?'Bulking surplus':'Maintenance';
  document.getElementById('mac-pro').textContent=Math.round(pG)+'g';
  document.getElementById('mac-carb').textContent=Math.round(cG)+'g';
  document.getElementById('mac-fat').textContent=Math.round(fG)+'g';
  document.getElementById('mac-pkg').textContent=(pG/w).toFixed(1)+'g/kg';
  document.getElementById('mac-pb').style.width=pP+'%';
  document.getElementById('mac-cb').style.width=cP+'%';
  document.getElementById('mac-fb').style.width=fP+'%';
  document.getElementById('mac-res').classList.add('on');
}

/* ─── NET WORTH ─── */
function nwRowHTML(type,label){
  return`<div style="display:flex;gap:5px;margin-bottom:5px"><input placeholder="${label}" style="flex:2;padding:7px 8px;border:1px solid var(--border);border-radius:6px;font-size:12px;color:var(--ink);background:var(--bg);outline:none;font-family:var(--font-sans)"><input type="number" placeholder="₹ Amount" style="flex:1.5;padding:7px 8px;border:1px solid var(--border);border-radius:6px;font-size:12px;color:var(--ink);background:var(--bg);outline:none;font-family:var(--font-sans)" class="nw-${type}-val"></div>`;
}
function initNWRows(){
  const al=document.getElementById('nw-a-list'),ll=document.getElementById('nw-l-list');
  if(!al||!ll)return;
  al.innerHTML=['Savings / FD','Investments / MF','Property value'].map(l=>nwRowHTML('a',l)).join('');
  ll.innerHTML=['Home loan','Car loan','Credit card debt'].map(l=>nwRowHTML('l',l)).join('');
}
function addNWRow(t){const c=document.getElementById('nw-'+t+'-list');if(c){const d=document.createElement('div');d.innerHTML=nwRowHTML(t,t==='a'?'Asset':'Liability');c.appendChild(d.firstChild);}}
function calcNetWorth(){
  const aV=[...document.querySelectorAll('.nw-a-val')].map(i=>parseFloat(i.value)||0);
  const lV=[...document.querySelectorAll('.nw-l-val')].map(i=>parseFloat(i.value)||0);
  const a=aV.reduce((x,y)=>x+y,0),l=lV.reduce((x,y)=>x+y,0),nw=a-l;
  const fmt=v=>'₹'+Math.round(v).toLocaleString('en-IN');
  document.getElementById('nw-main').textContent=fmt(nw);
  document.getElementById('nw-sub').textContent=nw>=0?'Positive net worth ✓':'Negative — focus on debt payoff first';
  document.getElementById('nw-assets').textContent=fmt(a);
  document.getElementById('nw-liab').textContent=fmt(l);
  document.getElementById('nw-ratio').textContent=a>0?((l/a)*100).toFixed(0)+'%':'—';
  document.getElementById('nw-status').textContent=nw>0?(l/a<.3?'Excellent':'Good'):'Needs attention';
  document.getElementById('nw-res').classList.add('on');
}

/* ─── NUM2WORDS ─── */
function setN2WFmt(f){
  n2wFmt=f;
  document.getElementById('n2w-ind').classList.toggle('on',f==='indian');
  document.getElementById('n2w-int').classList.toggle('on',f==='intl');
  liveN2W();
}
function liveN2W(){
  const n=parseFloat(document.getElementById('n2w-num')&&document.getElementById('n2w-num').value);
  const mEl=document.getElementById('n2w-main'),cEl=document.getElementById('n2w-cheque');
  if(!mEl)return;
  if(isNaN(n)||n<0){mEl.textContent='Enter a number above';if(cEl)cEl.textContent='';return;}
  const ones=['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  function h3(x){if(x===0)return'';if(x<20)return ones[x];if(x<100)return tens[Math.floor(x/10)]+(x%10?' '+ones[x%10]:'');return ones[Math.floor(x/100)]+' hundred'+(x%100?' and '+h3(x%100):'');}
  let w;
  const ni=Math.floor(n);
  if(n2wFmt==='indian'){const cr=Math.floor(ni/1e7),lk=Math.floor((ni%1e7)/1e5),th=Math.floor((ni%1e5)/1e3),rm=ni%1e3;const p=[];if(cr)p.push(h3(cr)+' crore');if(lk)p.push(h3(lk)+' lakh');if(th)p.push(h3(th)+' thousand');if(rm)p.push(h3(rm));w=p.join(' ')||'zero';}
  else{const bi=Math.floor(ni/1e9),mi=Math.floor((ni%1e9)/1e6),th=Math.floor((ni%1e6)/1e3),rm=ni%1e3;const p=[];if(bi)p.push(h3(bi)+' billion');if(mi)p.push(h3(mi)+' million');if(th)p.push(h3(th)+' thousand');if(rm)p.push(h3(rm));w=p.join(' ')||'zero';}
  mEl.textContent=w;
  if(cEl)cEl.textContent='Cheque: '+w.charAt(0).toUpperCase()+w.slice(1)+' only';
}

/* ─── PACE ─── */
function setPaceMode(m){
  paceMode=m;
  document.getElementById('pace-mt').classList.toggle('on',m==='time');
  document.getElementById('pace-mp').classList.toggle('on',m==='pace');
  document.getElementById('pace-time-f').style.display=m==='time'?'':'none';
  document.getElementById('pace-pace-f').style.display=m==='pace'?'':'none';
}
function calcPace(){
  const ds=document.getElementById('pace-dist').value;
  const dist=ds==='custom'?parseFloat(document.getElementById('pace-cust').value):parseFloat(ds);
  if(!dist){alert('Enter distance.');return;}
  let sec;
  if(paceMode==='time'){const h=parseFloat(document.getElementById('pace-h').value)||0,m=parseFloat(document.getElementById('pace-m').value)||0,s=parseFloat(document.getElementById('pace-s').value)||0;sec=h*3600+m*60+s;}
  else{const pm=parseFloat(document.getElementById('pace-pm').value)||0,ps=parseFloat(document.getElementById('pace-ps').value)||0;sec=(pm*60+ps)*dist;}
  if(!sec){alert('Enter time or pace.');return;}
  const pkm=sec/dist,spd=dist/(sec/3600),pmi=pkm*1.60934;
  const ft=s=>Math.floor(s/60)+':'+(String(Math.round(s%60)).padStart(2,'0'));
  const ftt=s=>Math.floor(s/3600)+'h '+Math.floor((s%3600)/60)+'m '+Math.round(s%60)+'s';
  document.getElementById('pace-main').textContent=ft(pkm)+' /km';
  document.getElementById('pace-sub').textContent='For '+dist+' km run';
  document.getElementById('pace-pkm').textContent=ft(pkm)+' /km';
  document.getElementById('pace-spd').textContent=spd.toFixed(1)+' km/h';
  document.getElementById('pace-fin').textContent=ftt(sec);
  document.getElementById('pace-pmi').textContent=ft(pmi)+' /mi';
  document.getElementById('pace-res').classList.add('on');
}

/* ─── DEBT ─── */
function debtRowHTML(label,bal,rate,min){
  return`<div class="debt-row" style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:5px;margin-bottom:5px">
    <input placeholder="${label}" style="padding:7px 8px;border:1px solid var(--border);border-radius:6px;font-size:12px;color:var(--ink);background:var(--bg);outline:none;font-family:var(--font-sans)" class="debt-name">
    <input type="number" placeholder="${bal}" style="padding:7px 8px;border:1px solid var(--border);border-radius:6px;font-size:12px;color:var(--ink);background:var(--bg);outline:none;font-family:var(--font-sans)" class="debt-bal" value="${bal||''}">
    <input type="number" placeholder="${rate}" step="0.1" style="padding:7px 8px;border:1px solid var(--border);border-radius:6px;font-size:12px;color:var(--ink);background:var(--bg);outline:none;font-family:var(--font-sans)" class="debt-rate" value="${rate||''}">
    <input type="number" placeholder="${min}" style="padding:7px 8px;border:1px solid var(--border);border-radius:6px;font-size:12px;color:var(--ink);background:var(--bg);outline:none;font-family:var(--font-sans)" class="debt-min" value="${min||''}">
  </div>`;
}
function initDebtRows(){
  const el=document.getElementById('debt-rows');if(!el)return;
  el.innerHTML=[['Credit card','50000','36','1500'],['Personal loan','200000','14','5000'],['Car loan','300000','9','8000']].map(d=>debtRowHTML(...d)).join('');
}
function addDebtRow(){const el=document.getElementById('debt-rows');if(el){const d=document.createElement('div');d.innerHTML=debtRowHTML('New debt','','','');el.appendChild(d.firstChild);}}
function runDebt(debts,extra,sortFn){
  let ds=debts.map(d=>({...d})).sort(sortFn);let tot=0,mo=0;
  while(ds.some(d=>d.bal>0)&&mo<600){mo++;let ex=extra;
    ds.forEach(d=>{if(d.bal<=0)return;const int=d.bal*d.rate/12/100;tot+=int;d.bal+=int;});
    ds.forEach(d=>{if(d.bal<=0)return;const pay=Math.min(d.bal,d.min);d.bal-=pay;});
    for(const d of ds){if(d.bal>0&&ex>0){const pay=Math.min(d.bal,ex);d.bal-=pay;ex-=pay;break;}}
    ds.forEach(d=>{if(d.bal<0)d.bal=0;});
  }
  return{months:mo,totalInt:tot};
}
function calcDebt(){
  const rows=document.querySelectorAll('.debt-row');const debts=[];
  rows.forEach(r=>{const bal=parseFloat(r.querySelector('.debt-bal').value)||0,rate=parseFloat(r.querySelector('.debt-rate').value)||0,min=parseFloat(r.querySelector('.debt-min').value)||0;if(bal>0)debts.push({bal,rate,min});});
  if(!debts.length){alert('Add at least one debt with a balance.');return;}
  const extra=parseFloat(document.getElementById('debt-extra').value)||0;
  const av=runDebt(debts,extra,(a,b)=>b.rate-a.rate);
  const sb=runDebt(debts,extra,(a,b)=>a.bal-b.bal);
  const fmt=v=>'₹'+Math.round(v).toLocaleString('en-IN');
  document.getElementById('debt-av-m').textContent=av.months+' mo';
  document.getElementById('debt-av-i').textContent=fmt(av.totalInt);
  document.getElementById('debt-sb-m').textContent=sb.months+' mo';
  document.getElementById('debt-sb-i').textContent=fmt(sb.totalInt);
  const avWins=av.totalInt<sb.totalInt;
  document.getElementById('debt-winner').innerHTML='<div style="font-size:13px;font-weight:600;color:var(--ink);margin-bottom:.35rem">Use <span style="color:var(--accent)">'+(avWins?'Avalanche':'Snowball')+'</span> — saves '+fmt(Math.abs(sb.totalInt-av.totalInt))+' in interest</div><div style="font-size:12px;color:var(--ink2);line-height:1.55">'+(avWins?'Attack highest-interest debt first for maximum savings.':'Both methods take similar time — pick the one that keeps you motivated.')+'</div>';
  document.getElementById('debt-res').classList.add('on');
}

/* ══════════════════════════════════════════════
   BOOT
══════════════════════════════════════════════ */
(function boot(){
  initTheme();
  initStreak();
  isCompact=LS.get('ch-compact',false);
  if(isCompact){const b=document.getElementById('compact-btn');if(b){b.textContent='⊞ Expanded';b.classList.add('on');}}
  updateTabCounts();
  initTabs();
  renderGrid('all');
  renderPers();
  initDaily();
  document.getElementById('hero-count').textContent=CALCS.length;
  document.getElementById('hero-age').textContent=(new Date().getFullYear()-1990)+' yrs';
})();