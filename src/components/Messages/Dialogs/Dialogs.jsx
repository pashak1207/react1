import DialogProfile from "./DialogProfile/DialogProfile";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            {props.dialogProfileData}
        </div>
    );
}

export default Dialogs;