import { motion } from "framer-motion";


function PopupText({ text, colour }: { text: string, colour: string }) {

    return (
        <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
        style={{ color: colour }}
        >{text}</motion.p>
    )
};

export default PopupText;