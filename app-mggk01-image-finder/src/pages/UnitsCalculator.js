import React from 'react';
import {useState} from 'react';

/* =============================================== */
function showInputFields (unit1value,unit2value,unit1valueNew,setUnit1value,setUnit2value,setUnit1valueNew) {
  let unit1valueEval = 1 ;
  let unit2valueNew =  1 ;
  let unit2valueNewRounded = 1 ; 
  //
  try {
    unit1valueEval = eval(unit1value) ;
    unit2valueNew =  unit1valueNew*(unit2value/unit1valueEval) ;
    unit2valueNewRounded = Math.round( (unit2valueNew + Number.EPSILON) * 100) / 100 ; 
    } catch (error) {
      console.error(error) ;
    } 
  //
  console.log('This function block throws error while writing a fraction. Please ignore that error and continue writing.')
  //console.log(unit2valueNew);
  //console.log(unit2valueNewRounded);
  //
  return <> 
      <div className="input-group p-1">
          <span className="input-group-text">If</span>       
          <input type="text" className="form-control bg-info" placeholder={unit1valueEval} aria-label="unit1value" onChange={event => setUnit1value(eval(event.target.value)) } />        
          <span className="input-group-text">unit1 =</span>       
          <input type="text" className="form-control" placeholder={unit2value} aria-label="unit2value" onChange={event => setUnit2value(event.target.value) } />       
          <span className="input-group-text">unit2</span>
      </div>
      <div className="input-group p-1">
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
      <div className="card-header">Temperature conversion</div>
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
      <div className="card-header">Oven/Baking Timings calculations</div>
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
  const tsp2tbsp_0 =  unit1value * tsp2tbspRatio ;  //Math.round( ( (CelToFahTmp) + Number.EPSILON) * 100) / 100 ;
  const tbsp2tsp_1 =  unit1value / tsp2tbspRatio ;
  //
  const oz2grams_2 =  unit1value * oz2gramsRatio ;
  const grams2oz_3 =  unit1value / oz2gramsRatio ;
  //
  const pounds2grams_4 =  unit1value * pounds2gramsRatio ;
  const grams2pounds_5 =  unit1value / pounds2gramsRatio ;
  // Create rounded values 
  const myArrayW = [tsp2tbsp_0, tbsp2tsp_1, oz2grams_2, grams2oz_3, pounds2grams_4, grams2pounds_5] ;
  const myArrayWRounded = myArrayW.map(x => Math.round( (x + Number.EPSILON) * 100) / 100) ;
  //
  return <div className="p-2 border border-secondary rounded"> 
          <p>Cooking units conversions - Weight</p>        
            <table className="table table-striped">
              <thead>
                <tr><th scope="col">Unit1</th><th scope="col">Unit2</th></tr>
              </thead>
              <tbody>
                <tr><td>{unit1value} tsp =</td><td>{myArrayWRounded[0]} tbsp</td></tr>
                <tr><td>{unit1value} tbsp =</td><td> {myArrayWRounded[1]} tsp</td></tr>
                <tr><td>{unit1value} Oz =</td><td> {myArrayWRounded[2]} grams</td></tr>
                <tr><td>{unit1value} grams =</td><td> {myArrayWRounded[3]} Oz</td></tr>
                <tr><td>{unit1value} pounds (lb) =</td><td> {myArrayWRounded[4]} grams</td></tr>
                <tr><td>{unit1value} grams =</td><td> {myArrayWRounded[5]} pounds (lb)</td></tr>
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
  const cups2tbsp_0 =  unit1value * cups2tbspRatio ;
  const tbsp2cups_1 =  unit1value / cups2tbspRatio ;
  //
  const ml2cups_2 =  unit1value * ml2cupsRatio ;
  const cups2ml_3 =  unit1value / ml2cupsRatio ;
  //
  const ml2tbsp_4 =  unit1value * ml2tbspRatio ;
  const tbsp2ml_5 =  unit1value / ml2tbspRatio ;
  //
  const fluidOz2ml_6 =  unit1value * fluidOz2mlRatio ;
  const ml2fluidOz_7 =  unit1value / fluidOz2mlRatio ;
  //
  const fluidOz2cups_8 =  unit1value * fluidOz2cupsRatio ;
  const cups2fluidOz_9 =  unit1value / fluidOz2cupsRatio ;
  // Create rounded values 
  const myArrayV = [cups2tbsp_0, tbsp2cups_1, ml2cups_2, cups2ml_3, ml2tbsp_4, tbsp2ml_5, fluidOz2ml_6, ml2fluidOz_7, fluidOz2cups_8, cups2fluidOz_9] ;
  const myArrayVRounded = myArrayV.map(x => Math.round( (x + Number.EPSILON) * 100) / 100) ;
  //
  return <div className="p-2 border border-secondary rounded"> 
          <p>Cooking units conversions - Volume</p>        
            <table className="table table-striped">
              <thead>
                <tr><th scope="col">Unit1</th><th scope="col">Unit2</th></tr>
              </thead>
              <tbody>   
                <tr><td>{unit1value} cups =</td><td>{myArrayVRounded[0]} tbsp</td></tr>
                <tr><td>{unit1value} tbsp =</td><td>{myArrayVRounded[1]} cups</td></tr>
                <tr><td>{unit1value} ml =</td><td>{myArrayVRounded[2]} cups</td></tr>
                <tr><td>{unit1value} cups =</td><td>{myArrayVRounded[3]} ml</td></tr>
                <tr><td>{unit1value} ml =</td><td>{myArrayVRounded[4]} tbsp</td></tr>
                <tr><td>{unit1value} tbsp =</td><td>{myArrayVRounded[5]} ml</td></tr>
                <tr><td>{unit1value} fluid Oz =</td><td>{myArrayVRounded[6]} ml</td></tr>
                <tr><td>{unit1value} ml =</td><td>{myArrayVRounded[7]} fluid Oz</td></tr>
                <tr><td>{unit1value} fluid Oz =</td><td>{myArrayVRounded[8]} cups</td></tr>
                <tr><td>{unit1value} cups =</td><td>{myArrayVRounded[9]} fluid Oz</td></tr>
            </tbody>
            </table>
        </div>
}
/* =============================================== */

