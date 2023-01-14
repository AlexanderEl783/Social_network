import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div>
            <div className={`${classes.dialog} ${classes.active}`}>
                <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem;