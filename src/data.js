import spider from "./img/spider.jpg";
import Toy from "./img/toy-story.jpg";
import breaking from "./img/breaking-bad.jpg";
import prisonbreak from "./img/prisonbreak.jpg";
import twilight from "./img/twilight.jpg";
import taken from "./img/taken.jpg";
import money from "./img/money.jpg";

const movies = [
  {
    name: "spiderman",
    imagePoster: spider,
    hints: ["Bite  ", "- Webs ", "- New York "]
  },
  {
    name: "ToyStory",
    imagePoster: Toy,
    hints: ["Cowboy ", "- Astronaut ", "- Cartoon "]
  },
  {
    name: "BreakingBad",
    imagePoster: breaking,
    hints: ["Chemistry ", "- Cancer ", "- Money "]
  },
  {
    name: "PrisonBreak",
    imagePoster: prisonbreak,
    hints: ["Death Row ", "- Innocence ", "- Crime "]
  },
  {
    name: "Twilight",
    imagePoster: twilight,
    hints: ["Mysterious ", "- Vampire ", "- Soulmate"]
  },
  {
    name: "Taken",
    imagePoster: taken,
    hints: ["Paris ", "- kidnapping ", "- Daughter"]
  },
  {
    name: "MoneyHeist",
    imagePoster: money,
    hints: ["hostages ", "- plan ", "- Professor"]
  }
];

export default movies;
