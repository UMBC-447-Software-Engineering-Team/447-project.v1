import React, { useState } from 'react';


export default function Form({ onSubmit }) {
  
  const [panelWidth, setPanelWidth] = useState(0);
  const [panelHeight, setPanelHeight] = useState(0);
  const [roofWidth, setRoofWidth] = useState(0);
  const [roofHeight, setRoofHeight] = useState(0);
  const [rowSpacing, setRowSpacing] = useState(0);
  const [columnSpacing, setColumnSpacing] = useState(0);
  const [edgeSpacing, setEdgeSpacing] = useState(0);
  const [watts, setWattage] = useState(0);
  const [avgRads, setAvgRads] = useState(0);
  const [costPerKWH, setcostPerKWH] = useState(0);

  // for input validation
  const [inputError, setInputError] = useState(false);
  const [inputError1, setInputError1] = useState(false);
  const [inputError2, setInputError2] = useState(false);
  const [inputError3, setInputError3] = useState(false);
  const [inputError4, setInputError4] = useState(false);
  const [inputError5, setInputError5] = useState(false);
  const [inputError6, setInputError6] = useState(false);
  const [inputError7, setInputError7] = useState(false);
  const [inputError8, setInputError8] = useState(false);
  const [inputError9, setInputError9] = useState(false);




  // Only update all numbers when the submit button is done
  function handleSubmit(event) {
    event.preventDefault();
    let value = false;  //handling the full form input
    setInputError(false);
    setInputError1(false);
    setInputError2(false);
    setInputError3(false);
    setInputError4(false);
    setInputError5(false);
    setInputError6(false);
    setInputError7(false);
    setInputError8(false);
    setInputError9(false);

    // Validate the input
    if (+panelWidth <= 0 ) {
      // Input is empty, show an error message
      setInputError('Enter a value greater than 0');
      value = true;
    }
    if (+panelHeight <= 0 ) {
      setInputError1('Enter a value greater than 0');
      value = true;
    }
   
    if (+roofWidth <= 0){
      setInputError2('Enter a value greater than 0');
      value = true;
    }if (+roofWidth <= +panelWidth){
        setInputError2('Roof width cannot be less than panel width');
        value = true;
    }if (+roofWidth <= +panelHeight){
        setInputError2('Roof width cannot be less than panel height');
        value = true;
    }

    if (+roofHeight <= 0){
      setInputError3('Enter a value greater than 0');
      value = true;
    }if (+roofHeight <= +panelWidth){
        setInputError3('Roof height cannot be less than panel width');
        value = true;
    }if (+roofHeight <= +panelHeight){
        setInputError3('Roof height cannot be less than panel height');
        value = true;
    }
    if (+rowSpacing < 0){
      setInputError4('Enter a value greater or equal to 0');
      value = true;
    } if (+rowSpacing >= +roofHeight){
      setInputError4('Row spacing cannot be greater than roof height');
      value = true;
    }
    if (+columnSpacing < 0){
      setInputError5('Enter a value greater than or equal 0');
      value = true;
    } if (+columnSpacing >= +roofWidth){
      setInputError5('Column spacing cannot be greater than roof width');
      value = true;
    }
    if (+edgeSpacing < 0){
      setInputError6('Enter a value greater than or equal to 0');
      value = true;
    } 
    if(+watts < 0){
      setInputError7('Enter a value greater than 0');
      value = true;
    }
    if(+avgRads < 0){
      setInputError8('Enter a value greater than 0');
      value = true;
    }
    if(+costPerKWH < 0){
      setInputError9('Enter a value greater than 0');
      value = true;
    }




    if(value === true){
      return;
    }


    value = false;
    setInputError(false);
    setInputError1(false);
    setInputError2(false);
    setInputError3(false);
    setInputError4(false);
    setInputError5(false);
    setInputError6(false);
    setInputError7(false);
    setInputError8(false);
    setInputError9(false);

    // return the updated values to Create
    onSubmit(panelWidth, panelHeight, roofWidth, roofHeight, 
      rowSpacing, columnSpacing, edgeSpacing, watts, avgRads, costPerKWH
    );
  }

// The form and dynamic change in value here
// add required for form and error handling 

  return (
    <>
    <form onSubmit={handleSubmit} >
    <div className="col-md-6">
    <label>
    <span className="label-text">Panel Width (m):</span>
          <input className="input input-bordered input-sm w-full max-w-xs" placeholder="Enter Number"  type="number" value={panelWidth} required 
          onChange={event => setPanelWidth(event.target.value)} 
        />
        {inputError && (
          <div style={{ color: 'red', fontSize: '0.8em' }}>
            {inputError}
          </div>
          )}
        </label>
      </div>

        <div className="col-md-6">
        <label>
        <span className="label-text">Panel Height (m):</span>
          <input className="input input-bordered input-sm w-full max-w-xs" placeholder="Enter Number" type="number" value={panelHeight} required 
          onChange={event => setPanelHeight(event.target.value)} />
          {inputError1 && (
          <div style={{ color: 'red', fontSize: '0.8em' }}>
            {inputError1}
          </div>
          )}
            </label>
        </div>

        <div className="col-md-6">
        <label>
        <span className="label-text">Roof Width (m):</span>
          <input className="input input-bordered input-sm w-full max-w-xs" placeholder="Enter Number" type="number" value={roofWidth} required 
          onChange={event => setRoofWidth(event.target.value)} />
          {inputError2 && (
          <div style={{ color: 'red', fontSize: '0.8em' }}>
            {inputError2}
          </div>
          )}
        </label>
        </div>
       
        <div className="col-md-6">
        <label >
        <span className="label-text">Roof Height (m):</span>
          <input className="input input-bordered input-sm w-full max-w-xs" placeholder="Enter Number" type="number" value={roofHeight} required 
          onChange={event => setRoofHeight(event.target.value)} />
          {inputError3 && (
          <div style={{ color: 'red', fontSize: '0.8em' }}>
            {inputError3}
          </div>
          )}
        </label>
        </div>
        
        <div className="col-md-6">
        <label >
        <span className="label-text">Row Spacing (m):</span>
          <input className="input input-bordered input-sm w-full max-w-xs" placeholder="Enter Number" type="number" value={rowSpacing} 
          onChange={event => setRowSpacing(event.target.value)} />
          {inputError4 && (
          <div style={{ color: 'red', fontSize: '0.8em' }}>
            {inputError4}
          </div>
          )}
        </label>
        </div>

        <div className="col-md-6">
        <label>
        <span className="label-text">Column Spacing (m):</span>
          <input className="input input-bordered input-sm w-full max-w-xs" placeholder="Enter Number" type="number" value={columnSpacing} 
          onChange={event => setColumnSpacing(event.target.value)} />
          {inputError5 && (
          <div style={{ color: 'red', fontSize: '0.8em' }}>
            {inputError5}
          </div>
          )}
        </label>
        </div>
       
        <div className="col-md-6">
        <label >
        <span className="label-text">Edge Spacing (m):</span>
          <input className="input input-bordered input-sm w-full max-w-xs" placeholder="Enter Number" type="number" value={edgeSpacing} onChange={event => setEdgeSpacing(event.target.value)} />
          {inputError6 && (
          <div style={{ color: 'red', fontSize: '0.8em' }}>
            {inputError6}
          </div>
          )}
        </label>
        </div>

        <div className="col-md-6">
        <label >
        <span className="label-text">Panel Wattage:</span>
          <input className="input input-bordered input-sm w-full max-w-xs" placeholder="Enter Number" type="number" value={watts} onChange={event => setWattage(event.target.value)} />
          {inputError7 && (
          <div style={{ color: 'red', fontSize: '0.8em' }}>
            {inputError7}
          </div>
          )}
        </label>
        </div>

        <div className="col-md-6">
        <label >
        <span className="label-text">Avg Yearly Radiance (kWh/m^2):</span>
          <input className="input input-bordered input-sm w-full max-w-xs" placeholder="Enter Number" type="number" value={avgRads} onChange={event => setAvgRads(event.target.value)} />
          {inputError8 && (
          <div style={{ color: 'red', fontSize: '0.8em' }}>
            {inputError8}
          </div>
          )}
        </label>
        </div>

        <div className="col-md-6">
        <label >
        <span className="label-text">Cost Per KWH ($):</span>
          <input className="input input-bordered input-sm w-full max-w-xs" placeholder="Enter Number" type="number" value={costPerKWH} onChange={event => setcostPerKWH(event.target.value)} />
          {inputError9 && (
          <div style={{ color: 'red', fontSize: '0.8em' }}>
            {inputError9}
          </div>
          )}
        </label>
        </div>

      <button className="btn btn-active" type="submit">Submit</button>
    </form>
    
    </>
    );
}
