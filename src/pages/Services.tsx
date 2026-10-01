import styles from "./styling/services.module.css";
import ServiceIntroCard from "../components/ServiceIntroCard";
import { allServices } from "../appData/appData";
import { motion } from "framer-motion";
import { BackArrow } from "../components/Icons";

function Services() {

    // SET UP FOR ENABLING THE CARDS TO RENDER ONE AFTER THE OTHER.
    // THE CARD VARIANTS ARE IN THE CARD COMPONENT.
    const containerVariants = {
        hidden: {}, 
        visible: { 
            transition: { 
                delayChildren: 0.5, 
                staggerChildren: 0.15 
            } 
        }
    };

    return (
        <div className={styles.pageContainer}>
            <header className={styles.pageHeader}>
                <BackArrow size={28} colour="var(--primary-color)" />
                <div>
                    <p className={styles.eyebrow}>WHAT WE BUILD</p>
                    <h1>Solutions &amp; Services</h1>
                </div>
            </header>

            <motion.p 
            className={styles.intro}
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}>
                We build practical software that solves real problems. Each service applies technology with care to make everyday work simpler, more effective, and more interesting.
            </motion.p>

            <motion.div 
            className={styles.servicesSection} 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible">
                { allServices.map((service) => (
                    <ServiceIntroCard key={service.nameAsString} serviceInfo={service} />
                )) }
            </motion.div>
        </div>
    )
};

export default Services;