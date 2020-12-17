import React from 'react';

function RacePicker(props) {
    const {
        races,
        CurrentRace,
        setCurrentRace,
        attributes,
        setCurrentStats
    } = props;

    function handleRaceChange (event) {
        const v = parseInt(event.target.value)
        setCurrentRace(races[v])
        let newArry = [...attributes]
        switch (v) {
            case 1:
                newArry[0].rBonus = newArry[0].rBonus = 0
                newArry[1].rBonus = newArry[1].rBonus = 2
                newArry[2].rBonus = newArry[2].rBonus = -2
                newArry[3].rBonus = newArry[3].rBonus = 2
                newArry[4].rBonus = newArry[4].rBonus = 0
                newArry[5].rBonus = newArry[5].rBonus = 0
                break
            case 2:
                newArry[0].rBonus = newArry[0].rBonus = -2
                newArry[1].rBonus = newArry[1].rBonus = 2
                newArry[2].rBonus = newArry[2].rBonus = 0
                newArry[3].rBonus = newArry[3].rBonus = 0
                newArry[4].rBonus = newArry[4].rBonus = 0
                newArry[5].rBonus = newArry[5].rBonus = 2
                break
            case 3:
                newArry[0].rBonus = newArry[0].rBonus = -2
                newArry[1].rBonus = newArry[1].rBonus = 0
                newArry[2].rBonus = newArry[2].rBonus = 2
                newArry[3].rBonus = newArry[3].rBonus = 0
                newArry[4].rBonus = newArry[4].rBonus = 0
                newArry[5].rBonus = newArry[5].rBonus = 2

                break
            case 6:
                newArry[0].rBonus = newArry[0].rBonus = 0
                newArry[1].rBonus = newArry[1].rBonus = 0
                newArry[2].rBonus = newArry[2].rBonus = 2
                newArry[3].rBonus = newArry[3].rBonus = 0
                newArry[4].rBonus = newArry[4].rBonus = 2
                newArry[5].rBonus = newArry[5].rBonus = -2
                break
            default:
                newArry[0].rBonus = newArry[0].rBonus = 0
                newArry[1].rBonus = newArry[1].rBonus = 0
                newArry[2].rBonus = newArry[2].rBonus = 0
                newArry[3].rBonus = newArry[3].rBonus = 0
                newArry[4].rBonus = newArry[4].rBonus = 0
                newArry[5].rBonus = newArry[5].rBonus = 0
                break
        }
        setCurrentStats(newArry)
    }
    
    return(
        <div>
            <h3>Race:</h3>
            <select onChangeCapture={handleRaceChange}>
                { races.map((race, num) => (
                    <option value={num} key={num}>{race.name}</option>
                ))}
            </select>
            <h3>{CurrentRace.name}:</h3>
            <h4>Stats: {CurrentRace.stat} | Size: {CurrentRace.size}</h4>
        </div>
    )
};

export default RacePicker;