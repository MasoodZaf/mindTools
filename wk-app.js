/* ═══════════════════════════════════════════
   WORD DICTIONARY (curated for demo quality)
═══════════════════════════════════════════ */
const DICT = [
  "aa","ab","ace","act","add","age","ago","aid","aim","air","ale","all","ant","ape","apt","arc","are","ark","arm","art","ash","ask","ate","awe","axe","aye",
  "bad","bag","ban","bar","bat","bay","bed","beg","bet","bid","big","bit","bog","bow","box","boy","bud","bug","bun","bus","but","buy","bye",
  "cab","can","cap","car","cat","cob","cod","cog","con","cop","cot","cow","cry","cub","cup","cut",
  "dab","dam","dew","did","dig","dim","dip","doe","dog","dot","dry","dub","dug","dun","duo","dye",
  "ear","eat","eel","egg","ego","elf","elk","elm","emu","end","era","eve","ewe","eye",
  "fad","fan","far","fat","fax","fee","few","fib","fig","fin","fit","fix","fly","foe","fog","for","fox","fry","fun","fur",
  "gag","gap","gas","gel","gem","get","gig","gin","gnu","god","got","gun","gut","guy","gym",
  "had","ham","has","hat","hay","hem","hen","her","hew","hid","him","hip","his","hit","hoe","hog","hop","hot","how","hub","hug","hum","hut",
  "ice","icy","ill","imp","ink","inn","ion","ire","irk","ivy",
  "jab","jag","jam","jar","jaw","jay","jet","jig","job","jog","jot","joy","jug","jut",
  "keg","kid","kin","kit",
  "lab","lad","lag","lap","law","lay","lea","led","leg","let","lid","lip","lit","log","lot","low",
  "mad","man","map","mar","mat","maw","men","met","mid","mix","mob","mop","mud","mug","mum",
  "nab","nag","nap","net","new","nip","nit","nob","nod","nor","not","now","nun","nut",
  "oak","oar","oat","odd","ode","off","oil","old","opt","orb","ore","our","out","owe","owl","own",
  "pad","pan","pap","par","pat","paw","pay","pea","peg","pen","pet","pie","pig","pin","pit","ply","pod","pop","pot","pow","pro","pub","pug","pun","pup","pus","put",
  "rag","ram","ran","rap","rat","raw","ray","red","ref","rep","rib","rid","rig","rip","rob","rod","rot","row","rub","rug","rum","run","rut","rye",
  "sad","sag","sap","sat","saw","say","sea","set","sew","shy","sin","sip","sir","sit","six","ski","sky","sly","sob","sod","son","sop","sot","sow","soy","spa","spy","sty","sub","sue","sum","sun","sup",
  "tab","tan","tap","tar","tat","tax","tea","ten","the","thy","tie","til","tin","tip","toe","ton","too","top","toy","try","tub","tug","two",
  "urn","use",
  "van","vat","vet","via","vim","vow",
  "wad","war","was","wax","web","wed","wig","win","wit","woe","wok","won","woo","wow",
  "yak","yam","yap","yew","you","yow",
  "zap","zed","zen","zig","zip","zoo",
  // 4-letter words
  "able","ache","acid","acne","acre","acts","adds","aged","ages","aide","aids","aims","airs","airy","also","alto","amen","amid","amok","amos","amps","anal","anew","anon","ante","ants","apex","arch","area","aria","arid","army","arts","arty","ashy","atom","atop","avid","away","awed","axes","axis",
  "baby","back","bade","bail","bait","bake","bald","bale","ball","balm","band","bane","bang","bank","bare","bark","barn","base","bash","bask","bass","baste","bath","bead","beak","beam","bean","bear","beat","beef","been","beer","beet","bell","belt","bend","best","bias","bide","bile","bill","bind","bird","bite","blot","blow","blue","blur","boar","boat","body","boil","bold","bolt","bond","bone","book","boot","bore","born","both","bout","brad","brag","bran","brat","bray","brew","brim","brow","buck","bulk","bull","bump","bunk","bunt","burn","burp","burr","bury","bush","busy","byte",
  "cage","cake","calf","call","calm","came","cane","cape","care","cart","case","cash","cast","cave","cell","cent","chad","chai","chap","char","chat","chip","chop","cite","city","clam","clap","clay","clip","club","clue","coal","coat","code","coil","coin","cold","come","cone","cook","cool","cope","copy","cord","core","cork","corn","cost","cozy","crag","cram","crop","crow","cube","cuff","curb","cure","curl","cute",
  "dace","dale","dame","dare","dark","dart","dash","date","dawn","dead","deal","dean","dear","debt","deck","deed","deem","deep","deft","deli","demo","deny","dew","dice","diet","dire","dirt","disc","disk","dive","dock","dole","dome","done","doom","door","dote","dove","down","drab","drag","draw","drew","drip","drop","drum","dual","duel","dumb","dump","dune","dusk","dust","duty",
  "each","earn","ease","east","easy","edge","edit","emit","envy","epic","even","ever","exam","exit",
  "face","fact","fade","fail","fain","fair","fake","fall","fame","fare","farm","fast","fate","fawn","fear","feat","feel","feet","fell","felt","fend","fern","feud","fiat","fife","file","fill","film","find","fine","fire","firm","fish","fist","five","flag","flap","flat","flaw","fled","flex","flip","flit","flog","flop","flow","foam","foal","fold","folk","fond","font","food","fool","foot","fore","fork","form","fort","foul","four","free","from","frog","from","fuel","full","fume","fury","fuse","fuss",
  "gale","gall","game","gang","gape","gash","gate","gave","gaze","gear","gild","girl","gist","give","glad","glen","glib","glob","glow","glue","glum","gnat","gnaw","goal","goad","goat","gold","gone","gore","gory","gown","grab","gram","gray","grew","grid","grim","grin","grip","grit","grow","grub","gulf","gull","gulp","gust","guts",
  "hack","hail","hair","hale","half","hall","halt","hand","hang","hard","hare","harm","harp","haze","hazy","head","heal","heap","heat","heel","heft","held","helm","help","herb","herd","here","hero","hewn","hide","high","hill","hilt","hint","hire","hive","hoax","hold","hole","home","hood","hoop","hope","horn","hose","host","hour","huge","hulk","hull","hump","hunt","hurt","husk",
  "idea","idle","igloo","imply","inch","info","into","iris","isle",
  "jack","jade","jail","jest","join","joke","jolt","jump","just",
  "keen","keep","kelp","kick","kill","kind","king","kiss","knew","knit","knob","knot","know",
  "lace","lack","laid","lake","lamb","lame","lamp","land","lane","lank","lard","lark","lash","lask","last","late","laud","lava","lawn","lazy","lead","leaf","lean","leap","left","lend","lens","lent","lest","levy","liar","lick","life","lift","like","lily","lime","line","link","lint","lion","list","live","load","loaf","loan","lock","loft","lone","long","look","loom","loop","lore","lorn","lose","loss","lost","love","luck","lull","lump","lung","lure","lurk","lust",
  "mace","made","mail","main","make","male","mall","malt","mane","many","mare","mark","mask","mass","mast","mate","maze","mead","meal","mean","meat","meet","melt","memo","menu","mere","mesh","mild","mile","milk","mill","mime","mind","mine","mint","mire","miss","mist","moan","moat","mode","mole","mood","moon","moor","more","most","moth","move","much","mule","muse","musk","must","myth",
  "nail","name","nape","navy","need","next","nice","nine","node","nook","noon","norm","nose","note","nude","null",
  "oath","obey","oboe","ogre","once","only","opal","open","oral","over",
  "pace","page","paid","pail","pain","pair","pale","palm","pane","park","part","pass","past","path","pave","peak","peal","pear","peel","peer","pelt","perk","pest","pick","pier","pile","pill","pink","pipe","plan","play","plea","plod","plot","plow","ploy","plug","plus","poem","poet","pole","poll","pond","pore","pork","port","pose","post","pout","prey","prim","prod","prop","prow","puck","pull","pump","pure","push",
  "quit","quiz","quod",
  "race","rack","rain","rake","ramp","rang","rank","rant","rash","rate","rave","read","real","reap","rear","reel","rely","rend","rent","rest","rice","rich","ride","rife","rile","rind","ring","riot","rise","risk","road","roam","roar","robe","rock","role","romp","roof","room","rope","rose","rout","rove","rude","rule","rump","rune","rush","rust",
  "safe","sage","sake","sale","salt","same","sand","sane","sang","sank","sash","save","scan","scar","scam","seam","sear","seed","seek","seem","seep","self","sell","sent","shed","ship","shoe","shop","shot","show","sick","side","sift","sigh","silk","sill","silt","sing","sink","site","size","skid","skin","skip","slab","slag","slam","slap","slat","slay","slim","slip","slob","slop","slow","slug","slum","slur","smug","snag","snap","snip","snob","snow","snub","soak","soap","soar","sock","soft","soil","sole","sold","some","song","soon","sore","sort","soul","soup","sour","span","spar","spin","spit","spot","spun","stab","stag","star","stay","stem","step","stew","stir","stop","stub","stun","such","sulk","sung","sunk","sure","surf","swam","swan","swap","swat","swim","swum","sync",
  "tack","tail","tale","talk","tall","tame","tang","tank","tape","task","taut","teal","team","tear","teed","tell","tend","tent","term","test","text","than","that","thee","them","then","they","thin","this","thou","thus","tick","tide","tier","till","tilt","time","tint","tire","toad","toil","told","toll","tome","tone","took","torn","toss","tour","town","tram","trap","tree","trim","trip","trod","troy","true","tube","tuck","tuft","tune","turf","turn","tusk","tutu","twin","type",
  "ugly","undo","unit","upon","urge",
  "vain","vale","vast","veil","vein","verb","very","vest","view","vine","void","volt","vote",
  "wade","wage","wail","wait","wake","walk","wall","wane","ward","warm","warn","warp","wart","wary","wave","weak","weal","wean","wear","weed","week","weld","well","welt","went","were","west","what","when","whim","whip","whom","wick","wide","wife","wild","will","wimp","wind","wine","wing","wink","wire","wise","wish","with","woke","wolf","womb","wood","wool","word","wore","work","worm","worn","wove","writ",
  "yawn","year","yell","yoga","yore","your","yule",
  "zeal","zero","zinc","zone","zoom",
  // 5-letter words
  "about","above","abuse","acute","admit","adopt","adult","after","again","agent","agree","ahead","alarm","album","alert","alike","alien","align","alike","alive","alley","allow","alloy","alone","along","aloud","altar","alter","ample","angel","anger","angle","angry","anime","annex","antic","anvil","apart","apple","apply","apron","arbor","ardor","arena","argue","arise","array","aside","asset","aster","astir","atone","attic","audio","audit","avail","avant","avert","avoid","awake","award","aware","awful",
  "badge","bagle","beach","began","begin","being","below","bench","berry","birth","bison","biter","black","blade","blame","bland","blank","blare","blaze","bleak","bleed","blend","bless","blight","blind","blink","bliss","block","blood","bloom","blown","board","bonus","boost","booth","brace","braid","brain","brand","brass","brave","bread","break","breed","brick","bride","brief","brine","brisk","brood","brook","broth","brown","brush","buddy","build","built","bulky","bully","bunny","burst","buyer",
  "cabin","candy","camel","cargo","carry","carve","catch","cause","cedar","chain","chair","chalk","champ","chaos","charm","chart","chase","cheap","check","cheek","chess","chest","chief","child","chord","civic","civil","claim","class","clean","clear","clerk","click","cliff","climb","cling","cloak","clone","close","cloth","cloud","coach","coast","color","comic","comma","count","court","cover","craft","crane","crash","crazy","cream","creek","crest","crime","crisp","crook","cross","crown","crude","crush","crust","crypt","curve","cycle",
  "daily","dance","dares","dated","davit","daunt","dealt","death","debut","decoy","delay","delta","demon","depot","depth","derby","devil","diary","digit","dingy","disco","ditch","ditty","dizzy","dodge","doing","donee","doubt","dough","dozen","draft","drama","drape","drawl","dread","dress","drift","drink","drive","drone","drool","drown","dully","dummy","dunce","dusky","dusty","dwarf","dwell","dying",
  "eagle","early","earth","easel","eight","eject","elbow","elder","elect","elegy","elite","elixir","empty","enact","ended","endow","enemy","enjoy","enter","entry","equal","error","event","every","exact","exalt","excel","exist","expel","extra",
  "fable","faced","facet","faith","falls","fancy","fatal","fault","feast","fence","feign","ferry","fetch","fever","fewer","fiber","field","fiend","fifth","fifty","fight","final","first","fixed","fizzy","flame","flank","flare","flash","flask","flawless","fleet","flesh","flint","flock","flood","floor","flour","flute","foamy","focus","folly","force","forge","forth","forty","forum","found","frame","frank","fraud","fresh","front","frost","frown","froze","frugal","fully","fungi","funny","furry","fuzzy",
  "gauge","giant","given","gland","glare","glass","glaze","gleam","glean","glide","glint","gloom","glory","gloss","glove","going","grace","grade","graft","grail","grain","grand","grant","grape","grasp","grass","grate","grave","great","greed","green","greet","grief","grind","groan","groin","gross","group","grove","grown","gruel","gruff","guard","guide","guild","guile","guise","gusto","gypsy",
  "habit","handy","happy","harsh","haste","haven","hazel","heavy","hedge","heist","hence","herbs","heron","hippo","hobby","holly","honor","horse","hotel","house","human","humid","humor","hurry","hyena",
  "ideal","image","imply","index","inner","input","inter","irony","issue",
  "ivory","jazzy","jerky","jewel","joust","judge","juice","juicy","jumbo","junto","juror",
  "kayak","kebab","kitty","knife","knock","knoll","known",
  "label","large","laser","later","latch","latte","laugh","layer","learn","lease","least","leave","ledge","legal","lemon","level","light","lilac","limit","linen","liter","liver","llama","local","lodge","logic","loose","lower","loyal","lucky","lunar","lunch","lusty","lyric",
  "magic","maize","major","maker","mambo","mania","manor","maple","march","marsh","match","mayor","media","mercy","merit","metal","melee","micro","might","minor","minus","mirth","miser","model","moose","mourn","mouse","mouth","murky","music","myrrh","nasty","naval","never","night","ninja","noble","noise","north","noted","novel","nurse","nymph",
  "occur","ocean","offer","often","olive","onion","onset","opera","orbit","order","other","outer","ovary","ovoid","owner",
  "paint","panic","panel","paper","parol","patch","pause","peace","pearl","penal","penny","peppy","perky","petty","phase","phone","photo","piano","piece","pilot","pinch","pirate","pitch","pixel","pizza","place","plain","plane","plant","plate","plaza","plumb","plume","plump","plunge","point","polar","poker","poppy","porch","posed","power","press","price","prick","pride","prime","prior","prize","proof","prose","proud","prove","prune","psalm","pubic","pulse","purse","puree","pushy","pygmy","pylon",
  "queen","query","queue","quick","quiet","quirk","quota","quote",
  "radar","radio","raise","rally","ranch","range","rapid","raspy","raven","reach","realm","rebel","refer","reign","relay","remix","renew","repay","repel","reply","rerun","reset","revel","rigid","risky","rival","river","robin","rocky","rouge","rough","round","route","royal","rugby","ruler",
  "sadly","saint","salad","sauce","scale","scare","scene","scold","scope","score","scorn","scout","screw","sedan","sense","serve","seven","shade","shaft","shake","shall","shame","shape","share","shark","sharp","sheer","shelf","shell","shift","shirt","shock","shore","short","shout","shred","shrug","siege","sight","skill","skull","slate","slave","sleep","sleet","slice","slide","slope","smile","smite","smoke","snare","sneak","snore","solar","solid","solve","sorry","south","space","spare","spark","spawn","speak","spear","speed","spell","spend","spice","spine","spite","spoof","spook","spoon","sport","spray","squad","stack","staff","stage","stain","stale","stand","stark","start","stash","state","steam","steel","steer","stern","stick","stiff","stock","stone","stood","stool","store","storm","story","strap","straw","stray","strip","strop","stuck","stuff","stump","style","super","swamp","swear","sweet","swept","swift","swing","swipe","sword","synth",
  "tabby","table","talon","taste","taunt","teach","tease","tempo","tense","third","thorn","those","three","threw","throw","thump","tidal","tiger","tight","tiled","tired","title","toast","today","token","tooth","total","touch","tough","towel","toxic","trace","track","trade","trail","train","trait","tramp","trash","treat","trick","tried","troop","trout","truce","truck","truly","trump","trunk","trust","truth","tiger","tumor","tutor","twice","twirl","twist","tying",
  "umbra","unify","union","unite","unity","until","upper","upset","usher","usual","utter",
  "vague","valid","value","valve","vapor","vault","video","vigil","visor","vista","vital","vivid","vocal","voice","vomit","voter","vowel","vouch",
  "wager","water","waved","weary","wedge","weigh","weird","whale","wheat","wheel","where","which","while","white","whole","whose","wider","witch","woman","women","world","worry","worse","worst","worth","wreck","wrist","wrong",
  "yacht","yearn","yield","young","youth","yummy",
  "zebra","zilch","zippy","zonal"
];

