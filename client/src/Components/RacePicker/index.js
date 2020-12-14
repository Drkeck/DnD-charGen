import React from 'react';

function RacePicker(props) {
    const {
        races,
        CurrentRace,
        setCurrentRace
    } = props;
    return(
        <div>
            <select onChange={(event) => setCurrentRace(races[event.target.value])}>
                { races.map((race, num) => (
                    <option value={num} key={num}>{race.name}</option>
                ))}
            </select>
            <h3>{CurrentRace.name}</h3>
                <p>{CurrentRace.stat}</p>
                <p>{CurrentRace.size}</p>
        </div>
    )
};

export default RacePicker;