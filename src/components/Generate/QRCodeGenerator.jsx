// здесь будет вся логика, которая генерирует QR Code

import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import "./qRCodeGenerator.css";
import "../../main.css";
import { GENERATE_DATA} from "../../constants";

export const QRCodeGenerator = () => {
  const [value, setValue] = useState(""); //  useState(''); - по дефолту в инпуте ничего
  // value - обновляемая переменная, setValue - функция

  const [result, setResult] = useState("");

  const onClickHandler = (e) => {
    // событие по клику на кнопку
    setResult(value);
    setValue("");

    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]"); // конвертируем в массив
    localStorage.setItem(
      GENERATE_DATA,
      JSON.stringify([...prevData, value])
    );
  };

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    setResult("");
  };

  return (
    <div className="generateQRCode_container">
      {result !== "" && (
        <QRCodeSVG
          value={result}
          className="QRCode"
          fgColor="#ffffffff"
          bgColor="#000000ff"
        />
      )}
      <input
        type="text"
        value={value}
        onChange={onChangeHandler}
        placeholder="Ваш текст"
      />
      <button type="button" onClick={onClickHandler}>
        Сгенерировать QR
      </button>
    </div>
  );
};
