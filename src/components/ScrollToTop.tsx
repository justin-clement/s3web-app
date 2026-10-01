import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {

    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPath]);

    return null;
}

export default ScrollToTop;