const SCRABBLE_VALS={a:1,e:1,i:1,o:1,u:1,l:1,n:1,s:1,t:1,r:1,d:2,g:2,b:3,c:3,m:3,p:3,f:4,h:4,v:4,w:4,y:4,k:5,j:8,x:8,q:10,z:10};
function scrabbleScore(w){return w.split('').reduce((s,c)=>s+(SCRABBLE_VALS[c.toLowerCase()]||0),0);}

/* ─── NAV ─── */
function showHome(){
  document.getElementById('home-view').style.display='';
  document.getElementById('tools-area').style.display='none';
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('on'));
}
function showTool(id){
  document.getElementById('home-view').style.display='none';
  document.getElementById('tools-area').style.display='';
  document.querySelectorAll('.tool-pane').forEach(p=>p.classList.remove('on'));
  document.getElementById('pane-'+id).classList.add('on');
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('on'));
  document.querySelectorAll('.tool-pill').forEach(b=>b.classList.remove('on'));
  window.scrollTo({top:0,behavior:'smooth'});
  if(id==='crossword'&&!cwBuilt) newCrossword();
  if(id==='wordsearch') newWordSearch();
  if(id==='wordle') initWordleGuesses();
}

/* ─── UNSCRAMBLE ─── */
function getSubsets(letters){
  const results=new Set();
  const n=letters.length;
  for(let mask=1;mask<(1<<n);mask++){
    let sub='';
    for(let i=0;i<n;i++) if(mask&(1<<i)) sub+=letters[i];
    // handle wildcards
    const wilds=(sub.match(/\?/g)||[]).length;
    const fixed=sub.replace(/\?/g,'').split('').sort().join('');
    results.add(fixed+'|'+wilds);
  }
  return results;
}
function canMakeWord(word,letters){
  const lArr=[...letters.toLowerCase()];
  let blanks=lArr.filter(c=>c==='?').length;
  const avail={};
  lArr.filter(c=>c!=='?').forEach(c=>avail[c]=(avail[c]||0)+1);
  for(let c of word){
    if(avail[c]>0) avail[c]--;
    else if(blanks>0) blanks--;
    else return false;
  }
  return true;
}
let unscrambleLenFilter='all';
function doUnscramble(){
  const raw=document.getElementById('unscramble-input').value.trim().toLowerCase();
  if(!raw){return;}
  const found=DICT.filter(w=>w.length>=2&&canMakeWord(w,raw));
  found.sort((a,b)=>b.length-a.length||scrabbleScore(b)-scrabbleScore(a));
  renderUnscrambleResults(found,raw);
}
function renderUnscrambleResults(found,raw){
  const container=document.getElementById('unscramble-results');
  const filters=document.getElementById('unscramble-filters');
  if(!found.length){container.innerHTML='<div class="empty-state"><span class="empty-icon">∅</span>No words found. Try different letters.</div>';filters.innerHTML='';return;}
  const byLen={};
  found.forEach(w=>{const l=w.length;(byLen[l]||(byLen[l]=[])).push(w);});
  const lens=Object.keys(byLen).map(Number).sort((a,b)=>b-a);
  filters.innerHTML='<button class="filter-btn on" onclick="setUnscrambleLen(\'all\',this)">All ('+found.length+')</button>'+lens.map(l=>`<button class="filter-btn" onclick="setUnscrambleLen(${l},this)">${l} letters (${byLen[l].length})</button>`).join('');
  window._unscrambleByLen=byLen;
  window._unscrambleLens=lens;
  window._unscrambleAll=found;
  renderUnscrambleGroups('all');
}
function setUnscrambleLen(len,btn){
  document.querySelectorAll('#unscramble-filters .filter-btn').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  renderUnscrambleGroups(len);
}
function renderUnscrambleGroups(lenFilter){
  const container=document.getElementById('unscramble-results');
  const byLen=window._unscrambleByLen||{};
  const lens=window._unscrambleLens||[];
  const all=window._unscrambleAll||[];
  const toShow=lenFilter==='all'?lens:lens.filter(l=>l==lenFilter);
  let html='<div class="results-header"><div class="results-label">Words found</div><div class="results-count">'+(lenFilter==='all'?all.length:byLen[lenFilter]?.length||0)+' words</div></div><div class="word-groups">';
  toShow.forEach(l=>{
    const score=byLen[l].reduce((s,w)=>s+scrabbleScore(w),0)/byLen[l].length;
    html+=`<div class="word-group"><div class="wg-label">${l} letters — avg ${score.toFixed(0)} pts</div><div class="word-chips">${byLen[l].map(w=>`<span class="word-chip" title="Scrabble: ${scrabbleScore(w)} pts">${w.toUpperCase()}</span>`).join('')}</div></div>`;
  });
  html+='</div>';
  container.innerHTML=html;
}
function quickUnscramble(w){document.getElementById('unscramble-input').value=w;doUnscramble();}

/* ─── ANAGRAM ─── */
function doAnagram(){
  const raw=document.getElementById('anagram-input').value.trim().toLowerCase();
  if(!raw) return;
  const sorted=raw.split('').sort().join('');
  const found=DICT.filter(w=>w.length===raw.length&&w.split('').sort().join('')===sorted&&w!==raw);
  const container=document.getElementById('anagram-results');
  if(!found.length){container.innerHTML=`<div class="empty-state"><span class="empty-icon">∅</span>No anagrams found for <strong>${raw.toUpperCase()}</strong>. Try a different word.</div>`;return;}
  let html=`<div class="results-header"><div class="results-label">Anagrams of ${raw.toUpperCase()}</div><div class="results-count">${found.length} found</div></div>`;
  found.forEach(w=>{
    const diff=[];
    const orig=raw.split('');
    w.split('').forEach((c,i)=>{if(c!==orig[i])diff.push(i);});
    html+=`<div class="anagram-pair"><span class="anagram-word">${raw.toUpperCase()}</span><span class="anagram-arrow">→</span><span class="anagram-word" style="color:var(--accent)">${w.toUpperCase()}</span><span class="anagram-score">${scrabbleScore(w)} pts</span></div>`;
  });
  container.innerHTML=html;
}
function quickAnagram(w){document.getElementById('anagram-input').value=w;doAnagram();}

/* ─── RHYME ─── */
const RHYME_DB={
  love:['above','dove','glove','shove','of','groove','move','prove','remove','approve','improve','behove',
        'some','come','from','drum','hum','sum','run','done','sun','gun','fun','one','won','none','ton','dun'],
  time:['rhyme','climb','lime','mime','prime','crime','grime','chime','dime','sublime','paradigm',
        'mine','fine','line','vine','pine','shine','divine','design','align','sign','kind','mind','find','blind'],
  night:['light','right','might','fight','sight','flight','bright','slight','tight','knight','delight','ignite',
         'write','kite','white','bite','despite','excite','invite','unite','quite','bite','site','cite'],
  heart:['start','part','smart','chart','art','apart','cart','dart','impart','restart','depart',
         'tart','spark','dark','mark','park','bark','stark','lark','yard','hard','card','guard','regard'],
  fire:['desire','inspire','entire','retire','require','admire','empire','acquire','expire','sire','wire','hire',
        'higher','flier','dryer','buyer','prior','choir','liar','briar','friar'],
  dream:['team','stream','beam','cream','scream','theme','seem','extreme','supreme','esteem','gleam','seam',
         'green','seen','been','mean','clean','lean','scene','serene','machine','routine','cuisine'],
  life:['strife','wife','knife','rife','afterlife','wildlife',
        'time','rhyme','prime','climb','chime','crime','sublime','overcome','become','some','come','home'],
  rain:['pain','main','gain','train','plain','drain','explain','remain','contain','sustain','refrain','chain',
        'change','range','strange','rearrange','exchange','strange','arrange','engage'],
  soul:['whole','hole','goal','roll','role','scroll','control','patrol','console','enroll','stroll','toll',
        'cold','old','bold','told','gold','hold','fold','mold','scold'],
  world:['hurled','curled','swirled','twirled','unfurled','pearled',
         'girl','curl','whirl','pearl','earl','snarl','hurl','swirl'],
};
function getRhymes(word){
  const w=word.toLowerCase();
  if(RHYME_DB[w]) return RHYME_DB[w];
  // Generic fallback by ending
  const ending=w.slice(-3);
  const ending2=w.slice(-2);
  const perfect=[],near=[],slant=[];
  DICT.forEach(d=>{
    if(d===w||d.length<2) return;
    if(d.endsWith(ending)&&d!==w) perfect.push(d);
    else if(d.endsWith(ending2)) near.push(d);
    else if(d[d.length-1]===w[w.length-1]) slant.push(d);
  });
  return{perfect:perfect.slice(0,20),near:near.slice(0,20),slant:slant.slice(0,20)};
}
function doRhyme(){
  const w=document.getElementById('rhyme-input').value.trim().toLowerCase();
  if(!w) return;
  const res=getRhymes(w);
  const container=document.getElementById('rhyme-results');
  let perfect,near,slant;
  if(Array.isArray(res)){
    const all=res;
    perfect=all.slice(0,10);
    near=all.slice(10,20);
    slant=all.slice(20,30);
  } else {
    perfect=res.perfect||[];near=res.near||[];slant=res.slant||[];
  }
  if(!perfect.length&&!near.length&&!slant.length){
    container.innerHTML=`<div class="empty-state"><span class="empty-icon">♪</span>No rhymes found for <strong>${w}</strong>.</div>`;return;
  }
  const section=(words,cls,label)=>words.length?`<div class="rhyme-section ${cls}"><div class="rhyme-section-title">${label} (${words.length})</div><div class="word-chips">${words.map(ww=>`<span class="word-chip">${ww}</span>`).join('')}</div></div>`:'';
  container.innerHTML=`<div class="results-header"><div class="results-label">Rhymes for <em style="color:var(--accent)">${w}</em></div><div class="results-count">${perfect.length+near.length+slant.length} total</div></div>`+
    section(perfect,'perfect','Perfect rhymes')+section(near,'near','Near rhymes')+section(slant,'slant','Slant rhymes');
}
function quickRhyme(w){document.getElementById('rhyme-input').value=w;doRhyme();}

