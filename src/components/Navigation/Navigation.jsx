import { Link } from "react-router-dom";
import "../../main.css";
import "./navigation.css";

export const Navigation = () => {
  return (
    <nav>
      <Link to="/QRCodeReact/generate" className="nav_link">генератор</Link>
      <Link to="/QRCodeReact/scan" className="nav_link">сканер</Link>
      <Link to="/QRCodeReact/generateHistory" className="nav_link">история генерации</Link>
      <Link to="/QRCodeReact/scanHistory" className="nav_link">история сканирования</Link>
    </nav>
  );
};
