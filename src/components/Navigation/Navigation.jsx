import { Link } from "react-router-dom";
import "../../main.css";
import "./navigation.css";

export const Navigation = () => {
  return (
    <nav>
      <Link to="/generate" className="nav_link">генератор</Link>
      <Link to="/scan" className="nav_link">сканер</Link>
      <Link to="/generateHistory" className="nav_link">история генерации</Link>
      <Link to="/scanHistory" className="nav_link">история сканирования</Link>
    </nav>
  );
};