/* ─── WORDLE HELPER ─── */
const WORDLE_WORDS=DICT.filter(w=>w.length===5);
let wordleGuesses=[];
function initWordleGuesses(){
  wordleGuesses=[];
  renderWordleGuesses();
  document.getElementById('wordle-results').innerHTML='<div class="empty-state"><span class="empty-icon">W</span>Add your Wordle guesses above, then click Find</div>';
}
function renderWordleGuesses(){
  const container=document.getElementById('wordle-guesses');
  if(!wordleGuesses.length){container.innerHTML='<div style="font-size:12px;color:var(--ink3);padding:.5rem 0">No guesses added yet.</div>';return;}
  container.innerHTML=wordleGuesses.map((g,gi)=>`
    <div style="display:flex;gap:6px;align-items:center">
      <div style="display:flex;gap:4px">${g.letters.map((l,li)=>`
        <div class="wordle-cell ${l.state}" onclick="cycleWordleTile(${gi},${li})" title="Click to change colour">${l.char}</div>
      `).join('')}</div>
      <button onclick="removeWordleGuess(${gi})" style="font-size:11px;color:var(--ink3);background:none;border:none;cursor:pointer;padding:4px;font-family:'IBM Plex Mono',monospace">✕</button>
    </div>`).join('');
}
function addWordleGuess(){
  const val=document.getElementById('wordle-guess-input').value.trim().toUpperCase();
  if(val.length!==5){alert('Please enter exactly 5 letters.');return;}
  wordleGuesses.push({letters:val.split('').map(c=>({char:c,state:'grey'}))});
  document.getElementById('wordle-guess-input').value='';
  renderWordleGuesses();
}
function removeWordleGuess(gi){wordleGuesses.splice(gi,1);renderWordleGuesses();}
function cycleWordleTile(gi,li){
  const states=['grey','yellow','green'];
  const cur=wordleGuesses[gi].letters[li].state;
  wordleGuesses[gi].letters[li].state=states[(states.indexOf(cur)+1)%3];
  renderWordleGuesses();
}
function clearWordleGuesses(){wordleGuesses=[];renderWordleGuesses();document.getElementById('wordle-results').innerHTML='<div class="empty-state"><span class="empty-icon">W</span>Add your Wordle guesses above, then click Find</div>';}
function solveWordle(){
  const excluded=(document.getElementById('wordle-excluded').value||'').toLowerCase().replace(/[^a-z]/g,'');
  let candidates=[...WORDLE_WORDS];
  wordleGuesses.forEach(g=>{
    g.letters.forEach((l,i)=>{
      const c=l.char.toLowerCase();
      if(l.state==='green') candidates=candidates.filter(w=>w[i]===c);
      else if(l.state==='yellow') candidates=candidates.filter(w=>w.includes(c)&&w[i]!==c);
      else candidates=candidates.filter(w=>!w.includes(c));
    });
  });
  if(excluded) candidates=candidates.filter(w=>![...excluded].some(c=>w.includes(c)));
  const container=document.getElementById('wordle-results');
  if(!candidates.length){container.innerHTML='<div class="empty-state"><span class="empty-icon">∅</span>No matching words found. Check your colours.</div>';return;}
  container.innerHTML=`<div class="results-header"><div class="results-label">Possible answers</div><div class="results-count">${candidates.length} words</div></div><div class="word-chips" style="margin-top:.5rem">${candidates.slice(0,80).map(w=>`<span class="word-chip">${w.toUpperCase()}</span>`).join('')}</div>${candidates.length>80?`<div style="font-size:12px;color:var(--ink3);margin-top:.75rem">Showing 80 of ${candidates.length}. Add more clues to narrow down.</div>`:''}`;
}

/* ─── CROSSWORD ─── */
const CW_PUZZLES = [
  {
    size:9,
    grid:[
      "STONE###",
      "P##I###",
      "ANGEL##",
      "R#N####",
      "K####C#",
      "####LIME",
      "##RAVEN#",
      "#####E##",
      "######D#"
    ],
    words:[
      {word:"STONE",  row:0,col:0,dir:"across",clue:"Hard mineral material, or to throw rocks"},
      {word:"ANGEL",  row:2,col:0,dir:"across",clue:"Heavenly being with wings"},
      {word:"LIME",   row:5,col:4,dir:"across",clue:"Small green citrus fruit"},
      {word:"RAVEN",  row:6,col:2,dir:"across",clue:"Large black bird; Edgar Allan Poe poem"},
      {word:"SPARK",  row:0,col:0,dir:"down",  clue:"Small flash of fire; to ignite"},
      {word:"ANGEL",  row:2,col:0,dir:"down",  clue:"Alternate path: good, kind person"},
      {word:"INNER",  row:0,col:3,dir:"down",  clue:"Interior; inside"},
      {word:"CLUED",  row:4,col:5,dir:"down",  clue:"Past tense of giving a hint"},
    ]
  },
  {
    size:9,
    grid:[
      "BRAVE###",
      "R##O###",
      "IGLOO##",
      "N#T####",
      "K####E#",
      "####NEST",
      "##DELTA#",
      "#####A##",
      "######R#"
    ],
    words:[
      {word:"BRAVE",  row:0,col:0,dir:"across",clue:"Courageous; bold in the face of danger"},
      {word:"IGLOO",  row:2,col:0,dir:"across",clue:"Dome-shaped shelter made of snow"},
      {word:"NEST",   row:5,col:4,dir:"across",clue:"Bird's home built from twigs"},
      {word:"DELTA",  row:6,col:2,dir:"across",clue:"Greek letter Δ; river mouth"},
      {word:"BRINK",  row:0,col:0,dir:"down",  clue:"Edge; verge of something"},
      {word:"ROTE",   row:0,col:1,dir:"down",  clue:"Mechanical learning by repetition"},
      {word:"NOVEL",  row:0,col:3,dir:"down",  clue:"A long fiction book; new and original"},
      {word:"EATER",  row:4,col:5,dir:"down",  clue:"One who consumes food"},
    ]
  },
  {
    size:9,
    grid:[
      "CRANE###",
      "H##O###",
      "EBONY##",
      "S#T####",
      "T####R#",
      "####DARK",
      "##FLUTE#",
      "#####A##",
      "######P#"
    ],
    words:[
      {word:"CRANE",  row:0,col:0,dir:"across",clue:"Long-legged wading bird; construction machine"},
      {word:"EBONY",  row:2,col:0,dir:"across",clue:"Deep black wood; colour of night"},
      {word:"DARK",   row:5,col:4,dir:"across",clue:"Absence of light"},
      {word:"FLUTE",  row:6,col:2,dir:"across",clue:"Woodwind instrument played sideways"},
      {word:"CHEST",  row:0,col:0,dir:"down",  clue:"Upper body; treasure box"},
      {word:"ROBOT",  row:0,col:2,dir:"down",  clue:"Mechanical humanoid automaton"},
      {word:"NOTCH",  row:0,col:3,dir:"down",  clue:"A nick or indentation; a grade"},
      {word:"ORTAP",  row:4,col:5,dir:"down",  clue:"Filler word"},
    ]
  }
];

