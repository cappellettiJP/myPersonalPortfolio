import styles from './about.module.css';
import image from '../img/img_portada1.jpg'
import btnstyles from './button.module.css'

const About = () => {
    return (
        <section className={styles.about} id='about'>
            <div className={styles.imgabout}>
                <img src={image}></img>
            </div>
            <div>
            <div className={styles.aboutcontent}>
                <h2 className={styles.heading}>About <span>Me</span></h2>
                <h3>Frontend Developer!</h3>
                <h3>Integrador de Sistemas de Seguridad</h3>
                <p>Mi nombre es Juan Pablo actualmente me encuentro cursando una carrera en desarrollo
                    Web FullStack, lo que me ha permitido adquirir Soft y HardSkills en el ámbito de la programación.<br></br>
                    Mi interés por la programación Web ha ido en aumento a lo largo de los años y estoy enfocado en
                    seguir desarrollando mi conocimiento y habilidades en este área. <br></br>
                    Soy emprendedor y propietario de
                    una empresa especializada en instalaciones de alarmas, cámaras de seguridad, alarmas de incendio y
                    redes cableadas e inalámbricas.</p>
            </div>
            <button href="#" className={btnstyles.btn}>Read More</button>
            </div>
        </section>
    );
}

export default About