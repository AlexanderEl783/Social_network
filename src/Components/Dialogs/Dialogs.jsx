import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div>
            <div className={`${classes.dialog} ${classes.active}`}>
                <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            </div>
        </div>
    )
}

const Messages = (props) => {
    return (<div className={classes.message}>{props.message}</div>)
}

const dialogs = [
    { id: 1, name: 'Alex' },
    { id: 2, name: 'John' },
    { id: 3, name: 'Lucy' },
    { id: 4, name: 'Tom' },
    { id: 5, name: 'Dwain' },
]

let dialogsElement = dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />)

const messages = [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'How are you' },
    { id: 3, message: 'Yo' },
]

let messagesElement = messages.map((m) => <Messages message={m.message} />)

const Dialogs = (props) => {
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