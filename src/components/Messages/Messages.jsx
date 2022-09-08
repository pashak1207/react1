import DialogMessages from "./DialogMessages/DialogMessages";
import Dialogs from "./Dialogs/Dialogs";
import classes from "./Messages.module.css";

const Messages = (props) => {
    return (
        <div className={classes.messages}>
            <Dialogs dialogProfileData={props.dialogProfileData}/>
            <DialogMessages messagesData={props.messagesData}/>
        </div>
    );
}

export default Messages;