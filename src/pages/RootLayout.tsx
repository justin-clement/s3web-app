import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import styles from "./styling/rootlayout.module.css";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop";

function RootLayout() {

    return (
        <div className={styles.layout}>
            <ScrollToTop />
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