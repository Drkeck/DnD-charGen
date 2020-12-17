import React, { useState } from 'react'

function Stats (props) {
    const {
        attributes,
        setCurrentStats,
        CurrentRace
    } = props;
    const [isMod, setMod] = useState(true);

    const modCan = CurrentRace.name === "Human" || CurrentRace.name === "Half-elf" || CurrentRace.name === "Half-orc";


    function handleChange(event) {
        const i = event.target.id
        const v = parseInt(event.target.value)
        let newArry = [...attributes];
        newArry[i].score = v
        setCurrentStats(newArry)

    }

    function handleCheck(event) {
        event.preventDefault();
        const i = parseInt(event.target.value)
        console.log(i)
        let v;
        let b;
        if (i > 9) {
            v = i - 10
            b = 2
            setMod(false)
        } else {
            v = i + 10
            b = 0
            setMod(true)
        }
        console.log(i, v)
        let newArry = [...attributes];
        newArry[v].rBonus = b
        setCurrentStats(newArry)
    }

return (
    <div>
        {attributes.map((attribute, num) => (
        <form key={num}>
            <label htmlFor={attribute.name}>{attribute.name}: </label>
            <input id={num} name={attribute.name} type='number' value={attribute.score} onChange={handleChange}/>
        { !isMod && modCan && attribute.rBonus === 2 ? <button onClick={handleCheck} value={num - 10}>Remove +2</button>: <></>}
        { isMod && modCan ? <button onClick={handleCheck} value={num + 10}>add +2</button> : <p>Racial Bonus: {attribute.rBonus}</p>}
        <p>Total: {attribute.score + attribute.rBonus}</p>
        <p>Modifier: {Math.floor(((attribute.score + attribute.rBonus) - 10) / 2)}</p>
        </form>
        ))}
    
    </div>
)};

export default Stats;