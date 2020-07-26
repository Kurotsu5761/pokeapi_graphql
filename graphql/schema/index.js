const PokemonSchema = require("./pokemon");

const rootSchema = `
	type RootQuery{
		_root: String
	}

	type RootMutation{
		_root: String
	}

	type RootSubscription{
		_root: String
	}

	schema {
		query: RootQuery
		mutation: RootMutation
		subscription: RootSubscription
	}
`;

module.exports = [rootSchema, PokemonSchema];
