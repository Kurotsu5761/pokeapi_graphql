const DataLoader = require("dataloader");
const { P } = require("../../util/dependencies");

const AbilityLoader = new DataLoader((names) =>
  Promise.all(names.map((name) => P.getAbilityByName(name)))
);

const PokemonLoader = new DataLoader((names) =>
  Promise.all(names.map((name) => P.getPokemonByName(name)))
);

const MoveLoader = new DataLoader((names) =>
  Promise.all(names.map((name) => P.getMoveByName(name)))
);

module.exports = {
  AbilityLoader,
  PokemonLoader,
  MoveLoader,
};
