import classes from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={`${classes.dialog} ${classes.active}`}>Alex</div>
                <div className={classes.dialog}>John</div>
                <div className={classes.dialog}>Lucy</div>
                <div className={classes.dialog}>Tom</div>
                <div className={classes.dialog}>Dwain</div>
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