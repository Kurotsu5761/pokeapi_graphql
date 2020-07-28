const { getPokemon } = require("../model/pokemon");
const { getAbilityByName, getAbilityByPokemon } = require("../model/ability");

const { getMoveByPokemon, getMoveByName } = require("../model/move");

const pokemonQuery = {
  Pokemons: async (
    _,
    { limit = 20, offset = 0 },
    { req, res, P, dataloader }
  ) => {
    try {
      return P.getPokemonsList({ limit, offset }).then((results) => {
        return {
          total: results.count,
          hasNext: results.next !== null,
          next: offset + limit,
          data: results.results.map(async (item) => {
            return getPokemon(item.name, dataloader.PokemonLoader);
          }),
        };
      });
    } catch (err) {
      console.log(err);
    }
  },
  Pokemon: async (_, { name, id }, { req, res, dataloader }) => {
    if (name === undefined && id === undefined)
      throw error("Please provide name or id");
    let param = name === undefined ? id : name;
    return getPokemon(param, dataloader.PokemonLoader);
  },
  Ability: async (_, { name }, { req, res, dataloader }) => {
    return getAbilityByName(name, dataloader.AbilityLoader);
  },
  Move: async (_, { name }, { req, res, P }) => {
    return getMoveByName(name, dataloader.MoveLoader);
  },
};

const pokemonResolvers = {
  Pokemon: {
    abilities: (pokemon, _, { dataloader }) =>
      getAbilityByPokemon(pokemon, dataloader.AbilityLoader),
    moves: (pokemon, _, { dataloader }) =>
      getMoveByPokemon(pokemon, dataloader.MoveLoader),
  },

  Ability: {
    pokemon: (ability) => {
      return ability.pokemon.map((name) => getPokemon(name));
    },
  },
};

module.exports = {
  pokemonQuery,
  pokemonResolvers,
};
