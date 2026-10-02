

import { motion } from "framer-motion";
import { BackArrow } from "../components/Icons";
import styles from "./styling/getintouch.module.css";

function GetInTouch() {

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.pageContainer}
        >
            <div className={styles.pageHeader}>
                <div className={styles.backButton}><BackArrow size={28} colour="currentColor" /></div>
                <h1>Get in Touch</h1>
            </div>

            <section className={styles.contactBlock} aria-labelledby="contact-heading">
                <p className={styles.eyebrow}>CONTACT S3</p>
                <h2 id="contact-heading">You can talk with us.</h2>
                <p className={styles.contactText}>For questions, enquiries, or just to say hello, send us an email.</p>
                <a className={styles.emailLink} href="mailto:hi.supernova@outlook.com">
                    hi.supernova@outlook.com
                </a>
            </section>
        </motion.div>
    )
};

export default GetInTouch;