"use strict";

function getPokemonAbilities() {
  getData(
    "https://pokeapi.co/api/v2/pokemon/ditto",
    "Не удалось получить информацию о покемоне"
  )
    .then((data) => {
      return getData(
        data.abilities[0].ability.url,
        "Не удалось получить информацию о способностях"
      );
    })
    .then((data) => {
      const { effect_entries } = data;
      effect_entries.map((item) => {
        if (item.language.name === "en") {
          console.log(item.effect);
        }
      });
    })

    .catch((error) => console.log(error.message));
}

function getData(url, errorMessage) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMessage}, status: ${response.status}`);
    }

    return response.json();
  });
}

getPokemonAbilities();
