import React, { useState } from "react";
import styles from "./styling/softwarerequests.module.css"
import server from "../api";
import PopupText from "../components/PopupText";
import { AnimatePresence, motion } from "framer-motion";
import { BackArrow } from "../components/Icons";

function SoftwareRequests() {

    // STATE FOR STORING VALUES ENTERED IN THE REQUEST FORM.
    const [requestForm, setRequestForm] = useState({
        service_type: "", 
        requirements: "", 
        budget: "", 
        email: ""
    });

    const [requestSuccess, setRequestSuccess] = useState(false);
    const [displayMessage, setDisplayMessage] = useState("");

    // FUNCTION FOR PUTTING IN VALUES IN THE FORM.
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setRequestForm((prev) => ({
            ...prev, 
            [name]: value
        }))
    };

    // FUNCTION FOR SENDING THE CLIENT'S REQUEST TO S3.
    const sendRequest = async () => {

        setDisplayMessage("");
        setRequestSuccess(false);

        if (requestForm.service_type === "" || requestForm.requirements === "") {
            setDisplayMessage("Service type and requirements have to be entered.");
            setTimeout(() => { setDisplayMessage("") }, 2000);
            return;
        };

        try {
            const { data } = await server.post("/requests", requestForm);
            if (data.status) {
                setRequestForm({ service_type: "", requirements: "", budget: "", email: "" });
                setDisplayMessage("We've received your request and we'll contact you after reviewing it.");
                setRequestSuccess(true);
                return;
            } else {
                setDisplayMessage(data.message);
                return;
            };
        } catch {
            setDisplayMessage("An error occurred sending your request. Kindly try again.");
            setTimeout(() => { setDisplayMessage("") }, 2000);
        };
    };

    return (
        <motion.div 
        initial={{ x: 100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={styles.pageContainer}>

            <BackArrow size={30} colour="brown" />

            <div className={styles.contentContainer}>
                <h1>Make a Request</h1>

                <div className={styles.requestArea}>
                    <p>You can request for the development of custom software tailored to your 
                        personal or business needs, whether it's a simple portfolio website, a 
                        multi-tenant web application, an in-house software system or a backend service 
                        running on the cloud. 
                        Kindly specify your exact needs and what the software should be able to do, 
                        then place your request. We'll get in 
                        touch with you soon after with a detailed response to your request, 
                        including feasibility, cost, time to build, technological and design choices. 
                        At the moment, we do not specialize in mobile app development, though we're 
                        currently experimenting with Progressive Web Applications (PWAs).
                    </p>

                    <div className={styles.requestForm}>
                    
                        <label>What kind of service do you want? <br />
                            <select name="service_type" value={requestForm.service_type} onChange={handleChange}>
                                <option value="">--- Select a service type --- </option>
                                <option value="Web App">Full Web Service (website or other web application)</option>
                                <option value="Backend">Backend Design (logic for an application)</option>
                                <option value="Frontend">Frontend Web Interface (visual aspect of website)</option>
                                <option value="Desktop App">Desktop Application (installable software for Windows or Mac)</option>
                                <option value="Cloud">Cloud Hosting (run or deploy a service on the cloud)</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>
                        <br />

                        <label>Explain what you require in clear and complete detail. <br /> 
                            <textarea 
                            rows={10}
                            cols={70}
                            name="requirements" 
                            value={requestForm.requirements} 
                            onChange={handleChange}></textarea>
                        </label>
                        <br />

                        <label>You may include a budget <br />
                            <input name="budget" value={requestForm.budget} onChange={handleChange} />
                        </label>
                        <br />

                        <label>Email we can reach you <br />
                            <input 
                            name="email" 
                            value={requestForm.email} 
                            type="email" 
                            onChange={handleChange} required />
                        </label>
                        <br />

                        <button 
                        className={styles.requestButton}
                        onClick={sendRequest}>Place Request</button>

                        <div style={{ textAlign: "center" }}>
                            <AnimatePresence>
                                {(displayMessage !== "" && requestSuccess === false) && <PopupText text={displayMessage} colour="darkred" />}
                                {(displayMessage !== "" && requestSuccess === true) && <PopupText text={displayMessage} colour="green" />}
                            </AnimatePresence>   
                        </div>

                    </div>
                </div>
            </div>

            

            
        </motion.div>
    )
};

export default SoftwareRequests;