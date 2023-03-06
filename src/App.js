import './App.css';
import { useEffect, useState } from "react";
import tracery from "tracery-grammar";
import emoji from "emoji-random-list";
import { useSwipeable } from "react-swipeable";
import Modal from "react-modal";
import seedrandom from "seedrandom";
import html2canvas from "html2canvas";
import capybaraImg from "./capybara.svg";

const BATCH_SIZE = 50;

const grammar = tracery.createGrammar({
    "alignment1": [
        "awful",
        "chaotic",
        "kinda",
        "lawful",
        "neutral",
        "somewhat",
        "very",
    ],
    "alignment2": [
        "evil",
        "good",
        "naughty",
        "neutral",
        "nice",
    ],
    "pill": [
        "FOSS",
        "anime",
        "babka",
        "beetle",
        "capy",
        "candy",
        "cheese",
        "criterion",
        "curtain",
        "dairy",
        "denim",
        "eco",
        "elephant",
        "emoji",
        "faberge",
        "fetish",
        "fey",
        "frozen-veggie",
        "geiger",
        "gremlin",
        "golden-delicious",
        "guacamole",
        "hedon",
        "highlander",
        "horton",
        "icarus",
        "izakaya",
        "jorts",
        "kombucha",
        "kondo",
        "magna-carta",
        "marijuana",
        "mushroom",
        "norwegian-cheese",
        "olympic",
        "outdoor",
        "potluck",
        "pothos",
        "rodent",
        "shapeland",
        "sin",
        "tabby",
        "tommy-tallarico",
        "tootsie-roll",
        "water",
        "weed",
        "whey",
    ],
    "descriptor": [
        "#alignment1# #alignment2#",
        "#pill#-pilled",
        "#starsign#",
        "420-friendly",
        "ADHD",
        "aberrant",
        "abnormal",
        "abysmal",
        "abyssal",
        "academic",
        "ace",
        "adult",
        "adventurous",
        "agile",
        "airheaded",
        "all-natural",
        "alluring",
        "aloof",
        "ambidextrous",
        "ambivalent",
        "amenable",
        "amicable",
        "angelic",
        "artistic",
        "artsy",
        "ascendent",
        "assertive",
        "astute",
        "attractive",
        "awesome",
        "awkward",
        "baroque",
        "based",
        "basic",
        "beautiful",
        "biblically accurate",
        "bilingual",
        "blasphemous",
        "blissful",
        "blunt",
        "bold",
        "bombastic",
        "bothered",
        "bratty",
        "brave",
        "brazen",
        "bright",
        "brooding",
        "bubbly",
        "buff",
        "busy",
        "caffeinated",
        "calculating",
        "caliente",
        "callibrated",
        "calm",
        "campy",
        "capypilled",
        "career-focused",
        "carefree",
        "careful",
        "caring",
        "casual",
        "charismatic",
        "cheeky",
        "cheesy",
        "chill",
        "chivalrous",
        "chonky",
        "clumsy",
        "cold",
        "colorful",
        "colossal",
        "comedic",
        "comfortable",
        "competitive",
        "complex",
        "compulsive",
        "conciliatory",
        "confident",
        "consistent",
        "cool",
        "corn-fed",
        "cottagecore",
        "cozy",
        "creative",
        "cringe",
        "crude",
        "curious",
        "curmudgeony",
        "cursed",
        "curt",
        "cyberpunk",
        "cynical",
        "dashing",
        "decent",
        "deep",
        "defiant",
        "degenerate",
        "dehyrdrated",
        "demonic",
        "depressed",
        "devilish",
        "devoted",
        "dignified",
        "diminutive",
        "disaster",
        "divine",
        "dominant",
        "dorky",
        "dreamy",
        "driven",
        "dubious",
        "effervescent",
        "eldritch",
        "emotional",
        "empathetic",
        "employable",
        "energetic",
        "enigmatic",
        "enlightened",
        "erudite",
        "esteemed",
        "even-keeled",
        "evil",
        "excitable",
        "exciting",
        "extroverted",
        "exuberant",
        "faithful",
        "family-oriented",
        "fancy",
        "fantastical",
        "fashionable",
        "feisty",
        "femme",
        "flatulant",
        "fluffy",
        "focused",
        "foolhardy",
        "forgetful",
        "fragile",
        "free-spirited",
        "friend-shaped",
        "friendly",
        "fruity",
        "fun",
        "fun-loving",
        "funemployed",
        "funny",
        "fuzzy",
        "gaseous",
        "gay",
        "geeky",
        "gelatinous",
        "generous",
        "giant",
        "goblin-mode",
        "good",
        "goofy",
        "gothic",
        "gothy",
        "grandiose",
        "gregarious",
        "grumpy",
        "gullible",
        "hallowed",
        "hammy",
        "handsome",
        "happy",
        "hardy",
        "head-empty",
        "healthy",
        "hecked up",
        "helpful",
        "helpless",
        "high EQ",
        "high IQ",
        "high maintenance",
        "highbrow",
        "highfalutin",
        "hirstute",
        "hoary",
        "horrible",
        "hot",
        "huggable",
        "humble",
        "hungry",
        "hydrated",
        "hygenic",
        "hype",
        "hyperbolic",
        "icy",
        "imperceptible",
        "incorrigible",
        "independent",
        "indulgent",
        "intellectual",
        "intelligent",
        "interesting",
        "introspective",
        "introverted",
        "intruiging",
        "ironic",
        "irritable",
        "jaunty",
        "jolly",
        "jovial",
        "kissable",
        "laconic",
        "lefty",
        "lemony",
        "lewd",
        "liquid",
        "loud",
        "lovely",
        "low key",
        "low maintenance",
        "loyal",
        "lucky",
        "lukewarm",
        "lustrous",
        "magical",
        "magnanimous",
        "magnificent",
        "masc",
        "mature",
        "maximalist",
        "mean",
        "messy",
        "mindful",
        "minimalist",
        "mint",
        "minty",
        "misanthropic",
        "mischievous",
        "moist",
        "moisturized",
        "monogamous",
        "muddy",
        "mysterious",
        "neon",
        "nerdy",
        "nervous",
        "nice",
        "nihilistic",
        "nocturnal",
        "normal",
        "normy",
        "nouveau",
        "novel",
        "oblong",
        "obsessive",
        "outdoorsy",
        "passionate",
        "passive",
        "pastel",
        "patient",
        "pensive",
        "pequeño",
        "perfect",
        "pessimistic",
        "photogenic",
        "pierced",
        "pleasant",
        "polite",
        "polyamorous",
        "posi",
        "powerful",
        "predictable",
        "present",
        "pretentious",
        "pretty",
        "prim",
        "problematic",
        "prolific",
        "proper",
        "punk",
        "queer",
        "quick",
        "quiet",
        "quizzical",
        "radiant",
        "recalcitrant",
        "regal",
        "relaxed",
        "reliable",
        "respectable",
        "reticulated",
        "robotic",
        "rogueish",
        "romantic",
        "rude",
        "saccarine",
        "sad",
        "sallow",
        "sarcastic",
        "sardonic",
        "sassy",
        "saucy",
        "sensitive",
        "sentimental",
        "serious",
        "sexy",
        "shady",
        "shapely",
        "sharp",
        "shifty",
        "shiny",
        "shredded",
        "shy",
        "sinful",
        "single-celled",
        "simplistic",
        "sleepy",
        "slick",
        "small",
        "smarmy",
        "smart",
        "smol",
        "smoochable",
        "snarky",
        "soft",
        "solid",
        "sonorous",
        "spacy",
        "spartan",
        "speedy",
        "spicy",
        "spiritual",
        "spontaneous",
        "spooky",
        "squirrely",
        "squishy",
        "stable",
        "stately",
        "statuesque",
        "streetwise",
        "strong",
        "sublime",
        "super",
        "supportive",
        "swaggy",
        "sweaty",
        "sweet",
        "swift",
        "swole",
        "talented",
        "tall",
        "terminally-online",
        "thicc",
        "thirsty",
        "thoughtful",
        "ticklish",
        "timid",
        "tiny",
        "towering",
        "tranquil",
        "trans",
        "transparent",
        "tricksy",
        "trilingual",
        "trustworthy",
        "unbothered",
        "unique",
        "unpredictable",
        "unpretentious",
        "unproblematic",
        "unstable",
        "verbose",
        "victorious",
        "visionary",
        "voluptuous",
        "warm",
        "well-read",
        "well-travelled",
        "whimisical",
        "wholesome",
        "wild",
        "winning",
        "witty",
        "wobbly",
        "wonderful",
        "wonderous",
        "worldly",
        "zen",
        //"#monster# hunter",
        //"dull",
        //"uncomfortable",
        //"underemployed",
        //"undermedicated",
        //"underpaid",
        //"unemployed",
        //"unhealthy",
    ],
    "starsign": [
        "aquarius",
        "aries",
        "cancer",
        "capricorn",
        "gemini",
        "leo",
        "libra",
        "pisces",
        "pluto",
        "sagittarius",
        "scorpio",
        "taurus",
        "virgo",
    ],
    "god": ["#starsign#"],
    "godsign": [
        "#god.possess# Star",
        "#god.possess# Sign",
        "#god.possess# Eye",
        "the Star of #god#",
        "#god.possess# Sigil",
        "#god.possess# Constellation",
    ],
    "walk": [
        "adventure",
        "chill",
        "float",
        "hang",
        "meander",
        "romp",
        "stroll",
        "swim",
        "vibe",
    ],
    "walking": [
        "adventuring",
        "floating",
        "long walks",
        "meandering",
        "romping",
        "strolls",
        "teleporting",
        "walking",
        "zooming",
    ],
    "hobby": [
        "#eating##food#",
        "#monster# hunting",
        "#pizza# crafting",
        "#pizza# making",
        "#racer# racing",
        "#singing# singing",
        "#sumo# wrestling",
        "#tippable# tipping",
        "#walking# #walkLocation#",
        "420",
        "DIY",
        "DJing",
        "EDM",
        "TTRPGs",
        "adventuring",
        "aging",
        "anagrams",
        "anime",
        "apocrypha",
        "apologizing",
        "apple picking",
        "archery",
        "armageddon",
        "arson",
        "art",
        "arts & crafts",
        "ascension",
        "astrology",
        "astronomy",
        "axe throwing",
        "babka",
        "backpacking",
        "baking",
        "balancing #balanceable#",
        "ballet",
        "bananagrams",
        "bar hopping",
        "barking",
        "base jumping",
        "bass",
        "baths",
        "bdsm",
        "beaches",
        "beatboxing",
        "beeping",
        "being the best",
        "being worthy",
        "bikeshedding",
        "birdwatching",
        "blanket forts",
        "blasphemy",
        "blitzball",
        "blogging",
        "board games",
        "bocce ball",
        "bones",
        "bonsai",
        "botany",
        "bouldering",
        "brunch",
        "burping the alphabet",
        "business",
        "camp",
        "camping",
        "canon",
        "capes",
        "capoeira",
        "carbon dating",
        "carcinization",
        "card tricks",
        "casting #castable#",
        "cats",
        "challah",
        "chaos",
        "chasing #chaseable#",
        "chatting",
        "cheese",
        "clementines",
        "clouds",
        "clubbing",
        "coding",
        "coffee",
        "coke",
        "comedy",
        "competitive diving",
        "conical sections",
        "consequences",
        "cooking",
        "corgis",
        "cosplay",
        "counting",
        "crabs",
        "crashing #event.s#",
        "crime",
        "crochet",
        "crosswords",
        "crouch walking",
        "crystals",
        "curling",
        "current events",
        "dad jokes",
        "damnation",
        "dancing",
        "data crime",
        "dates",
        "dating apps",
        "deep frying",
        "destruction",
        "digging",
        "digiredo",
        "dinosaurs",
        "disc golf",
        "disc horse",
        "discourse",
        "dissociating",
        "dogs",
        "dolls",
        "doodling",
        "drag",
        "dragons",
        "drama",
        "drawing",
        "driving",
        "dueling",
        "eating",
        "eco-terrorism",
        "escape artistry",
        "escapism",
        "evil deeds",
        "expeditions",
        "exploring",
        "fandom",
        "fanfiction",
        "fantasy",
        "fashion",
        "fencing",
        "fiction",
        "fighting #whiteCollarCrime#",
        "film",
        "fire",
        "floating",
        "flying",
        "food",
        "foods",
        "football",
        "friday",
        "futbol",
        "futurism",
        "gambling",
        "gardening",
        "geology",
        "glowing",
        "goblins",
        "good deeds",
        "grand larceny",
        "grapes",
        "grazing",
        "grilling",
        "guitar",
        "gymnastics",
        "hacking",
        "hammer toss",
        "hibernation",
        "hikes",
        "history",
        "homesteading",
        "hosting",
        "hubris",
        "hupping",
        "hygge",
        "ice climbing",
        "ice climbing",
        "ice skating",
        "icebergs",
        "improv",
        "javelin throwing",
        "jazz",
        "jetpacks",
        "jetskiing",
        "jokes",
        "judgement day",
        "judgement",
        "jumping",
        "katanas",
        "keel hauling",
        "kingmaking",
        "kink",
        "knitting",
        "kpop",
        "labelling",
        "leather",
        "legal documents",
        "lexography",
        "lifting",
        "liminal spaces",
        "lockpicking",
        "lofi hip hop beats",
        "magnets",
        "make up",
        "malort",
        "manifesting",
        "manifestos",
        "matchmaking",
        "meditation",
        "megastructures",
        "mischief",
        "mixtapes",
        "mocking #parrots#",
        "modeling",
        "monologuing",
        "moss",
        "motorcycles",
        "mountain climbing",
        "mountaineering",
        "movies",
        "mud",
        "museums",
        "music",
        "musicals",
        "napping",
        "naps",
        "novels",
        "occultism",
        "opera",
        "pachinko",
        "painting",
        "paleontology",
        "parasitism",
        "pattern matching",
        "people watching",
        "petty theft",
        "phobias",
        "philosophy",
        "photography",
        "piano",
        "pickling",
        "pillow fights",
        "pinball",
        "pinochle",
        "piracy",
        "plotting",
        "poker",
        "possession",
        "postgres",
        "powerlevelling",
        "puns",
        "quantum physics",
        "quicksaving",
        "quilting",
        "racing",
        "rain",
        "rainforests",
        "reading",
        "reaping",
        "restaurants",
        "riddles",
        "road trips",
        "rock climbing",
        "roller coasters",
        "roller derby",
        "rolling",
        "rugby",
        "sailing",
        "sci-fi",
        "sci-fi/fantasy",
        "scratches",
        "screenwriting",
        "scritches",
        "scuba diving",
        "secrets",
        "self inserts",
        "selling indulgences",
        "sewing",
        "shipping",
        "shitposting",
        "shoplifting",
        "shrimp",
        "siege warfare",
        "sketch comedy",
        "sketching",
        "skiing",
        "skydiving",
        "sleep",
        "sleeping",
        "sleeping#sleeper#",
        "sleight of hand",
        "smooches",
        "snapping",
        "sneaking",
        "snooping",
        "snow",
        "snowboarding",
        "snowsports",
        "snuggles",
        "soap operas",
        "soccer",
        "soliloquies",
        "sorting",
        "soul searching",
        "soup",
        "spa days",
        "space",
        "spaghetti",
        "spas",
        "speaking #toTheDead#",
        "speedrunning",
        "spin the bottle",
        "spooky stories",
        "sports",
        "stargazing",
        "storytelling",
        "street art",
        "summoning",
        "sunbathing",
        "sunshine",
        "surfing",
        "swimming",
        "swords",
        "tactical retreats",
        "tarot",
        "tattoos",
        "tea",
        "technology",
        "telenovellas",
        "television",
        "the afterlife",
        "the backrooms",
        "the chicken dance",
        "the deep lore",
        "the fermi paradox",
        "the luge",
        "the safety dance",
        "the sun",
        "theater",
        "three body physics",
        "thunderstorms",
        "tooting",
        "traffic",
        "trans rights",
        "transuranium elements",
        "travel",
        "traveling",
        "vape rigs",
        "vegetables",
        "ventriloquism",
        "vibin'",
        "video games",
        "wading",
        "wakeboarding",
        "wallowing",
        "watching #paintDry#",
        "watersports",
        "web slinging",
        "weight lifting",
        "welding",
        "windrunning",
        "writing",
        "yodeling",
        "yoga",
    ],
    "event": [
        "birthday",
        "funeral",
        "into bridge",
        "monster truck",
        "wedding",
    ],
    "chaseable": [
        "clouds",
        "danger",
        "dreams",
        "fairies",
        "ghosts",
        "my refrigerator",
        "mysteries",
        "tail",
        "the past",
        "tornadoes",
        "trends",
        "waterfalls",
    ],
    "paintDry": [
        "ballet",
        "birds",
        "bodies of water",
        "clouds",
        "live theater",
        "movies",
        "out",
        "over the city",
        "paint dry",
        "shows",
        "sports",
        "television",
        "the herd",
        "the ritual",
        "waves",
        "#you# sleep",
    ],
    "tippable": [
        "abolishing",
        "car",
        "cow",
        "hat",
        "hippo",
        "hot",
        "iceberg",
        "tap",
    ],
    "whiteCollarCrime": [
        "climate change",
        "colonizers",
        "cops",
        "death",
        "doppelgangers",
        "fish",
        "games",
        "gentrification",
        "ghosts",
        "middle managers",
        "my inner demons",
        "rings",
        "the law",
        "the man",
        "the past",
        "time travellers",
        "white collar crime",
        "windmills",
    ],
    "parrots": [
        "billionaires",
        "birds",
        "caiman",
        "celebrities",
        "historical figures",
        "parrots",
        "the bourgeois",
        "yuppies",
    ],
    "castable": [
        "a wide net",
        "magic",
        "plaster",
        "the first stone",
    ],
    "toTheDead": [
        "for the dead",
        "forbidden knowledge",
        "in riddles",
        "in tongues",
        "lies",
        "loudly",
        "nonsense",
        "oaths",
        "ancient rites",
        "softly",
        "sweet nothings",
        "the deep lore",
        "the words",
        "to the dead",
        "truths",
    ],
    "sumo": [
        "arm",
        "crocodile",
        "greek",
        "sumo",
        "thumb",
    ],
    "eating": [
        "eating",
        "devouring",
        "monching",
        "cronching",
    ],
    "food": [
        " airplanes",
        " biscuits",
        " bones",
        " cake",
        " code",
        " charcuterie",
        " cheese",
        " cookies",
        " crudo",
        " deep dish",
        " dessert",
        " fancy",
        " fine food",
        " foods",
        " good food",
        " noodles",
        " pastries",
        " pie",
        " pizza",
        " shoelaces",
        " sin",
        " sushi",
        " tacos",
        " vegetables",
        " worlds",
        "",
    ],
    "sleeper": [
        " at sea",
        " at the park",
        " in darkness",
        " in haunted places",
        " in low earth orbit",
        " in nooks",
        " in the rain",
        " like baby",
        " on the beach",
        " through the ages",
        " too long",
        " under a palm tree",
        " under the stars",
        " when i'm dead",
        " with the fishes",
        " with the lights on",
        "",
    ],
    "balanceable": [
        "biscuits",
        "checkbooks",
        "critters",
        "friends",
        "fruits",
        "karma",
        "my inner self",
        "stones",
    ],
    "walkLocation": [
        "across the planes",
        "around the backrooms",
        "around the city",
        "in space",
        "in the dreaming",
        "on the beach",
        "on the bottom of the river",
        "on the island of stability",
        "the shadow realm",
        "the #water#",
        "through the woods",
        "through time",
        "through walls",
        "under #godsign#",
        "with friends",
        "with guinea pigs",
    ],
    "monster": [
        "alien",
        "anime body pillow",
        "anomaly",
        "bourgeoisie",
        "butterfly",
        "caiman",
        "cryptid",
        "databass",
        "demon",
        "dilf",
        "dinosaur",
        "eldritch god",
        "faberge egg",
        "fish",
        //"gainz",
        "god",
        "kaiju",
        "hippo",
        "michelin star",
        "milf",
        "monster",
        "munchie",
        "piñata",
        "rare book",
        "replicant",
        "robot",
        "shiny pokemon",
        "treasure",
        "vampire",
        "zombie",
    ],
    "racer": [
        "#monster#",
        "#potato#",
        "catamaran",
        "marble",
        "sled",
        "wagon",
        "zomboni",
    ],
    "pizza": [
        "barrel",
        "beer",
        "bread",
        "cake",
        "candle",
        "cheese",
        "cocktail",
        "cosplay",
        "costume",
        "crime",
        "glass",
        "metal",
        "mischief",
        "music",
        "myth",
        "pastry",
        "perfume",
        "pie",
        "pizza",
        "potion",
        "rumor",
        "statue",
        "sword",
        "violin",
        "war",
        "wine",
    ],
    "feats": [
        "#actually# #secretID#.",
        "#caught# #monster.a#.",
        "#competition# champion.",
        "#measureBrag#.",
        "#ranAMarathon# and now i'm #retired#.",
        "#ranAMarathon# and now i'm #retired#.",
        "#starsign# sun, #starsign# moon, #starsign# rising.",
        "award-winning #occupation#.",
        "born under #godsign#.",
        "can eat #entireCessna# #withoutSpilling#.",
        "can lift three of me.",
        "can lift two of me.",
        "friend to all.",
        "friends with everyone.",
        "i #love# everyone by default.",
        "i cook and i clean.",
        "in my #descriptor# era#sorry#.",
        "negative K:D.",
        "podcaster.",
        "set foot on all #seven# #continents#.",
        "sigma grindset.",
        "swam the #water#.",
        "voted most #descriptor# #CEO# by #Forbes#.",
        //"swam the #water# to rescue the #rescuee#.",
    ],
    "withoutSpilling": [
        "all the way to the bottom without spilling",
        "cleanly",
        "effortlessly",
        "for breakfast",
        "without spilling",
    ],
    "entireCessna": [
        "#cessna.a#",
        "an entire #cessna#",
        "six #cessna.s#",
    ],
    "cessna": [
        "burrito",
        "cake",
        "casserole",
        "cessna",
        "compost bin",
        "fruit basket",
        "pasta bake",
        "taco",
    ],
    "measureBrag": [
        "2'#.randInt(12)# #.randInt(79, 143)#lbs",
        "2'#.randInt(12)#, #.randInt(100, 170)#lbs, all muscle",
        "2'#.randInt(12)#, #.randInt(100, 150)#lbs lean",
        "2'#.randInt(12)#, #.randInt(130, 150)#lbs, vegan-built",
        "2'#.randInt(12)#, #.randInt(79, 143)#lbs in spirit",
        "2'#.randInt(12)#, #.randInt(79, 143)#lbs mentality",
        "2'#.randInt(12)#, #.randInt(79, 143)#lbs#sorry#",
        "2'#.randInt(12)# in the streets, 2'#.randInt(12)# in the sheets",
    ],
    "caught": [
        "caught",
        "once caught",
        "once captured",
    ],
    "sorry": [
        " apparently",
        " fr",
        " haha",
        " idk",
        " ig",
        " lol",
        " ngl",
        " no cap",
        " oml",
        " sorry not sorry",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ", deal with it",
        ", sorry",
    ],
    "seven": [
        "11",
        "7",
        "7",
        "mega",
        "planar",
        "seven",
        "seven",
        "six",
        "under",
    ],
    "continents": [
        "colonies",
        "continents",
        "continents",
        "worlds",
    ],
    "retired": [
        "exiled",
        "free",
        "here",
        "retired",
    ],
    "CEO": [
        "CEO",
        "disruptor",
        "up-and-comer",
        "#occupation#",
    ],
    "Forbes": [
        "538",
        "9 out of 10 #occupation.s#",
        "Forbes",
        "SIBR",
        "a panel of independent researchers",
        "capybr",
        "my fans",
        "the NYT",
        "the exonet",
        "the community",
        "the internet",
    ],
    "dateIdeas": [
        "#walk# #walkLocation#",
        "#walk# #walkLocation#",
        "answer the fermi paradox",
        "carry some birds",
        "cultivate vibes",
        "derive the stars",
        "discuss conspiracy theories",
        "discuss phobias",
        "do necromancy",
        "get brunch",
        "get coffee",
        "go #monster# hunting",
        "go thrifting",
        "grab a drink",
        "make magic",
        "make some bread",
        "people-watch",
        "play with goats",
        "praise the sun",
        "run around in circles",
        "start a coup",
        "swim the #water#",
        "take a nap",
    ],
    "ranAMarathon": [
        "built the empire",
        "defeated the overlord",
        "destroyed the suns",
        "did an ironman",
        "discovered antarctica",
        "explored offworld",
        "explored the wastes",
        "led the vanguard",
        "raided some tombs",
        "ran a marathon",
        "saved the world",
        "started from the bottom",
        "stormed the castle",
        "was a #royal# #duelist#",
        "went the distance",
        "won a gold medal",
        "won ninja warrior",
    ],
    "duelist": [
        "#singing# singer",
        "acrobat",
        "archivist",
        "assassin",
        "bard",
        "cook",
        "courtier",
        "doctor",
        "duelist",
        "guard",
        "historian",
        "jester",
        "knight",
        "lorekeeper",
        "magician",
        "medium",
        "musician",
        "physician",
        "privateer",
        "ninja",
        "thief",
        "sorcerer",
        "storykeeper",
    ],
    "royal": [
        "House",
        "abyssal",
        "celestial",
        "court",
        "hegemony",
        "highnoble",
        "independent",
        "monastic",
        "off-world",
        "rebel",
        "renegade",
        "rogue",
        "royal",
        "travelling",
        "unbound",
        "underworld",
    ],
    "competition2": [
        "Lord Stanley's",
        "card battling",
        "chess boxing",
        "e-sports",
        "heavyweight",
        "pokemon",
        "spelling bee",
        "stanley cup",
        "superbowl",
        "welterweight",
        "world series",
    ],
    "competition": [
        "#competition2#",
        "abyssal #competition2#",
        "space #competition2#",
        "undercover #competition2#",
        "underriver #competition2#",
        "underwater #competition2#",
        "underworld #competition2#",
    ],
    "water": [
        "Amazon River",
        "Cook Strait",
        "Dardanelles Strait",
        "English Channel",
        "Malacca Strait",
        "Marianas Trench",
        "Mississipi River",
        "Mozambique Channel",
        "Palk Strait",
        "Panama Canal",
        "Rubicon",
        "Straight of Gibraltar",
        "Strait of Hormuz",
        "Strait of Juan de Fuca",
        "Suez Canal",
        "Sunda Strait",
        "Taiwan Straight",
        "Torres Strait",
    ],
    "rescuee": [
        "king",
        "mayor",
        "ogre",
        "ogress",
        //"president pro tem",
        "president",
        "prince",
        "princess",
        "queen",
        "senator elect",
        "sorcerer",
        "sorceress",
        "state controller",
        "vice president",
    ],
    "descriptorList": [
        "#descriptor#. #descriptor#. #descriptor#. #descriptor#. #descriptor#.",
        "#descriptor#. #descriptor#. #descriptor#.",
        "#descriptor#.",
    ],
    "profile": [
        "#descriptor# #capybara# #lookingFor# #lookee#.",
        "#descriptor# and #descriptor# #capybara# #lookingFor# #specialSomeone.a# that's #descriptor# and #descriptor#.",
        "#descriptor# and #descriptor#. into #hobby.censor# and #hobby.censor#.",
        "#descriptor#, #descriptor# #capybara# #lookingFor# #descriptor.a#, #descriptor# #capybara#.",
        "#descriptor#, #descriptor# #capybara# #lookingFor# #specialSomeone.a# that's #descriptor# and #descriptor#.",
        "#descriptorList#",
        "#like# #hobby.censor#.",
        "i think i'm #very# #descriptor##sorry#.",
        "i'm #descriptor# and #descriptor##sorry#.",
        "i'm #descriptor#. #lookingFor# #specialSomeone.a# #respects# #hobby#.",
        "i'm #descriptor.a# #capybara#.",
        "i'm #descriptor.allCaps.a# #capybara# #lookingFor# #capybara.allCaps.a# that's #descriptor.allCaps# and #descriptor.allCaps#.",
        "i'm #descriptor.a# #capybara# #lookingFor# #capybara.a# that's #descriptor# and #descriptor#.",
        "my friends say i'm #very# #descriptor##sorry#.",
    ],
    "respects": [
        "that doesn't fear",
        "that doesn't shun",
        "that isn't afraid of",
        "that isn't frightened of",
        "that isn't scared of",
        "that isn't spooked by",
        "that isn't superstitious about",
        "that's not afraid of",
        "that's not frightened of",
        "that's not scared of",
        "that's not spooked by",
        "that's not superstitious about",
        "that's not timid about",
    ],
    "very": [
        "awful",
        "hella",
        "kinda",
        "mega",
        "pretty",
        "real",
        "really",
        "super",
        "very",
        "wicked",
    ],
    "specialSomeone": [
        "#capybara#",
        "companion",
        "date",
        "lover",
        "partner",
        "special someone",
    ],
    "capybara": [
        "boy",
        "capy",
        "capy",
        "capybara",
        "capybara",
        "fuzzball",
        "gal",
        "gentleman",
        "girl",
        "guy",
        "lad",
        "lady",
        "lass",
        "man",
        "NPC",
        "rodent",
        "rodent",
        "woman",
    ],
    "actually": [
        "actually",
        "secretly",
    ],
    "secretID": [
        "#potato.a# hiding amongst #potato.s#",
        "#potato.a#",
        "three #potato.s# in a trenchcoat",
        "three #potato.s# in a blanket",
    ],
    "like": [
        "i enjoy",
        "i like",
        "i love",
        "i'm curious about",
        "i'm passionate about",
        "i'm really into",
        "passionate about",
        "really into",
    ],
    "potato": [
        "banana",
        "cat",
        "chinchilla",
        "coconut",
        "corvid",
        "dog",
        "frog",
        "ghost",
        "goat",
        "goblin",
        "gremlin",
        "hamster",
        "kiwi",
        "nightshade",
        "potato",
        "raccoon",
        "skink",
        "snake",
        "toddler",
        "tomato",
        "tuber",
        "weevil",
        "witch",
    ],
    "dial": [
        "birds",
        "capybara",
        "racism",
        "water",
        "weather",
    ],
    "wint": [
        ".", ".", ".", ".", ".",
        "IF THE ZOO BANS ME FOR HOLLERING AT THE ANIMALS I WILL FACE GOD AND WALK BACKWARDS INTO HELL",
        "It's literally stupid how obsessed some people are with killing me dead . Ultimately however; Thanks for the laughs",
        "[getting curshed in a hydraulic press] oh my lord. ah ah ah ah",
        "\"The most powerful Genital is the mind.\"",
        "androgynous man with big ass",
        "big bird was obviously just a man in a suit. but the other ones were too small to contain men. so what the fuck",
        "bisexuals should be allowed to vote in any election",
        "blocked. blocked. blocked. youre all blocked. none of you are free of sin",
        "do you ever wonder why we're here?",
        "dril died 7 years ago. i am so sorry. i had to kill him so long ago. hes so beautiful now",
        "drunk driving may kill a lot of people, but it also helps a lot of people get to work on time, so, it;s impossible to say if its bad or not,",
        "getting brain damage from pissing my self off",
        "haters swipe #direction#.",
        "hi",
        "how does this app work",
        "how long do i have to scream before god finally lets me die",
        "hup",
        "i am experiencing a new emotion called \"ROTATING\"",
        "i know writers who use subtext and they're all cowards",
        "i love it here c:",
        "i lvoe and cherish all of the girls of this site, and other websites. you all become my wife more and more with each passing day. Thank you",
        "i really dont care what Yankee Doodle did when he went to town. His toxic fanbase tells me everything I need to know about him .",
        "i'm not mad. i'm not mad.",
        "if i had $1000000 id be so much less stupid",
        "if your grave doesnt say \"rest in peace\" on it you are automatically drafted into the skeleton war",
        "im afraid i must say that i do not find the mysteries featured on \"scooby-doo\" challenging enough .",
        "in my lane.",
        "it's pronounced #name#.",
        "its fucked up how there are like 1000 christmas songs but only 1 song aboutr the boys being back in town",
        "joke's on you; i actually love being body slammed by one dozen perfect wrestlers. and my mouth isn't filled with bloodm, it's victory wine",
        "just found out about Object Permanence... why didnt any one tell me about this shit",
        "just found out about sex, and i dont want to see it again",
        "lesbian transgender programmers. They just use \"sex brain\" to create websites",
        "live love laugh",
        "looking at the data and simply laughing",
        "love when i lose aobut 100 followers immediately after making a beautiful post. the weak shriveling up into dust. Thats called darwin",
        "lunch cronch monch",
        "my problem is, that im perfect, and everyone is jealous of my good posts, and that makes people rightfully upset",
        "ok i pull up.",
        "please have a personality",
        "see this watch? i got it by Crying. my car? crying. my beautiful wife? Crying. My perfect teeth? Crying.",
        "smuggling #drug# for the #royal# #family#.",
        "so long suckers! i rev up my motorcylce and create a huge cloud of smoke. when the cloud dissipates im lying completely dead on the pavement",
        "startling how im the only one on this site with an actual human soul. you would think the other guys on here have one, but no",
        "the entire time youre watching the movie 101 Dalmatians, youre just thinking, This is so many more dalmations than usual.",
        "the only thing that the cops are good for is showing up at the crime scene and pointing at the dead body and saying \"that's him\"",
        "today is the day that all of you who are NOT gay are cursed forever",
        "turning a big dial taht says \"#dial#\" on it and constantly looking back at the audience for approval like a contestant on the price is right",
        "who the fuck is scraeming \"LOG OFF\" at my house. show yourself, coward. i will never log off",
    ],
    "family": [
        "family",
        "overlord",
        "archon",
        "monarch",
        "ruler",
        "consort",
    ],
    "drug": [
        "booze",
        "bottlecaps",
        "cocaine",
        "drugs",
        "pizza",
        "plants",
    ],
    "direction": [
        "#directionReasonable#",
        "#directionReasonable#",
        "#directionReasonable#",
        "#directionReasonable#",
        "#directionReasonable#",
        "#directionReasonable#",
        "#directionReasonable#",
        "#directionUnreasonable#",
    ],
    "directionReasonable": [
        "left",
        "right",
    ],
    "directionUnreasonable": [
        "alee",
        "down",
        "port",
        "starboard",
        "up",
        "widdershins",
    ],
    "partner": [
        "SO",
        "alibi",
        "boyfriend",
        "demon",
        "doppelganger",
        "ghost",
        "girlfriend",
        "husband",
        "muse",
        "partner",
        "pen pal",
        "rival",
        "spouse",
        "wife",
    ],
    "looker": [
        "",
        "i am",
        "i'm",
        "i'm",
        "me and my #partner# are",
        "me, my #partner#, and my #partner# are",
        "my #partner# and i are",
    ],
    "lookingFor": [
        "in need of",
        "looking for",
        "needing",
        "searching for",
        "wanting",
    ],
    "lookee": [
        "#descriptor.a# #capybara#",
        "#descriptor.a# #capybara#",
        "a dommy #mommy#",
        "a dungeon master",
        "a funding source",
        "a getaway driver",
        "a hacker",
        "a healer",
        "a lockpicker",
        "a nonromanceable npc",
        "a safe-cracker",
        "a sugar #mommy#",
        "a tag team partner",
        "a tank",
        "a unicorn",
        "an adult",
        "someone drift compatible",
        "someone that's #descriptor#",
        "someone to #dom# me",
        "someone to #dom#",
        "technical cofounder",
        "the right vibe",
    ],
    "dom": [
        "bless",
        "boop",
        "crush",
        "destroy",
        "dom",
        "dominate",
        "hold",
        "lift",
        "piledrive",
        "smooch",
        "squat",
        "yeet",
    ],
    "mommy": [
        "mommy",
        "daddy",
        "papi",
        "mami",
    ],
    "swipeIf": [
        "#ideal# first date #wouldBeDate#.",
        "#looker# #lookingFor# #lookee#.",
        "#maybe# we #could# #dateIdeas#?",
        "#maybe# we #dateIdeas#?",
        "#posiVibes# only!",
        "#swipe# if #you# #messageFirst#.",
        "#swipe# if #you# have #partner.a#.",
        "#swipe# if #youre# #lookingFor# #partner.a#",
        "#swipeRight# if #youre# #descriptor# #andor# #descriptor#!",
        "#swipeRight# if #youre# into #hobby.censor#.",
        "#swipeLeft# if you don't have a personality.",
        "i #love# a #capybara# that's #descriptor#, #descriptor#, and #descriptor#.",
        "let's #dateIdeas#.",
        "maybe let's #dateIdeas#?",
        "no #fish#.",
    ],
    "ideal": [
        "a perfect",
        "an idea for a",
        "an ideal",
        "my idea for a",
        "my ideal",
        "my perfect",
    ],
    "wouldBeDate": [
        "is #dateIdeas.progressiveTense#",
        "is #dateIdeas.progressiveTense#",
        "is for us to #dateIdeas#",
        "is to #dateIdeas#",
        "would be to #dateIdeas#",
    ],
    "maybe": [
        "maybe",
        "maybe",
        "maybe",
        "perhaps",
        "what if",
    ],
    "could": [
        "could",
        "could",
        "might",
        "can",
        "should",
    ],
    "swipe": [
        "#swipeRight#",
        "#swipeLeft#",
    ],
    "swipeRight": [
        "hit me up",
        "hmu",
        "holla at me",
        "holla",
        "match with me",
        "message me",
        "swipe #right#",
        "talk to me",
    ],
    "swipeLeft": [
        "swipe #left#",
        "miss me",
        "not interested",
        "❌",
        "🙅",
    ],
    "love": [
        "desire",
        "like",
        "love",
        "want",
        "❤️",
    ],
    "right": [
        "right",
        "right",
        "right",
        "starboard",
    ],
    "left": [
        "left",
        "left",
        "left",
        "#directionUnreasonable#",
    ],
    "andor": ["and", "or"],
    "you": ["you", "u"],
    "youre": [
        "u",
        "ur",
        "ur",
        "you're",
        "you're",
        "you're",
        "your",
        "youre",
    ],
    "messageFirst": [
        "don't message first",
        "double text",
        "got pick up lines",
        "just say \"hey\"",
        "message first",
        "never message back",
        "play games",
        //"wanna text",
    ],
    "posiVibes": [
        "2'#.randInt(5, 12)#+",
        "fresh vibes",
        "good vibes",
        "immaculate vibes",
        "lefties",
        "posi vibes",
    ],
    "fish": [
        "#starsign.s#",
        "birds",
        "caiman",
        "changelings",
        "conservatives",
        "fey",
        "fish",
        "frogs",
        "goats",
        "vampires",
    ],
    "emoji": ["#.emoji#"],
    "emojiList": [
        "#emoji#",
        "#emoji##emoji#",
        "#emoji##emoji##emoji#",
        "#emoji##emoji##emoji##emoji#",
        "#emoji##emoji##emoji##emoji##emoji#",
    ],
    "origin": [
        "#emojiList# #profile#",
        "#emojiList# #swipeIf#",
        "#emojiList#",
        "#emojiList##emojiList#",
        "#feats# #emojiList#",
        "#feats# #swipeIf#",
        "#profile# #emojiList#",
        "#profile# #feats#",
        "#profile# #feats#",
        "#profile# #feats# #swipeIf#",
        "#profile# #swipeIf#",
        "#profile# #swipeIf#",
        "#profile#",
        "#profile#",
        "#swipeIf#",
        "#swipeIf#",
        "#wint#",
    ],
    "formatted": [
        "#origin#",
        "#origin.proper#",
        "#origin.proper#",
        "#origin.proper#",
        "#origin.proper#",
        "#origin.proper#",
        "#origin.proper#",
        "#origin.gremlin#",
        "#origin.runon.proper#",
        "#origin.gay#",
    ],
    "engineer": [
        "aerospace",
        "alchemical",
        "audio",
        "bio",
        "chemical",
        "civil",
        "cocktail",
        "electrical",
        "fabrial",
        "flavor",
        "food",
        "industrial",
        "laser",
        "mecha",
        "rube golberg",
        "software",
        "space",
    ],
    "aspiring": [
        "amateur",
        "ascendant",
        "aspiring",
        "associate",
        "backup",
        "executive",
        "fake",
        "full-time",
        "independent",
        "interim",
        "intern",
        "part-time",
        "professional",
        "rogue",
        "retired",
    ],
    "necro": [
        "allo",
        "dino",
        "cookie",
        "necro",
        "ono",
        "pasta",
    ],
    "occupation": [
        "#aspiring# #occupation#",
        "#engineer# engineer",
        "#monster# hunter",
        "#monster# tamer",
        "#monster# wrangler",
        "#singing# singer",
        "AI",
        "CEO",
        "DJ",
        "IT",
        "academic",
        "accolyte",
        "account manager",
        "actor",
        "adventurer",
        "advertiser",
        "alchemist",
        "alien",
        "ambassador",
        "analyst",
        "antipope",
        "arbiter",
        "archaeologist",
        "architect",
        "archivist",
        "artist",
        "assassin",
        "astronaut",
        "auteur",
        "author",
        "ballerina",
        "barber",
        "bard",
        "barista",
        "baron",
        "bartender",
        "bean counter",
        "blogger",
        "boatswain",
        "bodyguard",
        "bounty hunter",
        "boxer",
        "captain",
        "carpenter",
        "chauffeur",
        "citizen",
        "city planner",
        "coach",
        "cobbler",
        "code breaker",
        "comedian",
        "community manager",
        "comrade",
        "confidence man",
        "construction",
        "consultant",
        "content creator",
        "cook",
        "court musician",
        "courtesan",
        "crap connoiseur",
        "cryptozoologist",
        "curator",
        "dancer",
        "deep sea fisher",
        "designer",
        "detective",
        "dilettante",
        "doctor",
        "dog walker",
        "egg layer",
        "emotional supporter",
        "entrpreneur",
        "executioner",
        "executive assistant",
        "exile",
        "exorcist",
        "explorer",
        "exsanguinist",
        "fairy godparent",
        "fashionista",
        "femme fatale",
        "ferryman",
        "fighter",
        "finance",
        "flight attendant",
        "food critic",
        "food taster",
        "footballer",
        "forager",
        "game developer",
        "gardner",
        "ghost",
        "haruspex",
        "historian",
        "homebody",
        "horologist",
        "ice breaker",
        "imperator",
        "invader",
        "international spy",
        "janitor",
        "journalist",
        "#royal# knight",
        "lawyer",
        "lighthouse keeper",
        "local deity",
        "lumberjack",
        "main character",
        "magister",
        "marketing manager",
        "massage therapist",
        "matchmaker",
        "mechanic",
        "medium",
        "midwife",
        "model",
        "monarch",
        "naturalist",
        "#necro#mancer",
        "notary",
        "orator",
        "outlander",
        "outlier",
        "painter",
        "paralegal",
        "performer",
        "personal trainer",
        "philosopher",
        "pilot",
        "pirate",
        "plumber",
        "podcaster",
        "politician",
        "pontifex",
        "pope",
        "popstar",
        "president",
        "privateer",
        "professional athlete",
        "professor",
        "protagonist",
        "psychopomp",
        "quartermaster",
        "rancher",
        "real estate",
        "recruiter",
        "researcher",
        "retail worker",
        "rock climber",
        "rockstar",
        "rogue",
        "sailor",
        "sales",
        "scholar",
        "scientist",
        "siege engineer",
        "slumlord",
        "smuggler",
        "society caretaker",
        "sommelier",
        "spacer",
        "stonemason",
        "streamer",
        "strongman",
        "student",
        "stylist",
        "summoner",
        "surfer",
        "surgeon",
        "tavern keeper",
        "teacher",
        "therapist",
        "tour guide",
        "transporter",
        "troubador",
        "underwater welder",
        "vigilante",
        "wizard",
        "writer",
        "yogi",
    ],
    "singing": [
        "acappela",
        "blade",
        "classical",
        "death metal",
        "opera",
        "public",
        "punk rock",
        "throat",
    ],
});
grammar.addModifiers(tracery.baseEngModifiers);
grammar.addModifiers({
    s: (s) => {
        if (s.endsWith("es")) {
            return s;
        }
        if (s.endsWith("is")) {
            return s.substring(0, s.length - 2) + "es";
        }
        if (s.endsWith("man")) {
            return s.substring(0, s.length - 3) + "men";
        }
        return tracery.baseEngModifiers.s(s);
    },
    proper: (s) => {
        s = s.replace(/\bi[^\w]/g, (t) => t.toUpperCase());
        s = s.replace(/\b(\w)(.*?[.!?$])/g, (t) => t[0].toUpperCase() + t.substring(1));
        return s;
    },
    gremlin: (s) => {
        if (Math.random() < .5) {
            s = s.toLowerCase();
        }
        if (Math.random() < .5) {
            s = s.replace(/\./g, "");
        }
        if (Math.random() < .25) {
            s = s.replace(/,/g, "");
        }
        return s;
    },
    emoji: () => {
        return emoji.random({ n: 1, genders: true });
    },
    runon: (s) => {
        s = s.replace(/\.\s/g, ", ").replace(/\bi'?m?\s/ig, " ");
        if (s[s.length - 1] === ".") {
            s = s.substring(0, s.length - 1)
        }
        return s
    },
    gay: (s) => {
        if (s === ".") {
            return s;
        }
        s = s.toLowerCase();
        s = s.replace("!", () => Math.random() < .5 ? "!" : "?");
        s = s.replace(/\./g, () => {
            const opt = [
                ".",
                "...",
                ".".repeat(3 + Math.floor(Math.random() * 15)),
                ",".repeat(2 + Math.floor(Math.random() * 10)),
            ];
            return opt[Math.floor(Math.random() * opt.length)];
        });
        s = s.replace(/\s/g, () => {
            const c = Math.random();
            if (c < .01) {
                return ",".repeat(2 + Math.floor(Math.random() * 10)) + " ";
            }
            if (c < .02) {
                return ".".repeat(3 + Math.floor(Math.random() * 15)) + " ";
            }
            return " ";
        });
        return s;
    },
    censor: (s) => {
        if (Math.random() > .05) {
            return s;
        }
        const censors = [
            s.replace(/[aeiou]/ig, "*"),
            s.replace(/\w/g, "*"),
            s.replace(/\b\w+?ing\b/i, (m) => "*".repeat(m.length - 3) + "ing"),
        ];
        return censors[Math.floor(Math.random() * censors.length)];
    },
    randInt: (s, params) => {
        let min = 0;
        let max = 0;
        if (params.length === 1) {
            max = parseInt(params[0], 10);
        } else if (params.length === 2) {
            min = parseInt(params[0], 10)
            max = parseInt(params[1], 10)
        }
        return Math.floor(min + (Math.random() * (max - min)));
    },
    possess: (s) => {
        if (s.endsWith("s")) {
            return s + "'";
        }
        return s + "'s";
    },
    allCaps: (s) => {
        return s.toUpperCase();
    },
    progressiveTense: (s) => {
        //assume the first word is a verb
        let words = s.split(/\s/g);
        if (words[0].endsWith("e")) {
            words[0] = words[0].substring(0, words[0].length - 1) + "ing";
        } else if (words[0].match(/\w*[aeiou][rtplmnbgfdsz]\b/i)) {
            words[0] = words[0] + words[0][words[0].length - 1] + "ing";
        } else {
            words[0] = words[0] + "ing";
        }
        return words.join(" ");
    },
});

function fetchCapys() {
    const capyreject = [
        538, 715, 200, 279, 167, 14, 416, 271, 443, 212, 478, 194, 184, 60,
        66, 62, 691, 427, 659, 730, 411, 734, 321,
    ];
    return fetch(`https://api.capy.lol/v1/capybaras?random=true&take=${BATCH_SIZE}`)
    .then(response => {
        if (!response.ok) {
            return
        }
        return response.json()
    })
    .then(js => {
        let res = [];
        for (let i = 0; i < js.data.length; i++) {
            if (!capyreject.includes(js.data[i].index)) {
                res.push(js.data[i]);
            }
        }
        return res;
    })
}

const instaGrammar = tracery.createGrammar({
    "fullname": [],
    "egg": [],
    "hobbyList": [],
    "hobby": ["#hobbyList#", "#hobbyList.inger#"],
    "digit": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    "base": [
        "#fullname#",
        "#fullname#",
        "#egg#",
        "#egg# #egg#",
        "#hobby#",
        "#hobby# #hobby#",
        "#hobby# and #hobby#",
        "#egg# #hobby#",
    ],
    "prefix": [
        "_",
        "__",
        "its me ",
        "i am ",
        "the one and only ",
        "the real ",
        "xx",
    ],
    "suffix": [
        " art",
        " photography",
        " photo",
        " studio",
        " xoxo",
        "XO",
        "_",
        "__",
        "xx",
        " real",
        " verified",
    ],
    "handle": [
        "#base#",
        "#base##digit#",
        "#base##digit##digit#",
        "#base##digit##digit##digit#",
        "#base##digit##digit##digit##digit#",
        "#prefix##base#",
        "#base##suffix#",
        "#prefix##base##suffix#",
    ],
    "formatted": [
        "#handle.strip.snake#",
        "#handle.strip.concat#",
        "#handle.strip.dot#",
        "#handle.strip.camel#",
    ],
});
const instaRep = /[\s-]/g;
instaGrammar.addModifiers({
    strip: (s) => {
        return s.replace(/['&]/g, "");
    },
    snake: (s) => {
        return s.replace(instaRep, "_")
    },
    concat: (s) => {
        return s.replace(instaRep, "")
    },
    dot: (s) => {
        return s.replace(instaRep, ".")
    },
    camel: (s) => {
        return s.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase()).replace(/\s/g, "");
    },
    inger: (s) => {
        return s.replace(/ing$/i, "er");
    },
    truncate: (s) => {
        if (s.length < 30) {
            return s;
        }
        return s.substring(0, 30);
    }
});

function makeInsta(name, hobbies) {
    if (!name || !hobbies) {
        return "";
    }
    if (Math.random() < .25) {
        return "";
    }
    instaGrammar.pushRules("fullname", [name]);
    instaGrammar.pushRules("egg", name.split(/\s/));
    instaGrammar.pushRules("hobbyList", hobbies);
    let handle = instaGrammar.flatten("#formatted.truncate#")
    instaGrammar.popRules("fullname");
    instaGrammar.popRules("egg");
    instaGrammar.popRules("hobbyList");
    const capitals = Math.random()
    if (capitals < .2) {
        handle = handle.toUpperCase();
    } else if (capitals < .5) {
        handle = handle.toLowerCase()
    }
    if (Math.random() < .1) {
        handle = handle.replace(/[aeiouAEIOU]/g, "");
    }
    return `@${handle}`;
}

function capybaraYears() {
    // very precise capybara math
    const capyAge = 32 + Math.random() * 3 * 12;
    const capyFactor = capyAge / (12 * 12);
    return Math.floor(capyFactor * 85);
}

function Profile({name, slide, setSlide, capy, alt}) {
    const [profile, setProfile] = useState("");
    const [age, setAge] = useState(18);
    const [job, setJob] = useState("");
    const [distance, setDistance] = useState(1);
    const [hobbies, setHobbies] = useState([]);
    const [insta, setInsta] = useState("");

    useEffect(() => {
        if (!name || !capy) {
            return;
        }
        setAge(capybaraYears());
        grammar.pushRules("name", [name]);
        setProfile(grammar.flatten("#formatted#"));
        setJob(grammar.flatten("#occupation.capitalizeAll#"));
        setDistance(Math.random() < .05 ? Math.floor(Math.random() * 30000) / 10 : Math.floor(Math.random() * 100) / 10);
        setHobbies([
            grammar.flatten("#hobby#"),
            grammar.flatten("#hobby#"),
            grammar.flatten("#hobby#"),
            grammar.flatten("#hobby#"),
            grammar.flatten("#hobby#"),
        ]);
        grammar.popRules("name");
    }, [name, capy]);

    useEffect(() => {
        setInsta(makeInsta(name, hobbies));
    }, [name, hobbies]);

    return (
        <div id="profile" className="profilediv" slide={slide} onAnimationEnd={() => setSlide("")}>
            <div className="profileImage">
                <img src={capy} alt={alt} crossOrigin="anonymous"/>
                <Share name={name} profile={profile} age={age} job={job} distance={distance} hobbies={hobbies} insta={insta} alt={alt}/>
                <ul className="hobbies" aria-label="List of hobbies">
                    {hobbies.map((hobby, i) => (<li key={i} className="hobby">{hobby}</li>))}
                </ul>
            </div>
            <div className="nametag">
                <h1 className="name" aria-label="Name">{name}</h1>
                <h1 className="age" aria-label="Age">{age}</h1>
            </div>
            <h2 className="job" aria-label="Occupation">{job}</h2>
            <h3 className="distance">{distance} miles away</h3>
            <p className="profile">{profile}</p>
            <p className="insta" aria-label="Social Media Account">{insta}</p>
        </div>
    );
}

function fetchNames() {
    return fetch(`https://onomancer.sibr.dev/api/getNames?threshold=4&random=1&limit=${BATCH_SIZE}`)
        .then(response => {
            if (!response.ok) {
                return;
            }
            return response.json();
        })
}

function fetchGods() {
    return fetch("https://onomancer.sibr.dev/api/getEggs?random=1&threshold=200")
        .then(response => {
            if (!response.ok) {
                return ["#starsign#"];
            }
            return response.json();
        })
}

function Swiper({direction, label, queue, setQueue, setName, flashAction, setCapy, setAlt}) {
    const onClick = () => {
        flashAction();
        nextProfile(queue, setQueue, setName, setCapy, setAlt);
    };
    return <button className={`circleButton ${direction}`} onClick={onClick}>{label}</button>
}

function nextProfile(queue, setQueue, setName, setCapy, setAlt){
    const elem = queue.pop();
    const delay = 200;
    const set = (n, c) => {
        setCapy(capybaraImg);
        setCapy(c.url);
        setAlt(c.alt || "a capybara");
        if (window.location.hash?.length > 1) {
            n = window.location.hash.substring(1).replace(/%20/g, " ");
            window.location.hash = "";
        }
        seedrandom(n, {global: true});
        setName(n);
        console.log(n);
    };
    if (elem === undefined) {
        loadQueue().then((q) => {
            const {name, capy} = q.pop();
            setTimeout(() => {
                set(name, capy)
            }, delay);
            setQueue(q);
        });
    } else {
        setTimeout(() => {
            set(elem.name, elem.capy)
        }, delay);
    }
}

function loadQueue() {
    return Promise.all([
        fetchNames(),
        fetchCapys(),
    ])
    .then(([names, capys]) => {
        const l = names.length > capys.length ? capys.length : names.length;
        let q = [];
        for (let i = 0; i < l; i++) {
            q.push({name: names[i], capy: capys[i]})
        }
        return q;
    });
}

function About() {
    const [isOpen, setIsOpen] = useState(false);
    const label = "[?]";
    const styling = {
        content: {
            "maxWidth": "20em",
            "minWidth": "10em",
            "margin": "auto auto auto auto",
            "maxHeight": "30em",
            "height": "fit-content",
            "minHeight": "18em",
        },
    };

    return (
        <div>
            <button aria-label="About" onClick={() => setIsOpen(true)} className="aboutButton">{label}</button>
            <Modal isOpen={isOpen} onRequestClose={()=>setIsOpen(false)} style={styling}>
                <h1>capybr</h1>
                <h3>swipe the capybara of your dreams!</h3>
                <ul className="modalCredits">
                    <li><a href="https://github.com/jmaliksi/capybr" target="_blank" rel="noreferrer">Github</a></li>
                    <li><a href="https://capy.lol/" target="_blank" rel="noreferrer">Capybara API</a></li>
                    <li><a href="https://github.com/galaxykate/tracery" target="_blank" rel="noreferrer">Tracery</a> (profile generation)</li>
                    <li><a href="https://github.com/jmaliksi/onomancer" target="_blank" rel="noreferrer">Onomancer</a> (name API)</li>
                    <li><a href="https://game-icons.net/1x1/lorc/chewed-heart.html" target="_blank" rel="noreferrer">Icon</a></li>
                </ul>
                <p className="legal">this app collects zero data the capybaras ate all the cookies, you are safe</p>
            </Modal>
        </div>
    );
}

function Share({name, profile, age, job, distance, hobbies, insta, alt}) {
    const [isOpen, setIsOpen] = useState(false);
    const [grab, setGrab] = useState(capybaraImg);

    const label = "📸"
    const styling = {
        content: {
            "maxWidth": "20em",
            "minWidth": "10em",
            "margin": "auto auto auto auto",
            "maxHeight": "90vh",
            "height": "fit-content",
            "minHeight": "18em",
        },
    };
    useEffect(() => {
        if (!isOpen) {
            return;
        }
        setGrab(capybaraImg);
        html2canvas(document.querySelector("#profile"), {
            useCORS: true,
        }).then((canvas) => {
            setGrab(canvas.toDataURL("image/png", 1.0));
        });
    }, [isOpen]);

    const onClick = () => {
        setIsOpen(true);
    };

    const desc = (
        `Dating profile for ${name}, age ${age}. Their profile picture shows "${alt}". ` +
        `Their occupation is ${job}. Their hobbies are listed as ${hobbies.join(", ")}. ` +
        `Their profile reads "${profile}" ` +
        (insta ? `Their social media handle is \`${insta}\`. ` : "") +
        `They are ${distance} miles away.`
    );

    return (
        <>
            <span className="shareholder" data-html2canvas-ignore>
                <button aria-label="Share profile" onClick={onClick} className="sharebutton">{label}</button>
            </span>
            <Modal id="shareref" isOpen={isOpen} onRequestClose={()=>setIsOpen(false)} style={styling}>
                <figure className="sharefig">
                    <img style={{width: "100%"}} src={grab} alt={`screenshot of the current profile. ID: ${desc}`}/>
                    <textarea readonly value={"ID: " + desc} className="shareDesc"/>
                </figure>
            </Modal>
        </>
    )
}

function App() {
    const [queue, setQueue] = useState([]);
    const [name, setName] = useState("");
    const [capy, setCapy] = useState("");
    const [alt, setAlt] = useState("a capybara");
    const [flash, setFlash] = useState("");
    const [slide, setSlide] = useState("");
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => {
            nextProfile(queue, setQueue, setName, setCapy, setAlt);
            setFlash("red");
            setSlide("left");
        },
        onSwipedRight: () => {
            nextProfile(queue, setQueue, setName, setCapy, setAlt);
            setFlash("green");
            setSlide("right");
        },
        onSwiping: (e) => {
            switch (e.dir) {
                case "Right":
                    setSlide("rnudge");
                    break;
                case "Left":
                    setSlide("lnudge");
                    break;
            }
        },
        delta: 50,
        trackMouse: true,
        swipeDuration: 500,
        preventScrollOnSwipe: true,
    });

    useEffect(() => {
        loadQueue()
        .then((q) => setQueue(q))
        .then(() => nextProfile(queue, setQueue, setName, setCapy, setAlt));

        fetchGods().then((gods) => grammar.pushRules("god", gods));
    }, []);

    return (
        <>
        <div className="app" {...swipeHandlers}>
            <div className="overlay" flash={flash} onAnimationEnd={() => setFlash("")} onClick={() => setFlash("")} {...swipeHandlers} />
            <Profile name={name} slide={slide} setSlide={setSlide} capy={capy} alt={alt}/>
            <div className="buttons">
                <div className="swipeLeft">
                    <Swiper
                        direction="leftButton"
                        label="👎"
                        queue={queue}
                        setQueue={setQueue}
                        setName={setName} 
                        setCapy={setCapy}
                        setAlt={setAlt}
                        flashAction={() => {
                            setFlash("red");
                            setSlide("left");
                        }}/>
                </div>
                <div className="swipeRight">
                    <Swiper
                        direction="rightButton"
                        label="👍"
                        queue={queue}
                        setQueue={setQueue}
                        setName={setName} 
                        setCapy={setCapy}
                        setAlt={setAlt}
                        flashAction={() => {
                            setFlash("green");
                            setSlide("right");
                        }}/>
                </div>
            </div>
            <About />
        </div>
        </>
    );
}

export default App;
