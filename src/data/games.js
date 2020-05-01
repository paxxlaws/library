export const games = [
  {
    id: 1000,
    vanity: "scythe",
    name: "Scythe",
    year: 2010,
    designer: "",
    artist: "",
    desc: "This is a description",
    object: "",
    goal: "",
    components: [["", "", "", ""], ["", "", "", ""], ["", "", "", ""]],
    concepts: [["", "", "", ""], ["", "", "", ""], ["", "", "", ""]],
    setup: [["", "", "", ""], ["", "", "", ""], ["", "", "", ""]],
    gameplay: [["", "", "", ""], ["", "", "", ""], ["", "", "", ""]],
    victory: [["", "", "", ""], ["", "", "", ""], ["", "", "", ""]],
    theme: [["", "", "", ""], ["", "", "", ""], ["", "", "", ""]],
    appendix: [["", "", "", ""], ["", "", "", ""], ["", "", "", ""]],
    resources: [["", "", "", ""], ["", "", "", ""], ["", "", "", ""]]
  },
  {
    id: 1001,
    vanity: "star_wars_outer_rim",
    name: "Star Wars Outer Rim",
    year: 2019,
    desc: "This is a description",
    category: ["Cat1", "Cat2", "Cat3"]
  }
];

export function findGame(input) {
  var DesiredGame;
  if (isNaN(input)) {
    DesiredGame = games.find(game => game.vanity === input);
  } else {
    DesiredGame = games.find(game => game.id === input);
  }
  return DesiredGame;
}

export function genVanity(name) {
  var vanity = name;
  vanity = vanity.replace(/\s+/g, "_").toLowerCase();
  return vanity;
}
