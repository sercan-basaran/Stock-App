import axios from "axios";
import { useEffect, useState } from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
export function VehicleTypeList() {
    const [vehicletypes,setVehicleTypes]:any=useState([])
  
    useEffect(()=>{
      axios.get("http://localhost:8000/core/category/list/").then((res)=>{console.log(res);setVehicleTypes(res.data)}
      ).catch(error=>console.log(error)
      )
      
      
    },[])

    const vehiclesget=()=>{
      return(
        <div>
          {vehicletypes.map((vehicles:any,i:any) => <div key={i}>{vehicles.categoryName}</div>)}
        </div>
      )
    }
    return(
      <div className="mt-1">
      <h1>Araç Tipi</h1>
      <DataTable value={vehicletypes} responsiveLayout="scroll">
        <Column header="Vehicle" body={vehiclesget}></Column>
        <Column></Column>
        <Column></Column>
      </DataTable>
    
    </div>
    )
  }
  