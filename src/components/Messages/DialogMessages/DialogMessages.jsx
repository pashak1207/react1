import classes from "./DialogMessages.module.css";
import DialogMessagesItem from "./DialogsMaessagesItem/DialogMessagesItem";

const DialogMessages = (props) => {
    let messagesData = props.messagesData.map(el => <DialogMessagesItem text={el.text}/>);
    return (
        <div className={classes.dialogMessages}>
            {messagesData}
        </div>
    );
}

export default DialogMessages;