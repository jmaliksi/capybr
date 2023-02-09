import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import tracery from "tracery-grammar";
import emoji from "emoji-random-list";

const grammar = tracery.createGrammar({
    "descriptor": [
        "#starsign#",
        "420-friendly",
        "adventurous",
        "angelic",
        "attractive",
        "artistic",
        "artsy",
        "assertive",
        "bold",
        "bright",
        "brooding",
        "bubbly",
        "buff",
        "caffeinated",
        "capypilled",
        "caring",
        "chill",
        "clumsy",
        "cottagecore",
        "creative",
        "cyberpunk",
        "demonic",
        "driven",
        //"dull",
        "energetic",
        "enigmatic",
        "extroverted",
        "family-oriented",
        "fancy",
        "fashionable",
        "feisty",
        "fragile",
        "free-spirited",
        "friend-shaped",
        "friendly",
        "funemployed",
        "fun loving",
        "funny",
        "gay",
        "goblin-mode",
        "gothy",
        "grumpy",
        "happy",
        "hot",
        "humble",
        "hungry",
        "hydrated",
        "hygenic",
        "independent",
        "introverted",
        "loud",
        "mature",
        "mean",
        "messy",
        "misanthropic",
        "moisturized",
        "muddy",
        "mysterious",
        "nihilistic",
        "outdoorsy",
        "passionate",
        "pessimistic",
        "posi",
        "proper",
        "queer",
        "quiet",
        "relaxed",
        "sad",
        "sensitive",
        "sexy",
        "shiny",
        "shy",
        "sleepy",
        "slick",
        "soft",
        "stable",
        "spicy",
        "spiritual",
        "spontaneous",
        "spooky",
        "strong",
        "supportive",
        "sweet",
        "swift",
        "tall",
        "thirsty",
        "unbothered",
        //"undermedicated",
        "underpaid",
        "unemployed",
        "unstable",
        "warm",
        "well-travelled",
        "zen",
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
        "sagittarius",
        "scorpio",
        "taurus",
        "virgo",
    ],
    "hobby": [
        "#monster# hunting",
        "#pizza# crafting",
        "#pizza# making",
        "arson",
        "astrology",
        "bar hopping",
        "base jumping",
        "blanket forts",
        "blitzball",
        "board games",
        "bonsai",
        "botany",
        "brunch",
        "clubbing",
        "coding",
        "competitive diving",
        "cooking",
        "crime",
        "crochet",
        "dancing",
        "data crime",
        "eating",
        "fashion",
        "fighting white collar crime",
        "foods",
        "hacking",
        "lifting",
        "malort",
        "meditation",
        "museums",
        "restaurants",
        "roller coasters",
        "rugby",
        "scuba diving",
        "shitposting",
        "skydiving",
        "speaking to the dead",
        "speedrunning",
        "sports",
        "summoning",
        "sumo wrestling",
        "sunbathing",
        "swimming",
        "tarot",
        "traveling",
        "video games",
    ],
    "monster": [
        "anime body pillow",
        "bourgeoisie",
        "butterfly",
        "caiman",
        "demon",
        "eldritch god",
        "gainz",
        "god",
        "hygge",
        "michelin star",
        "milf",
        "monster",
        "munchie",
        "rare book",
        "shiny pokemon",
        "treasure",
        "vampire",
        "zombie",
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
        "#starsign# sun, #starsign# moon, #starsign# rising.",
        "actually #secretID#.",
        "can eat a burrito all the way to the bottom without spilling.",
        "can lift two of me.",
        "caught a fish.",
        "friend to all.",
        "friends with everyone.",
        "i cook and i clean.",
        "i love everyone by default.",
        "in my cozy era.",
        "let's make some bread.",
        "podcaster.",
        "ran a marathon and now i'm retired.",
        "set foot on all 7 continents.",
        "sigma grindset.",
        "voted hottest CEO by Forbes.",
        "world series champion.",
    ],
    "descriptorList": [
        "#descriptor#. #descriptor#. #descriptor#. #descriptor#. #descriptor#.",
        "#descriptor#. #descriptor#. #descriptor#.",
    ],
    "profile": [
        "#descriptor# and #descriptor# capybara looking for a special someone that's #descriptor# and #descriptor#.",
        "#descriptor# and #descriptor#. into #hobby# and #hobby#.",
        "#descriptor# capybara #lookingFor# #lookee#.",
        "#descriptorList#",
        "i like #hobby#.",
    ],
    "secretID": [
        "a #potato#",
        "three #potato.s# in a trenchcoat"
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
        "coconut",
        "dog",
        "ghost",
        "goblin",
        "gremlin",
        "hamster",
        "potato",
        "raccoon",
        "toddler",
        "tomato",
    ],
    "wint": [
        ".",
        "i'm not mad. i'm not mad.",
        "live love laugh",
        "lunch cronch monch",
        "my problem is, that im perfect, and everyone is jealous of my good posts, and that makes people rightfully upset",
        "startling how im the only one on this site with an actual human soul. you would think the other guys on here have one, but no",
    ],
    "direction": [
        "left",
        "right",
    ],
    "partner": [
        "SO",
        "boyfriend",
        "demon",
        "ghost",
        "girlfriend",
        "husband",
        "partner",
        "spouse",
        "wife",
    ],
    "looker": [
        "",
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
        "a catch",
        "a dungeon master",
        "a getaway driver",
        "a safe-cracker",
        "a unicorn",
        "a funding source",
        "the right vibe",
    ],
    "swipeIf": [
        "#looker# #lookingFor# #lookee#.",
        "no fish.",
        "posi vibes only!",
        "swipe #direction# if ur #descriptor# and #descriptor#!",
        "swipe #direction# if you are #descriptor#, #descriptor#, or #descriptor#.",
        "swipe #direction# if you have a #partner#.",
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
        "software",
    ],
    "occupation": [
        "#engineer# engineer",
        "#monster# hunter",
        "ambassador",
        "assassin",
        "CEO",
        "actor",
        "analyst",
        "architect",
        "artist",
        "bartender",
        "bodyguard",
        "captain",
        "code breaker",
        "city planner",
        "content creator",
        "cook",
        "court musician",
        "dancer",
        "designer",
        "detective",
        "dilettante",
        "doctor",
        "dog walker",
        "egg layer",
        "explorer",
        "exorcist",
        "femme fatale",
        "finance",
        "food taster",
        "ghost",
        "international spy",
        "journalist",
        "lawyer",
        "local deity",
        "medium",
        "naturalist",
        "paralegal",
        "pilot",
        "plumber",
        "professional athlete",
        "politician",
        "rock climber",
        "rockstar",
        "scientist",
        "spacer",
        "streamer",
        "student",
        "summoner",
        "surfer",
        "teacher",
        "tour guide",
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
            s = s.replace(/[\.,]/g, "");
        }
        return s;
    },
    emoji: () => {
        return emoji.random({ n: 1, genders: true });
    }
});

