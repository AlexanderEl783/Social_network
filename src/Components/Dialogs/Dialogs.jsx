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

const dialogsData = [
    { id: 1, name: 'Alex' },
    { id: 2, name: 'John' },
    { id: 3, name: 'Lucy' },
    { id: 4, name: 'Tom' },
    { id: 5, name: 'Dwain' },
]

const messagesData = [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'How are you' },
    { id: 3, message: 'Yo' },
]

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
            </div>

            <div className={classes.messages}>
                <Messages message={messagesData[0].message} />
                <Messages message={messagesData[1].message} />
                <Messages message={messagesData[2].message} />
            </div>
        </div >
    )
}

export default Dialogs;