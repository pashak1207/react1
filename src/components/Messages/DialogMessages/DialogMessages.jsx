import React from 'react';
import classes from "./DialogMessages.module.css";
import DialogMessagesItem from "./DialogsMaessagesItem/DialogMessagesItem";

const DialogMessages = (props) => {
    let messagesData = props.messagesData.map(el => <DialogMessagesItem text={el.text}/>);

    let newMessage = React.createRef();

    let addMessageFunc = ()=>{
        let text = newMessage.current.value;
        props.addMessageFunc(text);
    }
    return (
        <div className={classes.dialogMessages}>
            {messagesData}
            <div className={classes.addPost}>
                <textarea ref={newMessage}></textarea>
                <button onClick={addMessageFunc}>Send</button>
            </div>
        </div>
    );
}

export default DialogMessages;