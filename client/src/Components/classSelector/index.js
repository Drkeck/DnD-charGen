import React from 'react'

function ClassPicker (props) {
    const {
        Classes,
        currentClass,
        setCurrentClass
    } = props
 
    var gcd = function(a, b) {
        if (b < 0.0000001) return a;             
      
        return gcd(b, Math.floor(a % b));           
      };
      
      var fraction = currentClass.pbab;
      var len = fraction.toString().length - 2;
      
      var den = Math.pow(10, len);
      var num = fraction * den;
      
      var div = gcd(num, den);    
      
      num /= div;                         
      den /= div;                       

    return (
        <div>
            <select onChange={(event) => setCurrentClass(Classes[event.target.value])}>
                { Classes.map((job, num) => (
                    <option key={num} value={num}>{job.name}</option>
                ))}
            </select>
            <h3>{currentClass.name}</h3>
            <p>Base attack Bonus: {currentClass.pbab === 1? currentClass.pbab : Math.floor(num) + '/' + Math.floor(den)} | saves: {currentClass.psaves}</p>
            
        </div>
    )
}

export default ClassPicker;