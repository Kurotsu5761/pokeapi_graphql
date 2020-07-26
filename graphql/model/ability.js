const { AbilityLoader } = require("./dataloader");

const getAbilityByPokemon = (pokemon) => {
  let abilities = pokemon.ability;
  return abilities.map(({ ability }) => {
    return getAbilityByName(ability.name);
  });
};

const getAbilityByName = async (name) => {
  let result = await AbilityLoader.load(name);
  return Object.freeze({
    id: result.id,
    effect: result.effect_entries.filter((obj) => obj.language.name === "en")[0]
      .effect,
    name: result.name,
    pokemon: result.pokemon.map((item) => item.pokemon.name),
  });
};

module.exports = {
  getAbilityByPokemon,
  getAbilityByName,
};
