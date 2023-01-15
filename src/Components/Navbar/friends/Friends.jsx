// import { NavLink } from 'react-router-dom';
import DialogItem from '../../Dialogs/DialogItem/DialogItem';
import classes from './../Navbar.module.css'

const Friends = (props) => {

    // let friendsElement = props.data.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />)

    return (
        <div className={classes.friends}>
            Friends:
            <div className={classes.friendsWrapper}>
                <div className={classes.friendsItem}>
                    <img src='https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366__340.png' />
                    <p>Name</p>
                    {/* <p>{props.names}</p> */}
                    {/* {friendsElement} */}
                </div>
            </div>
        </div>
    )
}

export default Friends;