const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    characters: [Pathfinder]
}

type Pathfinder {
    _id: ID
    CharacterInfo: CharacterInfo
    CharacterAttributes: CharacterAttributes
}

type CharacterInfo {
    Name: String
    Race: String
    Level: Int
    Alignment: String
    Class: String
    Gender: String
    Age: Int
    Height: String
    Weight: Int
    HairColor: String
    EyeColor: String
}

type CharacterAttributes {
    STR: Int
    DEX: Int
    CON: Int
    INT: Int
    WIS: Int
    CHA: Int
}

type Query {
    Me(_id: ID!): User
    Pathfinders: [Pathfinder]
    Pathfinder(_id: ID!): Pathfinder
}

type Mutation {
    addUser(username: String!, password: String!): User
    login(username: String!, password: String!): User
    addCharacter(CharacterInfo: Info!, CharacterAttributes: Attributes!): Pathfinder
    removeCharacter(_id: ID!): Pathfinder
}

input Info {
    Name: String
    Race: String
    Level: Int
    Alignment: String
    Class: String
    Gender: String
    Age: Int
    Height: String
    Weight: Int
    HairColor: String
    EyeColor: String
}

input Attributes {
    STR: Int
    DEX: Int
    CON: Int
    INT: Int
    WIS: Int
    CHA: Int
}
`;

module.exports = typeDefs;