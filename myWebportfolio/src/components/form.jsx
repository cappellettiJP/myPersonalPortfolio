import styles from './form.module.css';
import btnstyles from './button.module.css'




const Formulario = () => {
    return (
        <section className={styles.contact} id='contact'> 
        <h2 className='heading'>Contact <span>Me!</span></h2>

        <form action='#'>
            <div className={styles.input_box}>
                <input type='text' placeholder='Full Name'></input>
                <input type='email' placeholder='Email Address'></input>
            </div>
            <div className={styles.input_box}>
                <input type='text' placeholder='Phone Number'></input>
                <input type='text' placeholder='Email Subject'></input>
            </div>
            <textarea name='' id='' cols={30} rows={10} placeholder='Your Message'></textarea>
            <input type='submit' value='Send Message' className={btnstyles.btn}></input>
        </form>
    </section>
    )
}

export default Formulario;