const capyreject = [538, 715, 200, 279, 167, 14, 416, 271, 443];

function makeInsta(name, hobbies) {
    if (Math.random() < .33) {
        return "";
    }
    if (Math.random() < .33) {
        const hobby = hobbies[Math.floor(Math.random() * hobbies.length)];
        if (!!hobby) {
            name = hobby;
        }
    }
    if (Math.random() < .66) {
        const eggs = name.split(" ");
        name = eggs[Math.floor(Math.random() * eggs.length)];
    }
    if (Math.random() < .5) {
        name = name.replace(" ", "");
    } else {
        name = name.replace(" ", "_");
    }

    if (Math.random() < .75) {
        name = `${name}${Math.floor(Math.random() * 100)}`;
    } else if (Math.random() < .5) {
        const formats = [
            `_${name}_`,
            `__${name}`,
            `${name}_xoxo`,
            `xx${name}xx`,
        ];
        name = formats[Math.floor(Math.random() * formats.length)];
    }
    if (Math.random() < .5) {
        name = name.toLowerCase();
    } else if (Math.random() < .5) {
        name = name.toUpperCase();
    }
    return `@${name}`;
}

function App() {
    const [capy, setCapy] = useState("");
    const [name, setName] = useState("");
    const [profile, setProfile] = useState("");
    const [age, setAge] = useState(18);
    const [job, setJob] = useState("");
    const [distance, setDistance] = useState(1);
    const [hobbies, setHobbies] = useState([]);
    const [insta, setInsta] = useState("");

    useEffect(() => {
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
            });

        fetch('https://onomancer.sibr.dev/api/getNames?threshold=4&random=1&limit=1')
            .then(response => {
                if (!response.ok) {
                    return
                }
                return response.json();
            })
            .then(js => {
                setName(js[0]);
            });

        setAge(Math.floor(18 + Math.random() * 5 * 12));
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
    }, []);

    useEffect(() => {
        setInsta(makeInsta(name, hobbies));
    }, [name, hobbies]);
    return (
        <div className="App">
            <div className="profileImage">
                <img src={capy} alt="a capybara"/>
            </div>
            <h1>{name}</h1>
            <h2>{age}</h2>
            <h3>{job}</h3>
            <h3>{distance} miles away</h3>
            <ul>
                {hobbies.map((hobby) => (<li key={hobby}>{hobby}</li>))}
            </ul>
            <p>{profile}</p>
            <p>{insta}</p>
        </div>
    );
}

export default App;
