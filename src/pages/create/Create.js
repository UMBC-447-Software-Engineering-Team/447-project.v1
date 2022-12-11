// create project page

import Form from "../../components/Form"
import React, { useLayoutEffect, useState, useRef } from 'react';

export function Create() {
  // Canvas Dimentions
  let canvasWidth = 1000; //Max canvas dimentions
  let canvasHeight = 1000; // Max canvas dimentions
  // Variables in order to access the submitted inputs outside of handleSubmit hook
  const [panelWidths, setPanelWidths] = useState(0);
  const [panelHeights, setPanelHeights] = useState(0);
  const [roofWidths, setRoofWidths] = useState(0);
  const [roofHeights, setRoofHeights] = useState(0);
  const [edgeSpacings, setEdgeSpacings] = useState(0);
  const [watts, setWattages] = useState(0);
  const [avgRads, setAvgRads] = useState(0);
  const [costPerKWHs, setCostPerKWHs] = useState(0);

  const [juristictionWidth, setJuristictionWidth] = useState(0);
  const [juristictionHeight, setJuristictionHeight]= useState(0);

  const [numPanelsWide, setNumPanelsWide] = useState(0);
  const [numPanelsTall, setNumPanelsTall]= useState(0);

  // Initialize a new array
  const [array, setArray] = useState(new Array());
  
  // Where the magic of hitting the submit button on the Form happens
  function handleSubmit(panelWidth, panelHeight, roofWidth,
    roofHeight, rowSpacing, columnSpacing, edgeSpacing, watt, avgRad, costPerKWH) {

      // copy over the newly changed inputs using + to convert from string to number
      const ratio = 1000/Math.max(roofWidth, roofHeight);
      panelWidth *= ratio;
      panelHeight *= ratio;
      roofWidth *= ratio;
      roofHeight *= ratio;
      rowSpacing *= ratio;
      columnSpacing *= ratio;
      edgeSpacing *= ratio;

      const roofWidths = +roofWidth;
      setRoofWidths(roofWidths);

    const roofHeights = +roofHeight;
    setRoofHeights(roofHeights);

    const panelWidths = +panelWidth;
    setPanelWidths(panelWidths)

    const panelHeights = +panelHeight;
    setPanelHeights(panelHeights);

    const edgeSpacings = +edgeSpacing;
    setEdgeSpacings(edgeSpacings);

    const watts = +watt;
    setWattages(watts);

    const avgRads = +avgRad;
    setAvgRads(avgRads);

    const costPerKWHs = +costPerKWH;
    setCostPerKWHs(costPerKWHs);

    //Get juristiction which is the space around a panel width and height wise
    const juristictionWidth =  Math.floor(+panelWidth + +columnSpacing); 
    const juristictionHeight =  Math.floor(+panelHeight + +rowSpacing);
      
    // copy over the newly changed inputs using + to convert from string to number
    setJuristictionWidth(juristictionWidth); 
    setJuristictionHeight(juristictionHeight);

    // Calculate the number of panels that will fit on the roof
    // This accounts for the edgespace and row/column spacing overlap
    const numPanelsWide = Math.floor(((+roofWidth - (+edgeSpacing * 2)) + +columnSpacing) /juristictionWidth);
    const numPanelsTall = Math.floor(((+roofHeight - (2 * +edgeSpacing)) + +rowSpacing) / juristictionHeight);
    setNumPanelsWide(numPanelsWide)
    setNumPanelsTall(numPanelsTall)

    // Create a temp array based on new total number of panels in a row and column 
    // Row = Panels Tall, Column = Panels wide 
    let newArray = new Array(numPanelsTall);
    // Row by column aka PanelsTall by Panels Wide
    for (let i = 0; i < numPanelsTall; i++) {
      newArray[i] = new Array(numPanelsWide);
    }

    // deallocate array
    setArray(null);
    // to use outside hook copy temp array to array 
    setArray(newArray);
    // Deallocate the old array
    newArray = null;
   
  }
    //Need to add in a Watts and Average Rads field on front end (Dropdown menu for different states?)
    const totalPanels = numPanelsTall * numPanelsWide;
    const panelArea = panelHeights * panelWidths;
    const totalPanelArea = totalPanels * panelArea;
    const solarYield = (watts/1000) / panelArea; //in KWH
    const energy = avgRads * solarYield * totalPanelArea * .75; //.75 Accounts for all inhibiting variables
    //Need to add in a Cost / KWH field on front end (Dropdown menu for different states?)
    console.log("You will save approximately $" + (energy * costPerKWHs).toFixed(2) + " every year with this configuration.");
  
    // for the canvas
  const canvasRef = useRef(null);

  // add coordinanted for each array
  // first coordinant starts at x and y = edgeSpacing from the upper left
  const usableWidth = Math.floor(roofWidths - edgeSpacings*2);
  const usableHeight = Math.floor(roofHeights - edgeSpacings*2);
  const columnSpace = (juristictionWidth - panelWidths);
  const rowSpace = (juristictionHeight - panelHeights);
  let xCoord = edgeSpacings + ((usableWidth + columnSpace) / juristictionWidth - numPanelsWide) * juristictionWidth/2;
  let yCoord = edgeSpacings + ((usableHeight + rowSpace) / juristictionHeight - numPanelsTall) * juristictionHeight/2;
  for (let i = 0; i < numPanelsTall; i++) {  //for each row 
    for (let j = 0; j < numPanelsWide; j++) {   //each column
      array[i][j] = [xCoord , yCoord];
      xCoord = xCoord + juristictionWidth;
    }
    xCoord = edgeSpacings + ((Math.floor(roofWidths - edgeSpacings*2 + (juristictionWidth - panelWidths)) / juristictionWidth - numPanelsWide) * juristictionWidth/2);
    yCoord = yCoord + juristictionHeight;
  }  

  useLayoutEffect( () => {
    //refrence current canvas
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    // clear the canvas on each submit
    ctx.clearRect(0, 0, canvas.width, canvas.height)
 
    // Draw a box around the whole roof for visulization and fill it will color
    ctx.strokeRect(0,0,roofWidths,roofHeights); 
    ctx.fillStyle = "#dfe8f1";
    ctx.fillRect(0,0,roofWidths+1,roofHeights+1)
  
    // draw the array
    for (let i = 0; i < numPanelsTall; i++) {
      for (let j = 0; j < numPanelsWide; j++) {
        const [tempX,tempY] = array[i][j];
        //draw panel               
        ctx.fillStyle = "#22277A";
        ctx.fillRect(tempX, tempY, panelWidths, panelHeights);      
      }
    }
  }
);

  return (
    <>
      <div className="main">
      <div className="Left">
          <Form onSubmit={handleSubmit} />
          <div>
            <form>
              <div>
                <span >You will generate approximately: {energy.toFixed(0)}KWH of energy every year with this configuration.</span>
              </div>
              
              <div>
                  <span >You will save approximately: ${(energy * costPerKWHs).toFixed(2)} every year with this configuration.</span>
              </div>
            </form>
          </div> 
      </div>
      
      <div className="Right">
      <canvas ref={canvasRef} width= {canvasWidth} height={canvasHeight} />
        </div>
      </div>
     </>
  );
}
