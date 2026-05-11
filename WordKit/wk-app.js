/* ═══════════════════════════════════════════
   WORD DICTIONARY (curated for demo quality)
═══════════════════════════════════════════ */
const DICT = ["aa", "aaa", "aaron", "ab", "abandoned", "abc", "aberdeen", "abilities", "ability", "able", "aboriginal", "abortion", "about", "above", "abraham", "abroad", "abs", "absence", "absent", "absolute", "absolutely", "absorption", "abstract", "abstracts", "abu", "abuse", "ac", "academic", "academics", "academy", "acc", "accent", "accept", "acceptable", "acceptance", "accepted", "accepting", "accepts", "access", "accessed", "accessibility", "accessible", "accessing", "accessories", "accessory", "accident", "accidents", "accommodate", "accommodation", "accommodations", "accompanied", "accompanying", "accomplish", "accomplished", "accordance", "according", "accordingly", "account", "accountability", "accounting", "accounts", "accreditation", "accredited", "accuracy", "accurate", "accurately", "accused", "acdbentity", "ace", "acer", "achieve", "achieved", "achievement", "achievements", "achieving", "acid", "acids", "acknowledge", "acknowledged", "acm", "acne", "acoustic", "acquire", "acquired", "acquisition", "acquisitions", "acre", "acres", "acrobat", "across", "acrylic", "act", "acting", "action", "actions", "activated", "activation", "active", "actively", "activists", "activities", "activity", "actor", "actors", "actress", "acts", "actual", "actually", "acute", "ad", "ada", "adam", "adams", "adaptation", "adapted", "adapter", "adapters", "adaptive", "adaptor", "add", "added", "addiction", "adding", "addition", "additional", "additionally", "additions", "address", "addressed", "addresses", "addressing", "adds", "adelaide", "adequate", "adidas", "adipex", "adjacent", "adjust", "adjustable", "adjusted", "adjustment", "adjustments", "admin", "administered", "administration", "administrative", "administrator", "administrators", "admission", "admissions", "admit", "admitted", "adobe", "adolescent", "adopt", "adopted", "adoption", "adrian", "ads", "adsl", "adult", "adults", "advance", "advanced", "advancement", "advances", "advantage", "advantages", "adventure", "adventures", "adverse", "advert", "advertise", "advertisement", "advertisements", "advertiser", "advertisers", "advertising", "advice", "advise", "advised", "advisor", "advisors", "advisory", "advocacy", "advocate", "adware", "ae", "aerial", "aerospace", "af", "affair", "affairs", "affect", "affected", "affecting", "affects", "affiliate", "affiliated", "affiliates", "affiliation", "afford", "affordable", "afghanistan", "afraid", "africa", "african", "after", "afternoon", "afterwards", "ag", "again", "against", "age", "aged", "agencies", "agency", "agenda", "agent", "agents", "ages", "aggregate", "aggressive", "aging", "ago", "agree", "agreed", "agreement", "agreements", "agrees", "agricultural", "agriculture", "ah", "ahead", "ai", "aid", "aids", "aim", "aimed", "aims", "air", "aircraft", "airfare", "airline", "airlines", "airplane", "airport", "airports", "aj", "ak", "aka", "al", "ala", "alabama", "alan", "alarm", "alaska", "albania", "albany", "albert", "alberta", "album", "albums", "albuquerque", "alcohol", "alert", "alerts", "alex", "alexander", "alexandria", "alfred", "algebra", "algeria", "algorithm", "algorithms", "ali", "alias", "alice", "alien", "align", "alignment", "alike", "alive", "all", "allah", "allan", "alleged", "allen", "allergy", "alliance", "allied", "allocated", "allocation", "allow", "allowance", "allowed", "allowing", "allows", "alloy", "almost", "alone", "along", "alot", "alpha", "alphabetical", "alpine", "already", "also", "alt", "alter", "altered", "alternate", "alternative", "alternatively", "alternatives", "although", "alto", "aluminium", "aluminum", "alumni", "always", "am", "amanda", "amateur", "amazing", "amazon", "ambassador", "amber", "ambien", "ambient", "amd", "amend", "amended", "amendment", "amendments", "amenities", "america", "american", "americans", "americas", "amino", "among", "amongst", "amount", "amounts", "amp", "ampland", "amplifier", "amsterdam", "amy", "an", "ana", "anaheim", "analog", "analyses", "analysis", "analyst", "analysts", "analytical", "analyze", "analyzed", "anatomy", "anchor", "ancient", "and", "andale", "anderson", "andorra", "andrea", "andreas", "andrew", "andrews", "andy", "angel", "angela", "angeles", "angels", "anger", "angle", "angola", "angry", "animal", "animals", "animated", "animation", "anime", "ann", "anna", "anne", "annex", "annie", "anniversary", "annotated", "annotation", "announce", "announced", "announcement", "announcements", "announces", "annoying", "annual", "annually", "anonymous", "another", "answer", "answered", "answering", "answers", "ant", "antarctica", "antenna", "anthony", "anthropology", "anti", "antibodies", "antibody", "anticipated", "antigua", "antique", "antiques", "antivirus", "antonio", "anxiety", "any", "anybody", "anymore", "anyone", "anything", "anytime", "anyway", "anywhere", "aol", "ap", "apache", "apart", "apartment", "apartments", "api", "apnic", "apollo", "app", "apparatus", "apparel", "apparent", "apparently", "appeal", "appeals", "appear", "appearance", "appeared", "appearing", "appears", "appendix", "apple", "appliance", "appliances", "applicable", "applicant", "applicants", "application", "applications", "applied", "applies", "apply", "applying", "appointed", "appointment", "appointments", "appraisal", "appreciate", "appreciated", "appreciation", "approach", "approaches", "appropriate", "appropriations", "approval", "approve", "approved", "approx", "approximate", "approximately", "apps", "apr", "april", "apt", "aqua", "aquarium", "aquatic", "ar", "arab", "arabia", "arabic", "arbitrary", "arbitration", "arbor", "arc", "arcade", "arch", "architect", "architects", "architectural", "architecture", "archive", "archived", "archives", "arctic", "are", "area", "areas", "arena", "arg", "argentina", "argue", "argued", "argument", "arguments", "arise", "arising", "arizona", "arkansas", "arlington", "arm", "armed", "armenia", "armor", "arms", "armstrong", "army", "arnold", "around", "arrange", "arranged", "arrangement", "arrangements", "array", "arrest", "arrested", "arrival", "arrivals", "arrive", "arrived", "arrives", "arrow", "art", "arthritis", "arthur", "article", "articles", "artificial", "artist", "artistic", "artists", "arts", "artwork", "aruba", "as", "asbestos", "ascii", "ash", "ashley", "asia", "asian", "aside", "asin", "ask", "asked", "asking", "asks", "asn", "asp", "aspect", "aspects", "assault", "assembled", "assembly", "assess", "assessed", "assessing", "assessment", "assessments", "asset", "assets", "assign", "assigned", "assignment", "assignments", "assist", "assistance", "assistant", "assisted", "assists", "associate", "associated", "associates", "association", "associations", "assume", "assumed", "assumes", "assuming", "assumption", "assumptions", "assurance", "assure", "assured", "asthma", "astrology", "astronomy", "asus", "asylum", "at", "ata", "ate", "athens", "athletes", "athletic", "athletics", "ati", "atlanta", "atlantic", "atlas", "atm", "atmosphere", "atmospheric", "atom", "atomic", "attach", "attached", "attachment", "attachments", "attack", "attacked", "attacks", "attempt", "attempted", "attempting", "attempts", "attend", "attendance", "attended", "attending", "attention", "attitude", "attitudes", "attorney", "attorneys", "attract", "attraction", "attractions", "attractive", "attribute", "attributes", "au", "auburn", "auckland", "auction", "auctions", "aud", "audi", "audience", "audio", "audit", "auditor", "aug", "august", "aurora", "aus", "austin", "australia", "australian", "austria", "authentic", "authentication", "author", "authorities", "authority", "authorization", "authorized", "authors", "auto", "automated", "automatic", "automatically", "automation", "automobile", "automobiles", "automotive", "autos", "autumn", "av", "availability", "available", "avatar", "ave", "avenue", "average", "avg", "avi", "aviation", "avoid", "avoiding", "avon", "aw", "award", "awarded", "awards", "aware", "awareness", "away", "awesome", "awful", "axis", "aye", "az", "azerbaijan", "ba", "babe", "babes", "babies", "baby", "bachelor", "back", "backed", "background", "backgrounds", "backing", "backup", "bacon", "bacteria", "bacterial", "bad", "badge", "badly", "bag", "baghdad", "bags", "bahamas", "bahrain", "bailey", "baker", "baking", "balance", "balanced", "bald", "bali", "ball", "ballet", "balloon", "ballot", "baltimore", "ban", "banana", "band", "bands", "bandwidth", "bang", "bangkok", "bangladesh", "bank", "banking", "bankruptcy", "banks", "banned", "banner", "banners", "baptist", "bar", "barbados", "barbara", "barbie", "barcelona", "bare", "barely", "bargain", "bargains", "barn", "barnes", "barrel", "barrier", "barriers", "barry", "bars", "base", "baseball", "based", "baseline", "basement", "basename", "bases", "basic", "basically", "basics", "basin", "basis", "basket", "basketball", "baskets", "bass", "bat", "batch", "bath", "bathroom", "bathrooms", "baths", "batman", "batteries", "battery", "battle", "battlefield", "bay", "bb", "bbc", "bbs", "bc", "bd", "be", "beach", "beaches", "beads", "beam", "bean", "beans", "bear", "bearing", "bears", "beast", "beastality", "beat", "beatles", "beats", "beautiful", "beautifully", "beauty", "beaver", "became", "because", "become", "becomes", "becoming", "bed", "bedding", "bedford", "bedroom", "bedrooms", "beds", "bee", "beef", "been", "beer", "before", "began", "begin", "beginner", "beginners", "beginning", "begins", "begun", "behalf", "behavior", "behavioral", "behaviour", "behind", "beijing", "being", "beings", "belarus", "belfast", "belgium", "belief", "beliefs", "believe", "believed", "believes", "belize", "belkin", "bell", "belle", "belly", "belong", "belongs", "below", "belt", "belts", "ben", "bench", "benchmark", "bend", "beneath", "beneficial", "benefit", "benefits", "benjamin", "bennett", "bent", "benz", "berkeley", "berlin", "bermuda", "bernard", "berry", "beside", "besides", "best", "bestsellers", "bet", "beta", "beth", "better", "betting", "betty", "between", "beverage", "beverages", "beverly", "beyond", "bg", "bhutan", "bi", "bias", "bible", "biblical", "bibliographic", "bibliography", "bicycle", "bid", "bidder", "bidding", "bids", "big", "bigger", "biggest", "bike", "bikes", "bikini", "bill", "billing", "billion", "bills", "billy", "bin", "binary", "bind", "binding", "bingo", "bio", "biodiversity", "biographies", "biography", "biol", "biological", "biology", "bios", "biotechnology", "bird", "birds", "birmingham", "birth", "birthday", "bishop", "bit", "bite", "bits", "biz", "bizarre", "bizrate", "bk", "bl", "black", "blackberry", "blackjack", "blacks", "blade", "blades", "blah", "blair", "blake", "blame", "blank", "blanket", "blast", "bleeding", "blend", "bless", "blessed", "blind", "blink", "block", "blocked", "blocking", "blocks", "blog", "blogger", "bloggers", "blogging", "blogs", "blond", "blonde", "blood", "bloom", "bloomberg", "blow", "blowing", "blue", "blues", "bluetooth", "blvd", "bm", "bmw", "bo", "board", "boards", "boat", "boating", "boats", "bob", "bobby", "boc", "bodies", "body", "bold", "bolivia", "bolt", "bomb", "bon", "bond", "bonds", "bone", "bones", "bonus", "book", "booking", "bookings", "bookmark", "bookmarks", "books", "bookstore", "bool", "boolean", "boom", "boost", "boot", "booth", "boots", "booty", "border", "borders", "bored", "boring", "born", "borough", "bosnia", "boss", "boston", "both", "bother", "botswana", "bottle", "bottles", "bottom", "bought", "boulder", "boulevard", "bound", "boundaries", "boundary", "bouquet", "boutique", "bow", "bowl", "bowling", "box", "boxed", "boxes", "boxing", "boy", "boys", "bp", "br", "bra", "bracelet", "bracelets", "bracket", "brad", "bradford", "bradley", "brain", "brake", "brakes", "branch", "branches", "brand", "brandon", "brands", "bras", "brass", "brave", "brazil", "brazilian", "breach", "bread", "break", "breakdown", "breakfast", "breaking", "breaks", "breast", "breath", "breathing", "breed", "breeding", "breeds", "brian", "brick", "bridal", "bride", "bridge", "bridges", "brief", "briefing", "briefly", "briefs", "bright", "brighton", "brilliant", "bring", "bringing", "brings", "brisbane", "bristol", "britain", "britannica", "british", "britney", "broad", "broadband", "broadcast", "broadcasting", "broader", "broadway", "brochure", "brochures", "broke", "broken", "broker", "brokers", "bronze", "brook", "brooklyn", "brooks", "brother", "brothers", "brought", "brown", "browse", "browser", "browsers", "browsing", "bruce", "brunei", "brunette", "brunswick", "brush", "brussels", "brutal", "bryan", "bryant", "bs", "bt", "bubble", "buck", "bucks", "budapest", "buddy", "budget", "budgets", "buf", "buffalo", "buffer", "bufing", "bug", "bugs", "build", "builder", "builders", "building", "buildings", "builds", "built", "bulgaria", "bulgarian", "bulk", "bull", "bullet", "bulletin", "bumper", "bunch", "bundle", "bunny", "burden", "bureau", "buried", "burke", "burlington", "burn", "burner", "burning", "burns", "burst", "burton", "bus", "buses", "bush", "business", "businesses", "busy", "but", "butler", "butter", "butterfly", "button", "buttons", "butts", "buy", "buyer", "buyers", "buying", "buys", "buzz", "bw", "by", "bye", "byte", "bytes", "ca", "cab", "cabin", "cabinet", "cabinets", "cable", "cables", "cache", "cached", "cad", "cadillac", "cafe", "cage", "cake", "cakes", "cal", "calcium", "calculate", "calculated", "calculation", "calculations", "calculator", "calculators", "calendar", "calendars", "calgary", "calibration", "california", "call", "called", "calling", "calls", "calm", "calvin", "cam", "cambodia", "cambridge", "camcorder", "camcorders", "came", "camel", "camera", "cameras", "cameron", "cameroon", "camp", "campaign", "campaigns", "campbell", "camping", "camps", "campus", "cams", "can", "canada", "canadian", "canal", "canberra", "cancel", "cancellation", "cancelled", "cancer", "candidate", "candidates", "candle", "candles", "candy", "cannon", "canon", "cant", "canvas", "canyon", "cap", "capabilities", "capability", "capable", "capacity", "cape", "capital", "capitol", "caps", "captain", "capture", "captured", "car", "carb", "carbon", "card", "cardiac", "cardiff", "cardiovascular", "cards", "care", "career", "careers", "careful", "carefully", "carey", "cargo", "caribbean", "caring", "carl", "carlo", "carlos", "carmen", "carnival", "carol", "carolina", "caroline", "carpet", "carried", "carrier", "carriers", "carries", "carroll", "carry", "carrying", "cars", "cart", "carter", "cartoon", "cartoons", "cartridge", "cartridges", "cas", "casa", "case", "cases", "casey", "cash", "cashiers", "casino", "casinos", "casio", "cassette", "cast", "casting", "castle", "casual", "cat", "catalog", "catalogs", "catalogue", "catalyst", "catch", "categories", "category", "catering", "cathedral", "catherine", "catholic", "cats", "cattle", "caught", "cause", "caused", "causes", "causing", "caution", "cave", "cayman", "cb", "cbs", "cc", "ccd", "cd", "cdna", "cds", "cdt", "ce", "cedar", "ceiling", "celebrate", "celebration", "celebrities", "celebrity", "celebs", "cell", "cells", "cellular", "celtic", "cement", "cemetery", "census", "cent", "center", "centered", "centers", "central", "centre", "centres", "cents", "centuries", "century", "ceo", "ceramic", "ceremony", "certain", "certainly", "certificate", "certificates", "certification", "certified", "cet", "cf", "cfr", "cg", "cgi", "ch", "chad", "chain", "chains", "chair", "chairman", "chairs", "challenge", "challenged", "challenges", "challenging", "chamber", "chambers", "champagne", "champion", "champions", "championship", "championships", "chan", "chance", "chancellor", "chances", "change", "changed", "changelog", "changes", "changing", "channel", "channels", "chaos", "chapel", "chapter", "chapters", "char", "character", "characteristic", "characteristics", "characterization", "characterized", "characters", "charge", "charged", "charger", "chargers", "charges", "charging", "charitable", "charity", "charles", "charleston", "charlie", "charlotte", "charm", "charming", "charms", "chart", "charter", "charts", "chase", "chassis", "chat", "cheap", "cheaper", "cheapest", "cheat", "cheats", "check", "checked", "checking", "checklist", "checkout", "checks", "cheers", "cheese", "chef", "chelsea", "chem", "chemical", "chemicals", "chemistry", "chen", "cheque", "cherry", "chess", "chest", "chester", "chevrolet", "chevy", "chi", "chicago", "chick", "chicken", "chicks", "chief", "child", "childhood", "children", "childrens", "chile", "china", "chinese", "chip", "chips", "cho", "chocolate", "choice", "choices", "choir", "cholesterol", "choose", "choosing", "chorus", "chose", "chosen", "chris", "christ", "christian", "christianity", "christians", "christina", "christine", "christmas", "christopher", "chrome", "chronic", "chronicle", "chronicles", "chrysler", "chubby", "chuck", "church", "churches", "ci", "cia", "cialis", "ciao", "cigarette", "cigarettes", "cincinnati", "cindy", "cinema", "cingular", "cio", "cir", "circle", "circles", "circuit", "circuits", "circular", "circulation", "circumstances", "circus", "cisco", "citation", "citations", "cite", "cited", "cities", "citizen", "citizens", "citizenship", "city", "citysearch", "civic", "civil", "civilian", "civilization", "cj", "cl", "claim", "claimed", "claims", "claire", "clan", "clara", "clarity", "clark", "clarke", "class", "classes", "classic", "classical", "classics", "classification", "classified", "classifieds", "classroom", "clause", "clay", "clean", "cleaner", "cleaners", "cleaning", "cleanup", "clear", "clearance", "cleared", "clearing", "clearly", "clerk", "cleveland", "click", "clicking", "clicks", "client", "clients", "cliff", "climate", "climb", "climbing", "clinic", "clinical", "clinics", "clinton", "clip", "clips", "clock", "clocks", "clone", "close", "closed", "closely", "closer", "closes", "closest", "closing", "closure", "cloth", "clothes", "clothing", "cloud", "clouds", "cloudy", "club", "clubs", "cluster", "clusters", "cm", "cms", "cn", "cnet", "cnn", "co", "coach", "coaches", "coaching", "coal", "coalition", "coast", "coastal", "coat", "coated", "coating", "cocktail", "cod", "code", "codes", "coding", "coffee", "cognitive", "cohen", "coin", "coins", "col", "cold", "cole", "coleman", "colin", "collaboration", "collaborative", "collapse", "collar", "colleague", "colleagues", "collect", "collectables", "collected", "collectible", "collectibles", "collecting", "collection", "collections", "collective", "collector", "collectors", "college", "colleges", "collins", "cologne", "colombia", "colon", "colonial", "colony", "color", "colorado", "colored", "colors", "colour", "colours", "columbia", "columbus", "column", "columnists", "columns", "com", "combat", "combination", "combinations", "combine", "combined", "combines", "combining", "combo", "come", "comedy", "comes", "comfort", "comfortable", "comic", "comics", "coming", "comm", "command", "commander", "commands", "comment", "commentary", "commented", "comments", "commerce", "commercial", "commission", "commissioner", "commissioners", "commissions", "commit", "commitment", "commitments", "committed", "committee", "committees", "commodities", "commodity", "common", "commonly", "commons", "commonwealth", "communicate", "communication", "communications", "communist", "communities", "community", "comp", "compact", "companies", "companion", "company", "compaq", "comparable", "comparative", "compare", "compared", "comparing", "comparison", "comparisons", "compatibility", "compatible", "compensation", "compete", "competent", "competing", "competition", "competitions", "competitive", "competitors", "compilation", "compile", "compiled", "compiler", "complaint", "complaints", "complement", "complete", "completed", "completely", "completing", "completion", "complex", "complexity", "compliance", "compliant", "complicated", "complications", "complimentary", "comply", "component", "components", "composed", "composer", "composite", "composition", "compound", "compounds", "comprehensive", "compressed", "compression", "compromise", "computation", "computational", "compute", "computed", "computer", "computers", "computing", "con", "concentrate", "concentration", "concentrations", "concept", "concepts", "conceptual", "concern", "concerned", "concerning", "concerns", "concert", "concerts", "conclude", "concluded", "conclusion", "conclusions", "concord", "concrete", "condition", "conditional", "conditioning", "conditions", "condo", "condos", "conduct", "conducted", "conducting", "conf", "conference", "conferences", "conferencing", "confidence", "confident", "confidential", "confidentiality", "config", "configuration", "configurations", "configure", "configured", "configuring", "confirm", "confirmation", "confirmed", "conflict", "conflicts", "confused", "confusion", "congo", "congratulations", "congress", "congressional", "conjunction", "connect", "connected", "connecticut", "connecting", "connection", "connections", "connectivity", "connector", "connectors", "cons", "conscious", "consciousness", "consecutive", "consensus", "consent", "consequence", "consequences", "consequently", "conservation", "conservative", "consider", "considerable", "consideration", "considerations", "considered", "considering", "considers", "consist", "consistency", "consistent", "consistently", "consisting", "consists", "console", "consoles", "consolidated", "consolidation", "consortium", "conspiracy", "const", "constant", "constantly", "constitute", "constitutes", "constitution", "constitutional", "constraint", "constraints", "construct", "constructed", "construction", "consult", "consultancy", "consultant", "consultants", "consultation", "consulting", "consumer", "consumers", "consumption", "contact", "contacted", "contacting", "contacts", "contain", "contained", "container", "containers", "containing", "contains", "contamination", "contemporary", "content", "contents", "contest", "contests", "context", "continent", "continental", "continually", "continue", "continued", "continues", "continuing", "continuity", "continuous", "continuously", "contract", "contracting", "contractor", "contractors", "contracts", "contrary", "contrast", "contribute", "contributed", "contributing", "contribution", "contributions", "contributor", "contributors", "control", "controlled", "controller", "controllers", "controlling", "controls", "controversial", "controversy", "convenience", "convenient", "convention", "conventional", "conventions", "convergence", "conversation", "conversations", "conversion", "convert", "converted", "converter", "convertible", "convicted", "conviction", "convinced", "cook", "cookbook", "cooked", "cookie", "cookies", "cooking", "cool", "cooler", "cooling", "cooper", "cooperation", "cooperative", "coordinate", "coordinated", "coordinates", "coordination", "coordinator", "cop", "cope", "copied", "copies", "copper", "copy", "copying", "copyright", "copyrighted", "copyrights", "coral", "cord", "cordless", "core", "cork", "corn", "cornell", "corner", "corners", "cornwall", "corp", "corporate", "corporation", "corporations", "corps", "corpus", "correct", "corrected", "correction", "corrections", "correctly", "correlation", "correspondence", "corresponding", "corruption", "cos", "cosmetic", "cosmetics", "cost", "costa", "costs", "costume", "costumes", "cottage", "cottages", "cotton", "could", "council", "councils", "counsel", "counseling", "count", "counted", "counter", "counters", "counties", "counting", "countries", "country", "counts", "county", "couple", "coupled", "couples", "coupon", "coupons", "courage", "courier", "course", "courses", "court", "courtesy", "courts", "cove", "cover", "coverage", "covered", "covering", "covers", "cow", "cowboy", "cp", "cpu", "cr", "crack", "cradle", "craft", "crafts", "craig", "craps", "crash", "crawford", "crazy", "cream", "create", "created", "creates", "creating", "creation", "creations", "creative", "creativity", "creator", "creature", "creatures", "credit", "credits", "creek", "crest", "crew", "cricket", "crime", "crimes", "criminal", "crisis", "criteria", "criterion", "critical", "criticism", "critics", "crm", "croatia", "crop", "crops", "cross", "crossing", "crossword", "crowd", "crown", "crucial", "crude", "cruise", "cruises", "cruz", "cry", "crystal", "cs", "css", "cst", "ct", "ctrl", "cu", "cuba", "cube", "cubic", "cuisine", "cult", "cultural", "culture", "cultures", "cumulative", "cup", "cups", "cure", "curious", "currencies", "currency", "current", "currently", "curriculum", "cursor", "curtis", "curve", "curves", "custody", "custom", "customer", "customers", "customise", "customize", "customized", "customs", "cut", "cute", "cuts", "cutting", "cv", "cvs", "cw", "cyber", "cycle", "cycles", "cycling", "cylinder", "cyprus", "cz", "czech", "da", "dad", "daddy", "daily", "dairy", "daisy", "dakota", "dale", "dallas", "dam", "damage", "damaged", "damages", "dame", "dan", "dana", "dance", "dancing", "danger", "dangerous", "daniel", "danish", "danny", "dans", "dare", "dark", "darkness", "darwin", "das", "dash", "dat", "data", "database", "databases", "date", "dated", "dates", "dating", "daughter", "daughters", "dave", "david", "davidson", "davis", "dawn", "day", "days", "dayton", "db", "dc", "dd", "ddr", "de", "dead", "deadline", "deadly", "deaf", "deal", "dealer", "dealers", "dealing", "deals", "dealt", "dealtime", "dean", "dear", "death", "deaths", "debate", "debian", "deborah", "debt", "debug", "debut", "dec", "decade", "decades", "december", "decent", "decide", "decided", "decimal", "decision", "decisions", "deck", "declaration", "declare", "declared", "decline", "declined", "decor", "decorating", "decorative", "decrease", "decreased", "dedicated", "dee", "deemed", "deep", "deeper", "deeply", "deer", "def", "default", "defeat", "defects", "defence", "defend", "defendant", "defense", "defensive", "deferred", "deficit", "define", "defined", "defines", "defining", "definitely", "definition", "definitions", "degree", "degrees", "del", "delaware", "delay", "delayed", "delays", "delegation", "delete", "deleted", "delhi", "delicious", "delight", "deliver", "delivered", "delivering", "delivers", "delivery", "dell", "delta", "deluxe", "dem", "demand", "demanding", "demands", "demo", "democracy", "democrat", "democratic", "democrats", "demographic", "demonstrate", "demonstrated", "demonstrates", "demonstration", "den", "denial", "denied", "denmark", "dennis", "dense", "density", "dental", "dentists", "denver", "deny", "department", "departmental", "departments", "departure", "depend", "dependence", "dependent", "depending", "depends", "deployment", "deposit", "deposits", "depot", "depression", "dept", "depth", "deputy", "der", "derby", "derek", "derived", "des", "descending", "describe", "described", "describes", "describing", "description", "descriptions", "desert", "deserve", "design", "designated", "designation", "designed", "designer", "designers", "designing", "designs", "desirable", "desire", "desired", "desk", "desktop", "desktops", "desperate", "despite", "destination", "destinations", "destiny", "destroy", "destroyed", "destruction", "detail", "detailed", "details", "detect", "detected", "detection", "detective", "detector", "determination", "determine", "determined", "determines", "determining", "detroit", "deutsch", "deutsche", "deutschland", "dev", "devel", "develop", "developed", "developer", "developers", "developing", "development", "developmental", "developments", "develops", "deviant", "deviation", "device", "devices", "devil", "devon", "devoted", "df", "dg", "dh", "di", "diabetes", "diagnosis", "diagnostic", "diagram", "dial", "dialog", "dialogue", "diameter", "diamond", "diamonds", "diana", "diane", "diary", "dice", "dicke", "dictionaries", "dictionary", "did", "die", "died", "diego", "dies", "diesel", "diet", "dietary", "diff", "differ", "difference", "differences", "different", "differential", "differently", "difficult", "difficulties", "difficulty", "diffs", "dig", "digest", "digit", "digital", "dim", "dimension", "dimensional", "dimensions", "dining", "dinner", "dip", "diploma", "dir", "direct", "directed", "direction", "directions", "directive", "directly", "director", "directories", "directors", "directory", "dirt", "dirty", "dis", "disabilities", "disability", "disable", "disabled", "disagree", "disappointed", "disaster", "disc", "discharge", "disciplinary", "discipline", "disciplines", "disclaimer", "disclaimers", "disclose", "disclosure", "disco", "discount", "discounted", "discounts", "discover", "discovered", "discovery", "discrete", "discretion", "discrimination", "discs", "discuss", "discussed", "discusses", "discussing", "discussion", "discussions", "disease", "diseases", "dish", "dishes", "disk", "disks", "disney", "disorder", "disorders", "dispatch", "dispatched", "display", "displayed", "displaying", "displays", "disposal", "disposition", "dispute", "disputes", "dist", "distance", "distances", "distant", "distinct", "distinction", "distinguished", "distribute", "distributed", "distribution", "distributions", "distributor", "distributors", "district", "districts", "disturbed", "div", "dive", "diverse", "diversity", "divide", "divided", "dividend", "divine", "diving", "division", "divisions", "divorce", "divx", "diy", "dj", "dk", "dl", "dm", "dna", "dns", "do", "doc", "dock", "docs", "doctor", "doctors", "doctrine", "document", "documentary", "documentation", "documented", "documents", "dod", "dodge", "doe", "does", "dog", "dogs", "doing", "doll", "dollar", "dollars", "dolls", "dom", "domain", "domains", "dome", "domestic", "dominant", "dominican", "don", "donald", "donate", "donated", "donation", "donations", "done", "donna", "donor", "donors", "dont", "doom", "door", "doors", "dos", "dosage", "dose", "dot", "double", "doubt", "doug", "douglas", "dover", "dow", "down", "download", "downloadable", "downloaded", "downloading", "downloads", "downtown", "dozen", "dozens", "dp", "dpi", "dr", "draft", "drag", "dragon", "drain", "drainage", "drama", "dramatic", "dramatically", "draw", "drawing", "drawings", "drawn", "draws", "dream", "dreams", "dress", "dressed", "dresses", "dressing", "drew", "dried", "drill", "drilling", "drink", "drinking", "drinks", "drive", "driven", "driver", "drivers", "drives", "driving", "drop", "dropped", "drops", "drove", "drug", "drugs", "drum", "drums", "drunk", "dry", "dryer", "ds", "dsc", "dsl", "dt", "dts", "du", "dual", "dubai", "dublin", "duck", "dude", "due", "dui", "duke", "dumb", "dump", "duncan", "duo", "duplicate", "durable", "duration", "durham", "during", "dust", "dutch", "duties", "duty", "dv", "dvd", "dvds", "dx", "dying", "dylan", "dynamic", "dynamics", "ea", "each", "eagle", "eagles", "ear", "earl", "earlier", "earliest", "early", "earn", "earned", "earning", "earnings", "earrings", "ears", "earth", "earthquake", "ease", "easier", "easily", "east", "easter", "eastern", "easy", "eat", "eating", "eau", "ebay", "ebony", "ebook", "ebooks", "ec", "echo", "eclipse", "eco", "ecological", "ecology", "ecommerce", "economic", "economics", "economies", "economy", "ecuador", "ed", "eddie", "eden", "edgar", "edge", "edges", "edinburgh", "edit", "edited", "editing", "edition", "editions", "editor", "editorial", "editorials", "editors", "edmonton", "eds", "edt", "educated", "education", "educational", "educators", "edward", "edwards", "ee", "ef", "effect", "effective", "effectively", "effectiveness", "effects", "efficiency", "efficient", "efficiently", "effort", "efforts", "eg", "egg", "eggs", "egypt", "egyptian", "eh", "eight", "either", "el", "elder", "elderly", "elect", "elected", "election", "elections", "electoral", "electric", "electrical", "electricity", "electro", "electron", "electronic", "electronics", "elegant", "element", "elementary", "elements", "elephant", "elevation", "eleven", "eligibility", "eligible", "eliminate", "elimination", "elite", "elizabeth", "ellen", "elliott", "ellis", "else", "elsewhere", "elvis", "em", "emacs", "email", "emails", "embassy", "embedded", "emerald", "emergency", "emerging", "emily", "eminem", "emirates", "emission", "emissions", "emma", "emotional", "emotions", "emperor", "emphasis", "empire", "empirical", "employ", "employed", "employee", "employees", "employer", "employers", "employment", "empty", "en", "enable", "enabled", "enables", "enabling", "enb", "enclosed", "enclosure", "encoding", "encounter", "encountered", "encourage", "encouraged", "encourages", "encouraging", "encryption", "encyclopedia", "end", "endangered", "ended", "endif", "ending", "endless", "endorsed", "endorsement", "ends", "enemies", "enemy", "energy", "enforcement", "eng", "engage", "engaged", "engagement", "engaging", "engine", "engineer", "engineering", "engineers", "engines", "england", "english", "enhance", "enhanced", "enhancement", "enhancements", "enhancing", "enjoy", "enjoyed", "enjoying", "enlarge", "enlargement", "enlist", "enormous", "enough", "enquiries", "enquiry", "enrolled", "enrollment", "ensemble", "ensure", "ensures", "ensuring", "ent", "enter", "entered", "entering", "enterprise", "enterprises", "enters", "entertaining", "entertainment", "entire", "entirely", "entities", "entitled", "entity", "entrance", "entrepreneur", "entrepreneurs", "entries", "entry", "envelope", "environment", "environmental", "environments", "enzyme", "eos", "ep", "epa", "epic", "epinions", "episode", "episodes", "epson", "eq", "equal", "equality", "equally", "equation", "equations", "equilibrium", "equipment", "equipped", "equity", "equivalent", "er", "era", "eric", "ericsson", "erik", "erotica", "erp", "error", "errors", "es", "escape", "escorts", "especially", "espn", "essay", "essays", "essence", "essential", "essentially", "essentials", "essex", "est", "establish", "established", "establishing", "establishment", "estate", "estates", "estimate", "estimated", "estimates", "estimation", "estonia", "et", "etc", "eternal", "ethernet", "ethical", "ethics", "ethiopia", "ethnic", "eu", "eugene", "eur", "euro", "europe", "european", "euros", "ev", "eva", "eval", "evaluate", "evaluated", "evaluating", "evaluation", "evaluations", "evanescence", "evans", "eve", "even", "evening", "event", "events", "eventually", "ever", "every", "everybody", "everyday", "everyone", "everything", "everywhere", "evidence", "evident", "evil", "evolution", "ex", "exact", "exactly", "exam", "examination", "examinations", "examine", "examined", "examines", "examining", "example", "examples", "exams", "exceed", "excel", "excellence", "excellent", "except", "exception", "exceptional", "exceptions", "excerpt", "excess", "excessive", "exchange", "exchanges", "excited", "excitement", "exciting", "exclude", "excluded", "excluding", "exclusion", "exclusive", "exclusively", "excuse", "exec", "execute", "executed", "execution", "executive", "executives", "exempt", "exemption", "exercise", "exercises", "exhaust", "exhibit", "exhibition", "exhibitions", "exhibits", "exist", "existed", "existence", "existing", "exists", "exit", "exotic", "exp", "expand", "expanded", "expanding", "expansion", "expansys", "expect", "expectations", "expected", "expects", "expedia", "expenditure", "expenditures", "expense", "expenses", "expensive", "experience", "experienced", "experiences", "experiencing", "experiment", "experimental", "experiments", "expert", "expertise", "experts", "expiration", "expired", "expires", "explain", "explained", "explaining", "explains", "explanation", "explicit", "explicitly", "exploration", "explore", "explorer", "exploring", "explosion", "expo", "export", "exports", "exposed", "exposure", "express", "expressed", "expression", "expressions", "ext", "extend", "extended", "extending", "extends", "extension", "extensions", "extensive", "extent", "exterior", "external", "extra", "extract", "extraction", "extraordinary", "extras", "extreme", "extremely", "eye", "eyed", "eyes", "ez", "fa", "fabric", "fabrics", "fabulous", "face", "faced", "faces", "facial", "facilitate", "facilities", "facility", "facing", "fact", "factor", "factors", "factory", "facts", "faculty", "fail", "failed", "failing", "fails", "failure", "failures", "fair", "fairfield", "fairly", "fairy", "faith", "fake", "fall", "fallen", "falling", "falls", "false", "fame", "familiar", "families", "family", "famous", "fan", "fancy", "fans", "fantastic", "fantasy", "faq", "faqs", "far", "fare", "fares", "farm", "farmer", "farmers", "farming", "farms", "fascinating", "fashion", "fast", "faster", "fastest", "fat", "fatal", "fate", "father", "fathers", "fatty", "fault", "favor", "favorite", "favorites", "favors", "favour", "favourite", "favourites", "fax", "fbi", "fc", "fcc", "fd", "fda", "fe", "fear", "fears", "feat", "feature", "featured", "features", "featuring", "feb", "february", "fed", "federal", "federation", "fee", "feed", "feedback", "feeding", "feeds", "feel", "feeling", "feelings", "feels", "fees", "feet", "fell", "fellow", "fellowship", "felt", "female", "females", "fence", "feof", "ferrari", "ferry", "festival", "festivals", "fetish", "fever", "few", "fewer", "ff", "fg", "fi", "fiber", "fibre", "fiction", "field", "fields", "fifteen", "fifth", "fifty", "fig", "fight", "fighter", "fighters", "fighting", "figure", "figured", "figures", "fiji", "file", "filed", "filename", "files", "filing", "fill", "filled", "filling", "film", "filme", "films", "filter", "filtering", "filters", "fin", "final", "finally", "finals", "finance", "finances", "financial", "financing", "find", "findarticles", "finder", "finding", "findings", "findlaw", "finds", "fine", "finest", "finger", "fingers", "finish", "finished", "finishing", "finite", "finland", "finnish", "fioricet", "fire", "fired", "firefox", "fireplace", "fires", "firewall", "firewire", "firm", "firms", "firmware", "first", "fiscal", "fish", "fisher", "fisheries", "fishing", "fist", "fit", "fitness", "fits", "fitted", "fitting", "five", "fix", "fixed", "fixes", "fixtures", "fl", "flag", "flags", "flame", "flash", "flashers", "flashing", "flat", "flavor", "fleece", "fleet", "flesh", "flex", "flexibility", "flexible", "flickr", "flight", "flights", "flip", "float", "floating", "flood", "floor", "flooring", "floors", "floppy", "floral", "florence", "florida", "florist", "florists", "flour", "flow", "flower", "flowers", "flows", "floyd", "flu", "fluid", "flush", "flux", "fly", "flyer", "flying", "fm", "fo", "foam", "focal", "focus", "focused", "focuses", "focusing", "fog", "fold", "folder", "folders", "folding", "folk", "folks", "follow", "followed", "following", "follows", "font", "fonts", "foo", "food", "foods", "fool", "foot", "footage", "football", "footwear", "for", "forbes", "forbidden", "force", "forced", "forces", "ford", "forecast", "forecasts", "foreign", "forest", "forestry", "forests", "forever", "forge", "forget", "forgot", "forgotten", "fork", "form", "formal", "format", "formation", "formats", "formatting", "formed", "former", "formerly", "forming", "forms", "formula", "fort", "forth", "fortune", "forty", "forum", "forums", "forward", "forwarding", "fossil", "foster", "foto", "fotos", "fought", "foul", "found", "foundation", "foundations", "founded", "founder", "fountain", "four", "fourth", "fox", "fp", "fr", "fraction", "fragrance", "fragrances", "frame", "framed", "frames", "framework", "framing", "france", "franchise", "francis", "francisco", "frank", "frankfurt", "franklin", "fraser", "fraud", "fred", "frederick", "free", "freebsd", "freedom", "freelance", "freely", "freeware", "freeze", "freight", "french", "frequencies", "frequency", "frequent", "frequently", "fresh", "fri", "friday", "fridge", "friend", "friendly", "friends", "friendship", "frog", "from", "front", "frontier", "frontpage", "frost", "frozen", "fruit", "fruits", "fs", "ft", "ftp", "fu", "fuel", "fuji", "fujitsu", "full", "fully", "fun", "function", "functional", "functionality", "functioning", "functions", "fund", "fundamental", "fundamentals", "funded", "funding", "fundraising", "funds", "funeral", "funk", "funky", "funny", "fur", "furnished", "furnishings", "furniture", "further", "furthermore", "fusion", "future", "futures", "fuzzy", "fw", "fwd", "fx", "fy", "ga", "gabriel", "gadgets", "gage", "gain", "gained", "gains", "galaxy", "gale", "galleries", "gallery", "gambling", "game", "gamecube", "games", "gamespot", "gaming", "gamma", "gang", "gap", "gaps", "garage", "garbage", "garcia", "garden", "gardening", "gardens", "garlic", "garmin", "gary", "gas", "gasoline", "gate", "gates", "gateway", "gather", "gathered", "gathering", "gauge", "gave", "gay", "gays", "gazette", "gb", "gba", "gbp", "gc", "gcc", "gd", "gdp", "ge", "gear", "geek", "gel", "gem", "gen", "gender", "gene", "genealogy", "general", "generally", "generate", "generated", "generates", "generating", "generation", "generations", "generator", "generators", "generic", "generous", "genes", "genesis", "genetic", "genetics", "geneva", "genius", "genome", "genre", "genres", "gentle", "gentleman", "gently", "genuine", "geo", "geographic", "geographical", "geography", "geological", "geology", "geometry", "george", "georgia", "gerald", "german", "germany", "get", "gets", "getting", "gg", "ghana", "ghost", "ghz", "gi", "giant", "giants", "gibraltar", "gibson", "gif", "gift", "gifts", "gig", "gilbert", "girl", "girlfriend", "girls", "gis", "give", "given", "gives", "giving", "gl", "glad", "glance", "glasgow", "glass", "glasses", "glen", "glenn", "global", "globe", "glory", "glossary", "gloves", "glow", "glucose", "gm", "gmbh", "gmc", "gmt", "gnome", "gnu", "go", "goal", "goals", "goat", "gods", "goes", "going", "gold", "golden", "golf", "gone", "gonna", "good", "goods", "google", "gordon", "gore", "gorgeous", "gospel", "gossip", "got", "gothic", "goto", "gotta", "gotten", "gourmet", "governance", "governing", "government", "governmental", "governments", "governor", "gp", "gpl", "gps", "gr", "grab", "grace", "grad", "grade", "grades", "gradually", "graduate", "graduated", "graduates", "graduation", "graham", "grain", "grammar", "grams", "grand", "grande", "granny", "grant", "granted", "grants", "graph", "graphic", "graphical", "graphics", "graphs", "gras", "grass", "grateful", "gratis", "gratuit", "grave", "gravity", "gray", "great", "greater", "greatest", "greatly", "greece", "greek", "green", "greene", "greenhouse", "greensboro", "greeting", "greetings", "greg", "gregory", "grenada", "grew", "grey", "grid", "griffin", "grill", "grip", "grocery", "groove", "gross", "ground", "grounds", "groundwater", "group", "groups", "grove", "grow", "growing", "grown", "grows", "growth", "gs", "gsm", "gst", "gt", "gtk", "guam", "guarantee", "guaranteed", "guarantees", "guard", "guardian", "guards", "guatemala", "guess", "guest", "guestbook", "guests", "gui", "guidance", "guide", "guided", "guidelines", "guides", "guild", "guilty", "guinea", "guitar", "guitars", "gulf", "gun", "guns", "guru", "guy", "guyana", "guys", "gym", "gzip", "ha", "habitat", "habits", "hack", "hacker", "had", "hair", "hairy", "haiti", "half", "halifax", "hall", "halloween", "halo", "ham", "hamburg", "hamilton", "hammer", "hampshire", "hampton", "hand", "handbags", "handbook", "handed", "handheld", "handhelds", "handle", "handled", "handles", "handling", "handmade", "hands", "handy", "hang", "hanging", "hans", "hansen", "happen", "happened", "happening", "happens", "happiness", "happy", "harassment", "harbor", "harbour", "hard", "hardcover", "harder", "hardly", "hardware", "hardwood", "harley", "harm", "harmful", "harmony", "harold", "harper", "harris", "harrison", "harry", "hart", "hartford", "harvard", "harvest", "harvey", "has", "hash", "hat", "hate", "hater", "hats", "have", "haven", "having", "hawaii", "hawaiian", "hawk", "hay", "hayes", "hazard", "hazardous", "hazards", "hb", "hc", "hd", "hdtv", "he", "head", "headed", "header", "headers", "heading", "headline", "headlines", "headphones", "headquarters", "heads", "headset", "healing", "health", "healthcare", "healthy", "hear", "heard", "hearing", "hearings", "heart", "hearts", "heat", "heated", "heater", "heath", "heather", "heating", "heaven", "heavily", "heavy", "hebrew", "heel", "height", "heights", "held", "helen", "helena", "helicopter", "hello", "helmet", "help", "helped", "helpful", "helping", "helps", "hence", "henderson", "henry", "hepatitis", "her", "herald", "herb", "herbal", "herbs", "here", "hereby", "herein", "heritage", "hero", "heroes", "herself", "hewlett", "hey", "hh", "hi", "hidden", "hide", "hierarchy", "high", "higher", "highest", "highland", "highlight", "highlighted", "highlights", "highly", "highs", "highway", "highways", "hiking", "hill", "hills", "hilton", "him", "himself", "hindu", "hint", "hints", "hip", "hire", "hired", "hiring", "his", "hispanic", "hist", "historic", "historical", "history", "hit", "hitachi", "hits", "hitting", "hiv", "hk", "hl", "ho", "hobbies", "hobby", "hockey", "hold", "holdem", "holder", "holders", "holding", "holdings", "holds", "hole", "holes", "holiday", "holidays", "holland", "hollow", "holly", "hollywood", "holmes", "holocaust", "holy", "home", "homeland", "homeless", "homepage", "homes", "hometown", "homework", "hon", "honda", "honduras", "honest", "honey", "hong", "honolulu", "honor", "honors", "hood", "hook", "hop", "hope", "hoped", "hopefully", "hopes", "hoping", "hopkins", "horizon", "horizontal", "hormone", "horn", "horrible", "horror", "horse", "horses", "hose", "hospital", "hospitality", "hospitals", "host", "hosted", "hostel", "hostels", "hosting", "hosts", "hot", "hotel", "hotels", "hotmail", "hottest", "hour", "hourly", "hours", "house", "household", "households", "houses", "housewares", "housewives", "housing", "houston", "how", "howard", "however", "howto", "hp", "hq", "hr", "href", "hrs", "hs", "ht", "html", "http", "hu", "hub", "hudson", "huge", "hugh", "hughes", "hugo", "hull", "human", "humanitarian", "humanities", "humanity", "humans", "humidity", "humor", "hundred", "hundreds", "hung", "hungarian", "hungary", "hunger", "hungry", "hunt", "hunter", "hunting", "huntington", "hurricane", "hurt", "husband", "hwy", "hybrid", "hydraulic", "hydrocodone", "hydrogen", "hygiene", "hypothesis", "hypothetical", "hyundai", "hz", "ia", "ian", "ibm", "ic", "ice", "iceland", "icon", "icons", "icq", "ict", "id", "idaho", "ide", "idea", "ideal", "ideas", "identical", "identification", "identified", "identifier", "identifies", "identify", "identifying", "identity", "idle", "idol", "ids", "ie", "ieee", "if", "ignore", "ignored", "ii", "iii", "il", "ill", "illegal", "illinois", "illness", "illustrated", "illustration", "illustrations", "im", "image", "images", "imagination", "imagine", "imaging", "img", "immediate", "immediately", "immigrants", "immigration", "immune", "immunology", "impact", "impacts", "impaired", "imperial", "implement", "implementation", "implemented", "implementing", "implications", "implied", "implies", "import", "importance", "important", "importantly", "imported", "imports", "impose", "imposed", "impossible", "impressed", "impression", "impressive", "improve", "improved", "improvement", "improvements", "improving", "in", "inappropriate", "inbox", "inc", "incentive", "incentives", "inch", "inches", "incidence", "incident", "incidents", "incl", "include", "included", "includes", "including", "inclusion", "inclusive", "income", "incoming", "incomplete", "incorporate", "incorporated", "incorrect", "increase", "increased", "increases", "increasing", "increasingly", "incredible", "incurred", "ind", "indeed", "independence", "independent", "independently", "index", "indexed", "indexes", "india", "indian", "indiana", "indianapolis", "indians", "indicate", "indicated", "indicates", "indicating", "indication", "indicator", "indicators", "indices", "indie", "indigenous", "indirect", "individual", "individually", "individuals", "indonesia", "indonesian", "indoor", "induced", "induction", "industrial", "industries", "industry", "inexpensive", "inf", "infant", "infants", "infected", "infection", "infections", "infectious", "infinite", "inflation", "influence", "influenced", "influences", "info", "inform", "informal", "information", "informational", "informative", "informed", "infrared", "infrastructure", "infringement", "ing", "ingredients", "inherited", "initial", "initially", "initiated", "initiative", "initiatives", "injection", "injured", "injuries", "injury", "ink", "inkjet", "inline", "inn", "inner", "innocent", "innovation", "innovations", "innovative", "inns", "input", "inputs", "inquire", "inquiries", "inquiry", "ins", "insects", "insert", "inserted", "insertion", "inside", "insider", "insight", "insights", "inspection", "inspections", "inspector", "inspiration", "inspired", "install", "installation", "installations", "installed", "installing", "instance", "instances", "instant", "instantly", "instead", "institute", "institutes", "institution", "institutional", "institutions", "instruction", "instructional", "instructions", "instructor", "instructors", "instrument", "instrumental", "instrumentation", "instruments", "insulation", "insulin", "insurance", "insured", "int", "intake", "integer", "integral", "integrate", "integrated", "integrating", "integration", "integrity", "intel", "intellectual", "intelligence", "intelligent", "intend", "intended", "intense", "intensity", "intensive", "intent", "intention", "inter", "interact", "interaction", "interactions", "interactive", "interest", "interested", "interesting", "interests", "interface", "interfaces", "interference", "interim", "interior", "intermediate", "internal", "international", "internationally", "internet", "internship", "interpretation", "interpreted", "interracial", "intersection", "interstate", "interval", "intervals", "intervention", "interventions", "interview", "interviews", "intimate", "intl", "into", "intranet", "intro", "introduce", "introduced", "introduces", "introducing", "introduction", "introductory", "invalid", "invasion", "invention", "inventory", "invest", "investigate", "investigated", "investigation", "investigations", "investigator", "investigators", "investing", "investment", "investments", "investor", "investors", "invisible", "invision", "invitation", "invitations", "invite", "invited", "invoice", "involve", "involved", "involvement", "involves", "involving", "io", "ion", "iowa", "ip", "ipaq", "ipod", "ips", "ir", "ira", "iran", "iraq", "iraqi", "irc", "ireland", "irish", "iron", "irrigation", "irs", "is", "isa", "isaac", "isbn", "islam", "islamic", "island", "islands", "isle", "iso", "isolated", "isolation", "isp", "israel", "israeli", "issn", "issue", "issued", "issues", "ist", "istanbul", "it", "italia", "italian", "italiano", "italic", "italy", "item", "items", "its", "itself", "itunes", "iv", "ivory", "ix", "ja", "jack", "jacket", "jackets", "jackie", "jackson", "jacksonville", "jacob", "jade", "jaguar", "jail", "jake", "jam", "jamaica", "james", "jamie", "jan", "jane", "janet", "january", "japan", "japanese", "jar", "jason", "java", "javascript", "jay", "jazz", "jc", "jd", "je", "jean", "jeans", "jeep", "jeff", "jefferson", "jeffrey", "jelsoft", "jennifer", "jenny", "jeremy", "jerry", "jersey", "jerusalem", "jesse", "jessica", "jesus", "jet", "jets", "jewel", "jewellery", "jewelry", "jewish", "jews", "jill", "jim", "jimmy", "jj", "jm", "joan", "job", "jobs", "joe", "joel", "john", "johnny", "johns", "johnson", "johnston", "join", "joined", "joining", "joins", "joint", "joke", "jokes", "jon", "jonathan", "jones", "jordan", "jose", "joseph", "josh", "joshua", "journal", "journalism", "journalist", "journalists", "journals", "journey", "joy", "joyce", "jp", "jpeg", "jpg", "jr", "js", "juan", "judge", "judges", "judgment", "judicial", "judy", "juice", "jul", "julia", "julian", "julie", "july", "jump", "jumping", "jun", "junction", "june", "jungle", "junior", "junk", "jurisdiction", "jury", "just", "justice", "justify", "justin", "juvenile", "jvc", "ka", "kai", "kansas", "karaoke", "karen", "karl", "karma", "kate", "kathy", "katie", "katrina", "kay", "kazakhstan", "kb", "kde", "keen", "keep", "keeping", "keeps", "keith", "kelkoo", "kelly", "ken", "kennedy", "kenneth", "kenny", "keno", "kent", "kentucky", "kenya", "kept", "kernel", "kerry", "kevin", "key", "keyboard", "keyboards", "keys", "keyword", "keywords", "kg", "kick", "kid", "kidney", "kids", "kijiji", "kill", "killed", "killer", "killing", "kills", "kilometers", "kim", "kinase", "kind", "kinda", "kinds", "king", "kingdom", "kings", "kingston", "kirk", "kiss", "kissing", "kit", "kitchen", "kits", "kitty", "klein", "km", "knee", "knew", "knife", "knight", "knights", "knit", "knitting", "knives", "knock", "know", "knowing", "knowledge", "knowledgestorm", "known", "knows", "ko", "kodak", "kong", "korea", "korean", "kruger", "ks", "kurt", "kuwait", "kw", "ky", "kyle", "la", "lab", "label", "labeled", "labels", "labor", "laboratories", "laboratory", "labour", "labs", "lace", "lack", "ladder", "laden", "ladies", "lady", "lafayette", "laid", "lake", "lakes", "lamb", "lambda", "lamp", "lamps", "lan", "lancaster", "lance", "land", "landing", "lands", "landscape", "landscapes", "lane", "lanes", "lang", "language", "languages", "lanka", "laos", "lap", "laptop", "laptops", "large", "largely", "larger", "largest", "larry", "las", "laser", "last", "lasting", "lat", "late", "lately", "later", "latest", "latex", "latin", "latina", "latinas", "latino", "latitude", "latter", "latvia", "lauderdale", "laugh", "laughing", "launch", "launched", "launches", "laundry", "laura", "lauren", "law", "lawn", "lawrence", "laws", "lawsuit", "lawyer", "lawyers", "lay", "layer", "layers", "layout", "lazy", "lb", "lbs", "lc", "lcd", "ld", "le", "lead", "leader", "leaders", "leadership", "leading", "leads", "leaf", "league", "lean", "learn", "learned", "learners", "learning", "lease", "leasing", "least", "leather", "leave", "leaves", "leaving", "lebanon", "lecture", "lectures", "led", "lee", "leeds", "left", "leg", "legacy", "legal", "legally", "legend", "legendary", "legends", "legislation", "legislative", "legislature", "legitimate", "legs", "leisure", "lemon", "len", "lender", "lenders", "lending", "length", "lens", "lenses", "leo", "leon", "leonard", "leone", "les", "lesbian", "lesbians", "leslie", "less", "lesser", "lesson", "lessons", "let", "lets", "letter", "letters", "letting", "leu", "level", "levels", "levitra", "levy", "lewis", "lexington", "lexmark", "lexus", "lf", "lg", "li", "liabilities", "liability", "liable", "lib", "liberal", "liberia", "liberty", "librarian", "libraries", "library", "libs", "licence", "license", "licensed", "licenses", "licensing", "licking", "lid", "lie", "liechtenstein", "lies", "life", "lifestyle", "lifetime", "lift", "light", "lightbox", "lighter", "lighting", "lightning", "lights", "lightweight", "like", "liked", "likelihood", "likely", "likes", "likewise", "lil", "lime", "limit", "limitation", "limitations", "limited", "limiting", "limits", "limousines", "lincoln", "linda", "lindsay", "line", "linear", "lined", "lines", "lingerie", "link", "linked", "linking", "links", "linux", "lion", "lions", "lip", "lips", "liquid", "lisa", "list", "listed", "listen", "listening", "listing", "listings", "listprice", "lists", "lit", "lite", "literacy", "literally", "literary", "literature", "lithuania", "litigation", "little", "live", "livecam", "lived", "liver", "liverpool", "lives", "livestock", "living", "liz", "ll", "llc", "lloyd", "llp", "lm", "ln", "lo", "load", "loaded", "loading", "loads", "loan", "loans", "lobby", "loc", "local", "locale", "locally", "locate", "located", "location", "locations", "locator", "lock", "locked", "locking", "locks", "lodge", "lodging", "log", "logan", "logged", "logging", "logic", "logical", "login", "logistics", "logitech", "logo", "logos", "logs", "lol", "london", "lone", "lonely", "long", "longer", "longest", "longitude", "look", "looked", "looking", "looks", "looksmart", "lookup", "loop", "loops", "loose", "lopez", "lord", "los", "lose", "losing", "loss", "losses", "lost", "lot", "lots", "lottery", "lotus", "lou", "loud", "louis", "louise", "louisiana", "louisville", "lounge", "love", "loved", "lovely", "lover", "lovers", "loves", "loving", "low", "lower", "lowest", "lows", "lp", "ls", "lt", "ltd", "lu", "lucas", "lucia", "luck", "lucky", "lucy", "luggage", "luis", "luke", "lunch", "lung", "luther", "luxembourg", "luxury", "lycos", "lying", "lynn", "lyric", "lyrics", "ma", "mac", "macedonia", "machine", "machinery", "machines", "macintosh", "macro", "macromedia", "mad", "madagascar", "made", "madison", "madness", "madonna", "madrid", "mae", "mag", "magazine", "magazines", "magic", "magical", "magnet", "magnetic", "magnificent", "magnitude", "mai", "maiden", "mail", "mailed", "mailing", "mailman", "mails", "mailto", "main", "maine", "mainland", "mainly", "mainstream", "maintain", "maintained", "maintaining", "maintains", "maintenance", "major", "majority", "make", "maker", "makers", "makes", "makeup", "making", "malawi", "malaysia", "maldives", "male", "males", "mali", "mall", "malpractice", "malta", "mambo", "man", "manage", "managed", "management", "manager", "managers", "managing", "manchester", "mandate", "mandatory", "manga", "manhattan", "manitoba", "manner", "manor", "manual", "manually", "manuals", "manufacture", "manufactured", "manufacturer", "manufacturers", "manufacturing", "many", "map", "maple", "mapping", "maps", "mar", "marathon", "marble", "marc", "march", "marco", "marcus", "mardi", "margaret", "margin", "maria", "mariah", "marie", "marijuana", "marilyn", "marina", "marine", "mario", "marion", "maritime", "mark", "marked", "marker", "markers", "market", "marketing", "marketplace", "markets", "marking", "marks", "marriage", "married", "marriott", "mars", "marsh", "marshall", "mart", "martha", "martial", "martin", "marvel", "mary", "maryland", "mas", "mask", "mason", "mass", "massachusetts", "massage", "massive", "master", "mastercard", "masters", "mat", "match", "matched", "matches", "matching", "mate", "material", "materials", "maternity", "math", "mathematical", "mathematics", "mating", "matrix", "mats", "matt", "matter", "matters", "matthew", "mattress", "mature", "maui", "mauritius", "max", "maximize", "maximum", "may", "maybe", "mayor", "mazda", "mb", "mba", "mc", "mcdonald", "md", "me", "meal", "meals", "mean", "meaning", "meaningful", "means", "meant", "meanwhile", "measure", "measured", "measurement", "measurements", "measures", "measuring", "meat", "mechanical", "mechanics", "mechanism", "mechanisms", "med", "medal", "media", "median", "mediawiki", "medicaid", "medical", "medicare", "medication", "medications", "medicine", "medicines", "medieval", "meditation", "mediterranean", "medium", "medline", "meet", "meeting", "meetings", "meets", "meetup", "mega", "mel", "melbourne", "melissa", "mem", "member", "members", "membership", "membrane", "memo", "memorabilia", "memorial", "memories", "memory", "memphis", "men", "mens", "ment", "mental", "mention", "mentioned", "mentor", "menu", "menus", "mercedes", "merchandise", "merchant", "merchants", "mercury", "mercy", "mere", "merely", "merge", "merger", "merit", "merry", "mesa", "mesh", "mess", "message", "messages", "messaging", "messenger", "met", "meta", "metabolism", "metadata", "metal", "metallic", "metallica", "metals", "meter", "meters", "method", "methodology", "methods", "metres", "metric", "metro", "metropolitan", "mexican", "mexico", "meyer", "mf", "mg", "mh", "mhz", "mi", "mia", "miami", "mic", "mice", "michael", "michel", "michelle", "michigan", "micro", "microphone", "microsoft", "microwave", "mid", "middle", "midi", "midlands", "midnight", "midwest", "might", "mighty", "migration", "mike", "mil", "milan", "mild", "mile", "mileage", "miles", "military", "milk", "mill", "millennium", "miller", "million", "millions", "mills", "milton", "milwaukee", "mime", "min", "mind", "minds", "mine", "mineral", "minerals", "mines", "mini", "miniature", "minimal", "minimize", "minimum", "mining", "minister", "ministers", "ministries", "ministry", "minneapolis", "minnesota", "minolta", "minor", "minority", "mins", "mint", "minus", "minute", "minutes", "miracle", "mirror", "mirrors", "misc", "miscellaneous", "miss", "missed", "missile", "missing", "mission", "missions", "mississippi", "missouri", "mistake", "mistakes", "mistress", "mit", "mitchell", "mitsubishi", "mix", "mixed", "mixer", "mixing", "mixture", "mj", "ml", "mlb", "mls", "mm", "mn", "mo", "mobile", "mobiles", "mobility", "mod", "mode", "model", "modeling", "modelling", "models", "modem", "modems", "moderate", "moderator", "moderators", "modern", "modes", "modification", "modifications", "modified", "modify", "mods", "modular", "module", "modules", "moisture", "mold", "moldova", "molecular", "molecules", "mom", "moment", "moments", "momentum", "moms", "mon", "monaco", "monday", "monetary", "money", "mongolia", "monica", "monitor", "monitored", "monitoring", "monitors", "monkey", "mono", "monroe", "monster", "monsters", "montana", "monte", "montgomery", "month", "monthly", "months", "montreal", "mood", "moon", "moore", "moral", "more", "moreover", "morgan", "morning", "morocco", "morris", "morrison", "mortality", "mortgage", "mortgages", "moscow", "moses", "moss", "most", "mostly", "motel", "motels", "mother", "motherboard", "mothers", "motion", "motivated", "motivation", "motor", "motorcycle", "motorcycles", "motorola", "motors", "mount", "mountain", "mountains", "mounted", "mounting", "mounts", "mouse", "mouth", "move", "moved", "movement", "movements", "movers", "moves", "movie", "movies", "moving", "mozambique", "mozilla", "mp", "mpeg", "mpegs", "mpg", "mph", "mr", "mrna", "mrs", "ms", "msg", "msgid", "msgstr", "msie", "msn", "mt", "mtv", "mu", "much", "mud", "mug", "multi", "multimedia", "multiple", "mumbai", "munich", "municipal", "municipality", "murder", "murphy", "murray", "muscle", "muscles", "museum", "museums", "music", "musical", "musician", "musicians", "muslim", "muslims", "must", "mustang", "mutual", "muze", "mv", "mw", "mx", "my", "myanmar", "myers", "myrtle", "myself", "mysimon", "myspace", "mysql", "mysterious", "mystery", "myth", "na", "nail", "nails", "naked", "nam", "name", "named", "namely", "names", "namespace", "namibia", "nancy", "nano", "naples", "narrative", "narrow", "nasa", "nascar", "nasdaq", "nashville", "nasty", "nat", "nathan", "nation", "national", "nationally", "nations", "nationwide", "native", "nato", "natural", "naturally", "naturals", "nature", "naughty", "nav", "naval", "navigate", "navigation", "navigator", "navy", "nb", "nba", "nbc", "nc", "ncaa", "nd", "ne", "near", "nearby", "nearest", "nearly", "nebraska", "nec", "necessarily", "necessary", "necessity", "neck", "necklace", "need", "needed", "needle", "needs", "negative", "negotiation", "negotiations", "neighbor", "neighborhood", "neighbors", "neil", "neither", "nelson", "neo", "neon", "nepal", "nerve", "nervous", "nest", "nested", "net", "netherlands", "netscape", "network", "networking", "networks", "neural", "neutral", "nevada", "never", "nevertheless", "new", "newark", "newbie", "newcastle", "newer", "newest", "newfoundland", "newly", "newman", "newport", "news", "newsletter", "newsletters", "newspaper", "newspapers", "newton", "next", "nextel", "nfl", "ng", "nh", "nhl", "nhs", "ni", "niagara", "nicaragua", "nice", "nicholas", "nick", "nickel", "nickname", "nicole", "niger", "nigeria", "night", "nightlife", "nightmare", "nights", "nike", "nikon", "nil", "nine", "nintendo", "nirvana", "nissan", "nitrogen", "nj", "nl", "nm", "nn", "no", "noble", "nobody", "node", "nodes", "noise", "nokia", "nominated", "nomination", "nominations", "non", "none", "nonprofit", "noon", "nor", "norfolk", "norm", "normal", "normally", "norman", "north", "northeast", "northern", "northwest", "norton", "norway", "norwegian", "nose", "not", "note", "notebook", "notebooks", "noted", "notes", "nothing", "notice", "noticed", "notices", "notification", "notifications", "notified", "notify", "notion", "notre", "nottingham", "nov", "nova", "novel", "novels", "novelty", "november", "now", "nowhere", "np", "nr", "ns", "nsw", "nt", "ntsc", "nu", "nuclear", "nudist", "nuke", "null", "number", "numbers", "numeric", "numerical", "numerous", "nurse", "nursery", "nurses", "nursing", "nut", "nutrition", "nutritional", "nuts", "nutten", "nv", "nvidia", "nw", "ny", "nyc", "nylon", "nz", "oak", "oakland", "oaks", "oasis", "ob", "obesity", "obituaries", "obj", "object", "objective", "objectives", "objects", "obligation", "obligations", "observation", "observations", "observe", "observed", "observer", "obtain", "obtained", "obtaining", "obvious", "obviously", "oc", "occasion", "occasional", "occasionally", "occasions", "occupation", "occupational", "occupations", "occupied", "occur", "occurred", "occurrence", "occurring", "occurs", "ocean", "oclc", "oct", "october", "odd", "odds", "oe", "oecd", "oem", "of", "off", "offense", "offensive", "offer", "offered", "offering", "offerings", "offers", "office", "officer", "officers", "offices", "official", "officially", "officials", "offline", "offset", "offshore", "often", "og", "oh", "ohio", "oil", "oils", "ok", "okay", "oklahoma", "ol", "old", "older", "oldest", "olive", "oliver", "olympic", "olympics", "olympus", "om", "omaha", "oman", "omega", "omissions", "on", "once", "one", "ones", "ongoing", "onion", "online", "only", "ons", "ontario", "onto", "oo", "ooo", "oops", "op", "open", "opened", "opening", "openings", "opens", "opera", "operate", "operated", "operates", "operating", "operation", "operational", "operations", "operator", "operators", "opinion", "opinions", "opponent", "opponents", "opportunities", "opportunity", "opposed", "opposite", "opposition", "opt", "optical", "optics", "optimal", "optimization", "optimize", "optimum", "option", "optional", "options", "or", "oracle", "oral", "orange", "orbit", "orchestra", "order", "ordered", "ordering", "orders", "ordinance", "ordinary", "oregon", "org", "organ", "organic", "organisation", "organisations", "organised", "organisms", "organization", "organizational", "organizations", "organize", "organized", "organizer", "organizing", "oriental", "orientation", "oriented", "origin", "original", "originally", "origins", "orlando", "orleans", "os", "oscar", "ot", "other", "others", "otherwise", "ottawa", "ou", "ought", "our", "ours", "ourselves", "out", "outcome", "outcomes", "outdoor", "outdoors", "outer", "outlet", "outlets", "outline", "outlined", "outlook", "output", "outputs", "outreach", "outside", "outsourcing", "outstanding", "oval", "oven", "over", "overall", "overcome", "overhead", "overnight", "overseas", "overview", "owen", "own", "owned", "owner", "owners", "ownership", "owns", "oxford", "oxide", "oxygen", "oz", "ozone", "pa", "pac", "pace", "pacific", "pack", "package", "packages", "packaging", "packard", "packed", "packet", "packets", "packing", "packs", "pad", "pads", "page", "pages", "paid", "pain", "painful", "paint", "paintball", "painted", "painting", "paintings", "pair", "pairs", "pakistan", "pal", "palace", "pale", "palestine", "palestinian", "palm", "palmer", "pam", "pamela", "pan", "panama", "panasonic", "panel", "panels", "panic", "pants", "pantyhose", "paper", "paperback", "paperbacks", "papers", "papua", "par", "para", "parade", "paradise", "paragraph", "paragraphs", "paraguay", "parallel", "parameter", "parameters", "parcel", "parent", "parental", "parenting", "parents", "paris", "parish", "park", "parker", "parking", "parks", "parliament", "parliamentary", "part", "partial", "partially", "participant", "participants", "participate", "participated", "participating", "participation", "particle", "particles", "particular", "particularly", "parties", "partition", "partly", "partner", "partners", "partnership", "partnerships", "parts", "party", "pas", "paso", "pass", "passage", "passed", "passenger", "passengers", "passes", "passing", "passion", "passive", "passport", "password", "passwords", "past", "pasta", "paste", "pastor", "pat", "patch", "patches", "patent", "patents", "path", "pathology", "paths", "patient", "patients", "patio", "patricia", "patrick", "patrol", "pattern", "patterns", "paul", "pavilion", "paxil", "pay", "payable", "payday", "paying", "payment", "payments", "paypal", "payroll", "pays", "pb", "pc", "pci", "pcs", "pct", "pd", "pda", "pdas", "pdf", "pdt", "pe", "peace", "peaceful", "peak", "pearl", "peas", "pediatric", "pee", "peeing", "peer", "peers", "pen", "penalties", "penalty", "pencil", "pendant", "pending", "penetration", "penguin", "peninsula", "penn", "pennsylvania", "penny", "pens", "pension", "pensions", "pentium", "people", "peoples", "pepper", "per", "perceived", "percent", "percentage", "perception", "perfect", "perfectly", "perform", "performance", "performances", "performed", "performer", "performing", "performs", "perfume", "perhaps", "period", "periodic", "periodically", "periods", "peripheral", "peripherals", "perl", "permalink", "permanent", "permission", "permissions", "permit", "permits", "permitted", "perry", "persian", "persistent", "person", "personal", "personality", "personalized", "personally", "personals", "personnel", "persons", "perspective", "perspectives", "perth", "peru", "pest", "pet", "pete", "peter", "petersburg", "peterson", "petite", "petition", "petroleum", "pets", "pf", "pg", "pgp", "ph", "phantom", "pharmaceutical", "pharmaceuticals", "pharmacies", "pharmacology", "pharmacy", "phase", "phases", "phd", "phenomenon", "phentermine", "phi", "phil", "philadelphia", "philip", "philippines", "philips", "phillips", "philosophy", "phoenix", "phone", "phones", "photo", "photograph", "photographer", "photographers", "photographic", "photographs", "photography", "photos", "photoshop", "php", "phpbb", "phrase", "phrases", "phys", "physical", "physically", "physician", "physicians", "physics", "physiology", "pi", "piano", "pic", "pichunter", "pick", "picked", "picking", "picks", "pickup", "picnic", "pics", "picture", "pictures", "pie", "piece", "pieces", "pierce", "pierre", "pig", "pike", "pill", "pillow", "pills", "pilot", "pin", "pine", "ping", "pink", "pins", "pioneer", "pipe", "pipeline", "pipes", "pirates", "pit", "pitch", "pittsburgh", "pix", "pixel", "pixels", "pizza", "pj", "pk", "pl", "place", "placed", "placement", "places", "placing", "plain", "plains", "plaintiff", "plan", "plane", "planes", "planet", "planets", "planned", "planner", "planners", "planning", "plans", "plant", "plants", "plasma", "plastic", "plastics", "plate", "plates", "platform", "platforms", "platinum", "play", "playback", "played", "player", "players", "playing", "playlist", "plays", "playstation", "plaza", "plc", "pleasant", "please", "pleased", "pleasure", "pledge", "plenty", "plot", "plots", "plug", "plugin", "plugins", "plumbing", "plus", "plymouth", "pm", "pmc", "pmid", "pn", "po", "pocket", "pockets", "pod", "podcast", "podcasts", "poem", "poems", "poet", "poetry", "point", "pointed", "pointer", "pointing", "points", "poison", "pokemon", "poker", "poland", "polar", "pole", "police", "policies", "policy", "polish", "polished", "political", "politicians", "politics", "poll", "polls", "pollution", "polo", "poly", "polyester", "polymer", "polyphonic", "pond", "pontiac", "pool", "pools", "poor", "pop", "pope", "popular", "popularity", "population", "populations", "por", "porcelain", "pork", "porsche", "port", "portable", "portal", "porter", "portfolio", "portion", "portions", "portland", "portrait", "portraits", "ports", "portsmouth", "portugal", "portuguese", "pos", "pose", "posing", "position", "positioning", "positions", "positive", "possess", "possession", "possibilities", "possibility", "possible", "possibly", "post", "postage", "postal", "postcard", "postcards", "posted", "poster", "posters", "posting", "postings", "postposted", "posts", "pot", "potato", "potatoes", "potential", "potentially", "potter", "pottery", "poultry", "pound", "pounds", "pour", "poverty", "powder", "powell", "power", "powered", "powerful", "powerpoint", "powers", "powerseller", "pp", "ppc", "ppm", "pr", "practical", "practice", "practices", "practitioner", "practitioners", "prague", "prairie", "praise", "pray", "prayer", "prayers", "pre", "preceding", "precious", "precipitation", "precise", "precisely", "precision", "predict", "predicted", "prediction", "predictions", "prefer", "preference", "preferences", "preferred", "prefers", "prefix", "pregnancy", "pregnant", "preliminary", "premier", "premiere", "premises", "premium", "prep", "prepaid", "preparation", "prepare", "prepared", "preparing", "prerequisite", "prescribed", "prescription", "presence", "present", "presentation", "presentations", "presented", "presenting", "presently", "presents", "preservation", "preserve", "president", "presidential", "press", "pressed", "pressing", "pressure", "preston", "pretty", "prev", "prevent", "preventing", "prevention", "preview", "previews", "previous", "previously", "price", "priced", "prices", "pricing", "pride", "priest", "primarily", "primary", "prime", "prince", "princess", "princeton", "principal", "principle", "principles", "print", "printable", "printed", "printer", "printers", "printing", "prints", "prior", "priorities", "priority", "prison", "prisoner", "prisoners", "privacy", "private", "privilege", "privileges", "prix", "prize", "prizes", "pro", "probability", "probably", "probe", "problem", "problems", "proc", "procedure", "procedures", "proceed", "proceeding", "proceedings", "proceeds", "process", "processed", "processes", "processing", "processor", "processors", "procurement", "produce", "produced", "producer", "producers", "produces", "producing", "product", "production", "productions", "productive", "productivity", "products", "profession", "professional", "professionals", "professor", "profile", "profiles", "profit", "profits", "program", "programme", "programmer", "programmers", "programmes", "programming", "programs", "progress", "progressive", "prohibited", "project", "projected", "projection", "projector", "projectors", "projects", "prominent", "promise", "promised", "promises", "promising", "promo", "promote", "promoted", "promotes", "promoting", "promotion", "promotional", "promotions", "prompt", "promptly", "proof", "propecia", "proper", "properly", "properties", "property", "prophet", "proportion", "proposal", "proposals", "propose", "proposed", "proposition", "proprietary", "pros", "prospect", "prospective", "prospects", "prostate", "prostores", "prot", "protect", "protected", "protecting", "protection", "protective", "protein", "proteins", "protest", "protocol", "protocols", "prototype", "proud", "proudly", "prove", "proved", "proven", "provide", "provided", "providence", "provider", "providers", "provides", "providing", "province", "provinces", "provincial", "provision", "provisions", "proxy", "prozac", "ps", "psi", "psp", "pst", "psychiatry", "psychological", "psychology", "pt", "pts", "pty", "pub", "public", "publication", "publications", "publicity", "publicly", "publish", "published", "publisher", "publishers", "publishing", "pubmed", "pubs", "puerto", "pull", "pulled", "pulling", "pulse", "pump", "pumps", "punch", "punishment", "punk", "pupils", "puppy", "purchase", "purchased", "purchases", "purchasing", "pure", "purple", "purpose", "purposes", "purse", "pursuant", "pursue", "pursuit", "push", "pushed", "pushing", "put", "puts", "putting", "puzzle", "puzzles", "pvc", "python", "qatar", "qc", "qld", "qt", "qty", "quad", "qualification", "qualifications", "qualified", "qualify", "qualifying", "qualities", "quality", "quantitative", "quantities", "quantity", "quantum", "quarter", "quarterly", "quarters", "que", "quebec", "queen", "queens", "queensland", "queries", "query", "quest", "question", "questionnaire", "questions", "queue", "qui", "quick", "quickly", "quiet", "quilt", "quit", "quite", "quiz", "quizzes", "quotations", "quote", "quoted", "quotes", "ra", "rabbit", "race", "races", "rachel", "racial", "racing", "rack", "racks", "radar", "radiation", "radical", "radio", "radios", "radius", "rage", "raid", "rail", "railroad", "railway", "rain", "rainbow", "raise", "raised", "raises", "raising", "raleigh", "rally", "ralph", "ram", "ran", "ranch", "rand", "random", "randy", "range", "ranger", "rangers", "ranges", "ranging", "rank", "ranked", "ranking", "rankings", "ranks", "rap", "rapid", "rapidly", "rapids", "rare", "rarely", "rat", "rate", "rated", "rates", "rather", "rating", "ratings", "ratio", "rational", "ratios", "rats", "raw", "ray", "raymond", "rays", "rb", "rc", "rca", "rd", "re", "reach", "reached", "reaches", "reaching", "reaction", "reactions", "read", "reader", "readers", "readily", "reading", "readings", "reads", "ready", "real", "realistic", "reality", "realize", "realized", "really", "realm", "realtor", "realtors", "realty", "rear", "reason", "reasonable", "reasonably", "reasoning", "reasons", "rebate", "rebates", "rebecca", "rebel", "rebound", "rec", "recall", "receipt", "receive", "received", "receiver", "receivers", "receives", "receiving", "recent", "recently", "reception", "receptor", "receptors", "recipe", "recipes", "recipient", "recipients", "recognised", "recognition", "recognize", "recognized", "recommend", "recommendation", "recommendations", "recommended", "recommends", "reconstruction", "record", "recorded", "recorder", "recorders", "recording", "recordings", "records", "recover", "recovered", "recovery", "recreation", "recreational", "recruiting", "recruitment", "recycling", "red", "redeem", "redhead", "reduce", "reduced", "reduces", "reducing", "reduction", "reductions", "reed", "reef", "reel", "ref", "refer", "reference", "referenced", "references", "referral", "referrals", "referred", "referring", "refers", "refinance", "refine", "refined", "reflect", "reflected", "reflection", "reflections", "reflects", "reform", "reforms", "refresh", "refrigerator", "refugees", "refund", "refurbished", "refuse", "refused", "reg", "regard", "regarded", "regarding", "regardless", "regards", "reggae", "regime", "region", "regional", "regions", "register", "registered", "registrar", "registration", "registry", "regression", "regular", "regularly", "regulated", "regulation", "regulations", "regulatory", "rehab", "rehabilitation", "reid", "reject", "rejected", "relate", "related", "relates", "relating", "relation", "relations", "relationship", "relationships", "relative", "relatively", "relatives", "relax", "relaxation", "relay", "release", "released", "releases", "relevance", "relevant", "reliability", "reliable", "reliance", "relief", "religion", "religions", "religious", "reload", "relocation", "rely", "relying", "remain", "remainder", "remained", "remaining", "remains", "remark", "remarkable", "remarks", "remedies", "remedy", "remember", "remembered", "remind", "reminder", "remix", "remote", "removable", "removal", "remove", "removed", "removing", "renaissance", "render", "rendered", "rendering", "renew", "renewable", "renewal", "reno", "rent", "rental", "rentals", "rep", "repair", "repairs", "repeat", "repeated", "replace", "replaced", "replacement", "replacing", "replica", "replication", "replied", "replies", "reply", "report", "reported", "reporter", "reporters", "reporting", "reports", "repository", "represent", "representation", "representations", "representative", "representatives", "represented", "representing", "represents", "reprint", "reprints", "reproduce", "reproduced", "reproduction", "reproductive", "republic", "republican", "republicans", "reputation", "request", "requested", "requesting", "requests", "require", "required", "requirement", "requirements", "requires", "requiring", "res", "rescue", "research", "researcher", "researchers", "reseller", "reservation", "reservations", "reserve", "reserved", "reserves", "reservoir", "reset", "residence", "resident", "residential", "residents", "resist", "resistance", "resistant", "resolution", "resolutions", "resolve", "resolved", "resort", "resorts", "resource", "resources", "respect", "respected", "respective", "respectively", "respiratory", "respond", "responded", "respondent", "respondents", "responding", "response", "responses", "responsibilities", "responsibility", "responsible", "rest", "restaurant", "restaurants", "restoration", "restore", "restored", "restrict", "restricted", "restriction", "restrictions", "restructuring", "result", "resulted", "resulting", "results", "resume", "resumes", "retail", "retailer", "retailers", "retain", "retained", "retention", "retired", "retirement", "retreat", "retrieval", "retrieve", "retrieved", "retro", "return", "returned", "returning", "returns", "reunion", "reuters", "rev", "reveal", "revealed", "reveals", "revelation", "revenge", "revenue", "revenues", "reverse", "review", "reviewed", "reviewer", "reviewing", "reviews", "revised", "revision", "revisions", "revolution", "revolutionary", "reward", "rewards", "reynolds", "rf", "rfc", "rg", "rh", "rhode", "rhythm", "ri", "ribbon", "rica", "rice", "rich", "richard", "richards", "richardson", "richmond", "rick", "ricky", "rico", "rid", "ride", "rider", "riders", "rides", "ridge", "riding", "right", "rights", "rim", "ring", "rings", "ringtone", "ringtones", "rio", "rip", "ripe", "rise", "rising", "risk", "risks", "river", "rivers", "riverside", "rj", "rl", "rm", "rn", "rna", "ro", "road", "roads", "rob", "robbie", "robert", "roberts", "robertson", "robin", "robinson", "robot", "robots", "robust", "rochester", "rock", "rocket", "rocks", "rocky", "rod", "roger", "rogers", "roland", "role", "roles", "roll", "rolled", "roller", "rolling", "rolls", "rom", "roman", "romance", "romania", "romantic", "rome", "ron", "ronald", "roof", "room", "roommate", "roommates", "rooms", "root", "roots", "rope", "rosa", "rose", "roses", "ross", "roster", "rotary", "rotation", "rouge", "rough", "roughly", "roulette", "round", "rounds", "route", "router", "routers", "routes", "routine", "routines", "routing", "rover", "row", "rows", "roy", "royal", "royalty", "rp", "rpg", "rpm", "rr", "rrp", "rs", "rss", "rt", "ru", "rubber", "ruby", "rug", "rugby", "rugs", "rule", "ruled", "rules", "ruling", "run", "runner", "running", "runs", "runtime", "rural", "rush", "russell", "russia", "russian", "ruth", "rv", "rw", "rwanda", "rx", "ryan", "sa", "sacramento", "sacred", "sacrifice", "sad", "saddam", "safari", "safe", "safely", "safer", "safety", "sage", "sagem", "said", "sail", "sailing", "saint", "saints", "sake", "salad", "salaries", "salary", "sale", "salem", "sales", "sally", "salmon", "salon", "salt", "salvador", "salvation", "sam", "samba", "same", "samoa", "sample", "samples", "sampling", "samsung", "samuel", "san", "sand", "sandra", "sandwich", "sandy", "sans", "santa", "sanyo", "sao", "sap", "sapphire", "sara", "sarah", "sas", "saskatchewan", "sat", "satellite", "satin", "satisfaction", "satisfactory", "satisfied", "satisfy", "saturday", "saturn", "sauce", "saudi", "savage", "savannah", "save", "saved", "saver", "saves", "saving", "savings", "saw", "say", "saying", "says", "sb", "sbjct", "sc", "scale", "scales", "scan", "scanned", "scanner", "scanners", "scanning", "scared", "scary", "scenario", "scenarios", "scene", "scenes", "scenic", "schedule", "scheduled", "schedules", "scheduling", "schema", "scheme", "schemes", "scholar", "scholars", "scholarship", "scholarships", "school", "schools", "sci", "science", "sciences", "scientific", "scientist", "scientists", "scoop", "scope", "score", "scored", "scores", "scoring", "scotia", "scotland", "scott", "scottish", "scout", "scratch", "screen", "screening", "screens", "screensaver", "screensavers", "screenshot", "screenshots", "screw", "script", "scripting", "scripts", "scroll", "scsi", "scuba", "sculpture", "sd", "se", "sea", "seafood", "seal", "sealed", "sean", "search", "searched", "searches", "searching", "seas", "season", "seasonal", "seasons", "seat", "seating", "seats", "seattle", "sec", "second", "secondary", "seconds", "secret", "secretariat", "secretary", "secrets", "section", "sections", "sector", "sectors", "secure", "secured", "securely", "securities", "security", "see", "seed", "seeds", "seeing", "seek", "seeker", "seekers", "seeking", "seeks", "seem", "seemed", "seems", "seen", "sees", "sega", "segment", "segments", "select", "selected", "selecting", "selection", "selections", "selective", "self", "sell", "seller", "sellers", "selling", "sells", "semester", "semi", "semiconductor", "seminar", "seminars", "sen", "senate", "senator", "senators", "send", "sender", "sending", "sends", "senegal", "senior", "seniors", "sense", "sensitive", "sensitivity", "sensor", "sensors", "sent", "sentence", "sentences", "seo", "sep", "separate", "separated", "separately", "separation", "sept", "september", "seq", "sequence", "sequences", "ser", "serbia", "serial", "series", "serious", "seriously", "serum", "serve", "served", "server", "servers", "serves", "service", "services", "serving", "session", "sessions", "set", "sets", "setting", "settings", "settle", "settled", "settlement", "setup", "seven", "seventh", "several", "severe", "sewing", "sexual", "sexuality", "sexually", "sf", "sg", "sh", "shade", "shades", "shadow", "shadows", "shaft", "shake", "shakespeare", "shakira", "shall", "shame", "shanghai", "shannon", "shape", "shaped", "shapes", "share", "shared", "shareholders", "shares", "shareware", "sharing", "shark", "sharon", "sharp", "shaved", "shaw", "she", "shed", "sheep", "sheer", "sheet", "sheets", "sheffield", "shelf", "shell", "shelter", "shepherd", "sheriff", "sherman", "shield", "shift", "shine", "ship", "shipment", "shipments", "shipped", "shipping", "ships", "shirt", "shirts", "shock", "shoe", "shoes", "shoot", "shooting", "shop", "shopper", "shoppers", "shopping", "shops", "shopzilla", "shore", "short", "shortcuts", "shorter", "shortly", "shorts", "shot", "shots", "should", "shoulder", "show", "showcase", "showed", "shower", "showers", "showing", "shown", "shows", "showtimes", "shut", "shuttle", "si", "sic", "sick", "side", "sides", "sie", "siemens", "sierra", "sig", "sight", "sigma", "sign", "signal", "signals", "signature", "signatures", "signed", "significance", "significant", "significantly", "signing", "signs", "signup", "silence", "silent", "silicon", "silk", "silly", "silver", "sim", "similar", "similarly", "simon", "simple", "simplified", "simply", "simpson", "simpsons", "sims", "simulation", "simulations", "simultaneously", "sin", "since", "sing", "singapore", "singer", "singh", "singing", "single", "singles", "sink", "sip", "sir", "sister", "sisters", "sit", "site", "sitemap", "sites", "sitting", "situated", "situation", "situations", "six", "sixth", "size", "sized", "sizes", "sk", "skating", "ski", "skiing", "skill", "skilled", "skills", "skin", "skins", "skip", "skirt", "skirts", "sku", "sky", "skype", "sl", "slave", "sleep", "sleeping", "sleeps", "sleeve", "slide", "slides", "slideshow", "slight", "slightly", "slim", "slip", "slope", "slot", "slots", "slovak", "slovakia", "slovenia", "slow", "slowly", "sm", "small", "smaller", "smallest", "smart", "smell", "smile", "smilies", "smith", "smithsonian", "smoke", "smoking", "smooth", "sms", "smtp", "sn", "snake", "snap", "snapshot", "snow", "snowboard", "so", "soa", "soap", "soc", "soccer", "social", "societies", "society", "sociology", "socket", "socks", "sodium", "sofa", "soft", "softball", "software", "soil", "sol", "solar", "solaris", "sold", "soldier", "soldiers", "sole", "solely", "solid", "solo", "solomon", "solution", "solutions", "solve", "solved", "solving", "soma", "somalia", "some", "somebody", "somehow", "someone", "somerset", "something", "sometimes", "somewhat", "somewhere", "son", "song", "songs", "sonic", "sons", "sony", "soon", "soonest", "sophisticated", "sorry", "sort", "sorted", "sorts", "sought", "soul", "souls", "sound", "sounds", "soundtrack", "soup", "source", "sources", "south", "southampton", "southeast", "southern", "southwest", "soviet", "sox", "sp", "spa", "space", "spaces", "spain", "spam", "span", "spanish", "spank", "spanking", "sparc", "spare", "spas", "spatial", "speak", "speaker", "speakers", "speaking", "speaks", "spears", "spec", "special", "specialist", "specialists", "specialized", "specializing", "specially", "specials", "specialties", "specialty", "species", "specific", "specifically", "specification", "specifications", "specifics", "specified", "specifies", "specify", "specs", "spectacular", "spectrum", "speech", "speeches", "speed", "speeds", "spell", "spelling", "spencer", "spend", "spending", "spent", "sperm", "sphere", "spice", "spider", "spies", "spin", "spine", "spirit", "spirits", "spiritual", "spirituality", "split", "spoke", "spoken", "spokesman", "sponsor", "sponsored", "sponsors", "sponsorship", "sport", "sporting", "sports", "spot", "spotlight", "spots", "spouse", "spray", "spread", "spreading", "spring", "springer", "springfield", "springs", "sprint", "spy", "spyware", "sq", "sql", "squad", "square", "sr", "src", "sri", "ss", "ssl", "st", "stability", "stable", "stack", "stadium", "staff", "staffing", "stage", "stages", "stainless", "stake", "stakeholders", "stamp", "stamps", "stan", "stand", "standard", "standards", "standing", "standings", "stands", "stanford", "stanley", "star", "starring", "stars", "starsmerchant", "start", "started", "starter", "starting", "starts", "startup", "stat", "state", "stated", "statement", "statements", "states", "statewide", "static", "stating", "station", "stationery", "stations", "statistical", "statistics", "stats", "status", "statute", "statutes", "statutory", "stay", "stayed", "staying", "stays", "std", "ste", "steady", "steal", "steam", "steel", "steering", "stem", "step", "stephanie", "stephen", "steps", "stereo", "sterling", "steve", "steven", "stevens", "stewart", "stick", "sticker", "stickers", "sticks", "sticky", "still", "stock", "stockholm", "stockings", "stocks", "stolen", "stomach", "stone", "stones", "stood", "stop", "stopped", "stopping", "stops", "storage", "store", "stored", "stores", "stories", "storm", "story", "str", "straight", "strain", "strand", "strange", "stranger", "strap", "strategic", "strategies", "strategy", "stream", "streaming", "streams", "street", "streets", "strength", "strengthen", "strengthening", "strengths", "stress", "stretch", "strict", "strictly", "strike", "strikes", "striking", "string", "strings", "strip", "stripes", "strips", "stroke", "strong", "stronger", "strongly", "struck", "struct", "structural", "structure", "structured", "structures", "struggle", "stuart", "stuck", "stud", "student", "students", "studied", "studies", "studio", "studios", "study", "studying", "stuff", "stuffed", "stunning", "stupid", "style", "styles", "stylish", "stylus", "su", "sub", "subaru", "subcommittee", "subdivision", "subject", "subjective", "subjects", "sublime", "submission", "submissions", "submit", "submitted", "submitting", "subscribe", "subscriber", "subscribers", "subscription", "subscriptions", "subsection", "subsequent", "subsequently", "subsidiaries", "subsidiary", "substance", "substances", "substantial", "substantially", "substitute", "subtle", "suburban", "succeed", "success", "successful", "successfully", "such", "sucking", "sudan", "sudden", "suddenly", "sue", "suffer", "suffered", "suffering", "sufficient", "sufficiently", "sugar", "suggest", "suggested", "suggesting", "suggestion", "suggestions", "suggests", "suicide", "suit", "suitable", "suite", "suited", "suites", "suits", "sullivan", "sum", "summaries", "summary", "summer", "summit", "sun", "sunday", "sunglasses", "sunny", "sunrise", "sunset", "sunshine", "super", "superb", "superintendent", "superior", "supervision", "supervisor", "supervisors", "supplement", "supplemental", "supplements", "supplied", "supplier", "suppliers", "supplies", "supply", "support", "supported", "supporters", "supporting", "supports", "suppose", "supposed", "supreme", "sur", "sure", "surely", "surf", "surface", "surfaces", "surfing", "surge", "surgeon", "surgeons", "surgery", "surgical", "surname", "surplus", "surprise", "surprised", "surprising", "surrey", "surround", "surrounded", "surrounding", "surveillance", "survey", "surveys", "survival", "survive", "survivor", "survivors", "susan", "suse", "suspect", "suspected", "suspended", "suspension", "sussex", "sustainability", "sustainable", "sustained", "suzuki", "sv", "sw", "swap", "swaziland", "sweden", "swedish", "sweet", "swift", "swim", "swimming", "swing", "swingers", "swiss", "switch", "switched", "switches", "switching", "switzerland", "sword", "sydney", "symantec", "symbol", "symbols", "sympathy", "symphony", "symposium", "symptoms", "sync", "syndicate", "syndication", "syndrome", "synopsis", "syntax", "synthesis", "synthetic", "syracuse", "syria", "sys", "system", "systematic", "systems", "ta", "tab", "table", "tables", "tablet", "tablets", "tabs", "tackle", "tactics", "tag", "tagged", "tags", "tahoe", "tail", "taiwan", "take", "taken", "takes", "taking", "tale", "talent", "talented", "tales", "talk", "talked", "talking", "talks", "tall", "tamil", "tampa", "tan", "tank", "tanks", "tanzania", "tap", "tape", "tapes", "tar", "target", "targeted", "targets", "tariff", "task", "tasks", "taste", "tattoo", "taught", "tax", "taxation", "taxes", "taxi", "taylor", "tb", "tba", "tc", "tcp", "td", "te", "tea", "teach", "teacher", "teachers", "teaches", "teaching", "team", "teams", "tear", "tears", "tech", "technical", "technician", "technique", "techniques", "techno", "technological", "technologies", "technology", "techrepublic", "ted", "teddy", "tee", "teen", "teenage", "teens", "teeth", "tel", "telecharger", "telecom", "telecommunications", "telephone", "telephony", "telescope", "television", "televisions", "tell", "telling", "tells", "temp", "temperature", "temperatures", "template", "templates", "temple", "temporal", "temporarily", "temporary", "ten", "tenant", "tend", "tender", "tennessee", "tennis", "tension", "tent", "term", "terminal", "terminals", "termination", "terminology", "terms", "terrace", "terrain", "terrible", "territories", "territory", "terror", "terrorism", "terrorist", "terrorists", "terry", "test", "testament", "tested", "testimonials", "testimony", "testing", "tests", "tex", "texas", "text", "textbook", "textbooks", "textile", "textiles", "texts", "texture", "tf", "tft", "tgp", "th", "thai", "thailand", "than", "thank", "thanks", "thanksgiving", "that", "thats", "the", "theater", "theaters", "theatre", "thee", "theft", "thehun", "their", "them", "theme", "themes", "themselves", "then", "theology", "theorem", "theoretical", "theories", "theory", "therapeutic", "therapist", "therapy", "there", "thereafter", "thereby", "therefore", "thereof", "thermal", "thesaurus", "these", "thesis", "theta", "they", "thick", "thickness", "thin", "thing", "things", "think", "thinking", "thinkpad", "thinks", "third", "thirty", "this", "thomas", "thompson", "thomson", "thong", "thongs", "thorough", "thoroughly", "those", "thou", "though", "thought", "thoughts", "thousand", "thousands", "thread", "threaded", "threads", "threat", "threatened", "threatening", "threats", "three", "threshold", "thriller", "throat", "through", "throughout", "throw", "throwing", "thrown", "throws", "thru", "thu", "thumb", "thumbnail", "thumbnails", "thumbs", "thumbzilla", "thunder", "thursday", "thus", "thy", "ti", "ticket", "tickets", "tide", "tie", "tied", "tier", "ties", "tiffany", "tiger", "tigers", "tight", "til", "tile", "tiles", "till", "tim", "timber", "time", "timeline", "timely", "timer", "times", "timing", "timothy", "tin", "tinsel", "tiny", "tion", "tions", "tip", "tips", "tire", "tired", "tires", "tissue", "titanium", "titans", "title", "titled", "titles", "titten", "tm", "tmp", "tn", "to", "tobacco", "tobago", "today", "todd", "toddler", "toe", "together", "toilet", "token", "tokyo", "told", "tolerance", "toll", "tom", "tomato", "tomatoes", "tommy", "tomorrow", "ton", "tone", "toner", "tones", "tongue", "tonight", "tons", "tony", "too", "took", "tool", "toolbar", "toolbox", "toolkit", "tools", "tooth", "top", "topic", "topics", "tops", "toronto", "torture", "toshiba", "total", "totally", "totals", "touch", "touched", "tough", "tour", "touring", "tourism", "tourist", "tournament", "tournaments", "tours", "toward", "towards", "tower", "towers", "town", "towns", "township", "toxic", "toy", "toyota", "toys", "tp", "tr", "trace", "track", "trackback", "trackbacks", "tracked", "tracker", "tracking", "tracks", "tract", "tractor", "tracy", "trade", "trademark", "trademarks", "trader", "trades", "trading", "tradition", "traditional", "traditions", "traffic", "tragedy", "trail", "trailer", "trailers", "trails", "train", "trained", "trainer", "trainers", "training", "trains", "tramadol", "trance", "trans", "transaction", "transactions", "transcript", "transcription", "transcripts", "transexual", "transexuales", "transfer", "transferred", "transfers", "transform", "transformation", "transit", "transition", "translate", "translated", "translation", "translations", "translator", "transmission", "transmit", "transmitted", "transparency", "transparent", "transport", "transportation", "transsexual", "trap", "trash", "trauma", "travel", "traveler", "travelers", "traveling", "traveller", "travelling", "travels", "travesti", "travis", "tray", "treasure", "treasurer", "treasures", "treasury", "treat", "treated", "treating", "treatment", "treatments", "treaty", "tree", "trees", "trek", "trembl", "tremendous", "trend", "trends", "treo", "tri", "trial", "trials", "triangle", "tribal", "tribe", "tribes", "tribunal", "tribune", "tribute", "trick", "tricks", "tried", "tries", "trigger", "trim", "trinidad", "trinity", "trio", "trip", "tripadvisor", "triple", "trips", "triumph", "trivia", "troops", "tropical", "trouble", "troubleshooting", "trout", "troy", "truck", "trucks", "true", "truly", "trunk", "trust", "trusted", "trustee", "trustees", "trusts", "truth", "try", "trying", "ts", "tsunami", "tt", "tu", "tub", "tube", "tubes", "tucson", "tue", "tuesday", "tuition", "tulsa", "tumor", "tune", "tuner", "tunes", "tuning", "tunisia", "tunnel", "turbo", "turkey", "turkish", "turn", "turned", "turner", "turning", "turns", "turtle", "tutorial", "tutorials", "tv", "tvs", "twelve", "twenty", "twice", "twiki", "twin", "twins", "twist", "twisted", "two", "tx", "ty", "tyler", "type", "types", "typical", "typically", "typing", "uc", "uganda", "ugly", "uh", "ui", "uk", "ukraine", "ul", "ultimate", "ultimately", "ultra", "ultram", "um", "un", "una", "unable", "unauthorized", "unavailable", "uncertainty", "uncle", "und", "undefined", "under", "undergraduate", "underground", "underlying", "understand", "understanding", "understood", "undertake", "undertaken", "underwear", "undo", "une", "unemployment", "unexpected", "unfortunately", "uni", "unified", "uniform", "union", "unions", "uniprotkb", "unique", "unit", "united", "units", "unity", "univ", "universal", "universe", "universities", "university", "unix", "unknown", "unless", "unlike", "unlikely", "unlimited", "unlock", "unnecessary", "unsigned", "unsubscribe", "until", "untitled", "unto", "unusual", "unwrap", "up", "upc", "upcoming", "update", "updated", "updates", "updating", "upgrade", "upgrades", "upgrading", "upload", "uploaded", "upon", "upper", "ups", "upset", "ur", "urban", "urge", "urgent", "uri", "url", "urls", "uruguay", "urw", "us", "usa", "usage", "usb", "usc", "usd", "usda", "use", "used", "useful", "user", "username", "users", "uses", "usgs", "using", "usps", "usr", "usual", "usually", "ut", "utah", "utc", "utilities", "utility", "utilization", "utilize", "utils", "uv", "uw", "uzbekistan", "va", "vacancies", "vacation", "vacations", "vaccine", "vacuum", "val", "valentine", "valid", "validation", "validity", "valium", "valley", "valuable", "valuation", "value", "valued", "values", "valve", "valves", "vampire", "van", "vancouver", "vanilla", "var", "variable", "variables", "variance", "variation", "variations", "varied", "varies", "varieties", "variety", "various", "vary", "varying", "vast", "vat", "vatican", "vault", "vb", "vbulletin", "vc", "vcr", "ve", "vector", "vegas", "vegetable", "vegetables", "vegetarian", "vegetation", "vehicle", "vehicles", "velocity", "velvet", "vendor", "vendors", "venezuela", "venice", "venture", "ventures", "venue", "venues", "ver", "verbal", "verde", "verification", "verified", "verify", "verizon", "vermont", "vernon", "verse", "version", "versions", "versus", "vertex", "vertical", "very", "verzeichnis", "vessel", "vessels", "veteran", "veterans", "veterinary", "vg", "vhs", "vi", "via", "vic", "vice", "victim", "victims", "victor", "victoria", "victorian", "victory", "vid", "video", "videos", "vids", "vienna", "vietnam", "vietnamese", "view", "viewed", "viewer", "viewers", "viewing", "viewpicture", "views", "vii", "viii", "viking", "villa", "village", "villages", "villas", "vincent", "vintage", "vinyl", "violation", "violations", "violence", "violent", "violin", "vip", "viral", "virgin", "virginia", "virtual", "virtually", "virtue", "virus", "viruses", "visa", "visibility", "visible", "vision", "visit", "visited", "visiting", "visitor", "visitors", "visits", "vista", "visual", "vital", "vitamin", "vitamins", "vocabulary", "vocal", "vocals", "vocational", "voice", "voices", "void", "voip", "vol", "volkswagen", "volleyball", "volt", "voltage", "volume", "volumes", "voluntary", "volunteer", "volunteers", "volvo", "von", "vote", "voted", "voters", "votes", "voting", "voyeurweb", "voyuer", "vp", "vpn", "vs", "vsnet", "vt", "vulnerability", "vulnerable", "wa", "wage", "wages", "wagner", "wagon", "wait", "waiting", "waiver", "wake", "wal", "wales", "walk", "walked", "walker", "walking", "walks", "wall", "wallace", "wallet", "wallpaper", "wallpapers", "walls", "walnut", "walt", "walter", "wan", "wanna", "want", "wanted", "wanting", "wants", "war", "warcraft", "ward", "ware", "warehouse", "warm", "warming", "warned", "warner", "warning", "warnings", "warrant", "warranties", "warranty", "warren", "warrior", "warriors", "wars", "was", "wash", "washer", "washing", "washington", "waste", "watch", "watched", "watches", "watching", "water", "waterproof", "waters", "watershed", "watson", "watt", "watts", "wav", "wave", "waves", "wax", "way", "wayne", "ways", "wb", "wc", "we", "weak", "wealth", "weapon", "weapons", "wear", "wearing", "weather", "web", "webcam", "webcams", "webcast", "weblog", "weblogs", "webmaster", "webmasters", "webpage", "webshots", "website", "websites", "webster", "wed", "wedding", "weddings", "wednesday", "weed", "week", "weekend", "weekends", "weekly", "weeks", "weight", "weighted", "weights", "weird", "welcome", "welding", "welfare", "well", "wellington", "wellness", "wells", "welsh", "wendy", "went", "were", "wesley", "west", "western", "westminster", "wet", "whale", "what", "whatever", "whats", "wheat", "wheel", "wheels", "when", "whenever", "where", "whereas", "wherever", "whether", "which", "while", "whilst", "white", "who", "whole", "wholesale", "whom", "whose", "why", "wi", "wichita", "wicked", "wide", "widely", "wider", "widescreen", "widespread", "width", "wife", "wifi", "wiki", "wikipedia", "wild", "wilderness", "wildlife", "wiley", "will", "william", "williams", "willing", "willow", "wilson", "win", "wind", "window", "windows", "winds", "windsor", "wine", "wines", "wing", "wings", "winner", "winners", "winning", "wins", "winston", "winter", "wire", "wired", "wireless", "wires", "wiring", "wisconsin", "wisdom", "wise", "wish", "wishes", "wishing", "wishlist", "wit", "witch", "with", "withdrawal", "within", "without", "witness", "witnesses", "wives", "wizard", "wm", "wma", "wn", "wolf", "woman", "women", "womens", "won", "wonder", "wonderful", "wondering", "wood", "wooden", "woods", "wool", "worcester", "word", "wordpress", "words", "work", "worked", "worker", "workers", "workflow", "workforce", "working", "workout", "workplace", "works", "workshop", "workshops", "workstation", "world", "worldcat", "worlds", "worldwide", "worm", "worn", "worried", "worry", "worse", "worship", "worst", "worth", "worthy", "would", "wound", "wow", "wp", "wr", "wrap", "wrapped", "wrapping", "wrestling", "wright", "wrist", "write", "writer", "writers", "writes", "writing", "writings", "written", "wrong", "wrote", "ws", "wt", "wto", "wu", "wv", "ww", "www", "wx", "wy", "wyoming", "xanax", "xbox", "xerox", "xhtml", "xi", "xl", "xml", "xp", "ya", "yacht", "yahoo", "yale", "yamaha", "yang", "yard", "yards", "yarn", "ye", "yea", "yeah", "year", "yearly", "years", "yeast", "yellow", "yemen", "yen", "yes", "yesterday", "yet", "yield", "yields", "yn", "yo", "yoga", "york", "yorkshire", "you", "young", "younger", "your", "yours", "yourself", "youth", "yr", "yrs", "yu", "yugoslavia", "yukon", "za", "zambia", "zdnet", "zealand", "zen", "zero", "zimbabwe", "zinc", "zip", "zoloft", "zone", "zones", "zoning", "zoo", "zoom", "zope", "zshops", "zu", "zum", "zus"];

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
    h.map(x=>`<button onclick="window.location.href='${x.id}-tool'" style="font-family:'IBM Plex Mono',monospace;font-size:10px;padding:3px 9px;border:1px solid var(--border);border-radius:10px;background:transparent;color:var(--ink3);cursor:pointer">${x.label}</button>`).join('');
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
    pinStrip.innerHTML=pins.map(id=>`<button class="wk-pin-btn" onclick="window.location.href='${id}-tool'">★ ${WK_TOOL_LABELS[id]||id}</button>`).join('');
  }
  const f=wkGetFreq();
  const top=freq.filter(id=>f[id]>1).slice(0,4);
  if(freqRow&&freqStrip){
    freqRow.style.display=top.length>1?'block':'none';
    freqStrip.innerHTML=top.map(id=>`<button class="wk-recent-btn" onclick="window.location.href='${id}-tool'">${WK_TOOL_LABELS[id]||id}<span class="wk-freq-badge">${f[id]}×</span></button>`).join('');
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