import { QRCodeGenerator } from "./components/Generate/QRCodeGenerator";
import { QRCodeReader } from "./components/Scan/QRCodeReader";
import { GenerateHistory } from "./components/History/GenerateHistory";
import { ScanHistory } from "./components/History/ScanHistory";
import { Navigation } from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        {/* <Route path="/" element={<Navigation/>}> </Route> */}
        <Route path="/generate" element={<QRCodeGenerator />} />
        <Route path="/scan" element={<QRCodeReader />} />
        <Route path="/generateHistory" element={<GenerateHistory />} />
        <Route path="/scanHistory" element={<ScanHistory  />} />
      </Routes>
    </div>
  );
};

// export {Layout}; теперь этой функцией могут пользоваться другие файлы
// но также можео экспорт писать сразу перед стрелочной функцией
