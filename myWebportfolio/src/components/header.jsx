import styles from './header.module.css';

const Header = () => {
    return (
    <header className={styles.header}>
        <a href='#' className={styles.logo}>My Portfolio</a>
        <nav className={styles.navbar}>
            <a href='#home' className={styles.active}>Home</a>
            <a href='#about'>About</a>
            <a href='#services'>Services</a>
            <a href='#portfolio'>Portfolio</a>
            <a href='#contact'>Contact</a>
        </nav>
    </header>)

    
}
export default Header