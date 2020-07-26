const { getPokemon } = require("../model/pokemon");
const { getAbilityByName, getAbilityByPokemon } = require("../model/ability");
const { AbilityLoader, PokemonLoader } = require("../model/dataloader");
const { getMoveByPokemon, getMoveByName } = require("../model/move");

const pokemonQuery = {
  Pokemons: async (_, { limit = 20, offset = 0 }, { req, res, P }) => {
    try {
      return P.getPokemonsList({ limit, offset }).then((results) => {
        return {
          total: results.count,
          hasNext: results.next !== null,
          next: offset + limit,
          data: results.results.map(async (item) => {
            return getPokemon(item.name);
          }),
        };
      });
    } catch (err) {
      console.log(err);
    }
  },
  Pokemon: async (_, { name, id }, { req, res, P }) => {
    if (name === undefined && id === undefined)
      throw error("Please provide name or id");
    let param = name === undefined ? id : name;
    return getPokemon(param);
  },
  Ability: async (_, { name }, { req, res, P }) => {
    return getAbilityByName(name);
  },
  Move: async (_, { name }, { req, res, P }) => {
    return getMoveByName(name);
  },
};

const pokemonResolvers = {
  Pokemon: {
    abilities: (pokemon) => getAbilityByPokemon(pokemon),
    moves: (pokemon) => getMoveByPokemon(pokemon),
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
