import { useState } from "react";

import Form from "../../components/Form"
import PanelDrawing from "../../components/PanelDrawing"
import ReactDOM from 'react-dom/client';




export default function Create() {

    return (
      <div>   
      <Form/>
      <div className="testing">
      <PanelDrawing/>
      </div>
      </div>
   
     
    )
  }

