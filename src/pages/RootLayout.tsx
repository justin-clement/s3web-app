import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import styles from "./styling/rootlayout.module.css";
import { AnimatePresence } from "framer-motion";

function RootLayout() {

    return (
        <div className={styles.layout}>
            <AppHeader />

            <main className={styles.pageContent}>
                <AnimatePresence>
                    <Outlet />
                </AnimatePresence>
            </main>
            
            <AppFooter />
        </div>
    )
};

export default RootLayout;