let cwPuzzle=null, cwBuilt=false, cwCells=[], cwActiveCell=null, cwActiveDir='across', cwTab='across';
function newCrossword(){
  cwPuzzle=CW_PUZZLES[Math.floor(Math.random()*CW_PUZZLES.length)];
  buildCrossword();
}
function buildCrossword(){
  cwBuilt=true;
  document.getElementById('cw-complete-msg').style.display='none';
  const p=cwPuzzle;
  // Build a clean grid
  const SIZE=p.size;
  // Create cell data
  cwCells=[];
  // First pass: lay out black/white cells from words
  const grid=[];
  for(let r=0;r<SIZE;r++){grid.push(new Array(SIZE).fill('#'));}
  p.words.forEach(w=>{
    for(let i=0;i<w.word.length;i++){
      const r=w.dir==='across'?w.row:w.row+i;
      const c=w.dir==='across'?w.col+i:w.col;
      if(r<SIZE&&c<SIZE) grid[r][c]=' ';
    }
  });
  // Assign clue numbers
  const numbers={};
  let num=1;
  for(let r=0;r<SIZE;r++){
    for(let c=0;c<SIZE;c++){
      if(grid[r][c]==='#') continue;
      const startsAcross=(c===0||grid[r][c-1]==='#')&&(c+1<SIZE&&grid[r][c+1]!==' '?false:c+1<SIZE&&grid[r][c+1]===' ');
      const startsDown=(r===0||grid[r-1][c]==='#')&&(r+1<SIZE&&grid[r+1][c]===' ');
      if(startsAcross||startsDown){numbers[r+','+c]=num++;} 
    }
  }
  // Re-number based on words
  let wNum=1;
  const wordNumbers={};
  p.words.forEach((w,wi)=>{
    const key=w.row+','+w.col;
    if(!wordNumbers[key]) wordNumbers[key]=wNum++;
    w.num=wordNumbers[key];
  });
  // Build DOM
  const gEl=document.getElementById('cw-grid');
  gEl.style.gridTemplateColumns=`repeat(${SIZE},36px)`;
  gEl.innerHTML='';
  const cellMap={};
  for(let r=0;r<SIZE;r++){
    for(let c=0;c<SIZE;c++){
      const div=document.createElement('div');
      div.className='cw-cell'+(grid[r][c]==='#'?' black':'');
      div.dataset.r=r;div.dataset.c=c;
      if(grid[r][c]!==' '&&grid[r][c]!='#'){div.textContent='';}
      const numKey=r+','+c;
      if(wordNumbers[numKey]&&grid[r][c]!==' '===false){
        const sp=document.createElement('span');sp.className='cw-cell-num';sp.textContent=wordNumbers[numKey];div.appendChild(sp);
      }
      if(grid[r][c]!==' ') {}
      if(grid[r][c]===' '){
        div.addEventListener('click',()=>cwClickCell(r,c));
        div.setAttribute('tabindex','0');
      }
      cellMap[r+','+c]=div;
      gEl.appendChild(div);
    }
  }
  // Add word number labels
  p.words.forEach(w=>{
    const key=w.row+','+w.col;
    const cell=cellMap[key];
    if(cell&&!cell.querySelector('.cw-cell-num')){
      const sp=document.createElement('span');sp.className='cw-cell-num';sp.textContent=w.num;cell.appendChild(sp);
    }
  });
  window._cwGrid=grid;window._cwCellMap=cellMap;
  // Init user answers
  window._cwAnswers={};
  for(let r=0;r<SIZE;r++) for(let c=0;c<SIZE;c++) if(grid[r][c]===' ') window._cwAnswers[r+','+c]='';
  renderCWClues();
  document.getElementById('cw-active-clue').textContent='Select a cell to begin';
}
function renderCWClues(){
  const p=cwPuzzle;
  const tab=cwTab;
  const clues=document.getElementById('cw-clues');
  const filtered=p.words.filter(w=>w.dir===tab).sort((a,b)=>a.num-b.num);
  clues.innerHTML=filtered.map(w=>{
    const solved=isCWWordSolved(w);
    return`<div class="clue-item${solved?' solved':''}" id="clue-${w.dir}-${w.num}" onclick="cwClickClue('${w.dir}',${w.num})"><span class="clue-num">${w.num}${w.dir==='across'?'A':'D'}</span><span class="clue-text${solved?' solved':''}">${w.clue}</span></div>`;
  }).join('');
}
function isCWWordSolved(w){
  const ans=window._cwAnswers||{};
  for(let i=0;i<w.word.length;i++){
    const r=w.dir==='across'?w.row:w.row+i;
    const c=w.dir==='across'?w.col+i:w.col;
    if((ans[r+','+c]||'').toUpperCase()!==w.word[i]) return false;
  }
  return true;
}
function setCWTab(t){
  cwTab=t;
  document.getElementById('cwt-across').classList.toggle('on',t==='across');
  document.getElementById('cwt-down').classList.toggle('on',t==='down');
  renderCWClues();
}
function cwClickCell(r,c){
  cwActiveCell={r,c};
  highlightCWWord();
  focusCWInput(r,c);
}
function cwClickClue(dir,num){
  cwActiveDir=dir;
  const w=cwPuzzle.words.find(x=>x.dir===dir&&x.num===num);
  if(w){cwActiveCell={r:w.row,c:w.col};highlightCWWord();focusCWInput(w.row,w.col);}
}
function highlightCWWord(){
  const m=window._cwCellMap||{};
  const ans=window._cwAnswers||{};
  // Clear
  Object.values(m).forEach(el=>{el.classList.remove('active','word-active','correct');});
  if(!cwActiveCell) return;
  // Find active word
  const w=findCWWord(cwActiveCell.r,cwActiveCell.c,cwActiveDir);
  if(w){
    for(let i=0;i<w.word.length;i++){
      const r=w.dir==='across'?w.row:w.row+i;
      const c=w.dir==='across'?w.col+i:w.col;
      const el=m[r+','+c];
      if(el) el.classList.add('word-active');
    }
    document.getElementById('cw-active-clue').textContent=w.num+(w.dir==='across'?'A':'D')+': '+w.clue;
  }
  const active=m[cwActiveCell.r+','+cwActiveCell.c];
  if(active){active.classList.remove('word-active');active.classList.add('active');}
  // Show correct cells
  Object.keys(ans).forEach(k=>{
    const [r,c]=k.split(',').map(Number);
    const cell=m[k];
    if(!cell) return;
    const correctLetter=getCWCorrectLetter(r,c);
    if(correctLetter&&(ans[k]||'').toUpperCase()===correctLetter) cell.classList.add('correct');
  });
}
function findCWWord(r,c,dir){
  return cwPuzzle.words.find(w=>{
    if(w.dir!==dir) return false;
    for(let i=0;i<w.word.length;i++){
      const wr=w.dir==='across'?w.row:w.row+i;
      const wc=w.dir==='across'?w.col+i:w.col;
      if(wr===r&&wc===c) return true;
    }
    return false;
  });
}
function getCWCorrectLetter(r,c){
  let letter=null;
  cwPuzzle.words.forEach(w=>{
    for(let i=0;i<w.word.length;i++){
      const wr=w.dir==='across'?w.row:w.row+i;
      const wc=w.dir==='across'?w.col+i:w.col;
      if(wr===r&&wc===c) letter=w.word[i];
    }
  });
  return letter;
}
function focusCWInput(r,c){
  // Use keyboard events on document
  document.getElementById('cw-grid').focus();
  cwActiveCell={r,c};
}
document.addEventListener('keydown',function(e){
  const pane=document.getElementById('pane-crossword');
  if(!pane.classList.contains('on')||!cwActiveCell) return;
  if(e.key==='Tab'){e.preventDefault();cwMoveNext();return;}
  if(e.key==='ArrowRight'){cwActiveDir='across';cwMoveInDir(0,1);return;}
  if(e.key==='ArrowLeft'){cwActiveDir='across';cwMoveInDir(0,-1);return;}
  if(e.key==='ArrowDown'){cwActiveDir='down';cwMoveInDir(1,0);return;}
  if(e.key==='ArrowUp'){cwActiveDir='down';cwMoveInDir(-1,0);return;}
  if(e.key==='Backspace'){cwBackspace();return;}
  if(/^[a-zA-Z]$/.test(e.key)){cwTypeKey(e.key.toUpperCase());}
});
function cwTypeKey(ch){
  if(!cwActiveCell) return;
  const k=cwActiveCell.r+','+cwActiveCell.c;
  window._cwAnswers[k]=ch;
  const el=window._cwCellMap[k];
  if(el){
    // Remove existing text node
    Array.from(el.childNodes).forEach(n=>{if(n.nodeType===3) el.removeChild(n);});
    el.appendChild(document.createTextNode(ch));
  }
  cwMoveForward();
  highlightCWWord();
  checkCWComplete();
}
function cwBackspace(){
  if(!cwActiveCell) return;
  const k=cwActiveCell.r+','+cwActiveCell.c;
  if(window._cwAnswers[k]){
    window._cwAnswers[k]='';
    const el=window._cwCellMap[k];
    if(el) Array.from(el.childNodes).forEach(n=>{if(n.nodeType===3) el.removeChild(n);});
  } else {
    cwMoveBack();
    const k2=cwActiveCell.r+','+cwActiveCell.c;
    window._cwAnswers[k2]='';
    const el=window._cwCellMap[k2];
    if(el) Array.from(el.childNodes).forEach(n=>{if(n.nodeType===3) el.removeChild(n);});
  }
  highlightCWWord();
}
function cwMoveForward(){
  if(!cwActiveCell) return;
  const dr=cwActiveDir==='down'?1:0, dc=cwActiveDir==='across'?1:0;
  cwMoveInDir(dr,dc);
}
function cwMoveBack(){
  if(!cwActiveCell) return;
  const dr=cwActiveDir==='down'?-1:0, dc=cwActiveDir==='across'?-1:0;
  cwMoveInDir(dr,dc);
}
function cwMoveInDir(dr,dc){
  if(!cwActiveCell) return;
  const grid=window._cwGrid;
  const nr=cwActiveCell.r+dr, nc=cwActiveCell.c+dc;
  if(nr>=0&&nr<cwPuzzle.size&&nc>=0&&nc<cwPuzzle.size&&grid[nr][nc]===' '){
    cwActiveCell={r:nr,c:nc};highlightCWWord();
  }
}
function cwMoveNext(){
  // Jump to next unfilled cell in current word, then next word
  const w=cwActiveCell?findCWWord(cwActiveCell.r,cwActiveCell.c,cwActiveDir):null;
  if(!w) return;
  const ans=window._cwAnswers;
  for(let i=0;i<w.word.length;i++){
    const r=w.dir==='across'?w.row:w.row+i;
    const c=w.dir==='across'?w.col+i:w.col;
    if(!(ans[r+','+c]||'').trim()){cwActiveCell={r,c};highlightCWWord();return;}
  }
  // Move to next word
  const allWords=cwPuzzle.words.sort((a,b)=>a.num-b.num||a.dir.localeCompare(b.dir));
  const idx=allWords.indexOf(w);
  const next=allWords[(idx+1)%allWords.length];
  cwActiveDir=next.dir;cwActiveCell={r:next.row,c:next.col};highlightCWWord();
}
function checkCrossword(){
  const solved=cwPuzzle.words.filter(w=>isCWWordSolved(w));
  alert(`${solved.length} of ${cwPuzzle.words.length} words correct!`);
  highlightCWWord();
}
function revealCrossword(){
  const ans=window._cwAnswers;const m=window._cwCellMap;
  cwPuzzle.words.forEach(w=>{
    for(let i=0;i<w.word.length;i++){
      const r=w.dir==='across'?w.row:w.row+i;
      const c=w.dir==='across'?w.col+i:w.col;
      const k=r+','+c;ans[k]=w.word[i];
      const el=m[k];
      if(el){Array.from(el.childNodes).forEach(n=>{if(n.nodeType===3)el.removeChild(n);});el.appendChild(document.createTextNode(w.word[i]));}
    }
  });
  renderCWClues();
  highlightCWWord();
}
function checkCWComplete(){
  const allSolved=cwPuzzle.words.every(w=>isCWWordSolved(w));
  if(allSolved){document.getElementById('cw-complete-msg').style.display='';renderCWClues();}
}

/* ─── WORD SEARCH ─── */
const WS_THEMES={
  animals:{words:['LION','TIGER','ELEPHANT','PANDA','KOALA','EAGLE','SHARK','WHALE','COBRA','CRANE'],label:'Animals'},
  fruits:{words:['APPLE','MANGO','GRAPE','PEACH','MELON','LEMON','BERRY','PLUM','KIWI','GUAVA'],label:'Fruits'},
  countries:{words:['INDIA','CHINA','JAPAN','ITALY','SPAIN','EGYPT','GHANA','IRAN','IRAQ','PERU'],label:'Countries'},
  sports:{words:['TENNIS','CRICKET','SOCCER','BOXING','RUGBY','GOLF','POLO','YOGA','CHESS','DARTS'],label:'Sports'},
  colors:{words:['RED','BLUE','GREEN','GOLD','PINK','CYAN','AMBER','IVORY','LILAC','TEAL'],label:'Colors'}
};
let wsGrid=[],wsWords=[],wsFound=[],wsFirstClick=null,wsSize=12;
function newWordSearch(){
  const theme=document.getElementById('ws-theme').value;
  wsWords=[...WS_THEMES[theme].words];
  wsFound=[];wsFirstClick=null;
  buildWordSearch();
}
function buildWordSearch(){
  wsSize=12;
  wsGrid=[];
  for(let r=0;r<wsSize;r++) wsGrid.push(new Array(wsSize).fill(''));
  const placed=[];
  const directions=[[0,1],[1,0],[1,1],[0,-1],[-1,0],[-1,-1],[1,-1],[-1,1]];
  wsWords.forEach(word=>{
    let tries=0;
    while(tries<200){
      const dir=directions[Math.floor(Math.random()*8)];
      const r=Math.floor(Math.random()*wsSize);
      const c=Math.floor(Math.random()*wsSize);
      if(canPlaceWord(word,r,c,dir)){
        placeWord(word,r,c,dir);
        placed.push({word,r,c,dir,cells:getWordCells(word,r,c,dir)});
        break;
      }
      tries++;
    }
  });
  window._wsPlaced=placed;
  // Fill empty
  const alpha='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for(let r=0;r<wsSize;r++) for(let c=0;c<wsSize;c++) if(!wsGrid[r][c]) wsGrid[r][c]=alpha[Math.floor(Math.random()*26)];
  renderWSGrid();
  renderWSWords();
  document.getElementById('ws-score').textContent='0 of '+wsWords.length+' found';
  document.getElementById('ws-complete').style.display='none';
  document.getElementById('ws-status').textContent='Click start letter, then end letter of a word';
}
function canPlaceWord(word,r,c,dir){
  for(let i=0;i<word.length;i++){
    const nr=r+dir[0]*i,nc=c+dir[1]*i;
    if(nr<0||nr>=wsSize||nc<0||nc>=wsSize) return false;
    if(wsGrid[nr][nc]&&wsGrid[nr][nc]!==word[i]) return false;
  }
  return true;
}
function placeWord(word,r,c,dir){for(let i=0;i<word.length;i++) wsGrid[r+dir[0]*i][c+dir[1]*i]=word[i];}
function getWordCells(word,r,c,dir){const cells=[];for(let i=0;i<word.length;i++) cells.push({r:r+dir[0]*i,c:c+dir[1]*i});return cells;}
function renderWSGrid(){
  const gEl=document.getElementById('ws-grid');
  gEl.style.gridTemplateColumns=`repeat(${wsSize},28px)`;
  gEl.innerHTML='';
  for(let r=0;r<wsSize;r++){
    for(let c=0;c<wsSize;c++){
      const div=document.createElement('div');
      div.className='ws-cell';
      div.textContent=wsGrid[r][c];
      div.dataset.r=r;div.dataset.c=c;
      div.onclick=()=>wsClickCell(r,c,div);
      const key=r+','+c;
      if(window._wsFoundCells&&window._wsFoundCells.has(key)) div.classList.add('found');
      gEl.appendChild(div);
    }
  }
}
function renderWSWords(){
  const container=document.getElementById('ws-words');
  container.innerHTML=wsWords.map(w=>`<span class="ws-word${wsFound.includes(w)?' found':''}" id="wsw-${w}">${w}</span>`).join('');
}
function wsClickCell(r,c,el){
  if(!wsFirstClick){
    wsFirstClick={r,c};
    document.querySelectorAll('.ws-cell').forEach(e=>e.classList.remove('selecting'));
    el.classList.add('selecting');
    document.getElementById('ws-status').textContent='Now click the end letter of the word';
  } else {
    const r1=wsFirstClick.r,c1=wsFirstClick.c;
    wsFirstClick=null;
    document.querySelectorAll('.ws-cell').forEach(e=>e.classList.remove('selecting'));
    checkWSSelection(r1,c1,r,c);
  }
}
function checkWSSelection(r1,c1,r2,c2){
  if(!window._wsFoundCells) window._wsFoundCells=new Set();
  const placed=window._wsPlaced||[];
  let found=false;
  placed.forEach(p=>{
    if(wsFound.includes(p.word)) return;
    const first=p.cells[0],last=p.cells[p.cells.length-1];
    const match=(first.r===r1&&first.c===c1&&last.r===r2&&last.c===c2)||(first.r===r2&&first.c===c2&&last.r===r1&&last.c===c1);
    if(match){
      wsFound.push(p.word);
      p.cells.forEach(cell=>window._wsFoundCells.add(cell.r+','+cell.c));
      found=true;
    }
  });
  renderWSGrid();
  renderWSWords();
  document.getElementById('ws-score').textContent=wsFound.length+' of '+wsWords.length+' found';
  document.getElementById('ws-status').textContent=found?'Found! Click next word start':('Not a valid word. Try again.');
  if(wsFound.length===wsWords.length) document.getElementById('ws-complete').style.display='';
}

