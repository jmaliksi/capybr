import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import tracery from "tracery-grammar";

const grammar = tracery.createGrammar({
  "descriptor": [
    "fun loving",
    "adventurous",
    "spontaneous",
    "hygenic",
    "hydrated",
    "warm",
    "moisturized",
    "unbothered",
    "gothy",
    "spooky",
    "posi",
    "sexy",
    "loud",
    "proper",
    "fancy",
    "hot",
    "hungry",
    "introverted",
    "extroverted",
    "buff",
    "strong",
    "fashionable",
    "sweet",
    "chill",
    "quiet",
    "cottagecore",
    "funny",
    "friend-shaped",
    "friendly",
    "family oriented",
    "creative",
    "artistic",
    "well-travelled",
    "fragile",
    "sad",
    "outdoorsy",
    "caring",
    "caffeinated",
    "420 friendly",
    "slick",
    "passionate",
    "driven",
    "relaxed",
    "happy",
    "shiny",
    "sleepy",
    "artsy",
    "mature",
    "swift",
    "mysterious",
    "enigmatic",
    "nihilistic",
    "pessimistic",
    "soft",
    "sensitive",
    "spicy",
    "muddy",
    "tall",
    "bubbly",
    "spiritual",
    "cyberpunk",
    "feisty",
    "bright"
  ],
  "hobby": [
    "video games",
    "sunbathing",
    "swimming",
    "eating",
    "clubbing",
    "restaurants",
    "bar hopping",
    "museums",
    "board games",
    "speedrunning",
    "competitive diving",
    "brunch",
    "scuba diving",
    "traveling",
    "sumo wrestling",
    "meditation",
    "roller coasters",
    "base jumping",
    "skydiving",
    "crime",
    "data crime",
    "fighting white collar crime",
    "botany",
    "cooking",
    "bonsai",
    "#pizza# making",
    "#pizza# crafting",
    "lifting",
    "speaking to the dead",
    "dancing",
    "crochet",
    "foodie",
    "arson",
    "fashion",
    "sports",
    "summoning",
    "#monster# hunting",
    "blanket forts",
    "malort"
  ],
  "monster": [
    "monster",
    "caiman",
    "milf",
    "eldritch god",
    "god",
    "shiny pokemon",
    "michelin star",
    "demon",
    "rare book",
    "butterfly",
    "anime body pillow",
    "vampire",
    "gainz",
    "zombie",
    "munchie",
    "hygge",
    "bourgeois"
  ],
  "pizza": [
    "pizza",
    "crime",
    "sword",
    "barrel",
    "costume",
    "war",
    "bread",
    "statue",
    "mischief",
    "violin",
    "metal",
    "perfume",
    "music",
    "beer",
    "wine",
    "candle",
    "glass",
    "pastry"
  ],
  "feats": [
    "can lift two of me",
    "ran a marathon and now i'm retired",
    "caught a fish",
    "voted hottest CEO by Forbes",
    "podcaster",
    "i cook and i clean",
    "set foot on all 7 continents",
    "can eat a burrito all the way to the bottom without spilling",
    "world series champion",
    "friend to all",
    "friends with everyone",
    "i love everyone by default",
    //"respect is given not earned",
    "let's make some bread.",
    "sigma grindset"
  ],
  "profile": [
    "#descriptor# and #descriptor# capybara looking for a special someone that's #descriptor# and #descriptor#.",
    "#descriptor#. #descriptor#. #descriptor#. #descriptor#. #descriptor#.",
    "#descriptor# and #descriptor#. into #hobby# and #hobby#.",
    "i like #hobby#.",
    "actually a #potato#.",
    "actually three #potato.s# in a trenchcoat."
  ],
  "like": [
    "i like",
    "i enjoy",
    "i love",
    "i hate",
    "i loathe",
    "i'm passionate about",
    "passionate about",
    "i'm really into",
    "really into"
  ],
  "potato": [
    "potato",
    "coconut",
    "raccoon",
    "hamster",
    "dog",
    "cat",
    "toddler",
    "ghost",
    "gremlin",
    "goblin"
  ],
  "wint": [
    "i'm not mad. i'm not mad.",
    ".",
    "live love laugh",
    "lunch cronch monch",
    "my problem is, that im perfect, and everyone is jealous of my good posts, and that makes people rightfully upset",
    "startling how im the only one on this site with an actual human soul. you would think the other guys on here have one, but no"
  ],
  "direction": [
    "left",
    "right"
  ],
  "partner": [
    "partner",
    "girlfriend",
    "boyfriend",
    "husband",
    "wife",
    "SO",
    "spouse",
    "ghost",
    "demon"
  ],
  "looker": [
    "my #partner# and i are",
    "me and my #partner# are",
    "me, my #partner#, and my #partner# are",
    "i'm",
    ""
  ],
  "lookingFor": [
    "looking for",
    "in need of",
    "needing",
    "wanting",
    "searching for"
  ],
  "lookee": [
    "a unicorn",
    "the right vibe",
    "a getaway driver",
    "a safe-cracker",
    "a dungeon master",
    "funding source",
    "a catch"
  ],
  "swipeIf": [
    "#looker# #lookingFor# #lookee#",
    "swipe #direction# if you are #descriptor#, #descriptor#, or #descriptor#.",
    "swipe #direction# if ur #descriptor# and #descriptor#!",
    "no fish",
    "swipe #direction# if you're into #hobby#",
    "posi vibes only",
    "swipe #direction# if you have a #partner#"
  ],
  "origin": [
    "#profile#",
    "#profile# #swipeIf#",
    "#wint#",
    "#profile# #feats#"
  ]
});
grammar.addModifiers(tracery.baseEngModifiers);

const capyreject = [
    '538',
    '715',
];

function App() {
    const [capy, setCapy] = useState("");
    const [name, setName] = useState("");
    const [profile, setProfile] = useState("");
    const [age, setAge] = useState(18);

    useEffect(() => {
        fetch('https://api.capy.lol/v1/capybara?json=true')
        .then(response => {
            if (!response.ok) {
                return
            }
            return response.json();
        })
        .then(js => {
            console.log(js);
            setCapy(js.data.url);
        });

        fetch('https://onomancer.sibr.dev/api/getNames?threshold=7&random=1&limit=1')
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
    }, []);
  return (
    <div className="App">
      <img src={capy} style={{"maxWidth": "50vw"}}/>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <p>{profile}</p>
    </div>
  );
}

export default App;
