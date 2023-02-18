import { Link } from "react-router-dom";
import './Nav.css'

function Nav() {
    return (
        <nav>
            <div id="logo">
                <h2 id="nav-title">Communitarian</h2>
                <h3>[ logo ]</h3>
            </div>
            <div id="nav-controls">
                <Link to="/" >Home</Link>
            </div>
        </nav>
    );
}

export default Nav;