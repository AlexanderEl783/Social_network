import classes from './../Navbar.module.css'

const Friends = (props) => {

    return (
        <div className={classes.friendsItem}>
            <img src='https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366__340.png' />
            <p>{props.name}</p>
        </div>
    )
}

export default Friends;