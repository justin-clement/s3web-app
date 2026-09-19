import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

function RootLayout() {

    return (
        <div>
            <AppHeader />
            <Outlet />
            <AppFooter />
        </div>
    )
};

export default RootLayout;