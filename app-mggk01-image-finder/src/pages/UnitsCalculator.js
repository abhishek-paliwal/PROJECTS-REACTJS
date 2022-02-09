import React from 'react';
import {useState} from 'react';

/* =============================================== */
function showInputField (triggerSearchAtChars, setQuery) {
  return <div className="m-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Search below (with url segment or text with hyphens, minimum {triggerSearchAtChars} characters required)</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="search image here" onChange={event => {(event.target.value.length >= triggerSearchAtChars) ? setQuery(event.target.value) : setQuery('') }} />
      </div>
}

function showInputFields (unit1value,unit2value,unit1valueNew,setUnit1value,setUnit2value,setUnit1valueNew) {
    const unit2valueNew =  unit1valueNew*(unit2value/unit1value) ;
    const unit2valueNewRounded = Math.round( (unit2valueNew + Number.EPSILON) * 100) / 100 ; 
    console.log(unit2valueNew);
    console.log(unit2valueNewRounded);
    //
    return <> 
        <div className="input-group mb-3">
            <span className="input-group-text">If</span>       
            <input type="text" className="form-control" placeholder={unit1value} aria-label="unit1value" onChange={event => setUnit1value(event.target.value) } />        
            <span className="input-group-text">of unit1 means</span>       
            <input type="text" className="form-control" placeholder={unit2value} aria-label="unit2value" onChange={event => setUnit2value(event.target.value) } />       
            <span className="input-group-text">of unit2</span>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text">Then</span>
            <input type="text" className="form-control" placeholder={unit1valueNew} aria-label="unit1valueNew" onChange={event => setUnit1valueNew(event.target.value) } />        
            <span className="input-group-text">of unit1 means</span>
            <input readOnly type="text" className="form-control bg-warning" placeholder={unit2valueNewRounded} aria-label="unit2valueNew"/>    
            <span className="input-group-text">of unit2</span>   
        </div>
    </>
}

/* =============================================== */

const UnitsCalculator = () => {
  const [unit1value, setUnit1value] = useState(10) ;
  const [unit2value, setUnit2value] = useState(1000) ;
  const [unit1valueNew, setUnit1valueNew] = useState(1) ;
  //  
  const showCalculatedInputs = showInputFields(unit1value,unit2value,unit1valueNew,setUnit1value,setUnit2value,setUnit1valueNew) ; 
  // 
  return <div className="container">
    <h1 className="display-6">Calculator = Convert unit1 to unit2</h1>
    <div className="section">{showCalculatedInputs}</div>
  </div>;
};

export default UnitsCalculator;