// Init
initWordleGuesses();


/* ════════════════════════════════
   DARK MODE (WordKit — toggle to light)
════════════════════════════════ */
function initWKTheme(){
  const s=localStorage.getItem('wk-theme');
  if(s==='light') document.documentElement.setAttribute('data-theme','light');
  updateWKThemeBtn();
}
function toggleWKTheme(){
  const isLight=document.documentElement.getAttribute('data-theme')==='light';
  document.documentElement.setAttribute('data-theme',isLight?'dark':'light');
  localStorage.setItem('wk-theme',isLight?'dark':'light');
  updateWKThemeBtn();
}
function updateWKThemeBtn(){
  const isLight=document.documentElement.getAttribute('data-theme')==='light';
  const btn=document.getElementById('wk-theme-btn');
  if(btn) btn.textContent=isLight?'◑ Dark':'◐ Light';
}

/* ════════════════════════════════
   STREAK
════════════════════════════════ */
function initWKStreak(){
  const s=JSON.parse(localStorage.getItem('wk-streak')||'{"count":0,"last":""}');
  const today=new Date().toDateString();
  if(s.last===today){showWKStreak(s.count);return;}
  const yesterday=new Date(Date.now()-86400000).toDateString();
  const nc=s.last===yesterday?s.count+1:1;
  localStorage.setItem('wk-streak',JSON.stringify({count:nc,last:today}));
  showWKStreak(nc);
}
function showWKStreak(n){
  const el=document.getElementById('wk-streak');
  if(el) el.textContent=n>1?'🔥 '+n+' day streak':'';
}

/* ════════════════════════════════
   RECENT TOOLS
════════════════════════════════ */
function addWKHistory(id,label){
  let h=JSON.parse(localStorage.getItem('wk-history')||'[]');
  h=h.filter(x=>x.id!==id);h.unshift({id,label});h=h.slice(0,4);
  localStorage.setItem('wk-history',JSON.stringify(h));renderWKHistory();
}
function renderWKHistory(){
  const h=JSON.parse(localStorage.getItem('wk-history')||'[]');
  const el=document.getElementById('wk-recent');
  if(!el||!h.length) return;
  el.innerHTML='<span style="font-family:\'IBM Plex Mono\',monospace;font-size:10px;color:var(--ink3)">Recent:</span>'+
    h.map(x=>`<button onclick="window.location.href='${x.id}-tool.html'" style="font-family:'IBM Plex Mono',monospace;font-size:10px;padding:3px 9px;border:1px solid var(--border);border-radius:10px;background:transparent;color:var(--ink3);cursor:pointer">${x.label}</button>`).join('');
}

/* ════════════════════════════════
   WORD OF THE DAY
════════════════════════════════ */
const WOTD_LIST=[
  {w:'EPHEMERAL',pos:'adjective',def:'Lasting for only a short time; transitory.',ex:'"The morning dew is ephemeral, gone before noon."'},
  {w:'SERENDIPITY',pos:'noun',def:'Finding something good by accident or happy coincidence.',ex:'"It was pure serendipity that we met at the airport."'},
  {w:'ELOQUENT',pos:'adjective',def:'Fluent and persuasive in speech or writing.',ex:'"Her eloquent speech moved the entire audience."'},
  {w:'MELANCHOLY',pos:'noun / adjective',def:'A feeling of pensive sadness, typically with no obvious cause.',ex:'"A deep melancholy settled over him as autumn arrived."'},
  {w:'RESILIENT',pos:'adjective',def:'Able to recover quickly from difficulties; tough.',ex:'"Children are remarkably resilient after hardship."'},
  {w:'LABYRINTH',pos:'noun',def:'A complicated irregular network of passages; a maze.',ex:'"The city\'s old town was a labyrinth of winding alleys."'},
  {w:'EUPHORIA',pos:'noun',def:'A feeling or state of intense excitement and happiness.',ex:'"Winning the championship filled the team with euphoria."'},
  {w:'ENIGMATIC',pos:'adjective',def:'Difficult to interpret or understand; mysterious.',ex:'"The Mona Lisa\'s enigmatic smile has puzzled viewers for centuries."'},
  {w:'SERENITY',pos:'noun',def:'The state of being calm, peaceful, and untroubled.',ex:'"She found serenity in early morning meditation."'},
  {w:'VIVACIOUS',pos:'adjective',def:'Attractively lively and animated.',ex:'"Her vivacious personality lit up every room she entered."'},
  {w:'PERENNIAL',pos:'adjective',def:'Lasting or existing for a long time; constantly recurring.',ex:'"Traffic is a perennial problem in the city."'},
  {w:'WANDERLUST',pos:'noun',def:'A strong desire or impulse to travel and explore the world.',ex:'"Wanderlust drove her to visit forty countries before thirty."'},
  {w:'SOLITUDE',pos:'noun',def:'The state of being alone, often enjoyably so.',ex:'"He retreated to his cabin for a week of solitude."'},
  {w:'AUDACIOUS',pos:'adjective',def:'Showing a willingness to take surprisingly bold risks.',ex:'"It was an audacious plan — but it worked."'},
  {w:'NOSTALGIA',pos:'noun',def:'A sentimental longing for the past.',ex:'"Old songs fill her with nostalgia for childhood summers."'},
];
function initWOTD(){
  const idx=Math.floor(Date.now()/86400000)%WOTD_LIST.length;
  const w=WOTD_LIST[idx];
  const el=document.getElementById('wotd-word');
  if(el){el.textContent=w.w;document.getElementById('wotd-pos').textContent=w.pos;document.getElementById('wotd-def').textContent=w.def;document.getElementById('wotd-ex').textContent='"'+w.ex.replace(/^"|"$/g,'')+'"';}
}

/* ════════════════════════════════
   DAILY WORD CHALLENGE
════════════════════════════════ */
const WK_CHALLENGES=[
  {q:'Which of these is an anagram of "LISTEN"?',opts:['SILENT','LISTEN','ENLIST','Both A and C'],ans:3,exp:'LISTEN rearranges to both SILENT and ENLIST (also TINSEL and INLETS)!'},
  {q:'How many 2-letter words are valid in Scrabble?',opts:['Around 50','Around 100','Around 30','Over 150'],ans:1,exp:'There are 107 valid 2-letter Scrabble words in the Official Tournament Word List (OWL).'},
  {q:'What is the highest-scoring 7-letter Scrabble play possible (using a blank)?',opts:['MUZJIKS','QUARTZY','ZYMURGY','SQUEEZE'],ans:0,exp:'MUZJIKS scores 128 points — it uses J, M, U, Z, I, K, S with high-value letters.'},
  {q:'What word contains all 5 vowels exactly once?',opts:['ALGORITHM','EQUATIONS','FACETIOUS','EDUCATION'],ans:2,exp:'FACETIOUS (F-A-C-E-T-I-O-U-S) contains all 5 vowels A, E, I, O, U in alphabetical order!'},
  {q:'The word "QUEUE" has how many silent letters?',opts:['1','2','3','4'],ans:3,exp:'Q-U-E-U-E: only the first Q and final E are pronounced. The middle UEU is silent — 4 silent letters!'},
  {q:'Which suffix creates the most new words from HAPPY?',opts:['-NESS','-LY','-IER','-IEST'],ans:0,exp:'HAPPINESS, HAPPILY, HAPPIER, HAPPIEST — -NESS creates a standalone noun with the most versatility.'},
  {q:'In Wordle, what is the statistically best first guess?',opts:['CRANE','AUDIO','RATES','SLATE'],ans:0,exp:'CRANE covers 5 common letters (C,R,A,N,E) with high frequency. SLATE and AUDIO are also excellent openers.'},
];
function initWKDailyChallenge(){
  const di=Math.floor(Date.now()/86400000)%WK_CHALLENGES.length;
  const c=WK_CHALLENGES[di];
  const qEl=document.getElementById('wk-daily-q'),oEl=document.getElementById('wk-daily-opts');
  if(!qEl) return;
  const saved=localStorage.getItem('wk-daily-'+di);
  qEl.textContent=c.q;
  if(saved!=null){
    const chosen=parseInt(saved);
    oEl.innerHTML=c.opts.map((o,i)=>`<div style="padding:7px 10px;border-radius:6px;font-size:12px;border:1px solid ${i===c.ans?'var(--accent2)':i===chosen?'var(--accent)':'var(--border)'};background:${i===c.ans?'rgba(74,158,107,.15)':i===chosen&&i!==c.ans?'rgba(232,197,71,.1)':'transparent'};color:${i===c.ans?'var(--accent2)':i===chosen&&i!==c.ans?'var(--accent)':'var(--ink2)'};transition:color , background-color , border-color , transform , opacity .15s">${o}${i===c.ans?' ✓':i===chosen&&i!==c.ans?' ✗':''}</div>`).join('')+'<div style="font-size:11px;color:var(--ink2);margin-top:.5rem;line-height:1.5;background:rgba(255,255,255,.05);padding:.5rem;border-radius:6px">'+c.exp+'</div>';
  } else {
    oEl.innerHTML=c.opts.map((o,i)=>`<button onclick="answerWKDaily(${di},${i})" style="padding:7px 10px;border:1px solid var(--border2);border-radius:6px;background:transparent;color:var(--ink2);font-size:12px;cursor:pointer;text-align:left;transition:color , background-color , border-color , transform , opacity .15s;font-family:'IBM Plex Sans',sans-serif;width:100%" onmouseover="this.style.borderColor='var(--accent)';this.style.color='var(--accent)'" onmouseout="this.style.borderColor='var(--border2)';this.style.color='var(--ink2)'">${o}</button>`).join('');
  }
}
function answerWKDaily(di,chosen){localStorage.setItem('wk-daily-'+di,chosen);initWKDailyChallenge();}

