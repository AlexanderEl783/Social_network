import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

// присвоение класса при нажатии на ссылку
const setActive = (navData) => navData.isActive ? classes.active : classes.item;

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/Profile' className={setActive}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/Dialogs' className={setActive}>Dialogs</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/News' className={setActive}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/Music' className={setActive}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/Settings' className={setActive}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
