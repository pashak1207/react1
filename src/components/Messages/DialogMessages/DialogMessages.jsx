import classes from "./DialogMessages.module.css";
import DialogMessagesItem from "./DialogsMaessagesItem/DialogMessagesItem";

const DialogMessages = () => {
    return (
        <div className={classes.dialogMessages}>
            <DialogMessagesItem text="Hi"/>
            <DialogMessagesItem text="Hello"/>
            <DialogMessagesItem text="How are you?"/>
        </div>
    );
}

export default DialogMessages;