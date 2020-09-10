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
        charLevel: {
            type: Number,
            require: true,
        }
    },
    characterStats: {
        abilities: {
            Strength: {
                score:{
                    type: Number,
                    require: true,
                    default: 10
                },
                modifier: {
                    get: (Strength) => {
                        const modifier = Math.floor((Strength.score - 10)/2)
                        return modifier
                    }
                }
            },
            Dexterity: {
                score:{
                    type: Number,
                    require: true,
                    default: 10
                },
                modifier: {
                    get: (Dexterity) => {
                        const modifier = Math.floor((Dexterity.score - 10)/2)
                        return modifier
                    }
                }
            },
            Constitution: {
                score: {
                    type: Number,
                    require: true,
                    default: 10
                },
                modifier: {
                    get: (Constitution) => {
                        const modifier = Math.floor((Constitution.score - 10)/2)
                        return modifier
                    }
                }
            },
            Intelligence: {
                score: {
                    type: Number,
                    require: true,
                    default: 10
                },
                modifier: {
                    get: (Intelligence) => {
                        const modifier = Math.floor((Intelligence.score - 10)/2)
                        return modifier
                    }
                }
            },
            Wisdom: {
                score: {
                    type: Number,
                    require: true,
                    default: 10
                },
                modifier: {
                    get: (Wisdom) => {
                        const modifier = Math.floor((Wisdom.score - 10)/2)
                        return modifier
                    }
                }
            },
            Charisma: {
                score: {                
                    type: Number,
                    require: true,
                    default: 10
                },
                modifier: {
                    get: (Charisma) => {
                        const modifier = Math.floor((Charisma.score - 10)/2)
                        return modifier
                    }
                }
            }
        },
        dirStats: {
            hitPoints: {
                type: Number,
                require: true
            },
            speed: {
                type: Number,
                require: true
            },
            inititive: {
                type: Number,
                require: true
            },
            armorClass: {
                type: Number,
                require: true
            },
            touch: {
                type: Number,
                require: true
            },
            flatFooted: {
                type: Number,
                require: true
            },
            fortitude: {
                type: Number,
                require: true
            },
            reflex: {
                type: Number,
                require: true
            },
            will: {
                type: Number,
                require: true
            },
            baseAttackBonus: {
                type: Number,
                require: true
            },
            cmb: {
                type: Number,
                require: true
            },
            cmd: {
                type: Number,
                require: true
            }

        }

    },
    skills: {
        acrobatics: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        appraise: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        bluff: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        climb: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        craft: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        diplomacy: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        disableDevice: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        disguise: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        escapeArtist: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        fly: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        handleAnimal: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        heal: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        intimidate: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        arcana: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        dungeoneering: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        engineering: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        geography: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        history: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        local: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        nature: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        nobility: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        planes: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        religion: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        lingustics: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        perception: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        perform: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        profession: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        ride: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        senseMotive: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        slightOfHand: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        spellcraft: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        stealth: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        survival: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        swim: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
        useMagicDevice: {
            ranks: {
                type: Number,
                default: 0
            },
            classSkill:{
                type: Boolean,
                default: false,
            },
            bonuses: {
                type: Number,
                default: 0
            }
        },
    }
});

const Pathfinder = mongoose.model("Pathfinder", PathfinderCharacterSchema);

module.exports = Pathfinder;