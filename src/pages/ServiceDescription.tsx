import { useParams } from "react-router-dom";
import { allServices } from "../appData/appData";
import { BackArrow } from "../components/Icons";
import styles from "./styling/servicedescription.module.css";
import { motion } from "framer-motion";

function ServiceDescription() {

    const { serviceName } = useParams();
    const serviceDetails = allServices.find((service) => service.nameAsString === serviceName);

    return (
        <motion.main 
            className={styles.pageContainer}
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            exit={{ y: 30 }}
            transition={{ duration: 0.3 }}
        >
            <div className={styles.pageHeader}>
                <BackArrow size={28} colour="var(--primary-color)" />
                <p>Solutions &amp; Services</p>
            </div>

            {serviceDetails ? (
                <section className={styles.detailLayout}>
                    <div className={styles.descriptionColumn}>
                        <p className={styles.eyebrow}>SERVICE OVERVIEW</p>
                        <h1>{serviceDetails.nameAsString}</h1>
                        <div className={styles.descriptionText}>{serviceDetails.description}</div>
                    </div>

                    <aside className={styles.serviceIdentity}>
                        <div className={styles.serviceLogo}>{serviceDetails.name}</div>
                        <p>{serviceDetails.summary}</p>
                    </aside>

                    <button className={styles.detailButton} type="button" disabled>
                        More details coming soon
                    </button>
                </section>
            ) : (
                <section className={styles.notFound}>
                    <h1>Service not found</h1>
                    <p>This service may have moved or is no longer available.</p>
                </section>
            )}
        </motion.main>
    )
};

export default ServiceDescription;