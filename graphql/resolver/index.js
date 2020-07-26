const { pokemonQuery, pokemonResolvers } = require("./pokemon");

const rootResolver = {
  RootQuery: {
    ...pokemonQuery,
  },
  RootMutation: {},
  RootSubscription: {},
  ...pokemonResolvers,
};

module.exports = rootResolver;
