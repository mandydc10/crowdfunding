import { Link } from "react-router-dom";
import './Footer.css';
import fblogo from '../../../src/images/fblogo.png';
import iglogo from '../../../src/images/instagram_glyph_white.png';

function Footer() {
    return (
        <footer>
            <div id="socials">
                <Link to="/" >
                    <img src={fblogo} width="30px" />
                </Link>
                <Link to="/" >
                    <img src={iglogo} width="30px" />
                </Link>
            </div>
            <p>&#169; Communitarian 2023</p>
        </footer >
    );
}

export default Footer;