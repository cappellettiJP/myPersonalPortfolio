import styles from './portfolio.module.css';
import { GithubOutlined } from '@ant-design/icons';
import image from '../img/desk.jpg'

const Portfolio = () => {
    return (
        <section className={styles.portfolio} id='portfolio'>
            <h2 className='heading'>Latest <span>Projects</span></h2>

            <div className={styles.container}>
                <div className={styles.box}>
                    <img src={image} alt=''></img>
                    <div className={styles.layer}>
                        <h4>Web Design</h4>
                        <p>Lorem velit sint cillum reprehenderit consectetur magna ea proident exercitation sint.</p>
                        <a href='#'><GithubOutlined /></a>
                    </div>
                </div>

                <div className={styles.box}>
                    <img src={image} alt=''></img>
                    <div className={styles.layer}>
                        <h4>Web Design</h4>
                        <p>Lorem velit sint cillum reprehenderit consectetur magna ea proident exercitation sint.</p>
                        <a href='#'><GithubOutlined /></a>
                    </div>
                </div>

                <div className={styles.box}>
                    <img src={image} alt=''></img>
                    <div className={styles.layer}>
                        <h4>Web Design</h4>
                        <p>Lorem velit sint cillum reprehenderit consectetur magna ea proident exercitation sint.</p>
                        <a href='#'><GithubOutlined /></a>
                    </div>
                </div>

                <div className={styles.box}>
                    <img src={image} alt=''></img>
                    <div className={styles.layer}>
                        <h4>Web Design</h4>
                        <p>Lorem velit sint cillum reprehenderit consectetur magna ea proident exercitation sint.</p>
                        <a href='#'><GithubOutlined /></a>
                    </div>
                </div>

                <div className={styles.box}>
                    <img src={image} alt=''></img>
                    <div className={styles.layer}>
                        <h4>Web Design</h4>
                        <p>Lorem velit sint cillum reprehenderit consectetur magna ea proident exercitation sint.</p>
                        <a href='#'><GithubOutlined /></a>
                    </div>
                </div>

                <div className={styles.box}>
                    <img src={image} alt=''></img>
                    <div className={styles.layer}>
                        <h4>Web Design</h4>
                        <p>Lorem velit sint cillum reprehenderit consectetur magna ea proident exercitation sint.</p>
                        <a href='#'><GithubOutlined /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;