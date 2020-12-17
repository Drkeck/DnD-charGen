import React from 'react'

function Stats (props) {
    const {
        attributes,
        setCurrentStats,
        CurrentRace
    } = props;


   function handleChange(event) {
        const i = event.target.id
        const v = parseInt(event.target.value)
        let newArry = [...attributes];
        newArry[i].score = v
        setCurrentStats(newArry)

    }

return (
    <div>
        {attributes.map((attribute, num) => (
        <form key={num}>
            <label htmlFor={attribute.name}>{attribute.name}: </label>
            <input id={num} name={attribute.name} type='number' value={attribute.score} onChange={handleChange}/>
            <p>{attribute.rBonus}</p>
        <p>Total: {attribute.score + attribute.rBonus}</p>
        <p>Modifier: {Math.floor(((attribute.score + attribute.rBonus) - 10) / 2)}</p>
        </form>
        ))}
    
    </div>
)};

export default Stats;