import './App.css';
import { useEffect, useState } from "react";
import tracery from "tracery-grammar";
import emoji from "emoji-random-list";
import { useSwipeable } from "react-swipeable";
import Modal from "react-modal";

const grammar = tracery.createGrammar({
    "alignment1": [
        "awful",
        "chaotic",
        "kinda",
        "lawful",
        "neutral",
        "very",
        //"toadally",
        //"waffle",
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
        //"#monster# hunter",
        "#starsign#",
        "420-friendly",
        "adult",
        "adventurous",
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
        "bold",
        "bothered",
        "bright",
        "brooding",
        "bubbly",
        "buff",
        "caffeinated",
        "calculating",
        "capypilled",
        "caring",
        "charismatic",
        "chill",
        "confident",
        "clumsy",
        "colorful",
        "comfortable",
        "cottagecore",
        "creative",
        "cursed",
        "cyberpunk",
        "dehyrdrated",
        "demonic",
        "driven",
        "elliptical",
        "employable",
        "emotional",
        "empathetic",
        "energetic",
        "enigmatic",
        "erudite",
        "extroverted",
        "family-oriented",
        "fancy",
        "fashionable",
        "feisty",
        "flatulant",
        "fragile",
        "free-spirited",
        "friend-shaped",
        "friendly",
        "fruity",
        "fun loving",
        "funemployed",
        "funny",
        "fuzzy",
        "gay",
        "geeky",
        "goblin-mode",
        "gothic",
        "gothy",
        "gregarious",
        "grumpy",
        "happy",
        "healthy",
        "hirstute",
        "high EQ",
        "high IQ",
        "hoary",
        "horrible",
        "hot",
        "humble",
        "hungry",
        "hydrated",
        "hygenic",
        "independent",
        "introverted",
        "irritable",
        "laconic",
        "loud",
        "mature",
        "mean",
        "messy",
        "misanthropic",
        "mischievous",
        "moisturized",
        "muddy",
        "mysterious",
        "nerdy",
        "nihilistic",
        "oblong",
        "outdoorsy",
        "passionate",
        "pensive",
        "pessimistic",
        "posi",
        "present",
        "prolific",
        "proper",
        "queer",
        "quick",
        "quiet",
        "radiant",
        "recalcitrant",
        "relaxed",
        "sad",
        "sallow",
        "sarcastic",
        "sardonic",
        "sassy",
        "sensitive",
        "sexy",
        "sharp",
        "shiny",
        "shy",
        "sleepy",
        "slick",
        "smart",
        "snarky",
        "soft",
        "spartan",
        "speedy",
        "spicy",
        "spiritual",
        "spontaneous",
        "spooky",
        "stable",
        "strong",
        "sublime",
        "supportive",
        "sweet",
        "swift",
        "tall",
        "thirsty",
        "trilingual",
        "unbothered",
        //"uncomfortable",
        //"underemployed",
        //"underpaid",
        //"unemployed",
        //"unhealthy",
        "unstable",
        "verbose",
        "warm",
        "weedpilled",
        "well-travelled",
        "witty",
        "worldly",
        "zen",
        //"dull",
        //"undermedicated",
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
        "walking",
        "long walks",
        "strolls",
        "meandering",
    ],
    "hobby": [
        "#monster# hunting",
        "#pizza# crafting",
        "#pizza# making",
        "#racer# racing",
        "#walking# #walkLocation#",
        "TTRPGs",
        "adventuring",
        "apple picking",
        "arson",
        "astrology",
        "backpacking",
        "ballet",
        "bar hopping",
        "balancing #balanceable#",
        "base jumping",
        "beatboxing",
        "birdwatching",
        "blanket forts",
        "blitzball",
        "board games",
        "bonsai",
        "botany",
        "bouldering",
        "brunch",
        "burping the alphabet",
        "capoeira",
        "cats",
        "chaos",
        "chatting",
        "clementines",
        "clubbing",
        "coding",
        "competitive diving",
        "cooking",
        "crime",
        "crochet",
        "curling",
        "dancing",
        "data crime",
        "dating apps",
        "dinosaurs",
        "dogs",
        "eating",
        "escapism",
        "expeditions",
        "exploring",
        "fashion",
        "fighting white collar crime",
        "foods",
        "gardening",
        "gymnastics",
        "hacking",
        "hippo tipping",
        "ice climbing",
        "keel hauling",
        "knitting",
        "lifting",
        "liminal spaces",
        "malort",
        "meditation",
        "mischief",
        "mocking parrots",
        "modeling",
        "mountaineering",
        "museums",
        "music",
        "occultism",
        "pachinko",
        "painting",
        "philosophy",
        "photography",
        "pinochle",
        "plotting",
        "postgres",
        "quilting",
        "racing",
        "reading",
        "restaurants",
        "rock climbing",
        "roller coasters",
        "rugby",
        "scuba diving",
        "sewing",
        "siege warfare",
        "shitposting",
        "skydiving",
        "sleeping with the fishes",
        "speaking to the dead",
        "speedrunning",
        "sports",
        "stargazing",
        "summoning",
        "sumo wrestling",
        "sunbathing",
        "swimming",
        "tarot",
        "the luge",
        "traveling",
        "vibin'",
        "video games",
        "watching paint dry",
        "weight lifting",
        "yodeling",
        "yoga",
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
        "on the bottom of the river",
        "on the beach",
        "in space",
        "through the woods",
        "through time",
        "across the planes",
        "with guinea pigs",
        "with friends",
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
        "gainz",
        "god",
        "hygge",
        "michelin star",
        "milf",
        "monster",
        "munchie",
        "piñata",
        "rare book",
        "replicant",
        "shiny pokemon",
        "treasure",
        "vampire",
        "zombie",
    ],
    "racer": [
        "#monster#",
        "#potato#",
        "sled",
        "wagon",
        "zomboni",
    ],
    "pizza": [
        "barrel",
        "beer",
        "bread",
        "candle",
        "costume",
        "crime",
        "glass",
        "metal",
        "mischief",
        "music",
        "pastry",
        "perfume",
        "pizza",
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
        "can lift two of me.",
        "caught a fish.",
        "friend to all.",
        "friends with everyone.",
        "i cook and i clean.",
        "i love everyone by default.",
        "in my #descriptor# era.",
        "in my cozy era.",
        "in my rude era, sorry.",
        "let's make some bread.",
        "podcaster.",
        "ran a marathon and now i'm retired.",
        "set foot on all 7 continents.",
        "sigma grindset.",
        "swam the #water# to rescue the #rescuee#.",
        "swam the #water#.",
        "voted hottest CEO by Forbes.",
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
    ],
    "profile": [
        "#descriptor# and #descriptor# capybara looking for a special someone that's #descriptor# and #descriptor#.",
        "#descriptor# and #descriptor#. into #hobby# and #hobby#.",
        "#descriptor# capybara #lookingFor# #lookee#.",
        "#descriptor# #descriptor# #lookingFor# #descriptor# #descriptor#.",
        "#descriptorList#",
        "#like# #hobby#.",
    ],
    "actually": [
        "actually",
        "secretly",
    ],
    "secretID": [
        "a #potato# hiding amongst #potato.s#",
        "a #potato#",
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
        "dog",
        "ghost",
        "goblin",
        "gremlin",
        "hamster",
        "nightshade",
        "potato",
        "raccoon",
        "snake",
        "toddler",
        "tomato",
        "weevil",
    ],
    "dial": [
        "weather",
        "capybara",
        "racism",
    ],
    "wint": [
        ".",
        "IF THE ZOO BANS ME FOR HOLLERING AT THE ANIMALS I WILL FACE GOD AND WALK BACKWARDS INTO HELL",
        "big bird was obviously just a man in a suit. but the other ones were too small to contain men. so what the fuck",
        "blocked. blocked. blocked. youre all blocked. none of you are free of sin",
        "do you ever wonder why we're here?",
        "drunk driving may kill a lot of people, but it also helps a lot of people get to work on time, so, it;s impossible to say if its bad or not,",
        "haters swipe #direction#.",
        "i lvoe and cherish all of the girls of this site, and other websites. you all become my wife more and more with each passing day. Thank you",
        "i'm not mad. i'm not mad.",
        "if your grave doesnt say \"rest in peace\" on it you are automatically drafted into the skeleton war",
        "in my lane.",
        "joke's on you; i actually love being body slammed by one dozen perfect wrestlers. and my mouth isn't filled with bloodm, it's victory wine",
        "just found out about Object Permanence... why didnt any one tell me about this shit",
        "live love laugh",
        "love when i lose aobut 100 followers immediately after making a beautiful post. the weak shriveling up into dust. Thats called darwin",
        "lunch cronch monch",
        "my problem is, that im perfect, and everyone is jealous of my good posts, and that makes people rightfully upset",
        "ok i pull up.",
        "see this watch? i got it by Crying. my car? crying. my beautiful wife? Crying. My perfect teeth? Crying.",
        "so long suckers! i rev up my motorcylce and create a huge cloud of smoke. when the cloud dissipates im lying completely dead on the pavement",
        "startling how im the only one on this site with an actual human soul. you would think the other guys on here have one, but no",
        "turning a big dial taht says \"#dial#\" on it and constantly looking back at the audience for approval like a contestant on the price is right",
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
        "a #descriptor# capy",
        "a dommy #mommy#",
        "a dungeon master",
        "a funding source",
        "a getaway driver",
        "a healer",
        "a hacker",
        "a lockpicker",
        "a safe-cracker",
        "a sugar #mommy#",
        "a tank",
        "a unicorn",
        "a unicorn",
        "an adult",
        "someone that's #descriptor#",
        "technical cofounder",
        "the right vibe",
        //"a catch",
    ],
    "mommy": [
        "mommy",
        "daddy",
        "papi",
        "mami",
    ],
    "swipeIf": [
        "#looker# #lookingFor# #lookee#.",
        "no fish.",
        "posi vibes only!",
        "swipe #direction# if ur #descriptor# and #descriptor#!",
        "swipe #direction# if you are #descriptor#, #descriptor#, or #descriptor#.",
        "swipe #direction# if you have a #partner#.",
        "swipe #direction# if you message first.",
        "swipe #direction# if you're into #hobby#.",
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
        "#emojiList#",
        "#emojiList##profile#",
        "#profile# #feats#",
        "#profile# #swipeIf#",
        "#profile#",
        "#profile.gremlin# #swipeIf.gremlin#",
        "#profile.gremlin#",
        "#profile.proper# #feats.proper#",
        "#profile.proper# #swipeIf.proper#",
        "#profile.proper#",
        "#wint#",
    ],
    "engineer": [
        "civil",
        "cocktail",
        "electrical",
        "food",
        "industrial",
        "mecha",
        "software",
        "space",
    ],
    "occupation": [
        "#engineer# engineer",
        "#monster# hunter",
        "CEO",
        "IT",
        "actor",
        "advertising",
        "ambassador",
        "analyst",
        "archaeologist",
        "architect",
        "artist",
        "assassin",
        "ballerina",
        "bartender",
        "bodyguard",
        "bounty hunter",
        "captain",
        "city planner",
        "chauffeur",
        "code breaker",
        "construction",
        "content creator",
        "consultant",
        "cook",
        "court musician",
        "curator",
        "dancer",
        "deep sea fisher",
        "designer",
        "detective",
        "dilettante",
        "doctor",
        "dog walker",
        "egg layer",
        "exorcist",
        "explorer",
        "fashion",
        "femme fatale",
        "ferryman",
        "finance",
        "flight attendant",
        "food taster",
        "ghost",
        "historian",
        "international spy",
        "janitor",
        "journalist",
        "lawyer",
        "local deity",
        "marketing",
        "mechanic",
        "medium",
        "monarch",
        "model",
        "naturalist",
        "paralegal",
        "personal trainer",
        "pilot",
        "plumber",
        "politician",
        "professional athlete",
        "psychopomp",
        "retail",
        "requisitions",
        "rock climber",
        "rockstar",
        "sailor",
        "scholar",
        "scientist",
        "siege engineer",
        "society caretaker",
        "spacer",
        "streamer",
        "student",
        "summoner",
        "surgeon",
        "surfer",
        "teacher",
        "therapist",
        "tour guide",
        "transporter",
        "underwater welder",
        "vigilante",
        "writer",
        "yogi",
    ],
});
grammar.addModifiers(tracery.baseEngModifiers);
grammar.addModifiers({
    proper: (s) => {
        //s = s.replace(/[^\s]i[\s\.$]/, "I");
        s = s
            .replace(/^i /, "I ")
            .replace(/ i\.?$/, " I")
            .replace(/ i /, " I ")
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

const capyreject = [538, 715, 200, 279, 167, 14, 416, 271, 443, 212, 478, 194, 184, 60, 66, 62, 691, 427, 659, 730, 411];

const instaGrammar = tracery.createGrammar({
    "fullname": [],
    "egg": [],
    "hobbyList": [],
    "hobby": ["#hobbyList#", "#hobbyList.inger#"],
    "digit": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    "base": [
        "#fullname#",
        "#egg#",
        "#egg# #egg#",
        "#hobby#",
        "#fullname# #hobby#",
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
        "#handle.snake#",
        "#handle.concat#",
        "#handle.dot#",
        "#handle.camel#",
    ],
});
instaGrammar.addModifiers({
    snake: (s) => {
        return s.replace(/[\s-']/g, "_")
    },
    concat: (s) => {
        return s.replace(/[\s-']/g, "")
    },
    dot: (s) => {
        return s.replace(/[\s-']/g, ".")
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
    if (capitals < .25) {
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

function Profile({name, slide, setSlide}) {
    const [capy, setCapy] = useState("");
    const [profile, setProfile] = useState("");
    const [age, setAge] = useState(18);
    const [job, setJob] = useState("");
    const [distance, setDistance] = useState(1);
    const [hobbies, setHobbies] = useState([]);
    const [insta, setInsta] = useState("");

    useEffect(() => {
        if (!name) {
            return;
        }
        fetch('https://api.capy.lol/v1/capybaras?random=true')
        .then(response => {
            if (!response.ok) {
                return
            }
            return response.json();
        })
        .then(js => {
            for (let i = 0; i < js.data.length; i++) {
                if (!capyreject.includes(js.data[i].index)) {
                    setCapy(js.data[i].url);
                    break
                }
            }
        })
        .then(() => {
            setAge(capybaraYears());
            setProfile(grammar.flatten("#origin#"));
            setJob(grammar.flatten("#occupation.proper#"));
            setDistance(Math.floor(Math.random() * 100) / 10);
            setHobbies([
                grammar.flatten("#hobby#"),
                grammar.flatten("#hobby#"),
                grammar.flatten("#hobby#"),
                grammar.flatten("#hobby#"),
                grammar.flatten("#hobby#"),
            ]);
        });
    }, [name]);

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
    return fetch('https://onomancer.sibr.dev/api/getNames?threshold=4&random=1&limit=50')
        .then(response => {
            if (!response.ok) {
                return;
            }
            return response.json();
        })
}

function Swiper({direction, label, queue, setQueue, setName, flashAction}) {
    const onClick = () => {
        flashAction();
        nextProfile(queue, setQueue, setName);
    };
    return <button className={`circleButton ${direction}`} onClick={onClick}>{label}</button>
}

function nextProfile(queue, setQueue, setName){
    let name = queue.pop();
    if (name === undefined) {
        fetchNames().then(js => {
            name = js.pop();
            setQueue(js);
            setName(name);
        });
    } else {
        setName(name);
    }
};

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
                    <li><a href="https://github.com/jmaliksi/onomancer" target="_blank">Name API</a></li>
                    <li><a href="https://game-icons.net/1x1/lorc/chewed-heart.html" target="_blank">Icon</a></li>
                    <li><a href="https://github.com/galaxykate/tracery" target="_blank">Tracery</a></li>
                </ul>
            </Modal>
        </div>
    );
}

function App() {
    const [queue, setQueue] = useState([]);
    const [name, setName] = useState("");
    const [flash, setFlash] = useState("");
    const [slide, setSlide] = useState("");
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => {
            nextProfile(queue, setQueue, setName);
            setFlash("red");
            setSlide("left");
        },
        onSwipedRight: () => {
            nextProfile(queue, setQueue, setName);
            setFlash("green");
            setSlide("right");
        },
    });

    useEffect(() => {
        fetchNames().then((js) => {
            setQueue(js);
        }).then(() => nextProfile(queue, setQueue, setName));
    }, []);

    return (
        <>
        <div className="overlay" flash={flash} onAnimationEnd={() => setFlash("")} onClick={() => setFlash("")} {...swipeHandlers} />
        <div className="app" {...swipeHandlers}>
            <Profile name={name} slide={slide} setSlide={setSlide}/>
            <div className="buttons">
                <div className="swipeLeft">
                    <Swiper
                        direction="leftButton"
                        label="👎"
                        queue={queue}
                        setQueue={setQueue}
                        setName={setName} 
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
