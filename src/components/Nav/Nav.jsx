import classes from "./Nav.module.css";

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Message</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Nav;