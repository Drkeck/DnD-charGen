import React, {useState} from 'react';
import Stats from '../Stats'

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
    ])

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
            {/* <Race></Race> */}
        </div>
    )
}

export default Form;