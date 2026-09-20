import styles from './styling/appfooter.module.css'

function AppFooter(){

    return (
        <div className={styles.footer}>

            <div className={styles.footerLinks}>
                <p>About S3</p>
                <p>Solutions & Services</p>
                <p>Get in Touch</p>
            </div>
            
            <p>&copy; {new Date().getFullYear()} Supernova Software Services.</p>
        </div>
    )
};

export default AppFooter;