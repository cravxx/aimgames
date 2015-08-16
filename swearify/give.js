give = {};
give.me = {};
give.me.a = {};
give.me.an = {};
give.me.a.conjugated = {};
give.me.a.conjugated.verb = {};
give.me.a.conjugated.verb.in = {};
is = {};
starts = {};
starts.with = {};
consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
vocals = ['a', 'e', 'i', 'o', 'u'];
give.me.nouns = ["stitch", "square", "leather", "bucket", "church", "group", "silver", "hall", "move", "tank", "leg", "roll", "wool", "hammer", "company", "digestion", "pin", "farm", "underwear", "ear", "eggs", "story", "rat", "bulb", "snail", "drain", "shoe", "hope", "pickle", "stretch", "insect", "knowledge", "meal", "metal", "sheep", "bag", "vessel", "ladybug", "cemetery", "system", "texture", "shake", "verse", "business", "eye", "marble", "engine", "field", "education", "smell", "grip", "riddle", "crime", "cake", "throat", "error", "airport", "arch", "afterthought", "wrench", "start", "linen", "caption", "straw", "expansion", "wilderness", "water", "van", "calculator", "range", "stocking", "song", "pen", "view", "language", "ants", "comparison", "hands", "guide", "hook", "quince", "order", "frogs", "neck", "offer", "recess", "babies", "woman", "chance", "seat", "airplane", "trade", "town", "place", "chess", "self", "fall", "measure", "instrument", "zephyr", "glove", "competition", "cook", "balance", "room", "tail", "drop", "nerve", "regret", "blade", "birthday", "approval", "collar", "ocean", "fairies", "month", "book", "cherry", "mountain", "quill", "spoon", "icicle", "boot", "cakes", "join", "art", "mouth", "growth", "care", "spring", "girl", "grandmother", "swim", "interest", "dinner", "cup", "respect", "rice", "clam", "furniture", "flesh", "fold", "humor", "sisters", "toothpaste", "coast", "milk", "act", "sack", "poison", "seashore", "cart", "jam", "surprise", "liquid", "control", "tomatoes", "umbrella", "cent", "hill", "development", "shirt", "religion", "hour", "bomb", "machine", "minute", "spot", "grape", "spiders", "fog", "frog", "trees", "hand", "mind", "pets", "donkey", "transport", "thread", "base", "window", "alarm", "basin", "sink", "corn", "boy", "ring", "peace", "rest", "cactus", "statement", "degree", "bear", "string", "plane", "stove", "fireman", "baseball", "mine", "daughter", "quartz", "crow", "tent", "bone", "doctor", "orange", "mass", "account", "motion", "children", "form", "visitor", "loaf", "coach", "increase", "toothbrush", "dolls", "connection", "heat", "salt", "cow", "camp", "agreement", "branch", "size", "scissors", "locket", "stem", "drawer", "rule", "desk", "sail", "hair", "lake", "tramp", "pet", "pest", "stew", "lunchroom", "curtain", "noise", "stream", "wire", "pump", "houses", "flame", "creature", "selection", "vein", "hose", "sheet", "example", "match", "pan", "thrill", "wash", "finger", "prose", "skirt", "grandfather", "shape", "market", "jelly", "geese", "trouble", "school", "stage", "screw", "kiss", "change", "push", "son", "train", "stick", "soap", "sofa", "island", "land", "addition", "dad", "need", "playground", "argument", "decision", "gun", "receipt", "arm", "table", "trick", "plant", "birds", "skin", "stop", "governor", "crowd", "force", "wind", "suit", "holiday", "sidewalk", "lock", "division", "store", "cough", "cat", "bee", "actor", "nation", "property", "brake", "butter", "river", "gold", "bikes", "bed", "edge", "line", "fork", "dock", "mint", "magic", "kittens", "lunch", "horses", "sponge", "box", "weather", "porter", "home", "juice", "jump", "pear", "grain", "play", "low", "potato", "roof", "mom", "year", "silk", "horse", "jeans", "scent", "brother", "nose", "treatment", "work", "breath", "giants", "twist", "quicksand", "angle", "show", "knife", "dust", "point", "mice", "fear", "plastic", "class", "night", "plot", "cream", "tray", "punishment", "mark", "week", "anger", "flag", "secretary", "iron", "design", "dress", "guitar", "worm", "maid", "birth", "library", "parcel", "wine", "bottle", "taste", "house", "science", "bath", "pencil", "ship", "passenger", "veil", "pocket", "believe", "time", "sense", "board", "attraction", "bell", "kettle", "reason", "cap", "dirt", "jellyfish", "waste", "wound", "use", "feeling", "sneeze", "crate", "drink", "ball", "protest", "plants", "scale", "tiger", "bat", "knee", "horn", "route", "laugh", "badge", "sweater", "carriage", "territory", "vase", "cast", "popcorn", "scarecrow", "egg", "look", "songs", "pancake", "stone", "rainstorm", "health", "throne", "request", "record", "chalk", "touch", "sister", "pull", "pies", "berry", "picture", "produce", "watch", "cars", "insurance", "flavor", "sky", "man", "structure", "bike", "discovery", "button", "volcano", "dog", "eyes", "blow", "face", "oatmeal", "rock", "spade", "sun", "loss", "toys", "question", "fowl", "railway", "street", "idea", "notebook", "page", "profit", "shame", "office", "army", "shelf", "cows", "club", "fly", "rings", "walk", "pollution", "jewel", "jail", "powder", "building", "rod", "fish", "memory", "debt", "desire", "driving", "winter", "wave", "elbow", "crown", "twig", "swing", "love", "glass", "morning", "lumber", "coil", "flight", "step", "expert", "zipper", "lamp", "fang", "bells", "dinosaurs", "ray", "shop", "friction", "pipe", "mist", "sock", "vest", "crack", "cannon", "back", "whip", "north", "basket", "history", "robin", "pigs", "wheel", "crib", "mask", "paper", "action", "cellar", "turn", "wall", "bushes", "color", "fuel", "plough", "advertisement", "party", "needle", "toad", "reading", "committee", "slip", "volleyball", "floor", "wren", "nut", "rail", "planes", "oven", "payment", "toy", "grade", "middle", "name", "dime", "kick", "girls", "basketball", "scene", "steam", "cats", "whistle", "yoke", "pizzas", "card", "part", "judge", "power", "laborer", "space", "bead", "cable", "tub", "amount", "aftermath", "quiver", "rub", "support", "tin", "trail", "cloth", "tree", "sticks", "cheese", "teeth", "muscle", "behavior", "camera", "existence", "flock", "star", "quiet", "plantation", "toes", "yarn", "cobweb", "quilt", "end", "snails", "flowers", "stomach", "run", "things", "spark", "effect", "sleet", "snow", "quarter", "rake", "apparel", "haircut", "relation", "unit", "meat", "level", "lettuce", "brass", "head", "steel", "country", "tax", "giraffe", "team", "baby", "dogs", "curve", "rifle", "tooth", "turkey", "eggnog", "belief", "can", "channel", "bedroom", "hate", "sort", "talk", "oil", "destruction", "doll", "pot", "day", "rain", "credit", "partner", "ink", "reward", "snake", "women", "note", "wing", "sugar", "shade", "wrist", "smoke", "position", "monkey", "direction", "achiever", "battle", "yak", "stranger", "calendar", "value", "test", "trains", "minister", "zebra", "wish", "distribution", "blood", "activity", "experience", "wood", "adjustment", "government", "circle", "purpose", "rabbit", "war", "sign", "animal", "cub", "trousers", "lip", "word", "coat", "afternoon", "rose", "queen", "ducks", "society", "rabbits", "legs", "thumb", "hot", "invention", "deer", "hole", "frame", "top", "key", "discussion", "price", "friend", "smile", "distance", "apparatus", "voyage", "bridge", "beds", "rhythm", "reaction", "soda", "kitty", "beef", "writer", "attack", "title", "sea", "border", "harbor", "door", "plate", "uncle", "mother", "shoes", "zinc", "cause", "cover", "thunder", "exchange", "celery", "representative", "income", "letters", "snakes", "trip", "number", "bird", "fact", "books", "observation", "chickens", "trucks", "sleep", "air", "amusement", "foot", "earthquake", "side", "hat", "ghost", "ice", "downtown", "fruit", "chin", "mailbox", "acoustics", "crook", "way", "burst", "ground", "yam", "limit", "summer", "tendency", "wax", "beginner", "brick", "fire", "writing", "mitten", "friends", "scarf", "weight", "smash", "harmony", "sand", "hobbies", "boat", "slave", "shock", "finger", "earth", "bubble", "front", "bit", "spy", "food", "thought", "root", "skate", "zoo", "death", "boundary", "yard", "lace", "bite", "car", "slope", "suggestion", "impulse", "creator", "bait", "arithmetic", "voice", "flower", "temper", "teaching", "knot", "cabbage", "hydrant", "coal", "hospital", "moon", "vegetable", "pail", "cave", "meeting", "station", "person", "authority", "aunt", "letter", "vacation", "event", "thing", "crayon", "waves", "substance", "detail", "honey", "nest", "clover", "road", "pleasure", "cushion", "cracker", "chicken", "pie", "copper", "oranges", "servant", "jar", "appliance", "toe", "rate", "men", "condition", "truck", "tongue", "industry", "sound", "soup", "current", "money", "cherries", "wealth", "gate", "ticket", "advice", "squirrel", "duck", "grass", "pig", "seed", "cattle", "stamp", "canvas", "theory", "carpenter"];
give.me.adjectives = ["abrupt", "acidic", "adorable", "adventurous", "aggressive", "agitated", "alert", "aloof", "amiable", "amused", "annoyed", "antsy", "anxious", "appalling", "appetizing", "apprehensive", "arrogant", "ashamed", "astonishing", "attractive", "average", "batty", "beefy", "bewildered", "biting", "bitter", "bland", "blushing", "bored", "brave", "bright", "broad", "bulky", "burly", "charming", "cheeky", "cheerful", "chubby", "clean", "clear", "cloudy", "clueless", "clumsy", "colorful", "colossal", "combative", "comfortable", "condemned", "condescending", "confused", "contemplative", "convincing", "convoluted", "cooperative", "corny", "costly", "courageous", "crabby", "creepy", "crooked", "cruel", "cumbersome", "curved", "cynical", "dangerous", "dashing", "decayed", "deceitful", "deep", "defeated", "defiant", "delicious", "delightful", "depraved", "depressed", "despicable", "determined", "dilapidated", "diminutive", "disgusted", "distinct", "distraught", "distressed", "disturbed", "dizzy", "drab", "drained", "dull", "eager", "ecstatic", "elated", "elegant", "emaciated", "embarrassed", "enchanting", "encouraging", "energetic", "enormous", "enthusiastic", "envious", "exasperated", "excited", "exhilarated", "extensive", "exuberant", "fancy", "fantastic", "fierce", "filthy", "flat", "floppy", "fluttering", "foolish", "frantic", "fresh", "friendly", "frightened", "frothy", "frustrating", "funny", "fuzzy", "gaudy", "gentle", "ghastly", "giddy", "gigantic", "glamorous", "gleaming", "glorious", "gorgeous", "graceful", "greasy", "grieving", "gritty", "grotesque", "grubby", "grumpy", "handsome", "happy", "harebrained", "healthy", "helpful", "helpless", "high", "hollow", "homely", "horrific", "huge", "hungry", "hurt", "icy", "ideal", "immense", "impressionable", "intrigued", "irate", "irritable", "itchy", "jealous", "jittery", "jolly", "joyous", "juicy", "jumpy", "kind", "lackadaisical", "large", "lazy", "lethal", "little", "lively", "livid", "lonely", "loose", "lovely", "lucky", "ludicrous", "macho", "magnificent", "mammoth", "maniacal", "massive", "melancholy", "melted", "miniature", "minute", "mistaken", "misty", "moody", "mortified", "motionless", "muddy", "mysterious", "narrow", "nasty", "naughty", "nervous", "nonchalant", "nonsensical", "nutritious", "nutty", "obedient", "oblivious", "obnoxious", "odd", "old", "-", "fashioned", "outrageous", "panicky", "perfect", "perplexed", "petite", "petty", "plain", "pleasant", "poised", "pompous", "precious", "prickly", "proud", "pungent", "puny", "quaint", "quizzical", "ratty", "reassured", "relieved", "repulsive", "responsive", "ripe", "robust", "rotten", "rotund", "rough", "round", "salty", "sarcastic", "scant", "scary", "scattered", "scrawny", "selfish", "shaggy", "shaky", "shallow", "sharp", "shiny", "short", "silky", "silly", "skinny", "slimy", "slippery", "small", "smarmy", "smiling", "smoggy", "smooth", "smug", "soggy", "solid", "sore", "sour", "sparkling", "spicy", "splendid", "spotless", "square", "stale", "steady", "steep", "sticky", "stormy", "stout", "straight", "strange", "strong", "stunning", "substantial", "successful", "succulent", "superficial", "superior", "swanky", "sweet", "tart", "tasty", "teeny", "tender", "tense", "terrible", "testy", "thankful", "thick", "thoughtful", "thoughtless", "tight", "timely", "tricky", "trite", "troubled", "twitterpated", "uneven", "unsightly", "upset", "uptight", "vast", "vexed", "victorious", "virtuous", "vivacious", "vivid", "wacky", "weary", "whimsical", "whopping", "wicked", "witty", "wobbly", "wonderful", "worried", "yummy", "zany", "zealous", "zippy", "sudden", "infamous", "endurable", "curious", "three", "meaty", "innate", "habitual", "complex", "third", "cut", "idiotic", "abrasive", "addicted", "disastrous", "pathetic", "taboo", "known", "likeable", "thundering", "careful", "legal", "ahead", "observant", "intelligent", "lush", "futuristic", "hard", "abounding", "neat", "wet", "easy", "flowery", "earsplitting", "mean", "left", "half", "scared", "safe", "romantic", "swift", "assorted", "threatening", "jazzy", "sincere", "nifty", "stiff", "low", "unused", "sneaky", "gaping", "able", "gabby", "berserk", "blue", "callous", "unusual", "eatable", "purring", "nebulous", "stupendous", "guiltless", "imminent", "unsuitable", "ugly", "heavenly", "chilly", "forgetful", "foamy", "rampant", "tiresome", "neighborly", "melodic", "wide", "ill-informed", "spiffy", "obsolete", "tranquil", "exclusive", "incandescent", "brown", "woebegone", "beneficial", "vague", "orange", "woozy", "detailed", "ad hoc", "unbiased", "light", "possessive", "same", "far-flung", "barbarous", "historical", "expensive", "majestic", "cautious", "fumbling", "beautiful", "serious", "versed", "exultant", "awful", "whispering", "tedious", "unadvised", "new", "curvy", "protective", "shocking", "pushy", "handsomely", "abortive", "unwritten", "red", "knotty", "sordid", "tough", "overwrought", "craven", "numberless", "fascinated", "clever", "dusty", "divergent", "false", "direful", "standing", "faulty", "faint", "wiggly", "scandalous", "noiseless", "terrific", "opposite", "two", "debonair", "imported", "nosy", "obscene", "vulgar", "tacit", "painful", "previous", "kindhearted", "macabre", "delirious", "equal", "quack", "snotty", "fragile", "puzzled", "lowly", "didactic", "literate", "voiceless", "loud", "hilarious", "polite", "judicious", "big", "materialistic", "mundane", "free", "mushy", "flaky", "obeisant", "evasive", "common", "extra-large", "abashed", "penitent", "fertile", "wrathful", "husky", "needy", "useful", "tearful", "redundant", "spurious", "parched", "like", "good", "tangible", "spiritual", "general", "superb", "resonant", "few", "aware", "unequal", "godly", "brief", "damp", "quiet", "frequent", "cooing", "hushed", "chunky", "oafish", "wandering", "black-and-white", "messy", "right", "economic", "gusty", "elite", "five", "supreme", "giant", "innocent", "deafening", "racial", "bad", "old-fashioned", "vacuous", "selective", "grey", "faithful", "volatile", "greedy", "fine", "puzzling", "picayune", "familiar", "tame", "thirsty", "early", "unaccountable", "adhesive", "near", "full", "accessible", "abusive", "learned", "material", "humorous", "brawny", "well-made", "blue-eyed", "illustrious", "hulking", "rhetorical", "spiky", "nimble", "furtive", "deadpan", "internal", "wiry", "sulky", "quickest", "last", "caring", "waiting", "torpid", "imperfect", "kindly", "quixotic", "cowardly", "maddening", "uttermost", "ossified", "truculent", "unbecoming", "modern", "fixed", "makeshift", "obtainable", "equable", "premium", "rainy", "dynamic", "slim", "freezing", "plastic", "wry", "stereotyped", "skillful", "absent", "thinkable", "daily", "steadfast", "curly", "special", "measly", "silent", "nostalgic", "disillusioned", "ritzy", "disagreeable", "stupid", "towering", "defective", "simple", "snobbish", "aback", "sable", "real", "lame", "functional", "first", "past", "hanging", "flimsy", "loutish", "used", "invincible", "aromatic", "periodic", "probable", "glistening", "guttural", "mighty", "bumpy", "nine", "squeamish", "grouchy", "warm", "tacky", "quirky", "nondescript", "delicate", "various", "dreary", "hysterical", "hypnotic", "overrated", "brainy", "deserted", "jumbled", "alike", "teeny-tiny", "incompetent", "piquant", "obsequious", "lamentable", "tan", "uppity", "milky", "aspiring", "lavish", "public", "afraid", "befitting", "lying", "sassy", "efficient", "well-to-do", "mixed", "mature", "laughable", "fanatical", "doubtful", "bizarre", "clammy", "organic", "white", "ethereal", "null", "aboriginal", "slow", "responsible", "windy", "capricious", "overjoyed", "gullible", "classy", "hard-to-find", "fluffy", "mountainous", "holistic", "spectacular", "worthless", "willing", "valuable", "chief", "cloistered", "fretful", "utter", "yielding", "insidious", "phobic", "bent", "acid", "muddled", "dapper", "handy", "boundless", "certain", "cute", "minor", "weak", "horrible", "onerous", "one", "highfalutin", "ordinary", "hot", "nonstop", "rich", "righteous", "different", "talented", "gruesome", "oval", "absorbing", "bloody", "acoustic", "high-pitched", "gray", "waggish", "womanly", "boiling", "difficult", "screeching", "political", "alcoholic", "naive", "ill", "striped", "honorable", "eminent", "illegal", "noisy", "apathetic", "disgusting", "squalid", "drunk", "zonked", "heartbreaking", "violent", "longing", "great", "changeable", "undesirable", "rigid", "alive", "enchanted", "tawdry", "coordinated", "rapid", "best", "mute", "boring", "inquisitive", "cheap", "parsimonious", "spooky", "shivering", "ten", "ceaseless", "better", "glib", "tired", "possible", "secret", "bustling", "deranged", "succinct", "bashful", "remarkable", "even", "wasteful", "fearless", "hallowed", "second", "vengeful", "hideous", "yellow", "heady", "roomy", "raspy", "smart", "damaged", "seemly", "reflective", "elastic", "subdued", "dramatic", "dispensable", "tested", "pricey", "ambiguous", "rude", "loving", "outgoing", "harmonious", "tasteful", "synonymous", "malicious", "female", "unknown", "fair", "dysfunctional", "descriptive", "amazing", "second-hand", "tiny", "next", "dirty", "impolite", "royal", "bawdy", "abaft", "limping", "awake", "lewd", "efficacious", "mindless", "sweltering", "fast", "breezy", "temporary", "rural", "gifted", "goofy", "future", "awesome", "therapeutic", "truthful", "decisive", "tremendous", "unkempt", "wealthy", "domineering", "faded", "childlike", "flagrant", "well-groomed", "plucky", "resolute", "dark", "utopian", "pale", "feeble", "uninterested", "concerned", "pastoral", "heavy", "necessary", "puffy", "kaput", "pretty", "overt", "fat", "breakable", "simplistic", "wrong", "labored", "devilish", "symptomatic", "six", "physical", "miscreant", "crazy", "flashy", "tenuous", "vigorous", "spiteful", "uncovered", "inexpensive", "festive", "abhorrent", "unequaled", "living", "profuse", "agreeable", "demonic", "military", "upbeat", "entertaining", "scientific", "broken", "tangy", "long-term", "diligent", "rebel", "harsh", "rightful", "ultra", "gainful", "sophisticated", "frail", "discreet", "toothsome", "ubiquitous", "finicky", "long", "guarded", "stimulating", "amuck", "abundant", "violet", "sleepy", "aquatic", "ruthless", "frightening", "humdrum", "painstaking", "statuesque", "hellish", "savory", "flippant", "hesitant", "flawless", "angry", "unhealthy", "evanescent", "grandiose", "elfin", "garrulous", "deeply", "hurried", "well-off", "shy", "rare", "ambitious", "automatic", "exotic", "scarce", "placid", "agonizing", "reminiscent", "omniscient", "merciful", "marked", "gamy", "true", "lacking", "medical", "decorous", "squealing", "chivalrous", "fortunate", "excellent", "staking", "cultured", "psychedelic", "trashy", "verdant", "extra-small", "lyrical", "famous", "knowing", "knowledgeable", "amusing", "irritating", "dazzling", "lean", "imaginary", "subsequent", "parallel", "permissible", "billowy", "far", "workable", "wise", "tightfisted", "available", "vagabond", "oceanic", "zesty", "dead", "psychotic", "pointless", "calculating", "alluring", "satisfying", "married", "youthful", "magical", "male", "accurate", "moldy", "optimal", "wretched", "hapless", "magenta", "young", "tall", "inconclusive", "actually", "untidy", "present", "aberrant", "numerous", "halting", "languid", "separate", "adaptable", "sturdy", "grateful", "jobless", "crowded", "tasteless", "receptive", "cuddly", "madly", "capable", "homeless", "dear", "belligerent", "spotty", "instinctive", "adjoining", "stingy", "shut", "incredible", "electric", "ablaze", "unique", "cool", "understood", "roasted", "juvenile", "purple", "pumped", "ignorant", "foregoing", "sad", "nappy", "elderly", "hissing", "lopsided", "lumpy", "exciting", "murky", "rustic", "panoramic", "somber", "jaded", "ruddy", "watery", "needless", "sloppy", "animated", "alleged", "hospitable", "open", "groovy", "recondite", "unnatural", "earthy", "busy", "keen", "quarrelsome", "eight", "green", "plausible", "wholesale", "abnormal", "impossible", "sick", "cold", "cagey", "draconian", "dry", "abject", "unwieldy", "thin", "perpetual", "natural", "absurd", "erect", "feigned", "tidy", "ugliest", "wary", "ragged", "wakeful", "calm", "adamant"];
give.me.verbs = ["warm", "step", "hand", "multiply", "decay", "bore", "fax", "push", "slap", "suspend", "jog", "man", "dry", "play", "wobble", "groan", "knit", "coil", "part", "welcome", "mark", "sigh", "strap", "clear", "complain", "camp", "imagine", "copy", "undress", "nod", "cover", "mine", "miss", "terrify", "smell", "train", "harm", "rhyme", "admit", "whisper", "correct", "bless", "whine", "remind", "encourage", "release", "hum", "point", "present", "ski", "switch", "jail", "mourn", "dam", "happen", "rejoice", "cure", "smash", "wail", "stain", "discover", "match", "touch", "sip", "phone", "wash", "pause", "interrupt", "suppose", "recognise", "identify", "damage", "peel", "retire", "trust", "scrub", "soothe", "heat", "trace", "add", "challenge", "drag", "precede", "drum", "annoy", "stamp", "avoid", "march", "clean", "explain", "matter", "list", "command", "jam", "lie", "suggest", "share", "itch", "move", "glow", "rain", "blot", "inject", "reply", "doubt", "repair", "compete", "preserve", "colour", "scatter", "listen", "paste", "approve", "sail", "arrange", "laugh", "strip", "fail", "cycle", "trap", "scream", "fancy", "contain", "offer", "relax", "rob", "dress", "guide", "exist", "plan", "snow", "own", "nest", "travel", "pick", "peep", "raise", "rock", "satisfy", "bounce", "bow", "check", "occur", "fasten", "ignore", "embarrass", "try", "tremble", "stitch", "slip", "intend", "race", "chew", "dust", "note", "screw", "enter", "comb", "poke", "allow", "spell", "frighten", "fetch", "communicate", "wait", "educate", "name", "knot", "bang", "slow", "stay", "muddle", "dislike", "wipe", "entertain", "milk", "carry", "irritate", "label", "nail", "earn", "invent", "number", "grate", "dare", "guarantee", "arrive", "heal", "visit", "spill", "preach", "search", "crawl", "wrap", "like", "queue", "plug", "rule", "offend", "carve", "learn", "brake", "book", "interfere", "hover", "burn", "file", "crush", "pump", "cross", "bruise", "agree", "change", "steer", "consist", "amuse", "rush", "disarm", "suck", "unpack", "tie", "sound", "surprise", "grease", "supply", "polish", "bump", "strengthen", "look", "belong", "battle", "flap", "tap", "weigh", "face", "bomb", "stir", "moan", "drip", "afford", "balance", "start", "chase", "join", "risk", "sniff", "report", "glue", "bleach", "call", "paint", "waste", "beg", "admire", "attempt", "flow", "reproduce", "brush", "calculate", "puncture", "jump", "transport", "complete", "appreciate", "deliver", "confess", "excite", "squeak", "gather", "double", "bolt", "end", "store", "open", "launch", "drop", "unfasten", "meddle", "stretch", "soak", "force", "fit", "trouble", "pat", "hurry", "improve", "haunt", "mate", "scold", "delight", "succeed", "stop", "shiver", "tire", "introduce", "enjoy", "tour", "fire", "murder", "blind", "yawn", "destroy", "excuse", "bake", "film", "mug", "explode", "marry", "fry", "tempt", "mix", "tumble", "invite", "ruin", "trade", "charge", "remember", "behave", "scorch", "divide", "question", "knock", "pass", "lick", "clap", "pray", "exercise", "refuse", "arrest", "zip", "tip", "thaw", "depend", "shelter", "land", "borrow", "hang", "mend", "spark", "suffer", "wrestle", "shade", "disapprove", "decide", "answer", "paddle", "concentrate", "measure", "signal", "seal", "extend", "injure", "attack", "crash", "separate", "type", "practise", "stuff", "trick", "smile", "float", "water", "record", "hate", "attend", "detect", "flood", "pour", "return", "object", "attach", "saw", "smoke", "bury", "bare", "peck", "punch", "whirl", "rub", "pretend", "tick", "wonder", "close", "concern", "grab", "provide", "flash", "rinse", "scrape", "kick", "load", "beam", "order", "sack", "examine", "grin", "boast", "squash", "squeal", "connect", "test", "remain", "joke", "tug", "cheer", "fade", "spoil", "stare", "pop", "attract", "thank", "suit", "found", "continue", "judge", "hug", "warn", "expect", "argue", "fill", "level", "last", "shave", "employ", "branch", "regret", "shock", "roll", "treat", "prepare", "remove", "increase", "tickle", "chop", "hunt", "wreck", "curl", "melt", "tease", "support", "whip", "pull", "place", "scratch", "x-ray", "apologise", "fear", "use", "pack", "protect", "reduce", "repeat", "sparkle", "unite", "decorate", "obtain", "disagree", "prick", "reject", "reflect", "owe", "guard", "subtract", "hammer", "turn", "prefer", "mess up", "serve", "choke", "grip", "promise", "rely", "love", "pine", "settle", "fool", "deserve", "spare", "back", "instruct", "suspect", "snatch", "time", "reach", "need", "heap", "memorise", "prevent", "hope", "dance", "plant", "skip", "perform", "care", "guess", "cough", "boil", "live", "blink", "wink", "pinch", "taste", "consider", "analyse", "please", "accept", "pedal", "greet", "surround", "describe", "harass", "radiate", "gaze", "sneeze", "replace", "print", "delay", "alert", "disappear", "sign", "vanish", "fold", "kneel", "cry", "walk", "press", "untidy", "breathe", "work", "frame", "curve", "ban", "desert", "count", "form", "snore", "scribble", "moor", "fence", "wave", "help", "confuse", "impress", "obey", "escape", "realise", "hop", "spot", "possess", "post", "drown", "claim", "include", "flower", "lighten", "bubble", "twist", "announce", "request", "follow", "sin", "rescue", "program", "receive", "inform", "kill", "interest", "notice", "zoom", "trip", "coach", "rot", "cheat", "crack", "permit", "drain", "collect", "whistle", "park", "empty", "buzz", "advise", "handle", "appear", "develop", "expand", "license", "lock", "wriggle", "bathe", "overflow", "save", "clip", "stroke", "blush", "compare", "wander", "talk", "influence", "telephone", "trot"];
tense = "present";
plural = true;
String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
}
give.me.an.integer = function(max) {
    return Math.round(Math.random() * (max + 1));
}
give.me.a.noun = function() {
    var z = give.me.an.integer(give.me.nouns.length - 1)
    var z1 = give.me.an.integer(0);
    if (!is.plural(give.me.nouns[z]) && z1) {
        return give.me.a.plural(give.me.nouns[z]);
    } else {
        return give.me.nouns[z];
    }
}
give.me.an.adjective = function() {
    return give.me.adjectives[give.me.an.integer(give.me.adjectives.length - 1)];
}
give.me.a.verb = function() {
    return give.me.verbs[give.me.an.integer(give.me.verbs.length - 1)];
}
give.me.a.conjugated.verb.in.present = function() {
    var x = give.me.a.verb();
    if (is.vocal(x.charAt(x.length - 1))) {
        x = x.slice(0, x.length - 1);
    }
    tense = "present";
    return x + 'ing';
}
give.me.a.conjugated.verb.in.future = function() {
    tense = "future";
    return 'will ' + give.me.a.verb();
}
give.me.a.conjugated.verb.in.past = function() {
    var x = give.me.an.integer(1);
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
    var x = give.me.an.integer(2);
    if (x == 1) {
        return give.me.a.conjugated.verb.in.present();
    } else if (x == 2) {
        return give.me.a.conjugated.verb.in.future();
    } else {
        return give.me.a.conjugated.verb.in.past();
    }
}
is.consonant = function(char) {
    for (i = 0; i < consonants.length; i++) {
        if (char === consonants[i]) {
            return true;
        }
    }
    return false;
}
is.vocal = function(char) {
    for (i = 0; i < vocals.length; i++) {
        if (char == vocals[i]) {
            return true;
        }
    }
    return false;
}
starts.with.consonant = function(str) {
    if (is.consonant(str.charAt(0))) {
        return true;
    } else {
        return false;
    }
}
is.plural = function(str) {
    if (str.charAt(str.length - 1) === 's') {
        plural = true;
        return true;
    } else {
        plural = false;
        return false;
    }
}
give.me.a.preposition = function(str) {
    if (!is.plural(str)) {
        if (starts.with.consonant(str)) {
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
    if (is.plural(str)) {
        return str;
    } else {
        if (str.charAt(str.length - 1) == 'y') {
            return str.slice(0, str.length - 1) + 'ies';
        } else {
            return str + 's';
        }
    }
}
give.me.an.interrogative_phrase = function(str) {
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
    return give.me.an.adjective() + " " + give.me.an.adjective() + " " + give.me.a.noun() + " " + give.me.a.conjugated.verb.any() + " " + give.me.a.preposition(noun) + noun;
}
give.me.a.phrase();
