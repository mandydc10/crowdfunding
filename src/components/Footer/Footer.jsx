import { Link } from "react-router-dom";
import './Footer.css';
// import fblogo from '/src/images/fblogo.png';
// import iglogo from '/src/images/instagram_glyph_white.png';
// ^^ spent all submission day trying to fix netlify deploy build errors because of these mofos!!

function Footer() {
    return (
        <footer>
            <div id="socials">
                <Link to="/" >
                    <img src='../src/images/fblogo.png' width="30px" />
                </Link>
                <Link to="/" >
                    <img src='../src/images/instagram_glyph_white.png' width="30px" />
                </Link>
            </div>
            <p>&#169; Communitarian 2023</p>
        </footer >
    );
}

export default Footer;