/* ════════════════════════════════
   HANGMAN GAME
════════════════════════════════ */
const HM_WORDS={
  animals:['ELEPHANT','PENGUIN','DOLPHIN','GIRAFFE','KANGAROO','CHEETAH','ALLIGATOR','OCTOPUS','BUTTERFLY','RHINOCEROS'],
  countries:['ARGENTINA','PORTUGAL','ETHIOPIA','CAMBODIA','VENEZUELA','MONGOLIA','UZBEKISTAN','ECUADOR','ZIMBABWE','BANGLADESH'],
  tech:['ALGORITHM','JAVASCRIPT','DATABASE','ENCRYPTION','BANDWIDTH','FRAMEWORK','BLOCKCHAIN','INTERFACE','PROTOCOL','DEBUGGING'],
  food:['CROISSANT','ASPARAGUS','GUACAMOLE','BRUSCHETTA','QUESADILLA','PINEAPPLE','BLUEBERRY','ARTICHOKE','CHOCOLATE','CINNAMON'],
  sports:['BADMINTON','WRESTLING','VOLLEYBALL','BASKETBALL','DECATHLON','GYMNASTICS','ARCHERY','LACROSSE','SQUASH','TRIATHLON'],
};
let hmWord='',hmGuessed=[],hmWrong=0,hmActive=false;
let hmWins=parseInt(localStorage.getItem('hm-wins')||'0');
let hmLosses=parseInt(localStorage.getItem('hm-losses')||'0');
const HM_PARTS=[
  ()=>{const s=document.getElementById('hm-svg');s.innerHTML='<line x1="10" y1="155" x2="130" y2="155"/><line x1="40" y1="155" x2="40" y2="10"/><line x1="40" y1="10" x2="90" y2="10"/><line x1="90" y1="10" x2="90" y2="30"/>';},
  ()=>{const s=document.getElementById('hm-svg');const c=document.createElementNS('http://www.w3.org/2000/svg','circle');c.setAttribute('cx','90');c.setAttribute('cy','45');c.setAttribute('r','15');c.setAttribute('fill','none');s.appendChild(c);},
  ()=>{const s=document.getElementById('hm-svg');const l=document.createElementNS('http://www.w3.org/2000/svg','line');l.setAttribute('x1','90');l.setAttribute('y1','60');l.setAttribute('x2','90');l.setAttribute('y2','105');s.appendChild(l);},
  ()=>{const s=document.getElementById('hm-svg');const l=document.createElementNS('http://www.w3.org/2000/svg','line');l.setAttribute('x1','90');l.setAttribute('y1','70');l.setAttribute('x2','65');l.setAttribute('y2','90');s.appendChild(l);},
  ()=>{const s=document.getElementById('hm-svg');const l=document.createElementNS('http://www.w3.org/2000/svg','line');l.setAttribute('x1','90');l.setAttribute('y1','70');l.setAttribute('x2','115');l.setAttribute('y2','90');s.appendChild(l);},
  ()=>{const s=document.getElementById('hm-svg');const l=document.createElementNS('http://www.w3.org/2000/svg','line');l.setAttribute('x1','90');l.setAttribute('y1','105');l.setAttribute('x2','65');l.setAttribute('y2','130');s.appendChild(l);},
  ()=>{const s=document.getElementById('hm-svg');const l=document.createElementNS('http://www.w3.org/2000/svg','line');l.setAttribute('x1','90');l.setAttribute('y1','105');l.setAttribute('x2','115');l.setAttribute('y2','130');s.appendChild(l);},
];
function newHangman(){
  const cat=document.getElementById('hm-cat').value;
  const words=HM_WORDS[cat];
  hmWord=words[Math.floor(Math.random()*words.length)];
  hmGuessed=[];hmWrong=0;hmActive=true;
  document.getElementById('hm-svg').innerHTML='<line x1="10" y1="155" x2="130" y2="155"/><line x1="40" y1="155" x2="40" y2="10"/><line x1="40" y1="10" x2="90" y2="10"/><line x1="90" y1="10" x2="90" y2="30"/>';
  renderHM();
  document.getElementById('hm-wins').textContent=hmWins;
  document.getElementById('hm-losses').textContent=hmLosses;
}
function renderHM(){
  const lettersEl=document.getElementById('hm-letters');
  lettersEl.innerHTML=hmWord.split('').map(c=>`<div class="hangman-letter">${hmGuessed.includes(c)?c:''}</div>`).join('');
  document.getElementById('hm-wrong').textContent=hmGuessed.filter(c=>!hmWord.includes(c)).join(' ');
  document.getElementById('hm-msg').textContent='';
  ['hm-kbd-row1','hm-kbd-row2'].forEach((id,ri)=>{
    const el=document.getElementById(id);
    const row=ri===0?'ABCDEFGHIJKLM':'NOPQRSTUVWXYZ';
    el.innerHTML=row.split('').map(c=>{
      const used=hmGuessed.includes(c);
      const right=used&&hmWord.includes(c);
      const wrong=used&&!hmWord.includes(c);
      return`<button class="kbd-key${right?' used-right':wrong?' used-wrong':''}" onclick="hmGuess('${c}')">${c}</button>`;
    }).join('');
  });
}
function hmGuess(c){
  if(!hmActive||hmGuessed.includes(c)) return;
  hmGuessed.push(c);
  if(!hmWord.includes(c)){hmWrong++;if(hmWrong<=HM_PARTS.length)HM_PARTS[hmWrong-1]();}
  renderHM();
  const won=hmWord.split('').every(ch=>hmGuessed.includes(ch));
  const lost=hmWrong>=6;
  if(won){hmActive=false;hmWins++;localStorage.setItem('hm-wins',hmWins);document.getElementById('hm-wins').textContent=hmWins;document.getElementById('hm-msg').textContent='You got it! The word was '+hmWord+' 🎉';}
  else if(lost){hmActive=false;hmLosses++;localStorage.setItem('hm-losses',hmLosses);document.getElementById('hm-losses').textContent=hmLosses;document.getElementById('hm-msg').textContent='Game over! The word was '+hmWord+'. Try again!';document.getElementById('hm-letters').innerHTML=hmWord.split('').map(c=>`<div class="hangman-letter" style="color:var(--accent)">${c}</div>`).join('');}
}
document.addEventListener('keydown',function(e){
  const pane=document.getElementById('pane-hangman');
  if(!pane||!pane.classList.contains('on')) return;
  if(/^[a-zA-Z]$/.test(e.key)&&hmActive) hmGuess(e.key.toUpperCase());
});

/* ════════════════════════════════
   DAILY WORDLE CLONE
════════════════════════════════ */
const WL_ANSWERS=['CRANE','STONE','BRAVE','ANGEL','FLAME','HEART','NIGHT','DREAM','TRAIL','SWORD','BLOOM','CRISP','GHOST','PLANT','SWIFT','TORCH','GRAVE','BLEND','CLAMP','DWARF','FEAST','GLOOM','HOIST','INLET','JOUST','KNELT','LATCH','MANOR','NICHE','ORBIT','PERCH','QUILT','ROGUE','SLOPE','TROUT','USHER','VENOM','WRATH','YACHT','ZILCH'];
let wlGuesses=[],wlCurrentGuess='',wlAnswer='',wlGameOver=false;
function initWordlePlay(){
  const di=Math.floor(Date.now()/86400000);
  wlAnswer=WL_ANSWERS[di%WL_ANSWERS.length];
  wlGuesses=[];wlCurrentGuess='';wlGameOver=false;
  buildWLGrid();buildWLKeyboard();
  document.getElementById('wl-msg').textContent='';
  document.getElementById('wl-input').value='';
  document.getElementById('wl-input-row').style.display='flex';
  updateWLStats();
}
function buildWLGrid(){
  const g=document.getElementById('wl-grid');
  g.innerHTML='';
  for(let r=0;r<6;r++){
    const row=document.createElement('div');row.className='wl-row';row.id='wl-row-'+r;
    for(let c=0;c<5;c++){const cell=document.createElement('div');cell.className='wl-cell';cell.id='wl-cell-'+r+'-'+c;row.appendChild(cell);}
    g.appendChild(row);
  }
  wlGuesses.forEach((g,ri)=>renderWLGuess(g,ri,true));
}
function buildWLKeyboard(){
  const rows=['QWERTYUIOP','ASDFGHJKL','ZXCVBNM'];
  const kb=document.getElementById('wl-keyboard');kb.innerHTML='';
  rows.forEach(r=>{const row=document.createElement('div');row.style.cssText='display:flex;gap:4px;justify-content:center;margin-bottom:4px';r.split('').forEach(k=>{const btn=document.createElement('button');btn.id='wl-kb-'+k;btn.textContent=k;btn.style.cssText='font-family:\'IBM Plex Mono\',monospace;font-size:12px;width:34px;height:36px;border:1px solid var(--border2);border-radius:4px;background:var(--surface2);color:var(--ink2);cursor:pointer;transition:color , background-color , border-color , transform , opacity .15s';btn.onclick=()=>{if(wlCurrentGuess.length<5)wlCurrentGuess+=k;updateWLCurrentRow();};row.appendChild(btn);});if(r==='ASDFGHJKL'){const del=document.createElement('button');del.textContent='⌫';del.style.cssText='font-family:\'IBM Plex Mono\',monospace;font-size:12px;padding:0 10px;height:36px;border:1px solid var(--border2);border-radius:4px;background:var(--surface2);color:var(--ink2);cursor:pointer';del.onclick=()=>{wlCurrentGuess=wlCurrentGuess.slice(0,-1);updateWLCurrentRow();};row.appendChild(del);}kb.appendChild(row);});
}
function updateWLCurrentRow(){
  const ri=wlGuesses.length;
  for(let c=0;c<5;c++){const cell=document.getElementById('wl-cell-'+ri+'-'+c);if(cell)cell.textContent=wlCurrentGuess[c]||'';}
}
function renderWLGuess(guess,ri,final){
  const result=[];
  const ans=wlAnswer.split(''),g=guess.split(''),used=new Array(5).fill(false);
  for(let i=0;i<5;i++){if(g[i]===ans[i]){result[i]='correct';used[i]=true;}}
  for(let i=0;i<5;i++){if(result[i]) continue;const fi=ans.findIndex((c,j)=>c===g[i]&&!used[j]);if(fi>=0){result[i]='present';used[fi]=true;}else result[i]='absent';}
  for(let c=0;c<5;c++){const cell=document.getElementById('wl-cell-'+ri+'-'+c);if(cell){cell.textContent=guess[c];cell.className='wl-cell '+result[c];}}
  updateWLKeyboardColors(guess,result);
}
function updateWLKeyboardColors(guess,result){
  guess.split('').forEach((c,i)=>{const btn=document.getElementById('wl-kb-'+c);if(!btn) return;const cur=btn.dataset.state;if(cur==='correct') return;btn.dataset.state=result[i];const bg=result[i]==='correct'?'rgba(74,158,107,.25)':result[i]==='present'?'rgba(232,197,71,.25)':'var(--surface3)';const bc=result[i]==='correct'?'var(--accent2)':result[i]==='present'?'var(--accent)':'var(--border)';const col=result[i]==='correct'?'var(--accent2)':result[i]==='present'?'var(--accent)':'var(--ink3)';btn.style.background=bg;btn.style.borderColor=bc;btn.style.color=col;});
}
function submitWLGuess(){
  if(wlGameOver) return;
  const guess=document.getElementById('wl-input').value.trim().toUpperCase();
  if(guess.length!==5){document.getElementById('wl-msg').textContent='Enter a 5-letter word!';return;}
  wlCurrentGuess=guess;
  renderWLGuess(guess,wlGuesses.length,true);
  wlGuesses.push(guess);
  document.getElementById('wl-input').value='';wlCurrentGuess='';
  if(guess===wlAnswer){wlGameOver=true;document.getElementById('wl-msg').textContent='Brilliant! You got it in '+wlGuesses.length+'! 🎉';document.getElementById('wl-input-row').style.display='none';saveWLStats(true);}
  else if(wlGuesses.length>=6){wlGameOver=true;document.getElementById('wl-msg').textContent='The word was '+wlAnswer+'. Better luck tomorrow!';document.getElementById('wl-input-row').style.display='none';saveWLStats(false);}
}
document.addEventListener('keydown',function(e){
  const pane=document.getElementById('pane-wordleplay');
  if(!pane||!pane.classList.contains('on')||wlGameOver) return;
  if(e.key==='Enter'){submitWLGuess();}
  else if(e.key==='Backspace'){wlCurrentGuess=wlCurrentGuess.slice(0,-1);updateWLCurrentRow();}
  else if(/^[a-zA-Z]$/.test(e.key)&&wlCurrentGuess.length<5){wlCurrentGuess+=e.key.toUpperCase();updateWLCurrentRow();}
});
function saveWLStats(won){
  const stats=JSON.parse(localStorage.getItem('wl-stats')||'{"streak":0,"played":0,"lastDate":""}');
  const today=new Date().toDateString();
  if(stats.lastDate===today) return;
  stats.played++;
  if(won){stats.streak++;}else{stats.streak=0;}
  stats.lastDate=today;
  localStorage.setItem('wl-stats',JSON.stringify(stats));
  updateWLStats();
}
function updateWLStats(){
  const stats=JSON.parse(localStorage.getItem('wl-stats')||'{"streak":0,"played":0}');
  const sEl=document.getElementById('wl-streak-n'),pEl=document.getElementById('wl-played-n');
  if(sEl) sEl.textContent=stats.streak;if(pEl) pEl.textContent=stats.played;
}
function wlShare(){
  const emojis=wlGuesses.map(g=>{const res=[];const ans=wlAnswer.split(''),gu=g.split(''),used=new Array(5).fill(false);for(let i=0;i<5;i++)if(gu[i]===ans[i]){res[i]='🟩';used[i]=true;}for(let i=0;i<5;i++){if(res[i]) continue;const fi=ans.findIndex((c,j)=>c===gu[i]&&!used[j]);if(fi>=0){res[i]='🟨';used[fi]=true;}else res[i]='⬛';}return res.join('');}).join('\n');
  const text='WordKit Daily Word — '+wlGuesses.length+'/6\n\n'+emojis+'\n\nwordkit.io/daily';
  navigator.clipboard.writeText(text).then(()=>alert('Result copied to clipboard!'));
}

/* ════════════════════════════════
   SHARE CARD (word tools)
════════════════════════════════ */
function showWKShare(word,found,tool){
  const text=`I found ${found} words from "${word}" using WordKit's ${tool}! Try it: wordkit.io`;
  navigator.clipboard.writeText(text).then(()=>{
    const id='wk-share-toast';let t=document.getElementById(id);
    if(!t){t=document.createElement('div');t.id=id;t.style.cssText='position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);background:var(--accent);color:#000;font-family:\'IBM Plex Mono\',monospace;font-size:12px;padding:.6rem 1.25rem;border-radius:20px;z-index:999;font-weight:500';document.body.appendChild(t);}
    t.textContent='Result copied!';setTimeout(()=>t.remove(),2000);
  });
}

/* ════════════════════════════════
   PATCH showTool TO TRACK HISTORY
════════════════════════════════ */
const _origShowTool=showTool;
window.showTool=function(id){
  const labels={unscramble:'Unscramble',anagram:'Anagram',rhyme:'Rhymes',wordle:'Wordle Helper',crossword:'Crossword',wordsearch:'Word Search',hangman:'Hangman',wordleplay:'Daily Word'};
  addWKHistory(id,labels[id]||id);
  _origShowTool(id);
  if(id==='hangman'&&!hmWord) newHangman();
  if(id==='wordleplay') initWordlePlay();
};

/* ════════════════════════════════
   ADD SHARE BUTTONS TO EXISTING TOOLS
════════════════════════════════ */
const _origDoUnscramble=doUnscramble;
window.doUnscramble=function(){
  _origDoUnscramble();
  const all=window._unscrambleAll||[];
  const inp=document.getElementById('unscramble-input').value.trim();
  if(all.length>0){
    let sb=document.getElementById('unscramble-share-btn');
    if(!sb){sb=document.createElement('button');sb.id='unscramble-share-btn';sb.className='wk-share-btn';sb.style.marginTop='.75rem';document.getElementById('unscramble-results').before(sb);}
    sb.textContent='Share result ('+all.length+' words)';
    sb.onclick=()=>showWKShare(inp,all.length,'Word Unscrambler');
  }
};

