import DialogProfile from "./DialogProfile/DialogProfile";
import classes from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <DialogProfile/>
            <DialogProfile/>
        </div>
    );
}

export default Dialogs;