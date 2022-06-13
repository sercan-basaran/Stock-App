import { PanelMenu } from "primereact/panelmenu";
import { useNavigate } from "react-router-dom";


function PanelMEnu() {
    let navigate=useNavigate()
  const items = [
    {
      label: "Araç Tipi",
      icon: "pi pi-car",
      items: [
        {
          label: "Ekle",
          icon: "pi  pi-plus",
          command:()=>{
            navigate("form")
          }
        },

        {
          label: "Liste",
          icon: "pi pi-list",
          command:()=>{
              navigate("liste")
          }
        },
      ],
    },
    {
      label: "Araç MArkası",
      icon: "pi pi-car",
      items: [
        {
          label: "Ekle",
          icon: "pi  pi-plus",
          command:()=>{
            navigate("form1")
          }
        },

        {
          label: "Liste",
          icon: "pi pi-list",
          command:()=>{
            navigate("liste1")
          }
        },
      ],
    },
    {
      label: "Araç Modeli",
      icon: "pi pi-car",
      items: [
        {
          label: "Ekle",
          icon: "pi  pi-plus",
          command:()=>{
            navigate("form2")
          }
        },

        {
          label: "Liste",
          icon: "pi pi-list",
          command:()=>{
            navigate("liste2")
          }
        },
      ],
    },
    {
      label: "Araç Yılı",
      icon: "pi pi-car",
      items: [
        {
          label: "Ekle",
          icon: "pi  pi-plus",
          command:()=>{
            navigate("form3")
          }
        },

        {
          label: "Liste",
          icon: "pi pi-list",
          command:()=>{
            navigate("liste3")
          }
        },
      ],
    },
  ];

  return (
    <div>
      <PanelMenu model={items} style={{ width: "300px" }} />
    </div>
  );
}

export default PanelMEnu;
