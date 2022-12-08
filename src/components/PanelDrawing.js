

  import React, { useLayoutEffect, useState } from "react";
  //canvas size does not change
  let canvasWidth = 600;
  let canvasHeight = 600;
  
  //user input width = 10 ft -> 120 in
  //user input height = 12 ft -> 144 in
  //scale height and width 1 unit = 1 in
  
  let buildingWidth = 600;
  let buildingHeight = 600;
  
  //panel size based on user selection
  //using let - cant reassign variable 
  let panelWidth = 20;
  let panelHeight = 10;
  
  //spacing 
  var sBuildingEdge = 20;
  var sPanelRow = 30;
  var sPanelCol = 10;
  
  //juristiction
  var juristictionWidth = panelWidth + sPanelCol; //expected = 30
  var juristictionHeight = panelHeight + sPanelRow; //expected = 40
  
  //how many calculation 
  //(buildingWidth(100) - (sBuildingEdge(20)*2))/juristictionWidth
  //(buildingHeight(170) - (sBuildingEdge(20)*2))/juristictionHeight
  //How many rows and columns of panel juristiction 
  var pColumnCount  = Math.floor(((buildingWidth - (sBuildingEdge*2))+sPanelCol)/juristictionWidth); //expected 2
  var pRowCount= Math.floor(((buildingHeight - (sBuildingEdge*2))+sPanelRow)/juristictionHeight); //expected 4
  
  //empty array thats filled with total panels possible ie pColumnCount * pRowCount
  var panelsArr = {};
  //expected col(2) by row(4) = 8 panels
  
  //starting coordinates for the first top right of the box 
  var xCoord = 20;
  var yCoord = 20;
  for (var i = 0; i < pColumnCount; i++){
      panelsArr[i] = {};
      for (var j = 0; j < pRowCount; j++){
          panelsArr[i][j] = {x:xCoord, y:yCoord, status:1}; //status 1 = true, 0 = delete
          yCoord = yCoord + juristictionHeight;
      }
      xCoord = xCoord + juristictionWidth;
      yCoord = 20
  }
  
  const View = ({ data }) => {
      //get values from form and save into numbers needed
      const buildingWidth = data?.buildingWidth
      const buildingHeight = data?.buildingHeight
      const panelWidth = data?.panelWidth
      const panelHeight = data?.panelHeight
      const sBuildingEdge = data?.sBuildingEdge
      const sPanelRow = data?.sPanelRow
      const sPanelCol = data?.sPanelCol
  
   
      // useLayoutEffect( () => {
      //     const canvas = document.getElementById("panelCan");
      //     const ctx = canvas.getContext("2d");
          
      //     //for visulization of buiilding
      //     ctx.strokeRect(0,0,buildingWidth,buildingHeight);
      //     //for visulization of usable building space on building 
      //     var tempBuildWidth = buildingWidth - (sBuildingEdge * 2);
      //     var tempBuildHeight = buildingHeight - (sBuildingEdge * 2);
  
      //     ctx.fillStyle = "green";  //box inside the outer canvas or grid
      //     ctx.fillRect(sBuildingEdge, sBuildingEdge, tempBuildWidth, tempBuildHeight);
          
      //     var xCord = panelsArr[1][2].y
  
      //     for (i = 0; i < pColumnCount; i++){
      //         //in column
      //         for (j = 0; j < pRowCount; j++){
      //             //get x,y cordinates for each panel in row
      //             var tempX = panelsArr[i][j].x;
      //             var tempY = panelsArr[i][j].y;
  
      //             //draw panel               
      //             ctx.fillStyle = "blue";
      //             ctx.fillRect(tempX, tempY, panelWidth, panelHeight);
      //         }
  
      //     }
      //  });
    
  
  
    return (
      // <>
      // <p>buildingWidth: {buildingWidth}</p>
      // <canvas
      //   id="panelCan" 
      //   style={{backgroundColor: '#F5F5DC'}} //outter canvas or grid
      //   width={canvasWidth}
      //   height={canvasHeight}
      // >
      //   Canvas
      // </canvas>
      // </>
  
  <>
      
        <p>buildingWidth: {buildingWidth}</p>  
        <p>buildingHeight: {buildingHeight}</p>
        <p>panelWidth: {panelWidth}</p>
        <p>panelHeight: {panelHeight}</p>
        <p>sBuildingEdge: {sBuildingEdge}</p>
        <p>sPanelRow: {sPanelRow}</p>
        <p>sPanelCol: {sPanelCol}</p>      
      
      </>
    );
  };
  
  export default View;
  
  