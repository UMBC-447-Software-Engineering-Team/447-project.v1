import { useState, useRef } from "react";
import View from "./PanelDrawing";


const Form = () => {
    const [formValues, setFormValues] = useState({
      buildingWidth: "",
      buildingHeight: "",
      panelWidth: "",
      panelHeight: "",
      sBuildingEdge: "",
      sPanelRow: "",
      sPanelCol: ""
    });
    
    const inputFileRef = useRef();

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);

        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        <View data = {formValues} />
    };

    return (
    <>
      <div className="Left">
        <h1>Input Values</h1>
        </div>

        <form id="formu" onSubmit={handleSubmit} className="row">
         
          <div className="c">
            <label>Building Width </label>
            <input
              type="number"
              placeholder="Text input"
              name="buildingWidth"
              value={formValues?.buildingWidth}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label>Building Height</label>
            <input
              type="number"
              placeholder="Text input"
              name="buildingHeight"
              value={formValues.buildingHeight}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label>Panel Width</label>
            <input
              type="number"
              placeholder="Text input"
              name="panelWidth"
              value={formValues.panelWidth}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label>Panel Height</label>
            <input
              type="number"
              placeholder="Text input"
              name="panelHeight"
              value={formValues.panelHeight}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label>Space from Building Edge</label>
            <input
              type="number"
              placeholder="Text input"
              name="sBuildingEdge"
              value={formValues.sBuildingEdge}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label>Panel Row Spacing</label>
            <input
              type="number"
              placeholder="Text input"
              name="sPanelRow"
              value={formValues.sPanelRow}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label>Panel Column Spacing</label>
            <input
              type="number"
              placeholder="Text input"
              name="sPanelCol"
              value={formValues.sPanelCol}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="color-primary">
            Submit
          </button>
        </form>
       
        <View data={formValues} />
        
    </>
  );
};

export default Form;