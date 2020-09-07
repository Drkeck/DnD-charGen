const mongoose = require('mongoose');

const { Schema } = mongoose;

const PathfinderCharacterSchema = new Schema({
    characterInfo: {
        charName: {
            type: String,
            require: true
        },
        charAlignment: {
            type: String,
            require: true
        },
        charRace:[
            {
                type: Schema.Types.ObjectId,
                ref:'race'
            }
        ],
        charClass: {
            type: String,
            require: true
        },
        
    }
})