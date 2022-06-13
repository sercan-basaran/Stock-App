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
import {
  AracTipi,
  AracMArkasi,
  AracModeli,
  AracYili,
} from "./views/Pages/PanelMEnuForm";
import {
  AracTipiListe,
  AracMArkasiListe,
  AracModeliListe,
  AracYiliListe,
} from "./views/Pages/PanelMEnuListele";

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
            <Route path="form" element={<AracTipi />} />
            <Route path="form1" element={<AracMArkasi />} />
            <Route path="form2" element={<AracModeli />} />
            <Route path="form3" element={<AracYili />} />
            <Route path="liste" element={<AracTipiListe />} />
            <Route path="liste1" element={<AracMArkasiListe />} />
            <Route path="liste2" element={<AracModeliListe />} />
            <Route path="liste3" element={<AracYiliListe />} />
          </Route>
          <Route path="/stockliste" element={<StockListe />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