/* ════════════════════════════════
   INIT
════════════════════════════════ */

/* ════════════════════════════════
   SPELLING BEE HELPER
════════════════════════════════ */
function doSpellingBee(){
  const allRaw=(document.getElementById('bee-all').value||'').trim().toUpperCase().replace(/[^A-Z]/g,'');
  const center=(document.getElementById('bee-center').value||'').trim().toUpperCase().replace(/[^A-Z]/g,'')[0]||'';
  if(allRaw.length<4||!center){alert('Enter all 7 letters and the center letter.');return;}
  const letters=new Set(allRaw.split(''));
  if(!letters.has(center)){alert('Center letter must be one of the 7 letters.');return;}
  // Find valid words
  const valid=DICT.filter(w=>{
    if(w.length<4) return false;
    const wU=w.toUpperCase();
    if(!wU.includes(center)) return false;
    return wU.split('').every(c=>letters.has(c));
  });
  const isPangram=w=>new Set(w.toUpperCase().split('').filter(c=>letters.has(c))).size===letters.size;
  const scored=valid.map(w=>{
    const wU=w.toUpperCase();
    let pts=wU.length===4?1:wU.length;
    if(isPangram(w)) pts+=7;
    return{w,pts,pangram:isPangram(w)};
  }).sort((a,b)=>b.pts-a.pts);
  const container=document.getElementById('bee-results');
  if(!scored.length){container.innerHTML='<div class="empty-state"><span class="empty-icon">∅</span>No words found. Check your letters.</div>';return;}
  const pangrams=scored.filter(x=>x.pangram);
  const regular=scored.filter(x=>!x.pangram);
  const totalPts=scored.reduce((s,x)=>s+x.pts,0);
  let html=`<div class="results-header"><div class="results-label">Found ${scored.length} words</div><div class="results-count">${totalPts} total points</div></div>`;
  if(pangrams.length){html+=`<div class="word-group" style="margin-bottom:1rem"><div class="wg-label" style="color:var(--accent)">Pangrams (${pangrams.length})</div><div class="word-chips">${pangrams.map(x=>`<span class="word-chip highlight" title="${x.pts} pts">${x.w.toUpperCase()} <span style="font-size:10px;opacity:.7">+${x.pts}</span></span>`).join('')}</div></div>`;}
  // Group by length
  const byLen={};regular.forEach(x=>{const l=x.w.length;(byLen[l]||(byLen[l]=[])).push(x);});
  Object.keys(byLen).sort((a,b)=>b-a).forEach(l=>{
    const words=byLen[l];
    html+=`<div class="word-group" style="margin-bottom:.75rem"><div class="wg-label">${l} letters (${words.length})</div><div class="word-chips">${words.map(x=>`<span class="word-chip" title="${x.pts} pts">${x.w.toUpperCase()}</span>`).join('')}</div></div>`;
  });
  container.innerHTML=html;
}

/* ════════════════════════════════
   SCRABBLE WORD FINDER
════════════════════════════════ */
function doScrabble(){
  const rack=(document.getElementById('scr-rack').value||'').trim().toUpperCase().replace(/[^A-Z?]/g,'');
  const twoOnly=document.getElementById('scr-2letter')&&document.getElementById('scr-2letter').checked;
  const highFirst=document.getElementById('scr-highscore')&&document.getElementById('scr-highscore').checked;
  if(!rack&&!twoOnly){document.getElementById('scr-results').innerHTML='<div class="empty-state"><span class="empty-icon">S</span>Enter rack letters to find plays</div>';return;}
  let valid;
  if(twoOnly){
    valid=DICT.filter(w=>w.length===2).map(w=>({w,pts:scrabbleScore(w)}));
  } else {
    valid=DICT.filter(w=>w.length>=2&&canMakeWord(w,rack)).map(w=>({w,pts:scrabbleScore(w)}));
  }
  valid.sort((a,b)=>highFirst?b.pts-a.pts:b.w.length-a.w.length||b.pts-a.pts);
  const container=document.getElementById('scr-results');
  if(!valid.length){container.innerHTML='<div class="empty-state"><span class="empty-icon">∅</span>No words found with those letters.</div>';return;}
  // Group by length or show top by score
  const top=valid.slice(0,60);
  const byLen={};top.forEach(x=>{const l=x.w.length;(byLen[l]||(byLen[l]=[])).push(x);});
  let html=`<div class="results-header"><div class="results-label">${valid.length} valid plays</div><div class="results-count">Sorted by ${highFirst?'score':'length'}</div></div><div class="word-groups">`;
  if(highFirst){
    html+=`<div class="word-group"><div class="wg-label">Top plays by score</div><div class="word-chips">${top.map(x=>`<span class="word-chip" title="${x.pts} pts"><span style="font-size:10px;color:var(--accent);margin-right:3px">${x.pts}</span>${x.w.toUpperCase()}</span>`).join('')}</div></div>`;
  } else {
    Object.keys(byLen).sort((a,b)=>b-a).forEach(l=>{
      html+=`<div class="word-group"><div class="wg-label">${l} letters</div><div class="word-chips">${byLen[l].map(x=>`<span class="word-chip" title="${x.pts} pts">${x.w.toUpperCase()} <span style="font-size:10px;opacity:.6">${x.pts}</span></span>`).join('')}</div></div>`;
    });
  }
  html+='</div>';
  if(valid.length>60) html+=`<div style="font-size:12px;color:var(--ink3);margin-top:.75rem">Showing top 60 of ${valid.length} words.</div>`;
  container.innerHTML=html;
}

/* ════════════════════════════════
   WORD LADDER
════════════════════════════════ */
const LADDER_PUZZLES=[['CAT','DOG'],['COLD','WARM'],['LOVE','HATE'],['LEAD','GOLD'],['HEAD','TAIL'],['FIRE','FISH'],['HAND','LAND'],['DARK','BARN'],['CORN','CORE'],['MINE','WINE']];
let ladderChain=[], ladderTarget='';

function bfsLadder(start,target){
  start=start.toLowerCase();target=target.toLowerCase();
  if(start.length!==target.length) return null;
  const len=start.length;
  const wordSet=new Set(DICT.filter(w=>w.length===len));
  if(!wordSet.has(start)||!wordSet.has(target)) return null;
  const q=[[start]],visited=new Set([start]);
  let steps=0;
  while(q.length&&steps<200){
    steps++;
    const path=q.shift();
    const cur=path[path.length-1];
    if(cur===target) return path.map(w=>w.toUpperCase());
    for(let i=0;i<len;i++){
      for(let c=97;c<=122;c++){
        const next=cur.slice(0,i)+String.fromCharCode(c)+cur.slice(i+1);
        if(!visited.has(next)&&wordSet.has(next)){visited.add(next);q.push([...path,next]);}
      }
    }
  }
  return null;
}

function solveWordLadder(){
  const s=(document.getElementById('wl-start').value||'').trim().toUpperCase().replace(/[^A-Z]/g,'');
  const t=(document.getElementById('wl-target').value||'').trim().toUpperCase().replace(/[^A-Z]/g,'');
  if(!s||!t){alert('Enter both start and target words.');return;}
  if(s.length!==t.length){alert('Words must be the same length!');return;}
  if(s.length>5){alert('Word Ladder works best with 3–5 letter words.');return;}
  const container=document.getElementById('wl-ladder-results');
  container.innerHTML='<div style="font-size:13px;color:var(--ink3);padding:1rem 0">Searching for path…</div>';
  setTimeout(()=>{
    const path=bfsLadder(s,t);
    if(!path){container.innerHTML=`<div class="empty-state"><span class="empty-icon">∅</span>No path found between <strong>${s}</strong> and <strong>${t}</strong>. Try different words.</div>`;return;}
    let html=`<div class="results-header"><div class="results-label">Shortest path: ${path.length-1} steps</div><div class="results-count">${path.length} words</div></div>`;
    html+=`<div style="display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:1rem 0">`;
    path.forEach((w,i)=>{
      const color=i===0?'var(--accent2)':i===path.length-1?'var(--accent)':'var(--ink2)';
      html+=`<span style="font-family:'IBM Plex Mono',monospace;font-size:18px;font-weight:500;color:${color};letter-spacing:.06em">${w}</span>`;
      if(i<path.length-1) html+=`<span style="color:var(--ink3);font-size:16px">→</span>`;
    });
    html+=`</div>`;
    // Highlight changed letter per step
    html+=`<div style="display:flex;flex-direction:column;gap:6px;margin-top:.5rem">`;
    path.forEach((w,i)=>{
      if(i===0){html+=`<div style="font-family:'IBM Plex Mono',monospace;font-size:15px;color:var(--accent2)">${w} <span style="font-size:10px;color:var(--ink3)">(start)</span></div>`;return;}
      const prev=path[i-1];
      const highlighted=w.split('').map((c,j)=>c!==prev[j]?`<span style="color:var(--accent);font-weight:700">${c}</span>`:c).join('');
      html+=`<div style="font-family:'IBM Plex Mono',monospace;font-size:15px;color:${i===path.length-1?'var(--accent)':'var(--ink)'}">${highlighted} <span style="font-size:10px;color:var(--ink3)">step ${i}</span></div>`;
    });
    html+='</div>';
    container.innerHTML=html;
    // Setup play mode
    ladderTarget=t;ladderChain=[s];
    renderLadderPlay();
    document.getElementById('wl-play-area').style.display='block';
  },10);
}

function renderLadderPlay(){
  const el=document.getElementById('wl-play-chain');
  if(!el) return;
  el.innerHTML=ladderChain.map((w,i)=>{
    const done=w===ladderTarget;
    return`<div style="display:flex;align-items:center;gap:10px;padding:6px 10px;border-radius:6px;background:${done?'rgba(74,158,107,.15)':i===ladderChain.length-1?'var(--surface2)':'transparent'};border:1px solid ${done?'var(--accent2)':i===ladderChain.length-1?'var(--border2)':'transparent'}"><span style="font-family:'IBM Plex Mono',monospace;font-size:16px;font-weight:500;color:${done?'var(--accent2)':i===0?'var(--accent2)':'var(--ink)'};letter-spacing:.06em">${w}</span>${i===0?'<span style="font-size:10px;color:var(--ink3)">start</span>':''} ${done?'<span style="font-size:12px;color:var(--accent2)">🎉 Target reached!</span>':''}</div>`;
  }).join('<div style="padding-left:10px;color:var(--ink3);font-size:12px">↓</div>')+
  (ladderChain[ladderChain.length-1]!==ladderTarget?`<div style="padding:6px 10px;font-family:'IBM Plex Mono',monospace;font-size:16px;color:var(--ink3);letter-spacing:.06em;border:1px dashed var(--border2);border-radius:6px">${ladderTarget} <span style="font-size:10px">(target)</span></div>`:'');
}

function submitLadderStep(){
  const inp=(document.getElementById('wl-play-input').value||'').trim().toUpperCase().replace(/[^A-Z]/g,'');
  const msg=document.getElementById('wl-play-msg');
  const cur=ladderChain[ladderChain.length-1];
  if(!inp){return;}
  if(inp.length!==cur.length){msg.textContent='Must be same length as '+cur+'!';return;}
  const diffs=inp.split('').filter((c,i)=>c!==cur[i]).length;
  if(diffs!==1){msg.textContent='Change exactly one letter at a time.';return;}
  if(!DICT.includes(inp.toLowerCase())){msg.textContent=inp+' is not a valid word. Try another.';return;}
  if(ladderChain.includes(inp)){msg.textContent='Already used '+inp+'. No repeats!';return;}
  ladderChain.push(inp);
  document.getElementById('wl-play-input').value='';
  msg.textContent='';
  renderLadderPlay();
  if(inp===ladderTarget){msg.textContent='You did it in '+(ladderChain.length-1)+' steps! 🎉';msg.style.color='var(--accent2)';}
}

function setLadder(s,t){
  document.getElementById('wl-start').value=s;document.getElementById('wl-target').value=t;solveWordLadder();
}
function randomWordLadder(){
  const pair=LADDER_PUZZLES[Math.floor(Math.random()*LADDER_PUZZLES.length)];
  setLadder(pair[0],pair[1]);
}

