import styles from "./styling/services.module.css";
import ServiceIntroCard from "../components/ServiceIntroCard";
import { allServices } from "../appData/appData";
import { motion } from "framer-motion";

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
            <h2>Solutions & Services</h2>

            <motion.p 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}>
                Our services are made for a couple of things: solve specific problems, 
                introduce innovative applications of technology but most important, they are designed to make     
                life and living easier, more effective, and also more interesting.
            </motion.p>

            <motion.div 
            className={styles.servicesSection} 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible">
                { allServices.map((service) => (
                    <ServiceIntroCard serviceInfo={service} />
                )) }
            </motion.div>
        </div>
    )
};

export default Services;