import './App.css';
import { useEffect, useState } from "react";
import tracery from "tracery-grammar";
import emoji from "emoji-random-list";
import { useSwipeable } from "react-swipeable";

const grammar = tracery.createGrammar({
    "alignment1": [
        "awful",
        "chaotic",
        "lawful",
        //"toadally",
        "waffle",
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
        "sardonic",
        "sassy",
        "sensitive",
        "sexy",
        "sharp",
        "shiny",
        "shy",
        "sleepy",
        "slick",
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
        "uncomfortable",
        "underemployed",
        "underpaid",
        "unemployed",
        "unhealthy",
        "unstable",
        "verbose",
        "warm",
        "well-travelled",
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
        "beam",
        "checkbooks",
        "critters",
        "friends",
        "fruits",
        "karma",
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
    "wint": [
        ".",
        "haters swipe #direction#.",
        "do you ever wonder why we're here?",
        "i'm not mad. i'm not mad.",
        "in my lane.",
        "live love laugh",
        "lunch cronch monch",
        "my problem is, that im perfect, and everyone is jealous of my good posts, and that makes people rightfully upset",
        "ok i pull up.",
        "startling how im the only one on this site with an actual human soul. you would think the other guys on here have one, but no",
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
        //"a catch",
        "a dommy #mommy#",
        "a dungeon master",
        "a funding source",
        "a getaway driver",
        "a healer",
        "a safe-cracker",
        "a sugar #mommy#",
        "a tank",
        "a unicorn",
        "a unicorn",
        "an adult",
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
        "software",
        "space",
    ],
    "occupation": [
        "#engineer# engineer",
        "#monster# hunter",
        "CEO",
        "actor",
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
        "code breaker",
        "construction",
        "content creator",
        "cook",
        "court musician",
        "curator",
        "dancer",
        "designer",
        "detective",
        "dilettante",
        "doctor",
        "dog walker",
        "egg layer",
        "exorcist",
        "explorer",
        "femme fatale",
        "finance",
        "flight attendant",
        "food taster",
        "ghost",
        "international spy",
        "journalist",
        "lawyer",
        "local deity",
        "medium",
        "model",
        "naturalist",
        "paralegal",
        "personal trainer",
        "pilot",
        "plumber",
        "politician",
        "professional athlete",
        "rock climber",
        "rockstar",
        "sailor",
        "scientist",
        "siege engineer",
        "society caretaker",
        "spacer",
        "streamer",
        "student",
        "summoner",
        "surfer",
        "teacher",
        "therapist",
        "tour guide",
        "transporter",
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

function makeInsta(name, hobbies) {
    if (!name || !hobbies) {
        return "";
    }
    if (Math.random() < .25) {
        return "";
    }
    if (Math.random() < .33) {
        const hobby1 = hobbies[Math.floor(Math.random() * hobbies.length)];
        const hobby2 = hobbies[Math.floor(Math.random() * hobbies.length)];
        const hobby = [hobby1, hobby2, `${hobby1} ${hobby2}`][Math.floor(Math.random() * 3)];
        if (!!hobby) {
            name = hobby;
        }
    }
    if (Math.random() < .66) {
        const eggs = name.split(" ");
        name = eggs[Math.floor(Math.random() * eggs.length)];
    }
    name = name.replace(/[\s-\']/g, ["", "_", "."][Math.floor(Math.random() * 3)]);

    if (Math.random() < .75) {
        name = `${name}${Math.floor(Math.random() * 100)}`;
    } else if (Math.random() < .5) {
        const formats = [
            `_${name}_`,
            `__${name}`,
            `${name}_xoxo`,
            `xx${name}xx`,
            `itsme${name}`,
            `${name}XO`,
            `${name}_photography`,
            `${name}_art`,
            `${name}_studio`,
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
        </div>
        </>
    );
}

export default App;
