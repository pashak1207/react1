import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://www.svgrepo.com/show/303123/bmw-logo.svg" alt="" />
            <h2>BMW Company</h2>
        </header>
    );
}

export default Header;