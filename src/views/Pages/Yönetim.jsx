import PanelMEnu from "./PanelMEnu";
import { Outlet } from "react-router-dom";

function Yönetim() {
  return (
    <div>
      <div className="grid">
        <div className="col-3">
          <PanelMEnu />
        </div>
        <div className="col-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Yönetim;
