//THIS FILE IS NOT USED!!!
import React, { useState, useRef, useEffect } from 'react';

export function PanelDrawing() {
  const [panelWidth, setPanelWidth] = useState(0);
  const [panelHeight, setPanelHeight] = useState(0);
  const [roofWidth, setRoofWidth] = useState(0);
  const [roofHeight, setRoofHeight] = useState(0);
  const [rowSpacing, setRowSpacing] = useState(0);
  const [columnSpacing, setColumnSpacing] = useState(0);
  const [edgeSpacing, setEdgeSpacing] = useState(0);

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //juristiction
    const juristictionWidth = panelWidth + columnSpacing; //expected = 30
    const juristictionHeight = panelHeight + rowSpacing; //expected = 40

    // Calculate the number of panels that will fit on the roof
    const numPanelsWide = Math.floor(((roofWidth - (edgeSpacing*2))+columnSpacing)/juristictionWidth);
    const numPanelsTall = Math.floor((roofHeight - (2 * edgeSpacing) + rowSpacing) / (juristictionHeight));

    //empty array thats filled with total panels possible ie pColumnCount * pRowCount
    var panelsArr = {};
    //expected col(2) by row(4) = 8 panels

    //starting coordinates for the first top right of the box 
    var xCoord = 20;
    var yCoord = 20;
    for (var i = 0; i < numPanelsWide; i++){
        panelsArr[i] = {};
        for (var j = 0; j < numPanelsTall; j++){
            panelsArr[i][j] = {x:xCoord, y:yCoord, status:1}; //status 1 = true, 0 = delete
            yCoord = yCoord + juristictionHeight;
        }
        xCoord = xCoord + juristictionWidth;
        yCoord = 20
    }
    //for visulization of buiilding
    ctx.strokeRect(0,0,roofWidth,roofHeight);
    //for visulization of usable building space on building 
    var tempBuildWidth = roofWidth - (edgeSpacing * 2);
    var tempBuildHeight = roofHeight - (edgeSpacing * 2);
    
    ctx.fillStyle = "green";  //box inside the outer canvas or grid
    ctx.fillRect(edgeSpacing, edgeSpacing, tempBuildWidth, tempBuildHeight);
            
    // Draw the panels on the roof
    for (let i = 0; i < numPanelsTall; i++) {
      for (let j = 0; j < numPanelsWide; j++) {
        var tempX = panelsArr[i][j].x;
        var tempY = panelsArr[i][j].y;
        //draw panel               
        ctx.fillStyle = "blue";
        ctx.fillRect(tempX, tempY, panelWidth, panelHeight);
      
      }
    }
  }, [panelWidth, panelHeight, roofWidth, roofHeight, rowSpacing, columnSpacing, edgeSpacing]);

    return (
      <div>
        <label>
          Panel Width:
          <input type="number" value={panelWidth} onChange={event => setPanelWidth(event.target.value)} />
        </label>
        <label>
          Panel Height:
          <input type="number" value={panelHeight} onChange={event => setPanelHeight(event.target.value)} />
        </label>
        <label>
          Roof Width:
          <input type="number" value={roofWidth} onChange={event => setRoofWidth(event.target.value)} />
        </label>
        <label>
          Roof Height:
          <input type="number" value={roofHeight} onChange={event => setRoofHeight(event.target.value)} />
        </label>
        <label>
        Row Spacing:
          <input type="number" value={rowSpacing} onChange={event => setRowSpacing(event.target.value)} />
        </label>
        <label>
        Column Spacing:
          <input type="number" value={columnSpacing} onChange={event => setColumnSpacing(event.target.value)} />
        </label>
        <label>
        Edge Spacing:
          <input type="number" value={edgeSpacing} onChange={event => setEdgeSpacing(event.target.value)} />
        </label>
        <canvas ref={canvasRef} width={roofWidth} height={roofHeight} />
      </div>
    );
  }