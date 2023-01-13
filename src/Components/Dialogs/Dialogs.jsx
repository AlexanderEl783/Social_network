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

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name='Alex' id='1' />
                <DialogItem name='John' id='2' />
                <DialogItem name='Lucy' id='3' />
                <DialogItem name='Tom' id='4' />
                <DialogItem name='Dwain' id='5' />
            </div>

            <div className={classes.messages}>
                <Messages message='Hello' />
                <Messages message='How are you' />
                <Messages message='Yo' />
            </div>
        </div >
    )
}

export default Dialogs;