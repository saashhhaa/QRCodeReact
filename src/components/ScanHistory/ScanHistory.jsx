import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import "./ScanHistory.css";
import "../../main.css";
import { SCAN_DATA } from "../../constants";

export const ScanHistory = () => {
      const data = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]"); // конвертируем в массив
    
  return (
    <div className="historyCover">
      {data.map((text) => (
        <div className="cover">
           <QRCodeSVG value={text}></QRCodeSVG>
          <p className="text" key={text}>
            {text}
          </p>
        </div>
      ))}
    </div>
  );
};
