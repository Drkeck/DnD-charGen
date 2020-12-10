import React from 'react'

function Stats (props) {
    const {
        attributes,
        setCurrentStats
    } = props;
    function handleChange(event) {
        console.log(event.target)
        // setCurrentStats
    }
return (
    <div>
        {attributes.map((attribute) => (
        <form key={attribute.name} onChange={handleChange}>
            <label for={attribute.name}>{attribute.name}</label>
            <input id={attribute.name} type='number' value={attribute.score} />
        </form>
        ))}
    
    </div>
)
}

export default Stats;