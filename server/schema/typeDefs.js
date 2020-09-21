const { gql } = require('apollo-server-express');

const typeDefs = gql`
Type User {
    _id: ID
    username: String
    characters: [Character]
}

type Pathfinder {
    _id: ID
    characterInfo: {
        Name
        Alignment
        Race
        Class
        Level
    }
    characterStats: {
        abilities: {
            Strength:{}
            Dextarity:{}
            Constitution:{}
            Intelligence:{}
            Wisdom:{}
            Charisma:{}
        }
        dirStats: {
            hitPoints: Number
            speed: Number
            initiative: Number
            armorClass: Number
            touch: Number
            flatFooted: Number
            fortitude: Number
            reflex: Number
            will: Number
            baseAttackBonus: Number
            cmb: Number
            cmd: Number
        }
        skills:{
            acrobatics: {
                rank: Number
                classSkill: Boolean
                bonuses: Number
            }
        }
    }
}

type Query {
    Me(_id: ID!): User
    pathfinders: [Pathfinder]
    pathfinder(_id: ID!): Pathfinder
}

type Mutation {
    addUser(username: String!, password: String!): User
    addPathfinder(): Pathfinder
    login(username: String!, password: String!): User
    upDateCharacter(_id: ID!): Pathfinder
}
`;

module.exports = typeDefs;