import styles from "./styling/abouts3.module.css";
import { MdOutlineLightMode as InnovateIcon } from "react-icons/md";
import { RiHandHeartLine as SimpleIcon } from "react-icons/ri";
import { BsBarChart as ScalabilityIcon } from "react-icons/bs";
import { FiCheckCircle as SolutionsIcon } from "react-icons/fi";
import { BackArrow } from "../components/Icons";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";



function AboutS3() {

    const navigate = useNavigate();
    const openServices = () => navigate("/services");


    // CARD ANIMATION PROPERTIES.
    const attributesContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
    };

    const attributeCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    };

    return (
        <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={styles.pageContainer}>
            <div className={styles.pageHeader}>
                <BackArrow size={28} colour="var(--primary-color)" />
            
                <motion.h1 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.3 }}
                className={styles.pageTitle}>Modern Software Built With Intention</motion.h1>
            </div>
            

            <p className={styles.aboutText}> 
                <b>Supernova Software Services</b> (S3) is a digital services enterprise, 
                dedicated to the availability of useful software. Our approach to engineering and 
                design is shaped by a few principles that guide everything we build.
            </p>

            <motion.div
                className={styles.attributesContainer}
                variants={attributesContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div
                    className={styles.solutionsDiv}
                    variants={attributeCardVariants}
                >
                    <div className="iconDiv"><SolutionsIcon size={40} /></div>
                    
                    <h2>Solution-oriented.</h2>
                    <p>Most of our services address specific problems. 
                        One of our favourite ways to build is by first identifying real issues in a particular 
                        field, then developing an effective fix for it, making many of our services solutions-based 
                        by default. S3 is a problem-solving enterprise, 
                        and our products reflect this approach. We focus on what needs to be solved, 
                        then build what is needed to solve it.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.innovateDiv}
                    variants={attributeCardVariants}
                >
                    <div className="iconDiv"><InnovateIcon size={40} /></div>
                    
                    <h2>Innovation & Intelligence.</h2>
                    <p>We aren't afraid to try new things. Creating something new comes with uncertainty. 
                        You cannot always know how a product or service will be received, how widely it will be 
                        adopted, or how well it will perform in the real world. But when we believe in an 
                        idea, we stay with it. We refine, test it, and keep working until it's 
                        come to life. We believe good and innovative products should ultimately speak 
                        for themselves, and we are always looking to build more ways to achieve things smartly.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.simpleDiv}
                    variants={attributeCardVariants}
                >
                    <div className="iconDiv"><SimpleIcon size={40} /></div>
                    
                    <h2>Ease of Use.</h2>
                    <p>The shortest path between an idea and execution is often the simplest one. 
                        Why make something complicated when the same result can be achieved more simply? At S3, 
                        ease of use is a priority in everything we design. When building software, our first goal 
                        is effectiveness: let it work. Then, make that working solution easy to get a hang of. We deliberately 
                        look for the simplest way to give people access to the results they need, without adding 
                        more than is necessary.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.scalableDiv}
                    variants={attributeCardVariants}
                >
                    <ScalabilityIcon size={40} />
                    <h2>Scalability & Security.</h2>
                    <p>Our services are built for real-world use. They are designed to support multiple users, 
                        handle heavy workloads, and remain reliable as demand grows. Whether a service is being 
                        used by a few people or many at once, we build with performance, scalability, and security in mind. 
                        We set up secure infrastructure to handle the movement of data, and follow 
                        industry best practices to ensure our offerings are elegant on the outside yet rugged on the inside.</p>
                </motion.div>

            </motion.div>
            <br />

            <div className={styles.checkOutDiv}>
                <p>View Our Powerful Software Offerings</p>
                <button onClick={openServices}>Browse Our Services</button>
            </div>

        </motion.div>
    )
};

export default AboutS3;