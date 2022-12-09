import Form from "../../components/Form"
import React, { useLayoutEffect, useState, useRef } from 'react';






export function Create() {
  let canvasWidth = 1000;
  let canvasHeight = 1000;
  // for testing 20,10,600,600,30,10,20
  const [panelWidths, setPanelWidths] = useState(0);
  const [panelHeights, setPanelHeights] = useState(0);
  const [roofWidths, setRoofWidths] = useState(0);
  const [roofHeights, setRoofHeights] = useState(0);
  const [rowSpacings, setRowSpacing] = useState(0);
  const [columnSpacing, setColumnSpacing] = useState(0);
  const [edgeSpacings, setEdgeSpacings] = useState(0);


  const [juristictionWidth, setJuristictionWidth] = useState(0);
  const [juristictionHeight, setJuristictionHeight]= useState(0);

  const [numPanelsWide, setNumPanelsWide] = useState(0);
  const [numPanelsTall, setNumPanelsTall]= useState(0);

  

  function handleSubmit(panelWidth, panelHeight, roofWidth, 
    roofHeight, rowSpacing, columnSpacing, edgeSpacing) {
    
    
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


    //Get juristiction
    const juristictionWidth =  Math.floor(+panelWidth + +columnSpacing); //expected = 30
    const juristictionHeight =  Math.floor(+panelHeight + +rowSpacing); //expected = 40

    setJuristictionWidth(juristictionWidth); 
    setJuristictionHeight(juristictionHeight);
    // console.log(`The sum of ${panelWidth} and ${columnSpacing} is ${juristictionWidth}.`);


    // Calculate the number of panels that will fit on the roof
    // 600 - 40 = 560 + 10 = 570 / 30
    const numPanelsWide = Math.floor(((+roofWidth - (+edgeSpacing * 2)) + +columnSpacing) /juristictionWidth);
    const numPanelsTall = Math.floor(((+roofHeight - (2 * +edgeSpacing)) + +rowSpacing) / juristictionHeight);
    setNumPanelsWide(numPanelsWide)
    setNumPanelsTall(numPanelsTall)

  

}


  //empty array thats filled with total panels possible ie pColumnCount * pRowCount


  // var xCoord = 20;
  // var yCoord = 20;
  // for (var i = 0; i < numPanelsWide; i++){
  //     panelsArr[i] = {};
  //     for (var j = 0; j < numPanelsTall; j++){
  //         panelsArr[i][j] = {x:xCoord, y:yCoord, status:1}; //status 1 = true, 0 = delete
  //         yCoord = yCoord + juristictionHeight;
  //     }
  //     xCoord = xCoord + juristictionWidth;
  //     yCoord = 20
  // }
  
  const canvasRef = useRef(null);
  // Declare an empty 2D array with rows and columns

    


    // for (let i = 0; i < numPanelsWide; i++){
    //     panelsArr[i] = {};
    //     for (let j = 0; j < numPanelsTall; j++){
    //         panelsArr[i][j] = {x:xCoord, y:yCoord, status:1}; //status 1 = true, 0 = delete
    //         yCoord = yCoord + juristictionHeight;
    //     }
    //     xCoord = xCoord + juristictionWidth;
    //     yCoord = edgeSpacings
    // }


  useLayoutEffect( () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    // clear the canvas on each submit
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // const canvas = document.getElementById("panelCan");
    // const ctx = canvas.getContext("2d");
    
    //for visulization of buiilding
    ctx.strokeRect(0,0,roofWidths,roofHeights); 

    //for visulization of usable building space on building 
    var tempBuildWidth =  Math.floor(roofWidths - (edgeSpacings * 2));
    var tempBuildHeight =  Math.floor(roofHeights - (edgeSpacings * 2));
    
    ctx.fillStyle = "green";  //box inside the outer canvas or grid
    ctx.fillRect(edgeSpacings, edgeSpacings, tempBuildWidth, tempBuildHeight);
 
    // for (let i = 0; i < numPanelsTall; i++) {
    //   for (let j = 0; j < numPanelsWide; j++) {
    //     var tempX = panelsArr[i][j].x;
    //     var tempY = panelsArr[i][j].y;
    //     //draw panel               
    //     ctx.fillStyle = "red";
    //     ctx.fillRect(tempX, tempY, panelWidths, panelHeights);
      
    //   }
    // }
          //starting coordinates for the first top right of the box 
          let xCoord = edgeSpacings;
          let yCoord = edgeSpacings;
    const panelsArr = Array.from(Array(numPanelsWide), () => Array(numPanelsTall));
  // Fill the array with coordinates
  for (let i = 0; i < numPanelsWide; i++) {
    for (let j = 0; j < numPanelsTall; j++) {
      panelsArr[i][j] = [xCoord , yCoord];
      yCoord = yCoord + juristictionHeight;
    }
    yCoord = edgeSpacings;
    xCoord = xCoord + juristictionWidth;
  }
    for (let i = 0; i < numPanelsTall; i++) {
      for (let j = 0; j < numPanelsWide; j++) {
        const [tempX,tempY] = panelsArr[i][j];
        //draw panel               
        ctx.fillStyle = "red";
        ctx.fillRect(tempX, tempY, panelWidths, panelHeights);
      
      }
    }

  });

 

  return (
    <>

      
      <div className="main">
      <div className="Left">
          <Form onSubmit={handleSubmit} />
          {/* console.log(`The sum of ${numPanelsWide} and ${numPanelsTall}.`); */}
      </div>
      <div className="Right">
      {/* <pre>
        {JSON.stringify(panelsArr, null, 1)}
      </pre> */}
      <canvas ref={canvasRef} width= {canvasWidth} height={canvasHeight} />
    
    
        </div>
       
      </div>
  
     </>
       
    
  
  );
}

// AIzaSyBRMZAbu5zpQqLqB8wNz5ntesPcxs0SZkY
