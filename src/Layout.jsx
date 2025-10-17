import { QRCodeGenerator } from "./QRCodeGenerator"; 

export const Layout = () => {
    return (
        <div>
  <QRCodeGenerator/>
        </div>
    );
};

// export {Layout}; теперь этой функцией могут пользоваться другие файлы
// но также можео экспорт писать сразу перед стрелочной функцией