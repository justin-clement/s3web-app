import { useNavigate } from "react-router-dom";
import type { ServiceProps } from "../appData/appData";
import styles from "./styling/serviceintrocard.module.css";
import { motion } from "framer-motion";


function ServiceIntroCard({ serviceInfo }: { serviceInfo: ServiceProps }) {

    const navigate = useNavigate();

    // FUNCTION TO OPEN FULLER DESCRIPTION OF SERVICE.
    const viewService = () => {
        navigate(`/solutions/${serviceInfo.nameAsString}`, { state: { service: serviceInfo.nameAsString } });
    };

    // CARD ANIMATION PROPERTIES.
    const cardVariants = {
        hidden: { opacity: 0, y: 20 }, 
        visible: { opacity: 1, y: 0 }
    }; 


    return (
        <motion.div key={serviceInfo.nameAsString} variants={cardVariants} className={styles.card}>
            {serviceInfo.name}
            <p>{serviceInfo.summary}</p>
            <br />

            <button onClick={viewService}>Know More</button>
        </motion.div>
    )
};

export default ServiceIntroCard;