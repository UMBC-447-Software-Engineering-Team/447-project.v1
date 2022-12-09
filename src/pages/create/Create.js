// create project page

import Form from "../../components/Form"
import React, { useLayoutEffect, useState, useRef } from 'react';

export function Create() {
  // Canvas Dimentions
  let canvasWidth = 1000;
  let canvasHeight = 1000;

  // Variables in order to access the submitted inputs outside of handleSubmit hook
  const [panelWidths, setPanelWidths] = useState(0);
  const [panelHeights, setPanelHeights] = useState(0);
  const [roofWidths, setRoofWidths] = useState(0);
  const [roofHeights, setRoofHeights] = useState(0);
  const [edgeSpacings, setEdgeSpacings] = useState(0);

  const [juristictionWidth, setJuristictionWidth] = useState(0);
  const [juristictionHeight, setJuristictionHeight]= useState(0);

  const [numPanelsWide, setNumPanelsWide] = useState(0);
  const [numPanelsTall, setNumPanelsTall]= useState(0);

  // Initialize a new array
  const [array, setArray] = useState(new Array());
  
  // Where the magic of hitting the submit button on the Form happens
  function handleSubmit(panelWidth, panelHeight, roofWidth, 
    roofHeight, rowSpacing, columnSpacing, edgeSpacing) {

    // copy over the newly changed inputs using + to convert from string to number
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

    //Get juristiction which is the space around a panel width and hight wise
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

  // for the canvas
  const canvasRef = useRef(null);

  // add coordinanted for each array
  // first coordinant starts at x and y = edgeSpacing from the upper left
  let xCoord = edgeSpacings;
  let yCoord = edgeSpacings;
  for (let i = 0; i < numPanelsTall; i++) {  //for each row 
    for (let j = 0; j < numPanelsWide; j++) {   //each column
      array[i][j] = [xCoord , yCoord];
      xCoord = xCoord + juristictionWidth;
    }
    xCoord = edgeSpacings;
    yCoord = yCoord + juristictionHeight;
  }

  useLayoutEffect( () => {
    //refrence current canvas
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    // clear the canvas on each submit
    ctx.clearRect(0, 0, canvas.width, canvas.height)
 
    // Draw a box around the whole roof for visulization
    ctx.strokeRect(0,0,roofWidths,roofHeights); 

    // Draw green square around USABLE building space 
    var tempBuildWidth =  Math.floor(roofWidths - (edgeSpacings * 2));
    var tempBuildHeight =  Math.floor(roofHeights - (edgeSpacings * 2));
    ctx.fillStyle = "green";  //box inside the outer canvas or grid
    ctx.fillRect(edgeSpacings, edgeSpacings, tempBuildWidth, tempBuildHeight);
  
    // draw the array
    for (let i = 0; i < numPanelsTall; i++) {
      for (let j = 0; j < numPanelsWide; j++) {
        const [tempX,tempY] = array[i][j];
        //draw panel               
        ctx.fillStyle = "red";
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
      </div>
      <div className="Right">
      <canvas ref={canvasRef} width= {canvasWidth} height={canvasHeight} />
        </div>
      </div>
     </>
  );
}
