import React, {useState} from 'react';
import Stats from '../Stats';
import RacePicker from '../RacePicker';
import ClassPicker from '../classSelector';

function Form() {
    const [games] = useState([
        {name: "Pathfinder"},
        {name: "DnD 5e"},
    ]);

    const [currentGame, setCurrentGame] = useState(games[0]);

    const [attributes, setCurrentStats] = useState([
        {name: 'Strength', score: 10, rBonus: 0},
        {name: 'Dexterity', score: 10, rBonus: 0},
        {name: 'Constitution', score: 10, rBonus: 0},
        {name: 'Intelligence', score: 10, rBonus: 0},
        {name: 'Wisdom', score: 10, rBonus: 0},
        {name: 'Charisma', score: 10, rBonus: 0}
    ]);

    const [races] = useState([
        {name: "Human", stat: "+2 to one Attribute", size: "Medium"},
        {name: "Elf", stat: "+2 Dexterity, +2 Intelligence, -2 Constitution", size: "Medium"},
        {name: "Halfling", stat: "+2 Dexterity, +2 Charisma, -2 Strength", size: "Small"},
        {name: "Gnome", stat: "+2 Constitution, +2 Charisma, -2 Strength", size: "Small"},
        {name: "Half-elf", stat: "+2 to one Attribute", size: "Medium"},
        {name: "Half-orc", stat: "+2 to one Attribute", size: "Medium"},
        {name: "Dwarf", stat: "+2 Constitution, +2 Wisdom, -2 Charisma", size: "Medium"}
    ]);
    
    const [CurrentRace, setCurrentRace] = useState(races[0]);

    const [Classes] = useState([
        {name: "Barbarian", pbab: 1, psaves: "placeholder info", dsaves: ""},
        {name: "Bard", pbab: 0.75, psaves: "placeholder info", dsaves: ""},
        {name: "Cleric", pbab: 0.75, psaves: "placeholder info", dsaves: ""},
        {name: "Druid", pbab: 0.75, psaves: "placeholder info", dsaves: ""},
        {name: "Fighter", pbab: 1, psaves: "placeholder info", dsaves: ""},
        {name: "Monk", pbab: 0.75, psaves: "placeholder info", dsaves: ""},
        {name: "Paladin", pbab: 1, psaves: "placeholder info", dsaves: ""},
        {name: "Ranger", pbab: 1, psaves: "placeholder info", dsaves: ""},
        {name: "Rogue", pbab: 0.75, psaves: "placeholder info", dsaves: ""},
        {name: "Sorcerer", pbab: 0.5, psaves: "placeholder info", dsaves: ""},
        {name: "Wizard", pbab: 0.5, psaves: "placeholder info", dsaves: ""},
    ]);

    const [currentClass, setCurrentClass] = useState(Classes[0]);

    return (
        <div>
            <h1>Character Form</h1>
            <h3>{currentGame.name}</h3>
            <select onChange={(event)=>{setCurrentGame(games[event.target.value])}}>
                {games.map((game, key) => (
                    <option key={game.name} value={key}>{game.name}</option>
                ))}
            </select>
            <RacePicker races={races} CurrentRace={CurrentRace} setCurrentRace={setCurrentRace} attributes={attributes} setCurrentStats={setCurrentStats}></RacePicker>
            <Stats attributes={attributes} setCurrentStats={setCurrentStats} CurrentRace={CurrentRace}></Stats>
            <ClassPicker Classes={Classes} currentClass={currentClass} setCurrentClass={setCurrentClass}></ClassPicker>
        </div>
    )
}

export default Form;