import classes from "./DialogMessages.module.css";
import DialogMessagesItem from "./DialogsMaessagesItem/DialogMessagesItem";

const DialogMessages = (props) => {
    return (
        <div className={classes.dialogMessages}>
            {props.messagesData}
        </div>
    );
}

export default DialogMessages;