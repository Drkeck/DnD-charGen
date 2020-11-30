const mongoose = require('mongoose');

const { Schema } = mongoose;

const PathfinderCharacterSchema = new Schema({
    CharacterInfo: {
        Name: String,
        Race: {
            type:String,
            default: "Human"
        },
        Level: {
            type:Number,
            default: 1
        },
        Alignment: {
            type:String,
            default: "N"
        },
        Class: {
            type:String,
            default: "Fighter"
        }
    },
    CharacterAttributes: {
        STR: {
            type:Number,
            default: 10
        },
        DEX: {
            type:Number,
            default: 10
        },
        CON: {
            type:Number,
            default: 10
        },
        INT: {
            type:Number,
            default: 10
        },
        WIS: {
            type:Number,
            default: 10
        },
        CHA: {
            type:Number,
            default: 10
        },
    },
});

const Pathfinder = mongoose.model("Pathfinder", PathfinderCharacterSchema);

module.exports = Pathfinder;