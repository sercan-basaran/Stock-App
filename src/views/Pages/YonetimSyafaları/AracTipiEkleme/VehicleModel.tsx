import axios from "axios";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import {  useState } from "react";

import "./PanelButon.css";


export function VehicleModel() {
  const [name2, setName2]: any = useState();
  return (
    <div className="border p-4">
      <div className="flex ">
        <div className="card" />
        <form className="p-fluid" style={{ marginTop: "-20px" }}>
          <div className="field">
            <span className="p-float-label">
              <h3>Araç Modeli Ekle</h3>
              <InputText
                type="text"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
                className="mt-3"
                style={{width:"600px"}}
              />
            </span>
          </div>
          <Button
            type="submit"
            label="Kaydet"
            className="mt-8"
            style={{ width: "100px", marginLeft: "500px" }}
          />
        </form>
      </div>
    </div>
  );
}