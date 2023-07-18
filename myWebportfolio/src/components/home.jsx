import React from 'react';
import image from '../img/img_portada1.jpg'
import styles from './home.module.css'
import btnstyles from './button.module.css'
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, WhatsAppOutlined } from '@ant-design/icons';

const Home = () => {

    return (
    <div>
        <section className={styles.home} id='home'>
        <div className={styles.homecontent}>
            <h3>Hello, Its Me</h3>
            <h1>Juan Pablo Cappelletti</h1>
            <h3>And I'm a : <span>Frontend Developer</span></h3>
            <p>"Mi nombre es Juan Pablo, actualmente me encuentro cursando una carrera
            en desarrollo Web FullStack, lo que me ha permitido adquirir Soft y HardSkills 
            en el ámbito de la programación"</p>
            
            <div className={styles.socialmedia}>
                <a href='#'><FacebookOutlined /></a>
                <a href='#'><InstagramOutlined /></a>
                <a href='#'><LinkedinOutlined /></a>
                <a href='#'><WhatsAppOutlined /></a>
            </div>
            <button href='#' className={btnstyles.btn}>Download CV</button>
        </div>
        <div className={styles.homeimg}>
            <img src={image}></img>
        </div>
            
        </section>
        </div>

    )
}
export default Home