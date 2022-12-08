import { useState } from "react";
import PrettyForm from "../../components/Form"
import PanelDrawing from "../../components/PanelDrawing"
import ReactDOM from 'react-dom/client';



export function Create() {
  const [sum, setSum] = useState(0);


  function handleSubmit(num1, num2) {
    const total = +num1 + +num2;
    setSum(total);
    console.log(`The sum of ${num1} and ${num2} is ${total}.`);
  }

  return (
    <>
 <>
      <div className="main">
      <div className="Left">
     <PrettyForm onSubmit={handleSubmit} />
      </div><div className="Right">
    <p>The sum is: {sum}</p>

        </div>
      </div>
     </>
       
        
        
    
    </>
    
  
  );
}

// AIzaSyBRMZAbu5zpQqLqB8wNz5ntesPcxs0SZkY
