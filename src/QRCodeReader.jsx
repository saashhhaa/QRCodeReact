import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import "./qRCodeReader.css";
import './main.css';

export const QRCodeReader = () => {
  const [scanned, setScanned] = useState(null);

  const scanHandler = (result) => {
    setScanned(result[0].rawValue);
    const setViability = {};
  };

  return (
    <div className="readQRCode_container">
      <Scanner
        onScan={scanHandler}
        allowMultiple={true}
        components={{ zoom: false }}
        styles={{ container: { width: 400 } }}
      />
      <p className={`scanOutput ${scanned ? "hasValue" : "placeholder"}`}>
        {scanned ? scanned : "Здесь будет ваш скан"}
      </p>
    </div>
  );
};
