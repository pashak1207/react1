import DialogProfile from "./DialogProfile/DialogProfile";
import classes from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <DialogProfile id="1" name="Maks" last="Hi!"/>
            <DialogProfile id="2" name="Vlad" last="Hello!"/>
        </div>
    );
}

export default Dialogs;