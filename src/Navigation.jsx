import { Link } from "react-router-dom";
import './main.css';
import './navigation.css';

export const Navigation = () => {
    return (
        <nav>
            <Link to="/generate">qr generator</Link>
            <Link to="scan">qr scanner</Link>
            <Link>история сканирования</Link>
            <Link>история генерирования</Link>
        </nav>
    )
}