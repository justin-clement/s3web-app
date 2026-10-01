import { useNavigate } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";
import { trueHealthProps } from "../appData/appData";
import landscape from "../assets/images/IMG_5087.jpeg";
import styles from "./styling/home.module.css";

const sectionRevealVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function Home() {
    const navigate = useNavigate();

    return (
        <div className={styles.homePage}>
            <motion.section
                className={styles.landingSection}
                style={{ backgroundImage: `linear-gradient(90deg, rgb(14 31 27 / 74%) 0%, rgb(14 31 27 / 34%) 55%, rgb(14 31 27 / 8%) 100%), linear-gradient(0deg, rgb(12 24 21 / 35%), transparent 45%), url("${landscape}")` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className={styles.heroContent}>
                    <h1>Innovative solutions.</h1>
                    <p className={styles.heroCopy}>Thoughtful software for better ways to work and live.</p>
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
                        <h2>Software with purpose.</h2>
                        <p>S3 builds digital solutions for the problems of the modern world. We believe software should make life better and work more effectively, so we bring intention and a high standard of engineering to everything we create.</p>
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
                        <p className={styles.sectionLabel}>02 / FEATURED SOLUTION</p>
                        <h2>Healthcare data, brought together.</h2>
                        <p>TrueHealth is a healthcare data management system built for hospitals, individuals, and HMOs. It is designed to make health information easier to organize and manage across the people and institutions that depend on it.</p>
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
                        <h2>Built with intention.</h2>
                        <p>We believe software should make life better and work effectively.</p>
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