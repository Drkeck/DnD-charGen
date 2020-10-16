const mongoose = require('mongoose');

const { Schema } = mongoose;

const PathfinderCharacterSchema = new Schema({
    characterInfo: {
        name: {
            type: String,
            default: "keck"
        }
    },
    CharacterStats: {
        abilities: {
            Strength: {
                score: {
                    type: Number,
                    require: true,
                    default: 10
                },
                modifier: {
                    type: Number,
                    get: (Strength) => {
                        const modifier = Math.floor((this.characterStats.abilities.Strength.score - 10)/2)
                        return modifier
                    }
                }
            }
        }
    }

});

const Pathfinder = mongoose.model("Pathfinder", PathfinderCharacterSchema);

module.exports = Pathfinder;