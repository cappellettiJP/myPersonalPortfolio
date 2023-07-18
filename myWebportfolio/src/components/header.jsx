import styles from './header.module.css';
import { NavLink } from 'react-router-dom'


const Header = () => {

    return (
    <header className={styles.header} id='header'>
        <a href='#' className={styles.logo}>My Portfolio</a>
        <nav className={styles.navbar}>
            <NavLink to='/home' className={({ isActive }) => (isActive ? styles.active : '')}>Home</NavLink>
            <NavLink to='/about' className={({ isActive }) => (isActive ? styles.active : '')}>About</NavLink>
            <NavLink to='/services' className={({ isActive }) => (isActive ? styles.active : '')}>Services</NavLink>
            <NavLink to='/portfolio' className={({ isActive }) => (isActive ? styles.active : '')}>Portfolio</NavLink>
            <NavLink to='/contact' className={({ isActive }) => (isActive ? styles.active : '')}>Contact</NavLink>
        </nav>
    </header>
    )
}
export default Header