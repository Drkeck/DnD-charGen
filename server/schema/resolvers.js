const { User, Pathfidner } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        Me: async (parent, { _id }) => {
            const user = await User.findById({_id}).populate('characters');
            return user;
        },
        Characters: async (parent, args) => {
            const characters = await Pathfidner.find();
            return characters;
        },
        character: async (parent, { _id }) => {
            const character = await Pathfidner.findById({_id});
            return character;
        }
    },
    Mutations: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            // auth goes here

            return user
        },
        addPathfinder: async (parent, args) => {
            const character = await Pathfidner.create(args);
            // add auth here
            return character
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            const correctPW = await user.isCorrectPassword(password)
            
            if (!user || !correctPW) {
                throw new AuthenticationError('Username or password incorrect');
            }
                //add token write here so users can stay signed in.
            return user
        }
    }
};

module.exports = resolvers;