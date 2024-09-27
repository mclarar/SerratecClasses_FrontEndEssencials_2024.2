function getPokemon(nomePokemon) {
  const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`;

  fetch(urlPokemon)
    .then((response) => response.json())
    .then((data) => {
      const pokemonCard = `
            <div class='pokemon_card'>
                <h2>${data.name}</h2>
                <p>Altura: ${data.height}</p>
                <p>Peso: ${data.weight}</p>
                <img src='${data.sprites.front_default}' class='pokemon_image'>
            </div>
      
      `;

      document.getElementById("pokemon_info").innerHTML += pokemonCard;
    })
    .catch((error) => {
      console.log("não foi possível obter as informações do pokemon", error);
    });
}

window.onload = function () {
  const meusPokemons = [
    "haunter",
    "mew",
    "charizard",
    "bulbasaur",
    "cyndaquil",
    "meowth",
    "mewtwo",
    "rayquasa",
    "vulpix",
    "dragonite",
    "butterfree",
    "jigglypuff",
    "charmander",
    "togepi",
    "suicine",
    "psyduck",
    "pikachu",
    "onix",
    "lapras",
    "ninetales",
    "zapdos",
    "feebas",
    "salamence",
    "magikarp",
    "moltress",
    "lucario",
    "pidgey",
    "lugia",
  ];

  meusPokemons.forEach((pokemon) => {
    getPokemon(pokemon);
  });
};
