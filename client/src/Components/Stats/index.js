import React from 'react'

function Stats (props) {
    const {
        attributes,
        setCurrentStats
    } = props;
   async function handleChange(event) {
        const i = event.target.id
        const v = event.target.value
        let newArry = [...attributes];
        newArry[i].score = v
        setCurrentStats(newArry)
    }
return (
    <div>
        {attributes.map((attribute, num) => (
        <form key={num}>
            <label htmlFor={attribute.name}>{attribute.name}</label>
            <input id={num} name={attribute.name} type='number' value={attribute.score} onChange={handleChange}/>
        <p>{Math.floor((attribute.score - 10) / 2)}</p>
        </form>
        ))}
    
    </div>
)
}

export default Stats;