import React, { useState } from "react";
import styles from "./styling/softwarerequests.module.css"
import { createRequest } from "../appData/appFunctions";
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
    const [isSending, setIsSending] = useState(false);

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

        const email = requestForm.email.trim();
        if (
            email.length > 254 ||
            !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
        ) {
            setDisplayMessage("Enter a valid email address.");
            setTimeout(() => { setDisplayMessage("") }, 2000);
            return;
        }

        setIsSending(true);
        try {
            await createRequest({ ...requestForm, email });
            setRequestForm({ service_type: "", requirements: "", budget: "", email: "" });
            setDisplayMessage("We've received your request and we'll contact you after reviewing it.");
            setRequestSuccess(true);
        } catch {
            setDisplayMessage("An error occurred sending your request. Kindly try again.");
            setTimeout(() => { setDisplayMessage("") }, 2000);
        } finally {
            setIsSending(false);
        };
    };

    return (
        <motion.div 
        initial={{ x: 100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={styles.pageContainer}>

            <div className={styles.pageHeader}>
                <div className={styles.backButton}><BackArrow size={28} colour="currentColor" /></div>
                <h1>Make a Request</h1>
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.requestArea}>
                    <div className={styles.requestIntro}>
                        <p>Tell us what you need, who it's for, and what it should do. We take on requests ranging 
                            from portfolio websites and custom web applications to internal business tools and cloud-based backend 
                            services.</p>
                        <p>After reviewing your request, we’ll get back to you with an assessment of feasibility, likely cost and timeline, and our recommended approach.</p>
                        <p>We currently focus on web and desktop software rather than native mobile apps.</p>
                    </div>

                    <div className={styles.requestForm}>

                        <label>What kind of service do you need?
                            <select name="service_type" value={requestForm.service_type} onChange={handleChange}>
                                <option value="">Select a service type</option>
                                <option value="Web App">Website / Web Application</option>
                                <option value="Backend">Backend Design</option>
                                <option value="Frontend">Frontend Design</option>
                                <option value="Desktop App">Desktop App</option>
                                <option value="Cloud">Cloud Services</option>
                                <option value="Hosting">Hosting & Domain Management</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>

                        <label>Requirements
                            <textarea 
                            rows={8}
                            name="requirements" 
                            value={requestForm.requirements} 
                            onChange={handleChange}
                            placeholder="Describe what you want, any problem(s) this is to solve, who will use the software, what features you need. Feel free to include any other information that will help us better understand your request."
                            ></textarea>
                        </label>

                        <label>Budget <span>(optional)</span>
                            <input name="budget" value={requestForm.budget} onChange={handleChange} />
                        </label>

                        <label>Email address
                            <input 
                            name="email" 
                            value={requestForm.email} 
                            type="email" 
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required />
                        </label>

                        <button 
                        className={styles.requestButton}
                        onClick={sendRequest}
                        disabled={isSending}>{isSending ? "Sending..." : "Place Request"}</button>

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