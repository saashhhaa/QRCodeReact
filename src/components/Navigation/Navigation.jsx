import { Link } from "react-router-dom";
import "../../main.css";
import "./navigation.css";

export const Navigation = () => {
  return (
    <nav>
      <Link to="/generate" className="nav_link">generator</Link>
      <Link to="/scan" className="nav_link">scanner</Link>
      <Link to="/generateHistory" className="nav_link">generating history</Link>
      <Link to="/scanHistory" className="nav_link">scanning history</Link>
    </nav>
  );
};
