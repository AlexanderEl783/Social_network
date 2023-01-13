import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={`${classes.dialog} ${classes.active}`}>
                    <NavLink to='/dialogs/1'>Alex</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2'>John</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>Lucy</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/4'>Tom</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/5'>Dwain</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hello</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;