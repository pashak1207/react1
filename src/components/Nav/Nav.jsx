import classes from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/message">Message</Link></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Nav;