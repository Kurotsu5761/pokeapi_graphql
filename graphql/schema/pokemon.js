const typeDefs = `
    type Pokemon{
        id: ID!,
        base_experience: Int,
        height: Float,
        weight: Float,
        name: String!,
        order: Int,
        sprites: Sprites!
        abilities: [Ability]
        moves: [Move]
        type: [String!]!
        stats: [Stat]
    }

    type Ability{
        name: String,
        id: ID!,
        effect: String,
        pokemon: [Pokemon]
    }

    type Move {
        id: ID!,
        name: String,
        accuracy: Int,
        damage_class: String,
        effect: String,
        power: Int,
        pp: Int,
        priority: Int,
        target: String,
        type: String,
        learn_detail: [LearnDetail]
    }

    type Stat{
        name: String
        base_stat: Int
        effort: Int
    }

    type LearnDetail{
        level_learned_at: Int,
        move_learn_method: String,
        version: String,
    }

    type Sprites{
        back_default: String!,
        back_female: String,
        back_shiny: String!,
        back_shiny_female: String,
        front_default: String!,
        front_female: String,
        front_shiny: String!,
        front_shiny_female: String
    }

    type PokemonsResult {
        total: Int!,
        data: [Pokemon!]!,
        hasNext: Boolean!,
        next: Int
    }

    extend type RootQuery{
        Pokemons(limit: Int, offset: Int): PokemonsResult
        Pokemon(name: String, id: Int): Pokemon
        Ability(name: String!): Ability
        Move(name: String!): Move
    }
`;

module.exports = typeDefs;
