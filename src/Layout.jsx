import { QRCodeGenerator } from "./QRCodeGenerator";
import { QRCodeReader } from "./QRCodeReader";


export const Layout = () => {
  return (
    <div>
      {/* <QRCodeGenerator /> */}
      <QRCodeReader />
    </div>
  );
};

// export {Layout}; теперь этой функцией могут пользоваться другие файлы
// но также можео экспорт писать сразу перед стрелочной функцией
