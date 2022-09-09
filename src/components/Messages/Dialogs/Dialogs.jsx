import DialogProfile from "./DialogProfile/DialogProfile";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
    let dialogProfileData = props.dialogProfileData.map(el => <DialogProfile id={el.id} name={el.name} last={el.last}/>);
    return (
        <div className={classes.dialogs}>
            {dialogProfileData}
        </div>
    );
}

export default Dialogs;