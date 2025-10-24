import { QRCodeSVG } from "qrcode.react";
import "../../history.css";
import "../../main.css";
import { GENERATE_DATA } from "../../constants";

export const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]"); // конвертируем в массив
  // console.log(data);
  return (
    <div className="historyCover">
      {data.map((text) => (
        <div className="cover">
          <p className="text" key={text}>{text}</p>
          <QRCodeSVG value={text}></QRCodeSVG>
        </div>
      ))}
    </div>
  );
};
