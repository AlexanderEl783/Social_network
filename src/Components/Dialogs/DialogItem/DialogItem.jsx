import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div>
            <div className={`${classes.dialog} ${classes.active}`}>
                <img src='https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366__340.png' />
                <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>

            </div>
        </div>
    )
}

export default DialogItem;