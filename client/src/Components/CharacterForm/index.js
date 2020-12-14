import React, {useState} from 'react';
import Stats from '../Stats';
import RacePicker from '../RacePicker';

function Form() {
    const [games] = useState([
        {name: "Pathfinder"},
        {name: "DnD 5e"},
    ]);

    const [currentGame, setCurrentGame] = useState(games[0]);

    const [attributes, setCurrentStats] = useState([
        {name:'strength', score: 10},
        {name: 'dexterity', score: 10},
        {name: 'constitution', score: 10},
        {name: 'intelligence', score: 10},
        {name: 'wisdom', score: 10},
        {name: 'charisma', score: 10}
    ]);

    const [races] = useState([
        {name: "Human", stat: "+2 to any Attribute", size: "Medium"},
        {name: "Elf", stat: "+2 Dex, +2 Int, -2 Con", size: "Medium"},
        {name: "Halfling", stat: "+2 Dex, +2 Cha, -2 Str", size: "Small"},
        {name: "Gnome", stat: "+2 Con, +2 Cha, -2 Str", size: "Small"},
        {name: "Half-elf", stat: "+2 to any Attribute", size: "Medium"},
        {name: "Half-orc", stat: "+2 to any Attribute", size: "Medium"},
        {name: "Dwarf", stat: "+2 Con, +2 Wis, -2 Cha", size: "Medium"}
    ]);
    
    const [CurrentRace, setCurrentRace] = useState(races[0]);

    return (
        <div>
            <h1>Character Form</h1>
            <h3>{currentGame.name}</h3>
            <select onChange={(event)=>{setCurrentGame(games[event.target.value])}}>
                {games.map((game, key) => (
                    <option key={game.name} value={key}>{game.name}</option>
                ))}
            </select>
            <Stats attributes={attributes} setCurrentStats={setCurrentStats}></Stats>
            <RacePicker races={races} CurrentRace={CurrentRace} setCurrentRace={setCurrentRace}></RacePicker>
        </div>
    )
}

export default Form;