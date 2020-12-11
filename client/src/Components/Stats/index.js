import React from 'react'

function Stats (props) {
    const {
        attributes,
        setCurrentStats
    } = props;
    console.log(attributes[1].score)
    function handleChange(event) {
        console.log(event.target)
        // setCurrentStats
    }
return (
    <div>
        {attributes.map((attribute, num) => (
        <form key={num} onChange={handleChange}>
            <label htmlFor={attribute.name}>{attribute.name}</label>
            <input name={attribute.name} type='number' Value={attribute} />
        </form>
        ))}
    
    </div>
)
}

export default Stats;