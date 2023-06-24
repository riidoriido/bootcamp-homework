//clase 6 : array methods

//01

const super_heros = [
  { hero: "Spider-Man", group: "Avengers" },
  { hero: "Iron-Man", group: "Avengers" },
  { hero: "Hulk", group: "Avengers" },
  { hero: "DeadPool", group: "None" },
  { hero: "Black Cat", group: "None" },
  { hero: "Wolverine", group: "X-Men" },
  { hero: "Professor X", group: "X-Men" },
  { hero: "Cable", group: "X-Men" },
];

const is_xmen = super_heros.filter( superHero => superHero.group === "X-Men" );

console.log('List of X-men included:', is_xmen);

//02

const avengers = [
    { hero: "Spider-Man" },
    { hero: "Iron-Man" },
    { hero: "Hulk" },
    { hero: "Scarlet Witch" },
    { hero: "Firestar" },
    { hero: "Sunspot" },
  ];
  
  const x_men = [
    { hero: "Scarlet Witch" },
    { hero: "Wolverine" },
    { hero: "Professor X" },
    { hero: "Cable" },
    { hero: "Sunspot" },
  ];
  
  const inBothTeams = [];

x_men.forEach( character => {
  if ( avengers.some( avenger => avenger.hero === character.hero ) ) {
    inBothTeams.push(character.hero);
  }
});

console.log('These heroes are listed in both teams:', inBothTeams);