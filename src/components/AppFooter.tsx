import { useNavigate } from 'react-router-dom';
import styles from './styling/appfooter.module.css'

function AppFooter(){

    const navigate = useNavigate();

    const openAbout = () => navigate("/about");
    const openServices = () => navigate("/services");
    const openRequests = () => navigate("/requests");
    const openContact = () => navigate("/contact");

    return (
        <div className={styles.footer}>

            <div className={styles.footerLinks}>
                <p onClick={openAbout}>About S3</p>
                <p onClick={openServices}>Solutions & Services</p>
                <p onClick={openRequests}>Software Request</p>
                <p onClick={openContact}>Get in Touch</p>
            </div>
            
            <p>&copy; {new Date().getFullYear()} Supernova Software Services.</p>
        </div>
    )
};

export default AppFooter;