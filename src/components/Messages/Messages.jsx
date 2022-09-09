import DialogMessages from "./DialogMessages/DialogMessages";
import Dialogs from "./Dialogs/Dialogs";
import classes from "./Messages.module.css";

const Messages = (props) => {
    return (
        <div className={classes.messages}>
            <Dialogs dialogProfileData={props.state.dialogProfileDataEl}/>
            <DialogMessages messagesData={props.state.messagesDataEl} addMessageFunc={props.addMessageFunc}/>
        </div>
    );
}

export default Messages;