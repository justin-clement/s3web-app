import { useNavigate } from 'react-router-dom';
import styles from './styling/appheader.module.css'
import { motion } from 'framer-motion'

function AppHeader() {

    const navigate = useNavigate();
    const goHome = () => navigate("/");

    return (
        <div className={styles.header}>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                onClick={goHome}
                style={{ cursor: "pointer" }}
            >
                S3
            </motion.h1>
        </div>
    )
};

export default AppHeader;