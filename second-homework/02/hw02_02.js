//clase 7 funciones

const super_heros = [
    { hero: "Spider-Man", group: "Avengers", releaseDate: new Date(1962, 8) },
    { hero: "Iron-Man", group: "Avengers", releaseDate: new Date(1970, 5) },
    { hero: "Hulk", group: "Avengers", releaseDate: new Date(1962, 5) },
    { hero: "DeadPool", group: "None", releaseDate: new Date(1991, 2) },
    { hero: "Black Cat", group: "None", releaseDate: new Date(1979, 6) },
    { hero: "Wolverine", group: "X-Men", releaseDate: new Date(1982, 12) },
  ]; 


const fragment = document.createDocumentFragment();
const li_ctn = document.getElementById('heroes');

const sort_heroes = arr => {
  arr.sort((a, b) => a.releaseDate - b.releaseDate);
  arr.forEach(element => {
    const li = document.createElement('li');
    li.textContent = `${element.hero} made it first appearance on ${element.releaseDate}.`
    fragment.appendChild(li);    
  })
  li_ctn.appendChild(fragment);
}

sort_heroes(super_heros);