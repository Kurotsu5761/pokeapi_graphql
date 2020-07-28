const getMoveByPokemon = (pokemon, MoveLoader) => {
  let moves = pokemon.moves;
  return moves.map(async ({ move, version_group_details }) => {
    return getMoveByName(move.name).then((result) => {
      result.learn_detail = version_group_details.map((version) => {
        return {
          level_learned_at: version.level_learned_at,
          move_learn_method: version.move_learn_method.name,
          version: version.version_group.name,
        };
      });
      return result;
    });
  });
};

const getMoveByName = async (name, MoveLoader) => {
  return MoveLoader.load(name).then((move) => {
    return {
      name: move.name,
      accuracy: move.accuracy,
      pp: move.pp,
      power: move.power,
      priority: move.priority,
      effect: move.effect_entries.filter(
        (effect) => effect.language.name === "en"
      )[0].effect,
      id: move.id,
      damage_class: move.damage_class.name,
      type: move.type.name,
      target: move.target,
    };
  });
};

module.exports = {
  getMoveByName,
  getMoveByPokemon,
};
