import React from 'react'

function Stats (props) {
    const {
        attributes,
        setCurrentStats
    } = props;
   async function handleChange(event) {
        console.log(event.target)
        const i = event.target.id
        const v = event.target.value
        console.log(i, v);
        console.log(attributes[i].score)
        setCurrentStats(attributes[i],{
            name: event.target.name,
            score: v
        })
    }
return (
    <div>
        {attributes.map((attribute, num) => (
        <form key={num}>
            <label htmlFor={attribute.name}>{attribute.name}</label>
            <input id={num} name={attribute.name} type='number' defaultValue={attribute.score} onChange={handleChange}/>
        </form>
        ))}
    
    </div>
)
}

export default Stats;