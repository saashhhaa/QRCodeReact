// здесь будет вся логика, которая генерирует QR Code

import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

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
    <div>
      <input type="text" value={value} onChange={onChangeHandler} />
      <button type="button" onClick={onClickHandler}>
        Сгенерировать QR
      </button>
       {result!== '' && <QRCodeSVG value={result} />}; 
     
    </div>
  );
};
