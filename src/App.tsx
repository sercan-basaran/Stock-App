import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDemo from "./views/Card";
import Home from "./views/Home";
import Sidebar from "./views/Sidebar/Sidebar";
import YeniAraçMarkası from "./views/Yeni Araç/YeniAraçMarkası";
import YeniAraç from "./views/Yeni Araç/YeniAraç";
import YeniAraçModeli from "./views/Yeni Araç/YeniAraçModeli";
import YeniKategori from "./views/Yeni Araç/YeniKategori";
import Header from "./views/Navigation/Header";
import { FileUploadDemo } from "./views/FileUpload";
import YeniÜrünEkle from "./views/Pages/YeniÜrünEkle";
import Yönetim from "./views/Pages/Yönetim";
import StockListe from "./views/Pages/StockListe";
import PanelMEnu from "./views/Pages/PanelMEnu";
import {VehicleType} from './views/Pages/YonetimSyafaları/AracTipiEkleme/VehicleType'
import {VehicleBrand} from './views/Pages/YonetimSyafaları/AracTipiEkleme/VehicleBrand'
import {VehicleModel} from './views/Pages/YonetimSyafaları/AracTipiEkleme/VehicleModel'
import {VehicleYears} from './views/Pages/YonetimSyafaları/AracTipiEkleme/VehicleYears'
import {VehicleTypeList} from './views/Pages/YonetimSyafaları/AraçListeleme/VehicleTypeList';
import {VehicleBrandList} from './views/Pages/YonetimSyafaları/AraçListeleme/VehicleBrandList';
import {VehicleModelList} from './views/Pages/YonetimSyafaları/AraçListeleme/VehicleModelList';
import {VehicleYearsList} from './views/Pages/YonetimSyafaları/AraçListeleme/VehicleYearsList';
function App() {
  return (
    <div className="grid">
      <div className="col-12">
        <Header />
      </div>
      <div className="col-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<CardDemo />} />
          <Route path="/yeniarac" element={<YeniAraç />} />
          <Route path="/yeniaracmarkasi" element={<YeniAraçMarkası />} />
          <Route path="/yeniaracmodeli" element={<YeniAraçModeli />} />
          <Route path="/yenikategori" element={<YeniKategori />} />
          <Route path="/side" element={<Sidebar />} />
          <Route path="/header" element={<Header />} />
          <Route path="/upload" element={<FileUploadDemo />} />
          <Route path="/" element={<YeniÜrünEkle />} />
          <Route path="yonetim" element={<Yönetim />}>
            <Route path="ekle" element={<PanelMEnu />} />
            <Route path="form" element={<VehicleType />} />
            <Route path="form1" element={<VehicleBrand />} />
            <Route path="form2" element={<VehicleModel />} />
            <Route path="form3" element={<VehicleYears />} />
            <Route path="liste" element={<VehicleTypeList />} />
            <Route path="liste1" element={<VehicleBrandList />} />
            <Route path="liste2" element={<VehicleModelList />} />
            <Route path="liste3" element={<VehicleYearsList />} />
          </Route>
          <Route path="/stockliste" element={<StockListe />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
