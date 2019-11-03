export const games = [
    {
      "id": 1000,
      "url": "scythe",
      "name": "Scythe",
      "year": 2010,
      "desc": "This is a description",
      "category": [
        "Cat1",
        "Cat2",
        "Cat3"
      ]
    },
    {
      "id": 1001,
      "url": "star_wars_outer_rim",
      "name": "Star Wars Outer Rim",
      "year": 2019,
      "desc": "This is a description",
      "category": [
        "Cat1",
        "Cat2",
        "Cat3"
      ]
    }
  ];
  
  export function findGame (input) {
    var DesiredGame;
    if(isNaN(input)){DesiredGame = games.find(game => game.url === input);}
    else {DesiredGame = games.find(game => game.id === input);}
    return DesiredGame;
  } 
  
  export function getURL (title) {
    var url = title;
    url = url.replace(/\s+/g, '_').toLowerCase();
    return url;
  }