const pokedex = document.getElementById("pokedex");
const errorMessage = document.createElement("p");
errorMessage.classList.add("error-message");
const pokemonForm = document.getElementById("pokemon-form");
const pokemonInput = document.getElementById("pokemon-input");

async function findPokemon(nomePokemon) {
  try {
    const respone = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`,
    );
    const data = await respone.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function displayPokemon(nomePokemon) {
  try {
    pokedex.innerHTML = "";
    const pokemon = await findPokemon(nomePokemon);
    if (pokemon) {
      createCard(pokemon);
    } else {
      errorMessage.textContent = "Pokemon non trovato!";
      pokedex.appendChild(errorMessage);
    }
  } catch (error) {
    errorMessage.textContent = "Pokemon non trovato!";
    pokedex.appendChild(errorMessage);
    console.error(error);
  }
}

function createCard(pokemon) {
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemon-card");

  const ballTop = document.createElement("div");
  ballTop.classList.add("ball-top");

  const ballBottom = document.createElement("div");
  ballBottom.classList.add("ball-bottom");

  const centerButton = document.createElement("div");
  centerButton.classList.add("center-button");

  const pokemonName = document.createElement("h2");
  pokemonName.textContent = pokemon.name;

  const pokemonImage = document.createElement("img");
  pokemonImage.src = pokemon.sprites.front_default;
  pokemonImage.alt = pokemon.name;

  pokemonCard.appendChild(ballTop);
  pokemonCard.appendChild(ballBottom);
  pokemonCard.appendChild(centerButton);
  pokemonCard.appendChild(pokemonName);
  pokemonCard.appendChild(pokemonImage);

  pokedex.appendChild(pokemonCard);
}

pokemonForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const nomePokemon = pokemonInput.value.toLowerCase().trim();
  await displayPokemon(nomePokemon);
  pokemonInput.value = "";
});
