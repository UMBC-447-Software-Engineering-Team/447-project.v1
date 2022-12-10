import React, { useState } from 'react';


export default function Form({ onSubmit }) {
  
  const [panelWidth, setPanelWidth] = useState(0);
  const [panelHeight, setPanelHeight] = useState(0);
  const [roofWidth, setRoofWidth] = useState(0);
  const [roofHeight, setRoofHeight] = useState(0);
  const [rowSpacing, setRowSpacing] = useState(0);
  const [columnSpacing, setColumnSpacing] = useState(0);
  const [edgeSpacing, setEdgeSpacing] = useState(0);

  // for input validation
  const [inputError, setInputError] = useState(false);
  const [inputError1, setInputError1] = useState(false);
  const [inputError2, setInputError2] = useState(false);
  const [inputError3, setInputError3] = useState(false);
  const [inputError4, setInputError4] = useState(false);
  const [inputError5, setInputError5] = useState(false);
  const [inputError6, setInputError6] = useState(false);




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

    // Validate the input
    if (+panelWidth <= 0 ) {
      // Input is empty, show an error message
      setInputError('Enter a value greater than 1');
      value = true;
    }
    if (+panelHeight <= 0 ) {
      setInputError1('Enter a value greater than 1');
      value = true;
    }
   
    if (+roofWidth <= 0){
      setInputError2('Enter a value greater than 1');
      value = true;
    }if (+roofWidth <= +panelWidth){
        setInputError2('Roof width cannot be less than panel width');
        value = true;
    }if (+roofWidth <= +panelHeight){
        setInputError2('Roof width cannot be less than panel length');
        value = true;
    }

    if (+roofHeight <= 0){
      setInputError3('Enter a value greater than 1');
      value = true;
    }if (+roofHeight <= +panelWidth){
        setInputError3('Roof height cannot be less than panel width');
        value = true;
    }if (+roofHeight <= +panelHeight){
        setInputError3('Roof height cannot be less than panel length');
        value = true;
    }
    if (+rowSpacing < 0){
      setInputError3('Enter a value greater than 0');
      value = true;
    } if (+rowSpacing >= +roofHeight){
      setInputError3('Row spacing cannot be greater than roof height');
      value = true;
    }
    if (+columnSpacing < 0){
      setInputError3('Enter a value greater than 0');
      value = true;
    } if (+columnSpacing >= +roofWidth){
      setInputError3('Column spacing cannot be greater than roof width');
      value = true;
    }
    if (+columnSpacing < 0){
      setInputError3('Enter a value greater than 0');
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

    // return the updated values to Create
    onSubmit(panelWidth, panelHeight, roofWidth, roofHeight, 
      rowSpacing, columnSpacing, edgeSpacing
    );
  }

// The form and dynamic change in value here
// add required for form and error handling 

  return (
    <>
    <form onSubmit={handleSubmit} >
    <div className="col-md-6">
    <label>
    <span className="label-text">Panel Width:</span>
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
        <span className="label-text">Panel Height:</span>
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
        <span className="label-text">Roof Width:</span>
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
        <span className="label-text">Roof Height:</span>
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
        <span className="label-text">Row Spacing:</span>
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
        <span className="label-text">Column Spacing:</span>
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
        <span className="label-text">Edge Spacing:</span>
          <input className="input input-bordered input-sm w-full max-w-xs" placeholder="Enter Number" type="number" value={edgeSpacing} onChange={event => setEdgeSpacing(event.target.value)} />
          {inputError6 && (
          <div style={{ color: 'red', fontSize: '0.8em' }}>
            {inputError6}
          </div>
          )}
        </label>
        </div>

      <button className="btn btn-active" type="submit">Submit</button>
    </form>
    
    </>
    );
}
