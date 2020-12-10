import React from 'react';

function Form() {
    return (
        <div>
            <h1>Character From</h1>
            <select>
                <option selected>Table Top game</option>
                <option value="Pathfinder">Pathfinder</option>
            </select>
            <h4>Race</h4>
                <select>
                    <option>Human</option>
                </select>
            <h4>Stats</h4>
                <select>
                    <option selected value="10">10</option>
                </select>
        </div>
    )
}