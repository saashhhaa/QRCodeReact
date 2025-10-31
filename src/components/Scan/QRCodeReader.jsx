import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import "./qRCodeReader.css";
import { SCAN_DATA } from "../../constants";

export const QRCodeReader = () => {
  const [scanned, setScanned] = useState(null);

  const scanHandler = (result) => {
    setScanned(result[0].rawValue);
    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]"); // конвертируем в массив
    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue])
    ); // JSON чтобы записывать данные как массив, ведь локал сторадж записывает все как строчку
  };

  return (
    <div className="readQRCode_container">
      <Scanner
        onScan={scanHandler}
        allowMultiple={false}
        components={{ zoom: false }}
        styles={{ container: { width: 400 } }}
      />
      <p className={`scanOutput ${scanned ? "hasValue" : "placeholder"}`}>
        {scanned ? scanned : "Здесь будет ваш скан"}
      </p>
    </div>
  );
};
