// здесь будет вся логика, которая генерирует QR Code

import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import './qRCodeGenerator.css';
import './main.css';


export const QRCodeGenerator = () => {
  const [value, setValue] = useState(''); //  useState(''); - по дефолту в инпуте ничего
  // value - обновляемая переменная, setValue - функция

  const [result, setResult] = useState('');

  const onClickHandler = (e) => {
    // событие по клику на кнопку
    setResult(value);
    setValue("");
  };

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    setResult('');
  };

  console.log(result);

  return (
    <div className="generateQRCode_container">
      <input type="text" value={value} onChange={onChangeHandler} placeholder="Ваш текст" />
      <button type="button" onClick={onClickHandler}>
        Сгенерировать QR
      </button>
       {result!== '' && <QRCodeSVG value={result} className="QRCode"  fgColor="#0f5daaff" />}; 
     
    </div>
  );
};
