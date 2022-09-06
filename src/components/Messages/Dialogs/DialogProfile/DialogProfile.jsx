import classes from "./DialogProfile.module.css";

const DialogProfile = () => {
    return (
        <div className={classes.dialogProfile}>
            <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="avatar" />
            <div className={classes.text}>
                <h3>Merlyn Menson</h3>
                <p>Sweet Dreams</p>
            </div>
        </div>
    );
}

export default DialogProfile;