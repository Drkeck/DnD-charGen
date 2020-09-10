const { gql } = require('apollo-server-express');

const typeDefs = gql`
Type User {
    _id: ID
    username: String
    characters: [Character]
}

type Character {
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
            acrobatics: {}
        }
    }
}

type Query {
    Me: User
    Characters: [Character]
    character(_id: ID!): Character
}
`;

module.exports = typeDefs;