import { Link } from "react-router-dom";
import './Nav.css'

function Nav() {
    return (
        <nav>
            <div id="logo">
                <img src="public/images/Communitarian.png" alt="communitarian-logo" />
            </div>
            <div id="nav-right">
                <Link to="/" >Log in | Sign up</Link>
                <div id="nav-controls">
                    <Link to="/" >Home</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;