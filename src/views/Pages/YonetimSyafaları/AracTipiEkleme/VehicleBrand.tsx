
import axios from "axios";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import {  useState } from "react";
import "./PanelButon.css";

export function VehicleBrand() {
    const [aracmodel, setAracModel]: any = useState([]);
  
    const onSubmit = (data: any) => {
      axios.post("http://localhost:8000/core/marka/create/", {
        markaName: aracmodel,
      });
    };
    return (
      <div className="border p-4">
        <div className="flex ">
          <div className="card" />
          <div className="p-fluid" style={{ marginTop: "-20px" }}>
            <div className="field">
              <span className="p-float-label">
                <h3>Araç Markası Ekle</h3>
                <InputText
                  id="model"
                  name="model"
                  type="text"
                  value={aracmodel}
                  onChange={(e) => setAracModel(e.target.value)}
                  className="mt-3"
                  style={{width:"600px"}}
                />
              </span>
              {aracmodel}
            </div>
            <Button
              onClick={onSubmit}
              label="Kaydet"
              className="mt-8"
              style={{ width: "100px", marginLeft: "500px" }}
            />
          </div>
        </div>
      </div>
    );
  }