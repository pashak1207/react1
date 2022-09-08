import classes from "./DialogMessagesItem.module.css";

const DialogMessagesItem = (props) => {
    return (
        <div>
            <h2>{props.text}</h2>
        </div>
    );
}

export default DialogMessagesItem;