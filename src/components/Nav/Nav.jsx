import { Link } from "react-router-dom";
import './Nav.css'

function Nav(props) {
    const { loggedIn, setLoggedIn } = props

    const handleClick = () => {
        window.localStorage.removeItem("token")
        setLoggedIn(false)
    }

    // Trying to add username to nav after login
    // fetch(`${import.meta.env.VITE_API_URL
    //     }users/${id}`).then((results) => {
    //         return results.json();
    //     })
    //     .then((data) => {
    //         setProject(data);
    //     });

    return (
        <nav>
            <div id="logo">
                <img src="/assets/images/communitarian.png" alt="communitarian-logo" />
            </div>
            <div id="nav-right">
                {!loggedIn && <Link to="/login" className="btn">Log In</Link>}
                {loggedIn && /*<p>Welcome, {user.username}!</p> &&*/ <button onClick={handleClick} className="btn login-btn">Log Out</button>}
                <div id="nav-controls">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/donate" className="nav-link" >Donate</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;