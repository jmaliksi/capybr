import './App.css';
import { useEffect, useState } from "react";
import tracery from "tracery-grammar";
import emoji from "emoji-random-list";
import { useSwipeable } from "react-swipeable";
import Modal from "react-modal";
import seedrandom from "seedrandom";

const BATCH_SIZE = 50;

const grammar = tracery.createGrammar({
    "alignment1": [
        "awful",
        "chaotic",
        "kinda",
        "lawful",
        "neutral",
        "very",
    ],
    "alignment2": [
        "evil",
        "good",
        "naughty",
        "neutral",
        "nice",
    ],
    "descriptor": [
        "#alignment1# #alignment2#",
        "#starsign#",
        "420-friendly",
        "ADHD",
        "abysmal",
        "abyssal",
        "academic",
        "adult",
        "adventurous",
        "all-natural",
        "alluring",
        "aloof",
        "ambidextrous",
        "ambivalent",
        "angelic",
        "artistic",
        "artsy",
        "assertive",
        "astute",
        "attractive",
        "basic",
        "bilingual",
        "blasphemous",
        "blunt",
        "bold",
        "bothered",
        "bratty",
        "brazen",
        "bright",
        "brooding",
        "bubbly",
        "buff",
        "busy",
        "caffeinated",
        "calculating",
        "caliente",
        "calm",
        "capypilled",
        "career-focused",
        "careful",
        "caring",
        "charismatic",
        "cheesy",
        "chill",
        "chonky",
        "clumsy",
        "cold",
        "colorful",
        "comfortable",
        "conciliatory",
        "confident",
        "corn-fed",
        "cottagecore",
        "creative",
        "cringe",
        "curious",
        "cursed",
        "curt",
        "cyberpunk",
        "cynical",
        "deep",
        "dehyrdrated",
        "degenerate",
        "demonic",
        "depressed",
        "dominant",
        "driven",
        "dubious",
        "effervescent",
        "eldritch",
        "emotional",
        "empathetic",
        "employable",
        "energetic",
        "enigmatic",
        "erudite",
        "extroverted",
        "exuberant",
        "faithful",
        "family-oriented",
        "fancy",
        "fashionable",
        "feisty",
        "flatulant",
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
        "goblin-mode",
        "gothic",
        "gothy",
        "gregarious",
        "grumpy",
        "happy",
        "hardy",
        "head empty",
        "healthy",
        "hecked up",
        "helpful",
        "helpless",
        "high EQ",
        "highfalutin",
        "high IQ",
        "highbrow",
        "hirstute",
        "hoary",
        "horrible",
        "hot",
        "huggable",
        "humble",
        "hungry",
        "hydrated",
        "hygenic",
        "icy",
        "independent",
        "indulgent",
        "intellectual",
        "intelligent",
        "introverted",
        "irritable",
        "laconic",
        "lefty",
        "lewd",
        "liquid",
        "loud",
        "lukewarm",
        "magical",
        "mature",
        "mean",
        "messy",
        "mindful",
        "misanthropic",
        "mischievous",
        "moisturized",
        "muddy",
        "mysterious",
        "neon",
        "nerdy",
        "nihilistic",
        "nocturnal",
        "oblong",
        "obsessive",
        "outdoorsy",
        "passionate",
        "passive",
        "pastel",
        "patient",
        "pensive",
        "pessimistic",
        "posi",
        "photogenic",
        "pierced",
        "present",
        "prim",
        "problematic",
        "prolific",
        "proper",
        "punk",
        "queer",
        "quick",
        "quiet",
        "radiant",
        "recalcitrant",
        "regal",
        "relaxed",
        "romantic",
        "sad",
        "sallow",
        "sarcastic",
        "sardonic",
        "sassy",
        "sensitive",
        "sexy",
        "sharp",
        "shifty",
        "shiny",
        "shredded",
        "shy",
        "single-celled",
        "sleepy",
        "slick",
        "small",
        "smart",
        "snarky",
        "soft",
        "solid",
        "sonorous",
        "spartan",
        "speedy",
        "spicy",
        "spiritual",
        "spontaneous",
        "spooky",
        "stable",
        "streetwise",
        "strong",
        "sublime",
        "supportive",
        "sweet",
        "swift",
        "talented",
        "tall",
        "thicc",
        "thirsty",
        "thoughtful",
        "ticklish",
        "tiny",
        "trans",
        "transparent",
        "trilingual",
        "unbothered",
        "unproblematic",
        "unstable",
        "verbose",
        "victorious",
        "visionary",
        "warm",
        "weedpilled",
        "well-read",
        "well-travelled",
        "whimisical",
        "wild",
        "winning",
        "witty",
        "wonderful",
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
    "walking": [
        "floating",
        "long walks",
        "meandering",
        "strolls",
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
        "EDM",
        "TTRPGs",
        "aging",
        "apologizing",
        "ascension",
        "adventuring",
        "anagrams",
        "apple picking",
        "arson",
        "arts & crafts",
        "astrology",
        "backpacking",
        "balancing #balanceable#",
        "ballet",
        "bananagrams",
        "bar hopping",
        "barking",
        "base jumping",
        "bass",
        "bdsm",
        "beatboxing",
        "beeping",
        "being the best",
        "being worthy",
        "bikeshedding",
        "birdwatching",
        "blanket forts",
        "blasphemy",
        "blitzball",
        "board games",
        "bocci ball",
        "bones",
        "bonsai",
        "botany",
        "bouldering",
        "brunch",
        "burping the alphabet",
        "canon",
        "capoeira",
        "carbon dating",
        "casting #castable#",
        "cats",
        "chasing #chaseable#",
        "chaos",
        "chatting",
        "clementines",
        "clubbing",
        "coding",
        "coffee",
        "competitive diving",
        "cooking",
        "counting",
        "corgis",
        "cosplay",
        "crashing #event.s#",
        "crosswords",
        "crouch walking",
        "crime",
        "crochet",
        "crystals",
        "curling",
        "dad jokes",
        "damnation",
        "dancing",
        "data crime",
        "dates",
        "dating apps",
        "destruction",
        "dinosaurs",
        "disc golf",
        "disc horse",
        "discourse",
        "dogs",
        "dueling",
        "escapism",
        "evil deeds",
        "expeditions",
        "exploring",
        "fashion",
        "fencing",
        "fermi paradox",
        "fighting #whiteCollarCrime#",
        "floating",
        "flying",
        "foods",
        "friday",
        "futurism",
        "gardening",
        "geology",
        "glowing",
        "goblins",
        "good deeds",
        "grand larceny",
        "grilling",
        "guitar",
        "gymnastics",
        "hacking",
        "hammer toss",
        "ice climbing",
        "ice skating",
        "icebergs",
        "javelin throwing",
        "jazz",
        "jetpacks",
        "jokes",
        "judgement",
        "judgement day",
        "keel hauling",
        "kingmaking",
        "kink",
        "knitting",
        "labelling",
        "leather",
        "lifting",
        "liminal spaces",
        "lockpicking",
        "lofi hip hop beats",
        "malort",
        "manifesting",
        "meditation",
        "megastructures",
        "mischief",
        "magnets",
        "manifestos",
        "mocking #parrots#",
        "modeling",
        "monologuing",
        "mountaineering",
        "museums",
        "music",
        "naps",
        "occultism",
        "pachinko",
        "painting",
        "paleontology",
        "petty theft",
        "pinball",
        "piracy",
        "philosophy",
        "photography",
        "pickling",
        "pinochle",
        "plotting",
        "poker",
        "postgres",
        "puns",
        "quilting",
        "racing",
        "reading",
        "restaurants",
        "rock climbing",
        "roller coasters",
        "roller derby",
        "rolling",
        "rugby",
        "sailing",
        "safety",
        "screenwriting",
        "scuba diving",
        "selling indulgences",
        "secrets",
        "sewing",
        "siege warfare",
        "simplistic",
        "shitposting",
        "shrimp",
        "skydiving",
        "sleeping#sleeper#",
        "snapping",
        "sneaking",
        "snooping",
        "soliloquies",
        "sorting",
        "soul searching",
        "speaking #toTheDead#",
        "speedrunning",
        "sports",
        "stargazing",
        "summoning",
        "sunshine",
        "sunbathing",
        "swimming",
        "tactical retreats",
        "tarot",
        "tattoos",
        "tea",
        "the backrooms",
        "the deep lore",
        "the luge",
        "theater",
        "transuranium elements",
        "trans rights",
        "traveling",
        "vape rigs",
        "vegetables",
        "ventriloquism",
        "vibin'",
        "video games",
        "wading",
        "wallowing",
        "watching #paintDry#",
        "web slinging",
        "weight lifting",
        "welding",
        "windrunning",
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
        "goblins",
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
        "parrots",
        "the bourgeois",
        "yuppies",
        "billionaires",
        "celebrities",
        "birds",
        "caiman",
        "historical figures",
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
        "through the woods",
        "through time",
        "through walls",
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
        "fish",
        "gainz",
        "god",
        "kaiju",
        "hippo",
        "hygge",
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
        "marble",
        "catamaran",
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
        "rumor",
        "statue",
        "sword",
        "violin",
        "war",
        "wine",
    ],
    "feats": [
        "#actually# #secretID#.",
        "#competition# champion.",
        "#starsign# sun, #starsign# moon, #starsign# rising.",
        "award-winning #occupation#.",
        "can eat a burrito all the way to the bottom without spilling.",
        "can eat an entire cessna",
        "can eat six tacos without spilling.",
        "can lift two of me.",
        "can lift three of me.",
        "caught a #monster#.",
        "friend to all.",
        "friends with everyone.",
        "i cook and i clean.",
        "i love everyone by default.",
        "in my #descriptor# era.",
        "in my cozy era.",
        "in my rude era, sorry.",
        "podcaster.",
        "#ranAMarathon# and now i'm #retired#.",
        "set foot on all 7 continents.",
        "sigma grindset.",
        "swam the #water# to rescue the #rescuee#.",
        "swam the #water#.",
        "voted hottest #CEO# by #Forbes#.",
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
        "a panel of independent researchers",
        "Forbes",
        "SIBR",
        "capybr",
        "my fans",
        "the NYT",
    ],
    "dateIdeas": [
        "adventure #walkLocation#",
        "answer the fermi paradox",
        "carry some birds",
        "discuss conspiracy theories",
        "get brunch",
        "get coffee",
        "go #monster# hunting",
        "grab a drink",
        "make some bread",
        "play with goats",
    ],
    "ranAMarathon": [
        "built the empire",
        "defeated the overlord",
        "destroyed the suns",
        "did an ironman",
        "led the vanguard",
        "raided some tombs",
        "ran a marathon",
        "saved the world",
        "started from the bottom",
        "was a #royal# #duelist#",
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
    "competition": [
        "chess boxing",
        "e-sports",
        "spelling bee",
        "superbowl",
        "world series",
    ],
    "water": [
        "Cook Strait",
        "Dardanelles Strait",
        "English Channel",
        "Malacca Strait",
        "Mozambique Channel",
        "Palk Strait",
        "Panama Canal",
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
        "president pro tem",
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
        "#descriptor# and #descriptor# #capybara# looking for #specialSomeone.a# that's #descriptor# and #descriptor#.",
        "#descriptor#, #descriptor# #capybara# looking for #specialSomeone.a# that's #descriptor# and #descriptor#.",
        "#descriptor# and #descriptor#. into #hobby# and #hobby#.",
        "#descriptor# #capybara# #lookingFor# #lookee#.",
        "#descriptor# #descriptor# #lookingFor# #descriptor# #descriptor#.",
        "#descriptorList#",
        "#like# #hobby#.",
    ],
    "specialSomeone": [
        "companion",
        "lover",
        "partner",
        "special someone",
    ],
    "capybara": [
        "boy",
        "capy",
        "capybara",
        "fuzzball",
        "gal",
        "girl",
        "guy",
        "man",
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
    ],
    "like": [
        "i enjoy",
        "i hate",
        "i like",
        "i loathe",
        "i love",
        "i'm curious about",
        "i'm passionate about",
        "i'm really into",
        "passionate about",
        "really into",
    ],
    "potato": [
        "cat",
        "chinchilla",
        "coconut",
        "corvid",
        "dog",
        "frog",
        "ghost",
        "goblin",
        "gremlin",
        "hamster",
        "kiwi",
        "nightshade",
        "potato",
        "raccoon",
        "snake",
        "goad",
        "toddler",
        "tomato",
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
        "\"The most powerful Genital is the mind.\"",
        "big bird was obviously just a man in a suit. but the other ones were too small to contain men. so what the fuck",
        "blocked. blocked. blocked. youre all blocked. none of you are free of sin",
        "do you ever wonder why we're here?",
        "drunk driving may kill a lot of people, but it also helps a lot of people get to work on time, so, it;s impossible to say if its bad or not,",
        "getting brain damage from pissing my self off",
        "haters swipe #direction#.",
        "hi",
        "how does this app work",
        "i love it here c:",
        "i lvoe and cherish all of the girls of this site, and other websites. you all become my wife more and more with each passing day. Thank you",
        "i really dont care what Yankee Doodle did when he went to town. His toxic fanbase tells me everything I need to know about him .",
        "i'm not mad. i'm not mad.",
        "if i had $1000000 id be so much less stupid",
        "if your grave doesnt say \"rest in peace\" on it you are automatically drafted into the skeleton war",
        "im afraid i must say that i do not find the mysteries featured on \"scooby-doo\" challenging enough .",
        "in my lane.",
        "its fucked up how there are like 1000 christmas songs but only 1 song aboutr the boys being back in town",
        "joke's on you; i actually love being body slammed by one dozen perfect wrestlers. and my mouth isn't filled with bloodm, it's victory wine",
        "just found out about Object Permanence... why didnt any one tell me about this shit",
        "live love laugh",
        "looking at the data and simply laughing",
        "love when i lose aobut 100 followers immediately after making a beautiful post. the weak shriveling up into dust. Thats called darwin",
        "lunch cronch monch",
        "my problem is, that im perfect, and everyone is jealous of my good posts, and that makes people rightfully upset",
        "ok i pull up.",
        "see this watch? i got it by Crying. my car? crying. my beautiful wife? Crying. My perfect teeth? Crying.",
        "so long suckers! i rev up my motorcylce and create a huge cloud of smoke. when the cloud dissipates im lying completely dead on the pavement",
        "startling how im the only one on this site with an actual human soul. you would think the other guys on here have one, but no",
        "the entire time youre watching the movie 101 Dalmatians, youre just thinking, This is so many more dalmations than usual.",
        "turning a big dial taht says \"#dial#\" on it and constantly looking back at the audience for approval like a contestant on the price is right",
        "who the fuck is scraeming \"LOG OFF\" at my house. show yourself, coward. i will never log off",
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
        "#descriptor.a# #capy#",
        "a dommy #mommy#",
        "a dungeon master",
        "a funding source",
        "a getaway driver",
        "a healer",
        "a hacker",
        "a lockpicker",
        "a nonromanceable npc",
        "a safe-cracker",
        "a sugar #mommy#",
        "a tank",
        "a unicorn",
        "an adult",
        "someone drift compatible",
        "someone that's #descriptor#",
        "technical cofounder",
        "the right vibe",
    ],
    "mommy": [
        "mommy",
        "daddy",
        "papi",
        "mami",
    ],
    "swipeIf": [
        "#looker# #lookingFor# #lookee#.",
        "no #fish#.",
        "#posiVibes# only!",
        "swipe #direction# if ur #descriptor# and #descriptor#!",
        "swipe #direction# if #you# are #descriptor#, #descriptor#, or #descriptor#.",
        "swipe #direction# if #you# have #partner.a#.",
        "swipe #direction# if #you# #messageFirst#.",
        "swipe #direction# if you're into #hobby#.",
        "let's #dateIdeas#.",
    ],
    "you": ["you", "u"],
    "messageFirst": [
        "message first",
        "never message back",
        "play games",
        "wanna text",
        "wanna snap",
    ],
    "posiVibes": [
        "2ft+",
        "fresh vibes",
        "good vibes",
        "immaculate vibes",
        "lefties",
        "posi vibes",
    ],
    "fish": [
        "birds",
        "caiman",
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
        "#emojiList# #profile#",
        "#emojiList# #swipeIf#",
        "#emojiList#",
        "#emojiList#",
        "#feats# #swipeIf#",
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
        "#origin#",
        "#origin.proper#",
        "#origin.proper#",
        "#origin.proper#",
        "#origin.proper#",
        "#origin.gremlin#",
    ],
    "engineer": [
        "aerospace",
        "audio",
        "civil",
        "cocktail",
        "electrical",
        "food",
        "industrial",
        "mecha",
        "rube golberg",
        "software",
        "space",
    ],
    "aspiring": [
        "aspiring",
        "associate",
        "executive",
        "interim",
        "intern",
        "retired",
    ],
    "occupation": [
        "#aspiring# #occupation#",
        "#engineer# engineer",
        "#monster# hunter",
        "#monster# tamer",
        "#singing# singer",
        "AI",
        "CEO",
        "DJ",
        "IRS",
        "IT",
        "academic",
        "actor",
        "adventurer",
        "advertising",
        "ambassador",
        "analyst",
        "antipope",
        "archaeologist",
        "architect",
        "artist",
        "assassin",
        "ballerina",
        "bard",
        "bartender",
        "bean counter",
        "bodyguard",
        "bounty hunter",
        "captain",
        "carpenter",
        "chauffeur",
        "city planner",
        "coach",
        "code breaker",
        "comedian",
        "community manager",
        "construction",
        "consultant",
        "content creator",
        "cook",
        "court musician",
        "courtesan",
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
        "executioner",
        "executive assistant",
        "exile",
        "exorcist",
        "explorer",
        "exsanguinist",
        "fashion",
        "femme fatale",
        "ferryman",
        "fighter",
        "finance",
        "flight attendant",
        "food taster",
        "footballer",
        "ghost",
        "historian",
        "ice breaker",
        "international spy",
        "janitor",
        "journalist",
        "#royal# knight",
        "lawyer",
        "lighthouse keeper",
        "local deity",
        "lumberjack",
        "magister",
        "marketing",
        "massage therapist",
        "mechanic",
        "medium",
        "midwife",
        "model",
        "monarch",
        "naturalist",
        "paralegal",
        "performer",
        "personal trainer",
        "philosopher",
        "pilot",
        "pirate",
        "plumber",
        "podcaster",
        "politician",
        "pope",
        "popstar",
        "professional athlete",
        "professor",
        "psychopomp",
        "rancher",
        "real estate",
        "recruiter",
        "requisitions",
        "retail",
        "rock climber",
        "rockstar",
        "rogue",
        "sailor",
        "sales",
        "scholar",
        "scientist",
        "siege engineer",
        "slumlord",
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
    proper: (s) => {
        s = s
            .replace(/^i /, "I ")
            .replace(/\si\.?$/g, " I")
            .replace(/\si /g, " I ")
            .replace(/\s'/g, " I'")
        s = s[0].toUpperCase() + s.substring(1);
        s = s.replace(/\. \w/g, (token) => ". " + token[2].toUpperCase());
        return s;
    },
    gremlin: (s) => {
        if (Math.random() < .5) {
            s = s.toLowerCase();
        }
        if (Math.random() < .5) {
            s = s.replace(/[.,]/g, "");
        }
        return s;
    },
    emoji: () => {
        return emoji.random({ n: 1, genders: true });
    }
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

function Profile({name, slide, setSlide, capy}) {
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
    }, [name, capy]);

    useEffect(() => {
        setInsta(makeInsta(name, hobbies));
    }, [name, hobbies]);
    return (
        <div className="profilediv" slide={slide} onAnimationEnd={() => setSlide("")}>
            <div className="profileImage">
                <img src={capy} alt="a capybara"/>
                <ul className="hobbies">
                    {hobbies.map((hobby, i) => (<li key={i} className="hobby">{hobby}</li>))}
                </ul>
            </div>
            <div className="nametag">
                <h1 className="name">{name}</h1>
                <h1 className="age">{age}</h1>
            </div>
            <h2 className="job">{job}</h2>
            <h3 className="distance">{distance} miles away</h3>
            <p className="profile">{profile}</p>
            <p className="insta">{insta}</p>
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

function Swiper({direction, label, queue, setQueue, setName, flashAction, setCapy}) {
    const onClick = () => {
        flashAction();
        nextProfile(queue, setQueue, setName, setCapy);
    };
    return <button className={`circleButton ${direction}`} onClick={onClick}>{label}</button>
}

function nextProfile(queue, setQueue, setName, setCapy){
    const elem = queue.pop();
    const delay = 200;
    const set = (n, c) => {
        setCapy(c.url);
        if (window.location.hash?.length > 1) {
            n = window.location.hash.substring(1).replace(/%20/g, " ");
            window.location.hash = "";
        }
        seedrandom(n, {global: true});
        setName(n);
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
            <button onClick={() => setIsOpen(true)} className="aboutButton">{label}</button>
            <Modal isOpen={isOpen} onRequestClose={()=>setIsOpen(false)} style={styling}>
                <h1>capybr</h1>
                <h3>swipe the capybara of your dreams!</h3>
                <ul className="modalCredits">
                    <li><a href="https://github.com/jmaliksi/capybr" target="_blank">Github</a></li>
                    <li><a href="https://capy.lol/" target="_blank">Capybara API</a></li>
                    <li><a href="https://github.com/galaxykate/tracery" target="_blank">Tracery</a> (profile generation)</li>
                    <li><a href="https://github.com/jmaliksi/onomancer" target="_blank">Onomancer</a> (name API)</li>
                    <li><a href="https://game-icons.net/1x1/lorc/chewed-heart.html" target="_blank">Icon</a></li>
                </ul>
                <p className="legal">this app collects zero data the capybaras ate all the cookies, you are safe</p>
            </Modal>
        </div>
    );
}

function App() {
    const [queue, setQueue] = useState([]);
    const [name, setName] = useState("");
    const [capy, setCapy] = useState("");
    const [flash, setFlash] = useState("");
    const [slide, setSlide] = useState("");
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => {
            nextProfile(queue, setQueue, setName, setCapy);
            setFlash("red");
            setSlide("left");
        },
        onSwipedRight: () => {
            nextProfile(queue, setQueue, setName, setCapy);
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
        .then(() => nextProfile(queue, setQueue, setName, setCapy));
    }, []);

    return (
        <>
        <div className="app" {...swipeHandlers}>
            <div className="overlay" flash={flash} onAnimationEnd={() => setFlash("")} onClick={() => setFlash("")} {...swipeHandlers} />
            <Profile name={name} slide={slide} setSlide={setSlide} capy={capy}/>
            <div className="buttons">
                <div className="swipeLeft">
                    <Swiper
                        direction="leftButton"
                        label="👎"
                        queue={queue}
                        setQueue={setQueue}
                        setName={setName} 
                        setCapy={setCapy}
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
