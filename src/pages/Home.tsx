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
                    {/* <p className={styles.heroEyebrow}>GOOD PEOPLE. POWERFUL SOFTWARE.</p> */}
                    <motion.h1 
                    initial={{ y: 20 }} 
                    animate={{ y: 0 }} 
                    transition={{ duration: 0.6 }}>Great software starts with people.</motion.h1>
                    <p className={styles.heroCopy}>Building useful, powerful tools and services for the betterment of human lives.</p>
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
                    <p className={styles.sectionLabel}>01 / HI THERE!</p>
                    <div className={styles.sectionCopy}>
                        <h2>Thoughtful by design. Powerful by nature.</h2>
                        <p>S3 is a provider of software and digital services that make everyday life and work easier, 
                            more effective, and more interesting. We believe digital technology should make life 
                            better and work more effectively, so we bring intention, human consideration and a high 
                            standard of engineering to everything we create.</p>
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
                        <p>TrueHealth is a modern healthcare data management system connecting hospitals, individuals, and HMOs. Thoughtful features and powerful data engineering help the people and institutions who depend on health data put it to better use.</p>
                            
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
                        <h2>Professional execution and design.</h2>
                        <p>We work with individuals, organizations, and governments to turn real needs into reliable software. Bring us your idea or challenge—we’ll listen, think it through with you, and build something made to work in the real world.</p>
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