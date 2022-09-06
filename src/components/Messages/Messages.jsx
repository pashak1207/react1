import DialogMessages from "./DialogMessages/DialogMessages";
import Dialogs from "./Dialogs/Dialogs";
import classes from "./Messages.module.css";

const Messages = () => {
    return (
        <div className={classes.messages}>
            <Dialogs/>
            <DialogMessages/>
        </div>
    );
}

export default Messages;