/* ════════════════════════════════
   RANDOM WORD GENERATOR
════════════════════════════════ */
let lastRandomWords=[];
function generateRandomWords(){
  const count=Math.min(parseInt(document.getElementById('rw-count').value)||10,50);
  const minL=parseInt(document.getElementById('rw-min').value)||4;
  const maxL=parseInt(document.getElementById('rw-max').value)||8;
  const starts=(document.getElementById('rw-starts').value||'').trim().toUpperCase();
  const type=document.getElementById('rw-type').value;
  let pool=DICT.filter(w=>{
    if(type==='short'&&(w.length<2||w.length>4)) return false;
    if(type==='medium'&&(w.length<5||w.length>7)) return false;
    if(type==='long'&&w.length<8) return false;
    if(w.length<minL||w.length>maxL) return false;
    if(starts&&!w.toUpperCase().startsWith(starts)) return false;
    return true;
  });
  if(type==='highscore') pool=pool.sort((a,b)=>scrabbleScore(b)-scrabbleScore(a)).slice(0,Math.min(200,pool.length));
  if(!pool.length){document.getElementById('rw-results').innerHTML='<div class="empty-state"><span class="empty-icon">∅</span>No words match those filters. Try adjusting.</div>';return;}
  // Shuffle
  const shuffled=[...pool].sort(()=>Math.random()-.5);
  lastRandomWords=shuffled.slice(0,count);
  renderRandomWords();
}
function renderRandomWords(){
  const container=document.getElementById('rw-results');
  if(!lastRandomWords.length){container.innerHTML='<div class="empty-state"><span class="empty-icon">?</span>Click Generate to get words</div>';return;}
  container.innerHTML=`<div class="results-header"><div class="results-label">${lastRandomWords.length} random words</div><div class="results-count">click to copy</div></div><div class="word-chips" style="margin-top:.75rem">${lastRandomWords.map(w=>`<span class="word-chip" onclick="copyWord('${w.toUpperCase()}')" title="Scrabble: ${scrabbleScore(w)} pts — click to copy">${w.toUpperCase()}</span>`).join('')}</div>`;
}
function copyWord(w){navigator.clipboard.writeText(w).then(()=>{const id='wk-copy-toast';let t=document.getElementById(id);if(!t){t=document.createElement('div');t.id=id;t.style.cssText='position:fixed;bottom:2rem;right:2rem;background:var(--accent);color:#000;font-family:\'IBM Plex Mono\',monospace;font-size:11px;padding:.5rem 1rem;border-radius:12px;z-index:999;font-weight:500';document.body.appendChild(t);}t.textContent=w+' copied!';clearTimeout(t._t);t._t=setTimeout(()=>t.remove(),1500);});}
function copyRandomWords(){if(!lastRandomWords.length)return;navigator.clipboard.writeText(lastRandomWords.map(w=>w.toUpperCase()).join(', ')).then(()=>copyWord('All '+lastRandomWords.length+' words'));}
function setRWPreset(count,min,max,starts,type){document.getElementById('rw-count').value=count;document.getElementById('rw-min').value=min;document.getElementById('rw-max').value=max;document.getElementById('rw-starts').value=starts;document.getElementById('rw-type').value=type;generateRandomWords();}



/* ════════════════════════════════
   WK FREQUENCY TRACKING
════════════════════════════════ */
function wkGetFreq(){return JSON.parse(localStorage.getItem('wk-freq')||'{}');}
function wkBumpFreq(id){const f=wkGetFreq();f[id]=(f[id]||0)+1;localStorage.setItem('wk-freq',JSON.stringify(f));}
function wkGetTopFreq(n){const f=wkGetFreq();return Object.entries(f).sort((a,b)=>b[1]-a[1]).slice(0,n).map(x=>x[0]);}

/* ════════════════════════════════
   WK PINNING
════════════════════════════════ */
const WK_TOOL_LABELS={
  unscramble:'Unscrambler',anagram:'Anagram',rhyme:'Rhymes',wordle:'Wordle Help',
  crossword:'Crossword',wordsearch:'Word Search',hangman:'Hangman',
  wordleplay:'Daily Word',spellingbee:'Spelling Bee',scrabble:'Scrabble',
  wordladder:'Word Ladder',random:'Random Word'
};
function wkGetPins(){return JSON.parse(localStorage.getItem('wk-pins')||'[]');}
function wkTogglePin(id){
  let pins=wkGetPins();
  if(pins.includes(id)) pins=pins.filter(x=>x!==id);
  else pins=[...pins,id].slice(0,6);
  localStorage.setItem('wk-pins',JSON.stringify(pins));
  wkRenderPers();
  wkUpdatePinStars();
}
function wkIsPinned(id){return wkGetPins().includes(id);}
function wkUpdatePinStars(){
  const pins=wkGetPins();
  document.querySelectorAll('.wk-home-card-pin').forEach(btn=>{
    const id=btn.id.replace('wkhp-','');
    btn.classList.toggle('pinned',pins.includes(id));
  });
}

/* ════════════════════════════════
   WK PERSONALISATION RENDER
════════════════════════════════ */
function wkRenderPers(){
  const pins=wkGetPins();
  const freq=wkGetTopFreq(5).filter(id=>!pins.includes(id));
  const pinRow=document.getElementById('wk-pin-row');
  const pinStrip=document.getElementById('wk-pin-strip');
  const freqRow=document.getElementById('wk-freq-row');
  const freqStrip=document.getElementById('wk-freq-strip');
  if(pinRow&&pinStrip){
    pinRow.style.display=pins.length?'block':'none';
    pinStrip.innerHTML=pins.map(id=>`<button class="wk-pin-btn" onclick="window.location.href='${id}-tool.html'">★ ${WK_TOOL_LABELS[id]||id}</button>`).join('');
  }
  const f=wkGetFreq();
  const top=freq.filter(id=>f[id]>1).slice(0,4);
  if(freqRow&&freqStrip){
    freqRow.style.display=top.length>1?'block':'none';
    freqStrip.innerHTML=top.map(id=>`<button class="wk-recent-btn" onclick="window.location.href='${id}-tool.html'">${WK_TOOL_LABELS[id]||id}<span class="wk-freq-badge">${f[id]}×</span></button>`).join('');
  }
  wkUpdatePinStars();
}

/* ════════════════════════════════
   WK HOME TABS
════════════════════════════════ */
function initWKHomeTabs(){
  const bar=document.getElementById('wk-home-tabs');
  if(!bar)return;
  bar.addEventListener('click',e=>{
    const btn=e.target.closest('.wk-tab');if(!btn)return;
    document.querySelectorAll('#wk-home-tabs .wk-tab').forEach(b=>b.classList.remove('on'));
    btn.classList.add('on');
    ['wk-ht-tools','wk-ht-games','wk-ht-daily','wk-ht-lists'].forEach(id=>{
      const el=document.getElementById(id);
      if(el) el.style.display=id===btn.dataset.wt?'grid':'none';
    });
    if(btn.dataset.wt==='wk-ht-daily') initHTDailyChallenge();
  });
}

/* ════════════════════════════════
   DAILY TAB CHALLENGE (home tab version)
════════════════════════════════ */
function initHTDailyChallenge(){
  const di=Math.floor(Date.now()/86400000)%WK_CHALLENGES.length;
  const c=WK_CHALLENGES[di];
  const qEl=document.getElementById('ht-wk-daily-q');
  const oEl=document.getElementById('ht-wk-daily-opts');
  if(!qEl||!oEl) return;
  const saved=localStorage.getItem('wk-daily-'+di);
  qEl.textContent=c.q;
  if(saved!=null){
    const chosen=parseInt(saved);
    oEl.innerHTML=c.opts.map((o,i)=>`<div style="padding:7px 10px;border-radius:6px;font-size:12px;border:1px solid ${i===c.ans?'var(--accent2)':i===chosen?'var(--accent)':'var(--border)'};color:${i===c.ans?'var(--accent2)':i===chosen&&i!==c.ans?'var(--accent)':'var(--ink2)'}">${o}${i===c.ans?' ✓':i===chosen&&i!==c.ans?' ✗':''}</div>`).join('')+'<div style="font-size:11px;color:var(--ink2);margin-top:.5rem;line-height:1.5;background:rgba(255,255,255,.04);padding:.5rem;border-radius:6px">'+c.exp+'</div>';
  } else {
    oEl.innerHTML=c.opts.map((o,i)=>`<button onclick="answerWKDaily(${di},${i});initHTDailyChallenge()" style="padding:7px 10px;border:1px solid var(--border2);border-radius:6px;background:transparent;color:var(--ink2);font-size:12px;cursor:pointer;text-align:left;font-family:'IBM Plex Sans',sans-serif;width:100%">${o}</button>`).join('');
  }
}

/* mirror wotd to home daily tab */
function mirrorWOTD(){
  const idx=Math.floor(Date.now()/86400000)%WOTD_LIST.length;
  const w=WOTD_LIST[idx];
  const we=document.getElementById('ht-wotd-word'),pe=document.getElementById('ht-wotd-pos'),de=document.getElementById('ht-wotd-def');
  if(we) we.textContent=w.w;if(pe) pe.textContent=w.pos;if(de) de.textContent=w.def;
}

/* ════════════════════════════════
   WORD LIST PAGES
════════════════════════════════ */
const WK_LISTS={
  '2letter':{title:'2-Letter Scrabble Words',desc:'All 107 official 2-letter words valid in competitive Scrabble (OWL/TWL). Memorise these to dramatically increase your score.',words:['AA','AB','AD','AE','AG','AH','AI','AL','AM','AN','AR','AS','AT','AW','AX','AY','BA','BE','BI','BO','BY','DA','DE','DO','ED','EF','EH','EL','EM','EN','ER','ES','ET','EW','EX','FA','FE','GI','GO','HA','HE','HI','HM','HO','ID','IF','IN','IS','IT','JO','KA','LA','LI','LO','MA','ME','MI','MM','MO','MU','MY','NA','NE','NO','NU','OD','OE','OF','OH','OI','OM','ON','OP','OR','OS','OW','OX','OY','PA','PE','PI','PO','QI','RE','SH','SI','SO','TA','TI','TO','UH','UM','UN','UP','US','UT','WE','WO','XI','XU','YA','YE','YO','ZA']},
  'qwords':{title:'Q Without U Words',desc:'These rare words contain Q not followed by U — incredibly useful in Scrabble when you draw the Q tile and have no U.',words:['QANAT','QOPH','QADI','QAID','QAIDS','QATS','QOPH','QI','QIGONG','QINTAR','QINTARS','QOPH','QOPHS','TRANQ','TRANQS','UMIAQ','UMIAQS','QWERTZ']},
  '5letter':{title:'5-Letter Words for Wordle',desc:'Common 5-letter English words great for Wordle practice. Covers the most frequent patterns.',words:DICT.filter(w=>w.length===5).slice(0,120).map(w=>w.toUpperCase())},
  'highscore':{title:'High-Score Scrabble Words',desc:'Words using the highest-value tiles: Z(10), Q(10), J(8), X(8), K(5). Each is worth 20+ points.',words:DICT.filter(w=>{const score=w.split('').reduce((s,c)=>s+(SCRABBLE_VALS[c.toLowerCase()]||0),0);return score>=18&&w.length>=3;}).sort((a,b)=>{const sa=a.split('').reduce((s,c)=>s+(SCRABBLE_VALS[c]||0),0),sb=b.split('').reduce((s,c)=>s+(SCRABBLE_VALS[c]||0),0);return sb-sa;}).slice(0,80).map(w=>w.toUpperCase())},
  'vowelheavy':{title:'Vowel-Heavy Words',desc:'Words with 4 or more vowels — perfect for unloading excess vowel tiles in Scrabble or Bananagrams.',words:DICT.filter(w=>{const v=(w.match(/[aeiou]/gi)||[]).length;return v>=4&&w.length>=5;}).slice(0,80).map(w=>w.toUpperCase())},
};
function showListPage(key){
  const list=WK_LISTS[key];if(!list) return;
  document.getElementById('home-view').style.display='none';
  document.getElementById('tools-area').style.display='';
  document.querySelectorAll('.tool-pane').forEach(p=>p.classList.remove('on'));
  // Create or reuse a list pane
  let pane=document.getElementById('pane-list-'+key);
  if(!pane){
    pane=document.createElement('div');pane.className='tool-pane';pane.id='pane-list-'+key;
    document.getElementById('tools-area').appendChild(pane);
  }
  pane.classList.add('on');
  pane.innerHTML=`<div class="tl-main" style="max-width:800px">
    <div class="tool-title">${list.title}</div>
    <div class="tool-desc">${list.desc}</div>
    <div style="margin-top:1.25rem">
      <div class="results-header"><div class="results-label">${list.words.length} words</div><div class="results-count">click to copy</div></div>
      <div class="word-chips" style="margin-top:.75rem">${list.words.map(w=>`<span class="word-chip" onclick="copyWord('${w}')">${w}</span>`).join('')}</div>
    </div>
  </div>`;
  window.scrollTo({top:0,behavior:'smooth'});
}

/* ════════════════════════════════
   PATCH showTool for freq tracking + pin stars
════════════════════════════════ */
const _wkPrevShowTool=window.showTool;
window.showTool=function(id){
  wkBumpFreq(id);
  addWKHistory(id, WK_TOOL_LABELS[id]||id);
  _wkPrevShowTool(id);
  if(id==='hangman'&&!hmWord) newHangman();
  if(id==='wordleplay') initWordlePlay();
};

/* patch showHome for wk pers refresh */
const _wkPrevShowHome=window.showHome;
window.showHome=function(){
  _wkPrevShowHome();
  wkRenderPers();
  wkUpdatePinStars();
};


initWKTheme();initWKStreak();renderWKHistory();initWOTD();initWKDailyChallenge();initWKHomeTabs();wkRenderPers();wkUpdatePinStars();mirrorWOTD();