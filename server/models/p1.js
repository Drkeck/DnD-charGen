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
        },
        Gender: String,
        Age: Number,
        Height: String,
        Weight: Number,
        HairColor: String,
        EyeColor: String,
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
    CharacterStats: {
        HitPoints: Number,
        Initiative: Number,
        Speed: Number,
        ArmorClass: Number,
        Touch: Number,
        Flatfooted: Number,
        Fortitude: Number,
        Reflex:Number,
        Will:Number,
        CombatManuverBonus: Number,
        CombatManuverDefense: Number,
    },
    CharacterSkills:[{
        Title: String,
        Rank: Number,
        Bonuses: Number,
        ClassSkill: Boolean
    }],
    CharaterFeats:[{
        Title: String,
        Description: String
    }],
    CharacterWeapons:[{
        Title: String,
        Description: String,
        Damage: String,
        MagicBonus: Number,
        MagicDescriptor: String,
    }],
    CharacterArmor:[{
        Title: String,
        Bonus: Number,
        MaxDex: Number,
        SpellFailure: Number,
        ArmorType: Number,
        ArmorCheck: Number,
        Description: String
    }],
    CharacterGear:[{
        title: String,
        description: String
    }],
    CharacterSpecialAbilities:[{
        title: String,
        description: String
    }],
    CharacterSpells:[{
        title: String,
        Level: Number,
        description: String,
        DC: Number,

    }],
    CharacterLanguages:[{
        type: String,
    }],
    CharacterMoney: {
        Pp: Number,
        Gp: Number,
        Sp: Number,
        Cp: Number
    },
    CharacterExperince:{
        Current: Number,
        NextLevel: Number
    }
});

const Pathfinder = mongoose.model("Pathfinder", PathfinderCharacterSchema);

module.exports = Pathfinder;