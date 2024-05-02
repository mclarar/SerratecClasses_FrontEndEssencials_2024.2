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
                    <img src='${data.sprites.front_default}' alt='imagem do pokemon' class='pokemon_image'/>
                </div>
                          
            `;

      document.getElementById("pokemon_info").innerHTML += pokemonCard;
    })
    .catch((error) => {
      console.log("não foi possivel obter as informações do pokemon", error);
    });
}

window.onload = function () {
  const meusPokemons = [
    "bulbasaur",
    "pikachu",
    "eevee",
    "charmander",
    "squirtle",
    "meowth",
    "haunter",
    "psyduck",
    "lapras",
    "ditto",
    "togepi",
    "mawile",
    "rayquaza",
    "deoxys",
    "charizard",
    "dragonite",
    "snorlax",
    "mimikyu",
    "magikarp",
    "gengar",
    "entei",
    "suicune",
    "alakazan",
    "raikou",
    "farfetchd",
    "regigigas",
    "gyarados",
    "mew",
    "sableye",
    "gardevoir",
    "garbodor"
  ];

  meusPokemons.forEach((pokemon)=>{
    getPokemon(pokemon);
  })
};