const UnitsCalculator = () => {
  let [unit1value, setUnit1value] = useState(1/2) ;
  const [unit2value, setUnit2value] = useState(1000) ;
  const [unit1valueNew, setUnit1valueNew] = useState(1) ;
  //  
  const showCalculatedInputs = showInputFields(unit1value,unit2value,unit1valueNew,setUnit1value,setUnit2value,setUnit1valueNew) ; 
  //
  const convertTemperatures = CalculateCelciusToFahrenheit (unit1value) ; 
  const convertOvenTimings = CalculateOvenTimings(unit1value,unit2value,unit1valueNew) ;  
  // 
  const convertWeightUnitsValue = convertWeightUnits(unit1value) ;  
  const convertVolumeUnitsValue = convertVolumeUnits(unit1value) ;  
  //
  return <div className="container">
    <h1 className="display-6">Cooking Calculator (Convert unit1 to unit2)</h1>
    <p className="text-secondary">Note: Allowed values in the blue input box: // Numbers (eg., 1, 2) // Decimals (eg., 0.5, 1.34) // Fractions (eg., 1/4, 2+3/4)</p>
    <hr />
    <div className="section bg-dark rounded p-2">{showCalculatedInputs}</div>
    <hr />
    <div className="section mb-2 text-info">User input has been evaluated to <strong>{unit1value}</strong> for following calculations. All calculations are automatic.</div>
    <hr />
    <div className="section"><div className="row">
      <div className="col-lg-6 col-sm-12 mb-1">{convertTemperatures}</div>
      <div className="col-lg-6 col-sm-12 mb-1">{convertOvenTimings}</div>
    </div></div>
    <hr />
    <div className="section"><div className="row">
      <div className="col-lg-6 col-sm-12 mb-1">{convertWeightUnitsValue}</div>
      <div className="col-lg-6 col-sm-12 mb-1">{convertVolumeUnitsValue}</div>
    </div></div>
    <hr />
  </div>;
};

export default UnitsCalculator;

