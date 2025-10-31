import { QRCodeGenerator } from "./components/Generate/QRCodeGenerator";
import { QRCodeReader } from "./components/Scan/QRCodeReader";
import { GenerateHistory } from "./components/History/GenerateHistory";
import { ScanHistory } from "./components/History/ScanHistory";
import { Navigation } from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import "./main.css";
import "./history.css";

export const Layout = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        {/* <Route path="/" element={<Navigation/>}> </Route> */}
        <Route path="/QRCodeReact/generate" element={<QRCodeGenerator />} />
        <Route path="/QRCodeReact/scan" element={<QRCodeReader />} />
        <Route path="/QRCodeReact/generateHistory" element={<GenerateHistory />} />
        <Route path="/QRCodeReact/scanHistory" element={<ScanHistory  />} />
      </Routes>
    </div>
  );
};

// export {Layout}; теперь этой функцией могут пользоваться другие файлы
// но также можео экспорт писать сразу перед стрелочной функцией
