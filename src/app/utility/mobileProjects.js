const importAll = (r) => r.keys().map(r);
const ymfriends = importAll(
  require.context("../assets/ymfriends", false, /\.(png|jpe?g|svg)$/)
);
const game = importAll(
  require.context("../assets/game", false, /\.(png|jpe?g|svg)$/)
);

const mobileProjectsData = [
  {
    id: "mobile-app-one",
    images: game,
    title: "Mobile App",
    skills: ["React Native (expo)"],
    description:
      "Mobile App for playing tic-tac-toe, supports dual play with computer or human.",
  },
  {
    id: "mobile-app-two",
    images: ymfriends,
    title: "Mobile App",
    skills: ["React Native (expo)", "Django", "Python"],
    description:
      "Mobile App for streaming music. It is an extensions of my previous work on the web platform with extra features.",
  },
];

export default mobileProjectsData;
