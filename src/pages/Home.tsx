import { useNavigate } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";
import { FiCloud, FiGlobe, FiMonitor, FiServer } from "react-icons/fi";
import { trueHealthProps } from "../appData/appData";
import styles from "./styling/home.module.css";

const sectionRevealVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const serviceCardsVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.15,
        },
    },
};

const serviceCardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

const serviceAreas = [
    {
        title: "Web Applications",
        icon: FiGlobe,
        items: ["Smooth, responsive websites", "Custom web applications", "Website redesign", "Business workflow tools (for airlines, retail stores, etc.)"],
    },
    {
        title: "Digital Infrastructure",
        icon: FiServer,
        items: ["Backend design", "APIs and data management systems", "Software solutions architecture", "Scalable digital structures"],
    },
    {
        title: "Desktop Software",
        icon: FiMonitor,
        items: ["Purpose-built desktop apps", "Internal business tools", "Workflow automation", "Data and reporting tools"],
    },
    {
        title: "Cloud Services",
        icon: FiCloud,
        items: ["Cloud infrastructure setup", "Deployment and hosting", "Storage and backups", "Monitoring and maintenance"],
    },
];

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
                    transition={{ duration: 0.6 }}>Modern software, made for you.</motion.h1>
                    {/* <p className={styles.heroCopy}>We build software for human lives.</p> */}
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
                    <p className={styles.sectionLabel}>01 / HELLO.</p>
                    <div className={styles.sectionCopy}>
                        <h2>We are thoughtful by design. Powerful by nature. We are S3.</h2>
                        <p><b>S3</b> provides software and digital services for making everyday life and work easier,
                            more effective, more interesting. We measure good software by how much easier it makes
                            someone's life; if a feature needs a 12-step explanation or a 40-page manual
                            to understand it, it probably wasn't built by us. 
                            We believe digital technology should make life
                            better, so we bring intention, human consideration and a high 
                            standard of engineering to everything we create. We know how to build the good stuff.</p>
                        <button className={styles.primaryButton} onClick={() => navigate("/services")}>
                            View our services <IoArrowForward aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </motion.section>

            <motion.section
                className={styles.whatWeDoSection}
                variants={sectionRevealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                aria-labelledby="what-we-do-heading"
            >
                <div className={styles.whatWeDoInner}>
                    <p className={styles.sectionLabel}>02 / WHAT WE DO.</p>
                    <h2 className={styles.whatWeDoHeading} id="what-we-do-heading">Digital services backed by modern, intuitive technology.</h2>
                    <motion.div
                        className={styles.serviceCards}
                        role="region"
                        aria-label="Our services"
                        tabIndex={0}
                        variants={serviceCardsVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.75 }}
                    >
                        {serviceAreas.map(({ title, icon: Icon, items }) => (
                            <motion.article
                                className={styles.serviceCard}
                                key={title}
                                variants={serviceCardVariants}
                            >
                                <span className={styles.serviceIcon}>
                                    <Icon aria-hidden="true" focusable="false" />
                                </span>
                                <h3>{title}</h3>
                                <ul>
                                    {items.map((item) => <li key={item}>{item}</li>)}
                                </ul>
                            </motion.article>
                        ))}
                    </motion.div>
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
                        <p className={styles.sectionLabel}>03 / OUR FEATURED SERVICE.</p>
                        <h2>Healthcare data, running on powerful infrastructure.</h2>
                        <p>TrueHealth is a modern healthcare data management system connecting hospitals, individuals, and HMOs.
                            Thoughtful features and powerful data engineering help the people and institutions who depend on health data put it to better use.</p>
                            
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
                    <p className={styles.sectionLabel}>04 / OUR APPROACH.</p>
                    <div className={styles.moreCopy}>
                        <h2>Professional execution and design.</h2>
                        <p>We work with you to provide reliable software for your needs. Tell us what you're interested in, we'll
                            think it through with you, and give you a solution that does what you want and does it well. Whether you're an indivdual, 
                            organization or government, we provide software solutions tailored to you.</p>
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