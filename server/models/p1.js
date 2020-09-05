const mongoose = require('mongoose');

const { Schema } = mongoose 

const pathSchema = new Schema({
    characterInfo:{
            charName: {
                type: String,
            },
            charLevel: {
                type: Number,
            },
            charAlignment: {
                type: String,
            },
            charDeity: {
                type: String,
            },
            charHomeland: {
                type: String,
            },
            charRace:{
                type: String,
            },
            charSize: {
                type: String,
            },
            CharAge: {
                type: Number,
            },
            charWeight: {
                type: Number,
            },
    }
    
})