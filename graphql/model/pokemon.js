const { PokemonLoader } = require("./dataloader");

const getPokemon = async (param) => {
  let pokemon = await PokemonLoader.load(param);
  return Object.freeze({
    id: pokemon.id,
    name: pokemon.name,
    base_experience: pokemon.base_experience,
    height: pokemon.height,
    weight: pokemon.weight,
    order: pokemon.order,
    sprites: pokemon.sprites,
    ability: pokemon.abilities,
    moves: pokemon.moves,
    stats: pokemon.stats.map((item) => ({
      name: item.stat.name,
      effort: item.effort,
      base_stat: item.base_stat,
    })),
    type: pokemon.types.map((item) => item.type.name),
  });
};

module.exports = {
  getPokemon,
};
