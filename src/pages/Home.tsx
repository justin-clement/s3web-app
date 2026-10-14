import { useNavigate } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";
import { trueHealthProps } from "../appData/appData";
import styles from "./styling/home.module.css";

const sectionRevealVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function Home() {

    const navigate = useNavigate();
    const imageUrl = 'https://res.cloudinary.com/w3s14ry4/image/upload/f_auto,q_auto/IMG_5087_dz5y93.jpg'

    return (
        <div className={styles.homePage}>
            <motion.section
                className={styles.landingSection}
                style={{ backgroundImage: `linear-gradient(90deg, rgb(14 31 27 / 74%) 0%, rgb(14 31 27 / 34%) 55%, rgb(14 31 27 / 8%) 100%), linear-gradient(0deg, rgb(12 24 21 / 35%), transparent 45%), url("${imageUrl}")` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className={styles.heroContent}>
                    <motion.h1 
                    initial={{ y: 20 }} 
                    animate={{ y: 0 }} 
                    transition={{ duration: 0.6 }}>Modern software built for the future.</motion.h1>
                    <p className={styles.heroCopy}>We specialize in the design of useful, powerful systems for better ways to live and work.</p>
                </div>
            </motion.section>

            <motion.section
                className={styles.midSection}
                variants={sectionRevealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className={styles.sectionInner}>
                    <p className={styles.sectionLabel}>01 / INTRODUCTION</p>
                    <div className={styles.sectionCopy}>
                        <h2>Precise Technology.</h2>
                        <p>S3 is a provider of digital services and software solutions for making human living 
                            easier, more effective or more interesting. 
                            We believe digital technology should make life better and work more effectively, so we bring 
                            intention, human consideration and a high standard of engineering to everything we create.</p>
                        <button className={styles.primaryButton} onClick={() => navigate("/services")}>
                            View our services <IoArrowForward aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </motion.section>

            <motion.section
                className={styles.highlightedServiceSection}
                variants={sectionRevealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className={styles.highlightInner}>
                    <div className={styles.highlightCopy}>
                        <p className={styles.sectionLabel}>02 / FEATURED SERVICE</p>
                        <h2>Healthcare data, running on powerful infrastructure.</h2>
                        <p>TrueHealth is a modern healthcare data management system bringing hospitals, individuals, 
                            and HMOs into one deeply connected network. With its suite of useful features and awesome data engineering, 
                            health data can now do so much more for the people and institutions that depend on it.</p>
                            
                        <button className={styles.primaryButton} onClick={() => navigate(`/services/${trueHealthProps.nameAsString}`)}>
                            Explore TrueHealth <IoArrowForward aria-hidden="true" />
                        </button>
                    </div>
                    <div className={styles.highlightVisual}>
                        {trueHealthProps.name}
                    </div>
                </div>
            </motion.section>

            <motion.section
                className={styles.moreOnUs}
                variants={sectionRevealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className={styles.moreInner}>
                    <p className={styles.sectionLabel}>03 / ABOUT S3</p>
                    <div className={styles.moreCopy}>
                        <h2>Professional Design and Execution.</h2>
                        <p>Our tools and services are made for individuals, organizations, and governments. 
                            If it's built by S3, then it works and works well, highly adaptible to various 
                            conditions.
                        </p>
                        <button className={styles.secondaryButton} onClick={() => navigate("/about")}>
                            More about us <IoArrowForward aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </motion.section>
        </div>
    )
};

export default Home;