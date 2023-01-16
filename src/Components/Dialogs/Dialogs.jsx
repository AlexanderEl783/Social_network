import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Messages from './Messages/Messages';
import React from 'react';



const Dialogs = (props) => {
    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let text = newMessageElement.current.value;
        props.addNewMessage(text);
    }

    let dialogsElement = props.data.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />)
    let messagesElement = props.data.messages.map((m) => <Messages message={m.message} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                <div className={classes.messagesArea}>
                    {messagesElement}
                </div>
                <div>
                    <textarea ref={newMessageElement} placeholder='Text here...'></textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div >
    )
}

export default Dialogs;