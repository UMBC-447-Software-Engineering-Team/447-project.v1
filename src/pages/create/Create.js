import { useState } from "react";

import Form from "../../components/Form"
import PanelDrawing from "../../components/PanelDrawing"
import ReactDOM from 'react-dom/client';




export default function Create() {

    return (

      <>
      <div className="main">
      <div className="Left">
        <Form />
      </div><div className="Right">
          <PanelDrawing />

        </div>
      </div>
     </>
   
     
    )
  }

