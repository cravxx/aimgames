give = {};
give.me = {};
give.me.a = {};
give.me.an = {};
give.me.a.conjugated = {};
give.me.a.conjugated.verb = {};
give.me.a.conjugated.verb._in = {};
isit = {}; //to avoid conflicts
starts = {};
starts._with = {};
consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n',
    'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'
];
vocals = ['a', 'e', 'i', 'o', 'u'];
give.me.nouns = ["stitch", "square", "leather", "bucket", "church",
    "group", "silver", "hall", "move", "tank", "leg", "roll",
    "wool", "hammer", "company", "digestion", "p_in", "farm",
    "underwear", "ear", "eggs", "story", "rat", "bulb", "snail",
    "dra_in", "shoe", "hope", "pickle", "stretch", "_insect",
    "knowledge", "meal", "metal", "sheep", "bag", "vessel",
    "ladybug", "cemetery", "system", "texture", "shake", "verse",
    "bus_iness", "eye", "marble", "eng_ine", "field", "education",
    "smell", "grip", "riddle", "crime", "cake", "throat", "error",
    "airport", "arch", "afterthought", "wrench", "start", "l_inen",
    "caption", "straw", "expansion", "wilderness", "water", "van",
    "calculator", "range", "stock_ing", "song", "pen", "view",
    "language", "ants", "comparison", "hands", "guide", "hook",
    "qu_ince", "order", "frogs", "neck", "offer", "recess",
    "babies", "woman", "chance", "seat", "airplane", "trade",
    "town", "place", "chess", "self", "fall", "measure",
    "_instrument", "zephyr", "glove", "competition", "cook",
    "balance", "room", "tail", "drop", "nerve", "regret", "blade",
    "birthday", "approval", "collar", "ocean", "fairies", "month",
    "book", "cherry", "mounta_in", "quill", "spoon", "icicle",
    "boot", "cakes", "jo_in", "art", "mouth", "growth", "care",
    "spr_ing", "girl", "grandmother", "swim", "_interest", "d_inner",
    "cup", "respect", "rice", "clam", "furniture", "flesh",
    "fold", "humor", "sisters", "toothpaste", "coast", "milk",
    "act", "sack", "poison", "seashore", "cart", "jam",
    "surprise", "liquid", "control", "tomatoes", "umbrella",
    "cent", "hill", "development", "shirt", "religion", "hour",
    "bomb", "mach_ine", "m_inute", "spot", "grape", "spiders",
    "fog", "frog", "trees", "hand", "m_ind", "pets", "donkey",
    "transport", "thread", "base", "w_indow", "alarm", "bas_in",
    "s_ink", "corn", "boy", "r_ing", "peace", "rest", "cactus",
    "statement", "degree", "bear", "str_ing", "plane", "stove",
    "fireman", "baseball", "m_ine", "daughter", "quartz", "crow",
    "tent", "bone", "doctor", "orange", "mass", "account",
    "motion", "children", "form", "visitor", "loaf", "coach",
    "_increase", "toothbrush", "dolls", "connection", "heat",
    "salt", "cow", "camp", "agreement", "branch", "size",
    "scissors", "locket", "stem", "drawer", "rule", "desk",
    "sail", "hair", "lake", "tramp", "pet", "pest", "stew",
    "lunchroom", "curta_in", "noise", "stream", "wire", "pump",
    "houses", "flame", "creature", "selection", "ve_in", "hose",
    "sheet", "example", "match", "pan", "thrill", "wash",
    "f_inger", "prose", "skirt", "grandfather", "shape", "market",
    "jelly", "geese", "trouble", "school", "stage", "screw",
    "kiss", "change", "push", "son", "tra_in", "stick", "soap",
    "sofa", "island", "land", "addition", "dad", "need",
    "playground", "argument", "decision", "gun", "receipt", "arm",
    "table", "trick", "plant", "birds", "sk_in", "stop",
    "governor", "crowd", "force", "w_ind", "suit", "holiday",
    "sidewalk", "lock", "division", "store", "cough", "cat",
    "bee", "actor", "nation", "property", "brake", "butter",
    "river", "gold", "bikes", "bed", "edge", "l_ine", "fork",
    "dock", "m_int", "magic", "kittens", "lunch", "horses",
    "sponge", "box", "weather", "porter", "home", "juice", "jump",
    "pear", "gra_in", "play", "low", "potato", "roof", "mom",
    "year", "silk", "horse", "jeans", "scent", "brother", "nose",
    "treatment", "work", "breath", "giants", "twist", "quicksand",
    "angle", "show", "knife", "dust", "po_int", "mice", "fear",
    "plastic", "class", "night", "plot", "cream", "tray",
    "punishment", "mark", "week", "anger", "flag", "secretary",
    "iron", "design", "dress", "guitar", "worm", "maid", "birth",
    "library", "parcel", "w_ine", "bottle", "taste", "house",
    "science", "bath", "pencil", "ship", "passenger", "veil",
    "pocket", "believe", "time", "sense", "board", "attraction",
    "bell", "kettle", "reason", "cap", "dirt", "jellyfish",
    "waste", "wound", "use", "feel_ing", "sneeze", "crate",
    "dr_ink", "ball", "protest", "plants", "scale", "tiger", "bat",
    "knee", "horn", "route", "laugh", "badge", "sweater",
    "carriage", "territory", "vase", "cast", "popcorn",
    "scarecrow", "egg", "look", "songs", "pancake", "stone",
    "ra_instorm", "health", "throne", "request", "record", "chalk",
    "touch", "sister", "pull", "pies", "berry", "picture",
    "produce", "watch", "cars", "_insurance", "flavor", "sky",
    "man", "structure", "bike", "discovery", "button", "volcano",
    "dog", "eyes", "blow", "face", "oatmeal", "rock", "spade",
    "sun", "loss", "toys", "question", "fowl", "railway",
    "street", "idea", "notebook", "page", "profit", "shame",
    "office", "army", "shelf", "cows", "club", "fly", "r_ings",
    "walk", "pollution", "jewel", "jail", "powder", "build_ing",
    "rod", "fish", "memory", "debt", "desire", "driv_ing",
    "w_inter", "wave", "elbow", "crown", "twig", "sw_ing", "love",
    "glass", "morn_ing", "lumber", "coil", "flight", "step",
    "expert", "zipper", "lamp", "fang", "bells", "d_inosaurs",
    "ray", "shop", "friction", "pipe", "mist", "sock", "vest",
    "crack", "cannon", "back", "whip", "north", "basket",
    "history", "rob_in", "pigs", "wheel", "crib", "mask", "paper",
    "action", "cellar", "turn", "wall", "bushes", "color", "fuel",
    "plough", "advertisement", "party", "needle", "toad",
    "read_ing", "committee", "slip", "volleyball", "floor", "wren",
    "nut", "rail", "planes", "oven", "payment", "toy", "grade",
    "middle", "name", "dime", "kick", "girls", "basketball",
    "scene", "steam", "cats", "whistle", "yoke", "pizzas", "card",
    "part", "judge", "power", "laborer", "space", "bead", "cable",
    "tub", "amount", "aftermath", "quiver", "rub", "support",
    "t_in", "trail", "cloth", "tree", "sticks", "cheese", "teeth",
    "muscle", "behavior", "camera", "existence", "flock", "star",
    "quiet", "plantation", "toes", "yarn", "cobweb", "quilt",
    "end", "snails", "flowers", "stomach", "run", "th_ings",
    "spark", "effect", "sleet", "snow", "quarter", "rake",
    "apparel", "haircut", "relation", "unit", "meat", "level",
    "lettuce", "brass", "head", "steel", "country", "tax",
    "giraffe", "team", "baby", "dogs", "curve", "rifle", "tooth",
    "turkey", "eggnog", "belief", "can", "channel", "bedroom",
    "hate", "sort", "talk", "oil", "destruction", "doll", "pot",
    "day", "ra_in", "credit", "partner", "_ink", "reward", "snake",
    "women", "note", "w_ing", "sugar", "shade", "wrist", "smoke",
    "position", "monkey", "direction", "achiever", "battle",
    "yak", "stranger", "calendar", "value", "test", "tra_ins",
    "m_inister", "zebra", "wish", "distribution", "blood",
    "activity", "experience", "wood", "adjustment", "government",
    "circle", "purpose", "rabbit", "war", "sign", "animal", "cub",
    "trousers", "lip", "word", "coat", "afternoon", "rose",
    "queen", "ducks", "society", "rabbits", "legs", "thumb",
    "hot", "_invention", "deer", "hole", "frame", "top", "key",
    "discussion", "price", "friend", "smile", "distance",
    "apparatus", "voyage", "bridge", "beds", "rhythm", "reaction",
    "soda", "kitty", "beef", "writer", "attack", "title", "sea",
    "border", "harbor", "door", "plate", "uncle", "mother",
    "shoes", "z_inc", "cause", "cover", "thunder", "exchange",
    "celery", "representative", "_income", "letters", "snakes",
    "trip", "number", "bird", "fact", "books", "observation",
    "chickens", "trucks", "sleep", "air", "amusement", "foot",
    "earthquake", "side", "hat", "ghost", "ice", "downtown",
    "fruit", "ch_in", "mailbox", "acoustics", "crook", "way",
    "burst", "ground", "yam", "limit", "summer", "tendency",
    "wax", "beg_inner", "brick", "fire", "writ_ing", "mitten",
    "friends", "scarf", "weight", "smash", "harmony", "sand",
    "hobbies", "boat", "slave", "shock", "f_inger", "earth",
    "bubble", "front", "bit", "spy", "food", "thought", "root",
    "skate", "zoo", "death", "boundary", "yard", "lace", "bite",
    "car", "slope", "suggestion", "impulse", "creator", "bait",
    "arithmetic", "voice", "flower", "temper", "teach_ing", "knot",
    "cabbage", "hydrant", "coal", "hospital", "moon", "vegetable",
    "pail", "cave", "meet_ing", "station", "person", "authority",
    "aunt", "letter", "vacation", "event", "th_ing", "crayon",
    "waves", "substance", "detail", "honey", "nest", "clover",
    "road", "pleasure", "cushion", "cracker", "chicken", "pie",
    "copper", "oranges", "servant", "jar", "appliance", "toe",
    "rate", "men", "condition", "truck", "tongue", "_industry",
    "sound", "soup", "current", "money", "cherries", "wealth",
    "gate", "ticket", "advice", "squirrel", "duck", "grass",
    "pig", "seed", "cattle", "stamp", "canvas", "theory",
    "carpenter"
];
give.me.adjectives = ["abrupt", "acidic", "adorable", "adventurous",
    "aggressive", "agitated", "alert", "aloof", "amiable",
    "amused", "annoyed", "antsy", "anxious", "appall_ing",
    "appetiz_ing", "apprehensive", "arrogant", "ashamed",
    "astonish_ing", "attractive", "average", "batty", "beefy",
    "bewildered", "bit_ing", "bitter", "bland", "blush_ing",
    "bored", "brave", "bright", "broad", "bulky", "burly",
    "charm_ing", "cheeky", "cheerful", "chubby", "clean", "clear",
    "cloudy", "clueless", "clumsy", "colorful", "colossal",
    "combative", "comfortable", "condemned", "condescend_ing",
    "confused", "contemplative", "conv_inc_ing", "convoluted",
    "cooperative", "corny", "costly", "courageous", "crabby",
    "creepy", "crooked", "cruel", "cumbersome", "curved",
    "cynical", "dangerous", "dash_ing", "decayed", "deceitful",
    "deep", "defeated", "defiant", "delicious", "delightful",
    "depraved", "depressed", "despicable", "determ_ined",
    "dilapidated", "dim_inutive", "disgusted", "dist_inct",
    "distraught", "distressed", "disturbed", "dizzy", "drab",
    "dra_ined", "dull", "eager", "ecstatic", "elated", "elegant",
    "emaciated", "embarrassed", "enchant_ing", "encourag_ing",
    "energetic", "enormous", "enthusiastic", "envious",
    "exasperated", "excited", "exhilarated", "extensive",
    "exuberant", "fancy", "fantastic", "fierce", "filthy", "flat",
    "floppy", "flutter_ing", "foolish", "frantic", "fresh",
    "friendly", "frightened", "frothy", "frustrat_ing", "funny",
    "fuzzy", "gaudy", "gentle", "ghastly", "giddy", "gigantic",
    "glamorous", "gleam_ing", "glorious", "gorgeous", "graceful",
    "greasy", "griev_ing", "gritty", "grotesque", "grubby",
    "grumpy", "handsome", "happy", "harebra_ined", "healthy",
    "helpful", "helpless", "high", "hollow", "homely", "horrific",
    "huge", "hungry", "hurt", "icy", "ideal", "immense",
    "impressionable", "_intrigued", "irate", "irritable", "itchy",
    "jealous", "jittery", "jolly", "joyous", "juicy", "jumpy",
    "k_ind", "lackadaisical", "large", "lazy", "lethal", "little",
    "lively", "livid", "lonely", "loose", "lovely", "lucky",
    "ludicrous", "macho", "magnificent", "mammoth", "maniacal",
    "massive", "melancholy", "melted", "m_iniature", "m_inute",
    "mistaken", "misty", "moody", "mortified", "motionless",
    "muddy", "mysterious", "narrow", "nasty", "naughty",
    "nervous", "nonchalant", "nonsensical", "nutritious", "nutty",
    "obedient", "oblivious", "obnoxious", "odd", "old", "-",
    "fashioned", "outrageous", "panicky", "perfect", "perplexed",
    "petite", "petty", "pla_in", "pleasant", "poised", "pompous",
    "precious", "prickly", "proud", "pungent", "puny", "qua_int",
    "quizzical", "ratty", "reassured", "relieved", "repulsive",
    "responsive", "ripe", "robust", "rotten", "rotund", "rough",
    "round", "salty", "sarcastic", "scant", "scary", "scattered",
    "scrawny", "selfish", "shaggy", "shaky", "shallow", "sharp",
    "sh_iny", "short", "silky", "silly", "sk_inny", "slimy",
    "slippery", "small", "smarmy", "smil_ing", "smoggy", "smooth",
    "smug", "soggy", "solid", "sore", "sour", "sparkl_ing",
    "spicy", "splendid", "spotless", "square", "stale", "steady",
    "steep", "sticky", "stormy", "stout", "straight", "strange",
    "strong", "stunn_ing", "substantial", "successful",
    "succulent", "superficial", "superior", "swanky", "sweet",
    "tart", "tasty", "teeny", "tender", "tense", "terrible",
    "testy", "thankful", "thick", "thoughtful", "thoughtless",
    "tight", "timely", "tricky", "trite", "troubled",
    "twitterpated", "uneven", "unsightly", "upset", "uptight",
    "vast", "vexed", "victorious", "virtuous", "vivacious",
    "vivid", "wacky", "weary", "whimsical", "whopp_ing", "wicked",
    "witty", "wobbly", "wonderful", "worried", "yummy", "zany",
    "zealous", "zippy", "sudden", "_infamous", "endurable",
    "curious", "three", "meaty", "_innate", "habitual", "complex",
    "third", "cut", "idiotic", "abrasive", "addicted",
    "disastrous", "pathetic", "taboo", "known", "likeable",
    "thunder_ing", "careful", "legal", "ahead", "observant",
    "_intelligent", "lush", "futuristic", "hard", "abound_ing",
    "neat", "wet", "easy", "flowery", "earsplitt_ing", "mean",
    "left", "half", "scared", "safe", "romantic", "swift",
    "assorted", "threaten_ing", "jazzy", "s_incere", "nifty",
    "stiff", "low", "unused", "sneaky", "gap_ing", "able", "gabby",
    "berserk", "blue", "callous", "unusual", "eatable", "purr_ing",
    "nebulous", "stupendous", "guiltless", "imm_inent",
    "unsuitable", "ugly", "heavenly", "chilly", "forgetful",
    "foamy", "rampant", "tiresome", "neighborly", "melodic",
    "wide", "ill-_informed", "spiffy", "obsolete", "tranquil",
    "exclusive", "_incandescent", "brown", "woebegone",
    "beneficial", "vague", "orange", "woozy", "detailed",
    "ad hoc", "unbiased", "light", "possessive", "same",
    "far-flung", "barbarous", "historical", "expensive",
    "majestic", "cautious", "fumbl_ing", "beautiful", "serious",
    "versed", "exultant", "awful", "whisper_ing", "tedious",
    "unadvised", "new", "curvy", "protective", "shock_ing",
    "pushy", "handsomely", "abortive", "unwritten", "red",
    "knotty", "sordid", "tough", "overwrought", "craven",
    "numberless", "fasc_inated", "clever", "dusty", "divergent",
    "false", "direful", "stand_ing", "faulty", "fa_int", "wiggly",
    "scandalous", "noiseless", "terrific", "opposite", "two",
    "debonair", "imported", "nosy", "obscene", "vulgar", "tacit",
    "pa_inful", "previous", "k_indhearted", "macabre", "delirious",
    "equal", "quack", "snotty", "fragile", "puzzled", "lowly",
    "didactic", "literate", "voiceless", "loud", "hilarious",
    "polite", "judicious", "big", "materialistic", "mundane",
    "free", "mushy", "flaky", "obeisant", "evasive", "common",
    "extra-large", "abashed", "penitent", "fertile", "wrathful",
    "husky", "needy", "useful", "tearful", "redundant",
    "spurious", "parched", "like", "good", "tangible",
    "spiritual", "general", "superb", "resonant", "few", "aware",
    "unequal", "godly", "brief", "damp", "quiet", "frequent",
    "coo_ing", "hushed", "chunky", "oafish", "wander_ing",
    "black-and-white", "messy", "right", "economic", "gusty",
    "elite", "five", "supreme", "giant", "_innocent", "deafen_ing",
    "racial", "bad", "old-fashioned", "vacuous", "selective",
    "grey", "faithful", "volatile", "greedy", "f_ine", "puzzl_ing",
    "picayune", "familiar", "tame", "thirsty", "early",
    "unaccountable", "adhesive", "near", "full", "accessible",
    "abusive", "learned", "material", "humorous", "brawny",
    "well-made", "blue-eyed", "illustrious", "hulk_ing",
    "rhetorical", "spiky", "nimble", "furtive", "deadpan",
    "_internal", "wiry", "sulky", "quickest", "last", "car_ing",
    "wait_ing", "torpid", "imperfect", "k_indly", "quixotic",
    "cowardly", "madden_ing", "uttermost", "ossified", "truculent",
    "unbecom_ing", "modern", "fixed", "makeshift", "obta_inable",
    "equable", "premium", "ra_iny", "dynamic", "slim", "freez_ing",
    "plastic", "wry", "stereotyped", "skillful", "absent",
    "th_inkable", "daily", "steadfast", "curly", "special",
    "measly", "silent", "nostalgic", "disillusioned", "ritzy",
    "disagreeable", "stupid", "tower_ing", "defective", "simple",
    "snobbish", "aback", "sable", "real", "lame", "functional",
    "first", "past", "hang_ing", "flimsy", "loutish", "used",
    "_inv_incible", "aromatic", "periodic", "probable",
    "glisten_ing", "guttural", "mighty", "bumpy", "n_ine",
    "squeamish", "grouchy", "warm", "tacky", "quirky",
    "nondescript", "delicate", "various", "dreary", "hysterical",
    "hypnotic", "overrated", "bra_iny", "deserted", "jumbled",
    "alike", "teeny-t_iny", "_incompetent", "piquant", "obsequious",
    "lamentable", "tan", "uppity", "milky", "aspir_ing", "lavish",
    "public", "afraid", "befitt_ing", "ly_ing", "sassy",
    "efficient", "well-to-do", "mixed", "mature", "laughable",
    "fanatical", "doubtful", "bizarre", "clammy", "organic",
    "white", "ethereal", "null", "aborig_inal", "slow",
    "responsible", "w_indy", "capricious", "overjoyed", "gullible",
    "classy", "hard-to-f_ind", "fluffy", "mounta_inous", "holistic",
    "spectacular", "worthless", "will_ing", "valuable", "chief",
    "cloistered", "fretful", "utter", "yield_ing", "_insidious",
    "phobic", "bent", "acid", "muddled", "dapper", "handy",
    "boundless", "certa_in", "cute", "m_inor", "weak", "horrible",
    "onerous", "one", "highfalut_in", "ord_inary", "hot", "nonstop",
    "rich", "righteous", "different", "talented", "gruesome",
    "oval", "absorb_ing", "bloody", "acoustic", "high-pitched",
    "gray", "waggish", "womanly", "boil_ing", "difficult",
    "screech_ing", "political", "alcoholic", "naive", "ill",
    "striped", "honorable", "em_inent", "illegal", "noisy",
    "apathetic", "disgust_ing", "squalid", "drunk", "zonked",
    "heartbreak_ing", "violent", "long_ing", "great", "changeable",
    "undesirable", "rigid", "alive", "enchanted", "tawdry",
    "coord_inated", "rapid", "best", "mute", "bor_ing",
    "_inquisitive", "cheap", "parsimonious", "spooky", "shiver_ing",
    "ten", "ceaseless", "better", "glib", "tired", "possible",
    "secret", "bustl_ing", "deranged", "succ_inct", "bashful",
    "remarkable", "even", "wasteful", "fearless", "hallowed",
    "second", "vengeful", "hideous", "yellow", "heady", "roomy",
    "raspy", "smart", "damaged", "seemly", "reflective",
    "elastic", "subdued", "dramatic", "dispensable", "tested",
    "pricey", "ambiguous", "rude", "lov_ing", "outgo_ing",
    "harmonious", "tasteful", "synonymous", "malicious", "female",
    "unknown", "fair", "dysfunctional", "descriptive", "amaz_ing",
    "second-hand", "t_iny", "next", "dirty", "impolite", "royal",
    "bawdy", "abaft", "limp_ing", "awake", "lewd", "efficacious",
    "m_indless", "swelter_ing", "fast", "breezy", "temporary",
    "rural", "gifted", "goofy", "future", "awesome",
    "therapeutic", "truthful", "decisive", "tremendous",
    "unkempt", "wealthy", "dom_ineer_ing", "faded", "childlike",
    "flagrant", "well-groomed", "plucky", "resolute", "dark",
    "utopian", "pale", "feeble", "un_interested", "concerned",
    "pastoral", "heavy", "necessary", "puffy", "kaput", "pretty",
    "overt", "fat", "breakable", "simplistic", "wrong", "labored",
    "devilish", "symptomatic", "six", "physical", "miscreant",
    "crazy", "flashy", "tenuous", "vigorous", "spiteful",
    "uncovered", "_inexpensive", "festive", "abhorrent",
    "unequaled", "liv_ing", "profuse", "agreeable", "demonic",
    "military", "upbeat", "enterta_in_ing", "scientific", "broken",
    "tangy", "long-term", "diligent", "rebel", "harsh",
    "rightful", "ultra", "ga_inful", "sophisticated", "frail",
    "discreet", "toothsome", "ubiquitous", "f_inicky", "long",
    "guarded", "stimulat_ing", "amuck", "abundant", "violet",
    "sleepy", "aquatic", "ruthless", "frighten_ing", "humdrum",
    "pa_instak_ing", "statuesque", "hellish", "savory", "flippant",
    "hesitant", "flawless", "angry", "unhealthy", "evanescent",
    "grandiose", "elf_in", "garrulous", "deeply", "hurried",
    "well-off", "shy", "rare", "ambitious", "automatic", "exotic",
    "scarce", "placid", "agoniz_ing", "rem_iniscent", "omniscient",
    "merciful", "marked", "gamy", "true", "lack_ing", "medical",
    "decorous", "squeal_ing", "chivalrous", "fortunate",
    "excellent", "stak_ing", "cultured", "psychedelic", "trashy",
    "verdant", "extra-small", "lyrical", "famous", "know_ing",
    "knowledgeable", "amus_ing", "irritat_ing", "dazzl_ing", "lean",
    "imag_inary", "subsequent", "parallel", "permissible",
    "billowy", "far", "workable", "wise", "tightfisted",
    "available", "vagabond", "oceanic", "zesty", "dead",
    "psychotic", "po_intless", "calculat_ing", "allur_ing",
    "satisfy_ing", "married", "youthful", "magical", "male",
    "accurate", "moldy", "optimal", "wretched", "hapless",
    "magenta", "young", "tall", "_inconclusive", "actually",
    "untidy", "present", "aberrant", "numerous", "halt_ing",
    "languid", "separate", "adaptable", "sturdy", "grateful",
    "jobless", "crowded", "tasteless", "receptive", "cuddly",
    "madly", "capable", "homeless", "dear", "belligerent",
    "spotty", "_inst_inctive", "adjo_in_ing", "st_ingy", "shut",
    "_incredible", "electric", "ablaze", "unique", "cool",
    "understood", "roasted", "juvenile", "purple", "pumped",
    "ignorant", "forego_ing", "sad", "nappy", "elderly", "hiss_ing",
    "lopsided", "lumpy", "excit_ing", "murky", "rustic",
    "panoramic", "somber", "jaded", "ruddy", "watery", "needless",
    "sloppy", "animated", "alleged", "hospitable", "open",
    "groovy", "recondite", "unnatural", "earthy", "busy", "keen",
    "quarrelsome", "eight", "green", "plausible", "wholesale",
    "abnormal", "impossible", "sick", "cold", "cagey",
    "draconian", "dry", "abject", "unwieldy", "th_in", "perpetual",
    "natural", "absurd", "erect", "feigned", "tidy", "ugliest",
    "wary", "ragged", "wakeful", "calm", "adamant"
];
give.me.verbs = ["warm", "step", "hand", "multiply", "decay", "bore",
    "fax", "push", "slap", "suspend", "jog", "man", "dry", "play",
    "wobble", "groan", "knit", "coil", "part", "welcome", "mark",
    "sigh", "strap", "clear", "compla_in", "camp", "imag_ine",
    "copy", "undress", "nod", "cover", "m_ine", "miss", "terrify",
    "smell", "tra_in", "harm", "rhyme", "admit", "whisper",
    "correct", "bless", "wh_ine", "rem_ind", "encourage", "release",
    "hum", "po_int", "present", "ski", "switch", "jail", "mourn",
    "dam", "happen", "rejoice", "cure", "smash", "wail", "sta_in",
    "discover", "match", "touch", "sip", "phone", "wash", "pause",
    "_interrupt", "suppose", "recognise", "identify", "damage",
    "peel", "retire", "trust", "scrub", "soothe", "heat", "trace",
    "add", "challenge", "drag", "precede", "drum", "annoy",
    "stamp", "avoid", "march", "clean", "expla_in", "matter",
    "list", "command", "jam", "lie", "suggest", "share", "itch",
    "move", "glow", "ra_in", "blot", "_inject", "reply", "doubt",
    "repair", "compete", "preserve", "colour", "scatter",
    "listen", "paste", "approve", "sail", "arrange", "laugh",
    "strip", "fail", "cycle", "trap", "scream", "fancy",
    "conta_in", "offer", "relax", "rob", "dress", "guide", "exist",
    "plan", "snow", "own", "nest", "travel", "pick", "peep",
    "raise", "rock", "satisfy", "bounce", "bow", "check", "occur",
    "fasten", "ignore", "embarrass", "try", "tremble", "stitch",
    "slip", "_intend", "race", "chew", "dust", "note", "screw",
    "enter", "comb", "poke", "allow", "spell", "frighten",
    "fetch", "communicate", "wait", "educate", "name", "knot",
    "bang", "slow", "stay", "muddle", "dislike", "wipe",
    "enterta_in", "milk", "carry", "irritate", "label", "nail",
    "earn", "_invent", "number", "grate", "dare", "guarantee",
    "arrive", "heal", "visit", "spill", "preach", "search",
    "crawl", "wrap", "like", "queue", "plug", "rule", "offend",
    "carve", "learn", "brake", "book", "_interfere", "hover",
    "burn", "file", "crush", "pump", "cross", "bruise", "agree",
    "change", "steer", "consist", "amuse", "rush", "disarm",
    "suck", "unpack", "tie", "sound", "surprise", "grease",
    "supply", "polish", "bump", "strengthen", "look", "belong",
    "battle", "flap", "tap", "weigh", "face", "bomb", "stir",
    "moan", "drip", "afford", "balance", "start", "chase", "jo_in",
    "risk", "sniff", "report", "glue", "bleach", "call", "pa_int",
    "waste", "beg", "admire", "attempt", "flow", "reproduce",
    "brush", "calculate", "puncture", "jump", "transport",
    "complete", "appreciate", "deliver", "confess", "excite",
    "squeak", "gather", "double", "bolt", "end", "store", "open",
    "launch", "drop", "unfasten", "meddle", "stretch", "soak",
    "force", "fit", "trouble", "pat", "hurry", "improve", "haunt",
    "mate", "scold", "delight", "succeed", "stop", "shiver",
    "tire", "_introduce", "enjoy", "tour", "fire", "murder",
    "bl_ind", "yawn", "destroy", "excuse", "bake", "film", "mug",
    "explode", "marry", "fry", "tempt", "mix", "tumble", "_invite",
    "ru_in", "trade", "charge", "remember", "behave", "scorch",
    "divide", "question", "knock", "pass", "lick", "clap", "pray",
    "exercise", "refuse", "arrest", "zip", "tip", "thaw",
    "depend", "shelter", "land", "borrow", "hang", "mend",
    "spark", "suffer", "wrestle", "shade", "disapprove", "decide",
    "answer", "paddle", "concentrate", "measure", "signal",
    "seal", "extend", "_injure", "attack", "crash", "separate",
    "type", "practise", "stuff", "trick", "smile", "float",
    "water", "record", "hate", "attend", "detect", "flood",
    "pour", "return", "object", "attach", "saw", "smoke", "bury",
    "bare", "peck", "punch", "whirl", "rub", "pretend", "tick",
    "wonder", "close", "concern", "grab", "provide", "flash",
    "r_inse", "scrape", "kick", "load", "beam", "order", "sack",
    "exam_ine", "gr_in", "boast", "squash", "squeal", "connect",
    "test", "rema_in", "joke", "tug", "cheer", "fade", "spoil",
    "stare", "pop", "attract", "thank", "suit", "found",
    "cont_inue", "judge", "hug", "warn", "expect", "argue", "fill",
    "level", "last", "shave", "employ", "branch", "regret",
    "shock", "roll", "treat", "prepare", "remove", "_increase",
    "tickle", "chop", "hunt", "wreck", "curl", "melt", "tease",
    "support", "whip", "pull", "place", "scratch", "x-ray",
    "apologise", "fear", "use", "pack", "protect", "reduce",
    "repeat", "sparkle", "unite", "decorate", "obta_in",
    "disagree", "prick", "reject", "reflect", "owe", "guard",
    "subtract", "hammer", "turn", "prefer", "mess up", "serve",
    "choke", "grip", "promise", "rely", "love", "p_ine", "settle",
    "fool", "deserve", "spare", "back", "_instruct", "suspect",
    "snatch", "time", "reach", "need", "heap", "memorise",
    "prevent", "hope", "dance", "plant", "skip", "perform",
    "care", "guess", "cough", "boil", "live", "bl_ink", "w_ink",
    "p_inch", "taste", "consider", "analyse", "please", "accept",
    "pedal", "greet", "surround", "describe", "harass", "radiate",
    "gaze", "sneeze", "replace", "pr_int", "delay", "alert",
    "disappear", "sign", "vanish", "fold", "kneel", "cry", "walk",
    "press", "untidy", "breathe", "work", "frame", "curve", "ban",
    "desert", "count", "form", "snore", "scribble", "moor",
    "fence", "wave", "help", "confuse", "impress", "obey",
    "escape", "realise", "hop", "spot", "possess", "post",
    "drown", "claim", "_include", "flower", "lighten", "bubble",
    "twist", "announce", "request", "follow", "s_in", "rescue",
    "program", "receive", "_inform", "kill", "_interest", "notice",
    "zoom", "trip", "coach", "rot", "cheat", "crack", "permit",
    "dra_in", "collect", "whistle", "park", "empty", "buzz",
    "advise", "handle", "appear", "develop", "expand", "license",
    "lock", "wriggle", "bathe", "overflow", "save", "clip",
    "stroke", "blush", "compare", "wander", "talk", "_influence",
    "telephone", "trot"
];
tense = "present";
plural = true;
Str_ing.prototype.replaceAt = function(_index, character) {
    return this.substr(0, _index) + character + this.substr(_index +
        character.length);
}
give.me.an._integer = function(max) {
    return Math.round(Math.random() * (max + 1));
}
give.me.a.noun = function() {
    var z = give.me.an._integer(give.me.nouns.length - 1)
    var z1 = give.me.an._integer(0);
    if (!isit.plural(give.me.nouns[z]) && z1) {
        return give.me.a.plural(give.me.nouns[z]);
    } else {
        return give.me.nouns[z];
    }
}
give.me.an.adjective = function() {
    return give.me.adjectives[give.me.an._integer(give.me.adjectives
        .length - 1)];
}
give.me.a.verb = function() {
    return give.me.verbs[give.me.an._integer(give.me.verbs.length -
        1)];
}
give.me.a.conjugated.verb._in.present = function() {
    var x = give.me.a.verb();
    if (isit.vocal(x.charAt(x.length - 1))) {
        x = x.slice(0, x.length - 1);
    }
    tense = "present";
    return x + '_ing';
}
give.me.a.conjugated.verb._in.future = function() {
    tense = "future";
    return 'will ' + give.me.a.verb();
}
give.me.a.conjugated.verb._in.past = function() {
    var x = give.me.an._integer(1);
    if (x == 1) {
        var x = give.me.a.verb();
        if (x.charAt(x.length - 1) == 'e') {
            tense = "past, d";
            return x + 'd';
        } else {
            tense = "past, ed";
            return x + 'ed';
        }
    } else {
        var x = give.me.a.verb();
        if (x.charAt(x.length - 1) == 'e') {
            tense = "had, d";
            return 'had ' + x + 'd';
        } else {
            tense = "had, ed";
            return 'had ' + x + 'ed';
        }
    }
}
give.me.a.conjugated.verb.any = function() {
    var x = give.me.an._integer(2);
    if (x == 1) {
        return give.me.a.conjugated.verb._in.present();
    } else if (x == 2) {
        return give.me.a.conjugated.verb._in.future();
    } else {
        return give.me.a.conjugated.verb._in.past();
    }
}
isit.consonant = function(char) {
    for (i = 0; i < consonants.length; i++) {
        if (char === consonants[i]) {
            return true;
        }
    }
    return false;
}
isit.vocal = function(char) {
    for (i = 0; i < vocals.length; i++) {
        if (char == vocals[i]) {
            return true;
        }
    }
    return false;
}
starts._with.consonant = function(str) {
    if (isit.consonant(str.charAt(0))) {
        return true;
    } else {
        return false;
    }
}
isit.plural = function(str) {
    if (str.charAt(str.length - 1) === 's') {
        plural = true;
        return true;
    } else {
        plural = false;
        return false;
    }
}
give.me.a.preposition = function(str) {
    if (!isit.plural(str)) {
        if (starts._with.consonant(str)) {
            return 'a ';
        } else {
            return 'an ';
        }
    } else {
        return '';
    }
}
give.me.a.plural = function(str) {
    plural = true;
    if (isit.plural(str)) {
        return str;
    } else {
        if (str.charAt(str.length - 1) == 'y') {
            return str.slice(0, str.length - 1) + 'ies';
        } else {
            return str + 's';
        }
    }
}
give.me.an._interrogative_phrase = function(str) {
    //var x = '';
    if (tense == 'future') {
        return str.replace(/(.*) will (.*)/g, 'will $1 $2?');
    } else if (tense == 'had, d' || tense == 'had, ed') {
        return str.replace(/(.*) had (.*)/g, 'had $1 $2?');
    } else if (tense == 'past, d') {
        return str.replace(/(.*)d (.*)/g, 'did $1 $2?');
    } else if (tense == 'past, ed') {
        return str.replace(/(.*)ed (.*)/g, 'did $1 $2?');
    } else if (plural) {
        return str.replace(/(.*)ing (.*)/g, 'do $1 $2?');
    } else {
        return str.replace(/(.*)ing (.*)/g, 'does $1 $2?');
    }
    //return x;
}
give.me.a.phrase = function() {
        var noun = give.me.a.noun();
        return give.me.an.adjective() + " " + give.me.an.adjective() +
            " " + give.me.a.noun() + " " + give.me.a.conjugated.verb.any() +
            " " + give.me.a.preposition(noun) + noun;
}
//give.me.a.phrase();
