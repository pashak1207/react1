import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><NavLink className={(state)=> state.isActive ? classes.active : ""} to="/profile">Profile</NavLink></li>
                <li><NavLink className={(state)=> state.isActive ? classes.active : ""} to="/message">Message</NavLink></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Nav;