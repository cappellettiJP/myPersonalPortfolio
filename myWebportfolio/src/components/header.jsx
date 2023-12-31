import styles from './header.module.css';
import { NavLink } from 'react-router-dom'


const Header = () => {

    return (
    <header className={styles.header} id='header'>
        <a href='#' className={styles.logo}>My Portfolio</a>
        <nav className={styles.navbar}>
            <NavLink 
            to='/home' 
            className={({ isActive, isPending }) => 
            isActive 
            ? styles.active 
            : isPending 
            ? styles.pending 
            : ''
            }>Home</NavLink>
            <NavLink to='/about' className={({ isActive, isPending }) => 
            isActive 
            ? styles.active 
            : isPending 
            ? styles.pending 
            : ''
            }>About</NavLink>
            <NavLink to='/services' className={({ isActive, isPending }) => 
            isActive 
            ? styles.active 
            : isPending 
            ? styles.pending 
            : ''
            }>Services</NavLink>
            <NavLink to='/portfolio' className={({ isActive, isPending }) => 
            isActive 
            ? styles.active 
            : isPending 
            ? styles.pending 
            : ''
            }>Portfolio</NavLink>
            <NavLink to='/contact' className={({ isActive, isPending }) => 
            isActive 
            ? styles.active 
            : isPending 
            ? styles.pending 
            : ''
            }>Contact</NavLink>
        </nav>
    </header>
    )
}
export default Header