import axios from "axios";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useEffect, useState } from "react";

export function VehicleBrandList() {
  const [vehiclebrand, setVehicleBrand]: any = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/core/category/list/")
      .then((res) => setVehicleBrand(res.data))
      .catch((error) => console.log(error));
  });
  return (
    <div>
      <DataTable value={vehiclebrand} responsiveLayout="scroll">
        <Column header="Vehicle"></Column>
        <Column></Column>
        <Column></Column>
      </DataTable>
      {vehiclebrand.map((vehicles: any, id: any) => (
        <div key={id}>{vehicles.categoryName}</div>
      ))}
    </div>
  );
}
