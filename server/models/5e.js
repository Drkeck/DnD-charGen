const mongoose = require('mongoose');

const { Schema } = mongoose 
const p1Schema = new Schema({
    charname: {
        type: String,
        required: true,
        trim: true
    },
    charRace: {
        type: String,
        required: true,
    },
    charLevel: {
        type: Number,
        required: true
    },
    charClass: {
        type: String,
        required: true
    },
    charStr: {
        type: Number,
        required: true
    },
    charDex: {
        type: Number,
        required: true
    },
    charCon: {
        type: Number,
        required: true
    },
    charInt: {
        type: Number,
        required: true
    },
    charWis: {
        type: Number,
        required: true
    },
    charCha: {
        type: Number,
        required: true
    }
},
{
    toJSON: {
        virtuals: true
    }
});

p1Schema.virtual('proficiencyBonus').get(function(){
    switch(this.charLevel) {
        case 1:
        case 2:
        case 3:
        case 4:
            return 2;
        case 5:
        case 6:
        case 7:
        case 8:
            return 3;
        case 9:
        case 10:
        case 11:
        case 12:
            return 4;
        case 13:
        case 14:
        case 15:
        case 16:
            return 5;
        case 17:
        case 18:
        case 19:
        case 20:
            return 6;
    }
});

p1Schema.virtual('charStrMod').get(function(){
    return Math.floor((this.charStr - 10)/2)
})