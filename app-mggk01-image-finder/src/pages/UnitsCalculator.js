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
////
function convertWeightUnits (unit1value) {
  // Get the following ratios from Google
  // Ratios below
  const tsp2tbspRatio =  1/3 ;
  const oz2gramsRatio = 28.35 ; 
  const pounds2gramsRatio = 454 ; 
  // Calculations below
  const tsp2tbsp =  unit1value * tsp2tbspRatio ;
  const tbsp2tsp =  unit1value / tsp2tbspRatio ;
  //
  const oz2grams =  unit1value * oz2gramsRatio ;
  const grams2oz =  unit1value / oz2gramsRatio ;
  //
  const pounds2grams =  unit1value * pounds2gramsRatio ;
  const grams2pounds =  unit1value / pounds2gramsRatio ;
  //
  return <div className="p-2 border border-secondary rounded"> 
          <p>Cooking units conversions - Weight (automatic)</p>        
            <table className="table table-striped">
              <thead>
                <tr><th scope="col">Unit1</th><th scope="col">Unit2</th></tr>
              </thead>
              <tbody>
                <tr><td>{unit1value} tsp =</td><td>{tsp2tbsp} tbsp</td></tr>
                <tr><td>{unit1value} tbsp =</td><td> {tbsp2tsp} tsp</td></tr>
                <tr><td>{unit1value} Oz =</td><td> {oz2grams} grams</td></tr>
                <tr><td>{unit1value} grams =</td><td> {grams2oz} Oz</td></tr>
                <tr><td>{unit1value} pounds (lb) =</td><td> {pounds2grams} grams</td></tr>
                <tr><td>{unit1value} grams =</td><td> {grams2pounds} pounds (lb)</td></tr>
            </tbody>
            </table>
        </div>
}
////
function convertVolumeUnits (unit1value) {
  // Get the following ratios from Google
  // Ratios below
  const cups2tbspRatio = 16 ;
  const ml2cupsRatio = 1/250 ; 
  const ml2tbspRatio = 1/14.78 ;
  const fluidOz2mlRatio = 29.574 ; 
  const fluidOz2cupsRatio = 1/8 ; 
  //
  // Calculations below
  const cups2tbsp =  unit1value * cups2tbspRatio ;
  const tbsp2cups =  unit1value / cups2tbspRatio ;
  //
  const ml2cups =  unit1value * ml2cupsRatio ;
  const cups2ml =  unit1value / ml2cupsRatio ;
  //
  const ml2tbsp =  unit1value * ml2tbspRatio ;
  const tbsp2ml =  unit1value / ml2tbspRatio ;
  //
  const fluidOz2ml =  unit1value * fluidOz2mlRatio ;
  const ml2fluidOz =  unit1value / fluidOz2mlRatio ;
  //
  const fluidOz2cups =  unit1value * fluidOz2cupsRatio ;
  const cups2fluidOz =  unit1value / fluidOz2cupsRatio ;
  //
  //
  return <div className="p-2 border border-secondary rounded"> 
          <p>Cooking units conversions - Volume (automatic)</p>        
            <table className="table table-striped">
              <thead>
                <tr><th scope="col">Unit1</th><th scope="col">Unit2</th></tr>
              </thead>
              <tbody>   
                <tr><td>{unit1value} cups =</td><td>{cups2tbsp} tbsp</td></tr>
                <tr><td>{unit1value} tbsp =</td><td>{tbsp2cups} cups</td></tr>
                <tr><td>{unit1value} ml =</td><td>{ml2cups} cups</td></tr>
                <tr><td>{unit1value} cups =</td><td>{cups2ml} ml</td></tr>
                <tr><td>{unit1value} ml =</td><td>{ml2tbsp} tbsp</td></tr>
                <tr><td>{unit1value} tbsp =</td><td>{tbsp2ml} ml</td></tr>
                <tr><td>{unit1value} fluid Oz =</td><td>{fluidOz2ml} ml</td></tr>
                <tr><td>{unit1value} ml =</td><td>{ml2fluidOz} fluid Oz</td></tr>
                <tr><td>{unit1value} fluid Oz =</td><td>{fluidOz2cups} cups</td></tr>
                <tr><td>{unit1value} cups =</td><td>{cups2fluidOz} fluid Oz</td></tr>
            </tbody>
            </table>
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
  const convertOvenTimings = CalculateOvenTimings(unit1value,unit2value,unit1valueNew,setUnit1value,setUnit2value,setUnit1valueNew) ;  
  // 
  const convertWeightUnitsValue = convertWeightUnits(unit1value) ;  
  const convertVolumeUnitsValue = convertVolumeUnits(unit1value) ;  
  //
  return <div className="container">
    <h1 className="display-6">Calculator = Convert unit1 to unit2</h1>
    <div className="section mb-2">{showCalculatedInputs}</div>
    <div className="section mb-2"><div className="row">
      <div className="col-lg-6 col-sm-12">{convertTemperatures}</div>
      <div className="col-lg-6 col-sm-12">{convertOvenTimings}</div>
    </div></div>
    <div className="section mb-2"><div className="row">
      <div className="col-lg-6 col-sm-12">{convertWeightUnitsValue}</div>
      <div className="col-lg-6 col-sm-12">{convertVolumeUnitsValue}</div>
    </div></div>
  </div>;
};

export default UnitsCalculator;

