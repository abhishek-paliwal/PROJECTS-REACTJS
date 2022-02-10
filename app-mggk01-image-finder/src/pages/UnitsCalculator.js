import React from 'react';
import {useState} from 'react';

/* =============================================== */
function showInputFields (unit1value,unit2value,unit1valueNew,setUnit1value,setUnit2value,setUnit1valueNew) {
    const unit2valueNew =  unit1valueNew*(unit2value/unit1value) ;
    const unit2valueNewRounded = Math.round( (unit2valueNew + Number.EPSILON) * 100) / 100 ; 
    console.log(unit2valueNew);
    console.log(unit2valueNewRounded);
    //
    return <> 
        <div className="input-group mb-3">
            <span className="input-group-text">If</span>       
            <input type="text" className="form-control bg-info" placeholder={unit1value} aria-label="unit1value" onChange={event => setUnit1value(event.target.value) } />        
            <span className="input-group-text">unit1 =</span>       
            <input type="text" className="form-control" placeholder={unit2value} aria-label="unit2value" onChange={event => setUnit2value(event.target.value) } />       
            <span className="input-group-text">unit2</span>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text">Then</span>
            <input type="text" className="form-control" placeholder={unit1valueNew} aria-label="unit1valueNew" onChange={event => setUnit1valueNew(event.target.value) } />        
            <span className="input-group-text">unit1 =</span>
            <input readOnly type="text" className="form-control bg-warning" placeholder={unit2valueNewRounded} aria-label="unit2valueNew"/>    
            <span className="input-group-text">unit2</span>   
        </div>
    </>
}
////
function CalculateCelciusToFahrenheit (unit1value) {
  const CelToFahTmp = ((unit1value*9)/5 ) + 32 ;
  const CelToFah = Math.round( (CelToFahTmp + Number.EPSILON) * 100) / 100 ;
  //
  const FahToCelTmp = ((unit1value-32)*5 )/9 ;
  const FahToCel = Math.round( (FahToCelTmp + Number.EPSILON) * 100) / 100 ;
  //
  return <div className="card"> 
      <div className="card-header">Temperature conversion (automatic)</div>
      <div className="card-body">
        {unit1value} °C = {CelToFah} °F
        <br />
        {unit1value} °F = {FahToCel} °C
        </div>
  </div>
}
////
function CalculateOvenTimings (unit1value,unit2value,unit1valueNew) {
  const calculatedOvenTimingTmp =  (unit1value*unit2value)/unit1valueNew ;
  const calculatedOvenTiming = Math.round( (calculatedOvenTimingTmp + Number.EPSILON) * 100) / 100 ;
  //
  return <div className="card"> 
      <div className="card-header">Oven/Baking Timings calculations (automatic)</div>
      <div className="card-body">
        If {unit1value} °C/F mean {unit2value} minutes of baking time,
        <br />
        Then, <strong>{unit1valueNew} °C/F mean  {calculatedOvenTiming} minutes</strong> of baking time.
        </div>
  </div>
}


/* =============================================== */

const UnitsCalculator = () => {
  const [unit1value, setUnit1value] = useState(10) ;
  const [unit2value, setUnit2value] = useState(1000) ;
  const [unit1valueNew, setUnit1valueNew] = useState(1) ;
  //  
  const showCalculatedInputs = showInputFields(unit1value,unit2value,unit1valueNew,setUnit1value,setUnit2value,setUnit1valueNew) ; 
  //
  const convertTemperatures = CalculateCelciusToFahrenheit (unit1value) ; 
  //
  const convertOvenTimings = CalculateOvenTimings(unit1value,unit2value,unit1valueNew,setUnit1value,setUnit2value,setUnit1valueNew) ;  
  // 
  return <div className="container">
    <h1 className="display-6">Calculator = Convert unit1 to unit2</h1>
    <div className="section mb-2">{showCalculatedInputs}</div>
    <div className="section mb-2"><div className="row">
      <div className="col-lg-6 col-sm-12">{convertTemperatures}</div>
      <div className="col-lg-6 col-sm-12">{convertOvenTimings}</div>
    </div></div>
  </div>;
};

export default UnitsCalculator;

