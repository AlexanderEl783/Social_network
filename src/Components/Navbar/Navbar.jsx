import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <a href='/Profile'>Profile</a>
            </div>
            <div className={classes.item}>
                <a href='/Dialogs'>Dialogs</a>
            </div>
            <div className={classes.item}>
                <a href='/News'>News</a>
            </div>
            <div className={classes.item}>
                <a href='/Music'>Music</a>
            </div>
            <div className={classes.item}>
                <a href='Settings'>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;
