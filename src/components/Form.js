import React, { useState } from 'react';

export default function Form({ onSubmit }) {

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
    <form onSubmit={handleSubmit}>
    <div className="col-md-6">
    <label>
          Panel Width:
          <input type="number" value={panelWidth} onChange={event => setPanelWidth(event.target.value)} />
        </label>
      </div>

        <div className="col-md-6">
        <label>
          Panel Height:
          <input type="number" value={panelHeight} onChange={event => setPanelHeight(event.target.value)} />
        </label>
        </div>

      <div className="col-md-6">
        <label>
          Roof Width:
          <input type="number" value={roofWidth} onChange={event => setRoofWidth(event.target.value)} />
        </label>

      </div>

      <div className="col-md-6">
        <label>
          Roof Height:
          <input type="number" value={roofHeight} onChange={event => setRoofHeight(event.target.value)} />
        </label>
        </div>

        <div className="col-md-6">
        <label>
        Row Spacing:
          <input type="number" value={rowSpacing} onChange={event => setRowSpacing(event.target.value)} />
        </label>
        </div>

        <div className="col-md-6">
        <label>
        Column Spacing:
          <input type="number" value={columnSpacing} onChange={event => setColumnSpacing(event.target.value)} />
        </label>
        </div>

        <div className="col-md-6">
        <label>
        Edge Spacing:
          <input type="number" value={edgeSpacing} onChange={event => setEdgeSpacing(event.target.value)} />
        </label>
        </div>

      <button type="submit">Submit</button>
    </form>
    </>
  );
}

