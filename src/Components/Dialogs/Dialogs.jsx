import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Messages from './Messages/Messages';


const Dialogs = (props) => {
    let dialogsElement = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />)
    let messagesElement = props.messages.map((m) => <Messages message={m.message} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
        </div >
    )
}

export default Dialogs;