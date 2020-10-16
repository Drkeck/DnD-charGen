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
    addCharacter(Name: String!, STR: Int!): Pathfinder
    removeCharacter(_id: ID!): Pathfinder
}
`;

module.exports = typeDefs;