import styles from './services.module.css';
import btnstyles from './button.module.css';
import { CodeOutlined, SecurityScanOutlined, WifiOutlined } from '@ant-design/icons';

const Services = () => {
    return (
        <section className={styles.services} id='services'>
        <h2 className='heading'>Some <span>Works</span></h2>

        <div className={styles.servicescontainer}>
            <div className={styles.servicesbox}>
                <i className={styles.icon}><CodeOutlined /></i>
                <h3>Web developement</h3>
                <p>Mollit cillum est amet magna occaecat non veniam. Occaecat ullamco cillum eiusmod 
                adipisicing fugiat laborum est et eiusmod minim consequat Lorem amet. Aliquip eu 
                consequat aute excepteur eiusmod.
                </p>
                <a href='#' className={btnstyles.btn}>Read More</a>
            </div>


            <div className={styles.servicesbox}>
                <i className={styles.icon}><SecurityScanOutlined /></i>
                <h3>Sec Sys Integrator</h3>
                <p>Mollit cillum est amet magna occaecat non veniam. Occaecat ullamco cillum eiusmod 
                adipisicing fugiat laborum est et eiusmod minim consequat Lorem amet. Aliquip eu 
                consequat aute excepteur eiusmod.
                </p>
                <a href='#' className={btnstyles.btn}>Read More</a>
            </div>


            <div className={styles.servicesbox}>
                <i className={styles.icon}><WifiOutlined /></i>
                <h3> Networking</h3>
                <p>Mollit cillum est amet magna occaecat non veniam. Occaecat ullamco cillum eiusmod 
                adipisicing fugiat laborum est et eiusmod minim consequat Lorem amet. Aliquip eu 
                consequat aute excepteur eiusmod.
                </p>
                <a href='#' className={btnstyles.btn}>Read More</a>
            </div>
        </div>
        </section>
    )
}
export default Services