// здесь будет вся логика, которая генерирует QR Code

import { QRCodeSVG } from "qrcode.react";

export const QRCodeGenerator = () => {
  return (
    <div>
      <QRCodeSVG value="я тебя люблю :3" />
    </div>
  );
};
