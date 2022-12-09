import React, { useState } from 'react';

export default function Form({ onSubmit }) {

  // declare variables
  const [panelWidth, setPanelWidth] = useState(0);
  const [panelHeight, setPanelHeight] = useState(0);
  const [roofWidth, setRoofWidth] = useState(0);
  const [roofHeight, setRoofHeight] = useState(0);
  const [rowSpacing, setRowSpacing] = useState(0);
  const [columnSpacing, setColumnSpacing] = useState(0);
  const [edgeSpacing, setEdgeSpacing] = useState(0);

  // Only update all numbers when the submit button is done
  function handleSubmit(event) {
    event.preventDefault();
    // return the updated values to Create
    onSubmit(panelWidth, panelHeight, roofWidth, roofHeight, 
      rowSpacing, columnSpacing, edgeSpacing
    );
  }

// The form and dynamic change in value here
// add required for form and error handling 
  return (
    <>
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column"}}>
    <div className="form-control w-full max-w-xs">
      <label className="label">
      <span className="label-text">Panel Width:</span>
            <input className="input input-bordered input-sm w-full max-w-xs" placeholder="Enter Number" type="number" value={panelWidth} onChange={event => setPanelWidth(event.target.value)} />
          </label>
      
        <label className="label">
          <span className="label-text">Panel Height:</span>
          <input className="input input-bordered input-sm w-full max-w-xs" placeholder="Enter Number" type="number" value={panelHeight} onChange={event => setPanelHeight(event.target.value)} />
        </label>
        
        <label className="label">
        <span className="label-text">Roof Width:</span>
          <input className="input input-bordered input-sm w-full max-w-xs" placeholder="Enter Number" type="number" value={roofWidth} onChange={event => setRoofWidth(event.target.value)} />
        </label>

        <label className="label">
        <span className="label-text">Roof Height:</span>
          <input className="input input-bordered input-sm w-full max-w-xs" placeholder="Enter Number" type="number" value={roofHeight} onChange={event => setRoofHeight(event.target.value)} />
        </label>
        
        <label className="label">
        <span className="label-text">Row Spacing:</span>
          <input className="input input-bordered input-sm w-full max-w-xs" placeholder="Enter Number" type="number" value={rowSpacing} onChange={event => setRowSpacing(event.target.value)} />
        </label>
        
        <label className="label">
        <span className="label-text">Column Spacing:</span>
          <input className="input input-bordered input-sm w-full max-w-xs" placeholder="Enter Number" type="number" value={columnSpacing} onChange={event => setColumnSpacing(event.target.value)} />
        </label>
        
        <label className="label">
        <span className="label-text">Edge Spacing:</span>
          <input className="input input-bordered input-sm w-full max-w-xs" placeholder="Enter Number" type="number" value={edgeSpacing} onChange={event => setEdgeSpacing(event.target.value)} />
        </label>
        </div>

      <button className="btn btn-active" type="submit">Submit</button>
    </form>
    </>
  );
}
