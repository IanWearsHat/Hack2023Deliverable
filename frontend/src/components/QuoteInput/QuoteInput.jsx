import { motion } from "framer-motion";

import AgeDropdown from "../AgeDropdown/AgeDropdown.jsx";
import QuoteForm from "../QuoteForm/QuoteForm.jsx";
import { useState } from "react";

import styles from './QuoteInput.module.css';

export default function QuoteInput({onQuoteSubmitted, onOptionClicked, onButtonClicked}) {

    const [formCollapsed, setFormCollapsed] = useState(false);
    
    return (
        <motion.div
            className="quoteInput"
            initial={{ width: formCollapsed ? "50%": "100%" }}
            animate={{ width: formCollapsed ? "50%": "100%" }}
            transition={{
                type: 'spring',
                duration: 1.5,
                ease: [.04,.71,.4,.88],
                bounce: 0.4
            }}
        >
            
            <h1>Hack @ UCI Tech Deliverable</h1>
            
            <div className={styles.quoteInputFlex}>
                <div className={styles.inputForm}>
                    <h2>Submit a quote</h2>
                    <QuoteForm onQuoteSubmitted={onQuoteSubmitted} onButtonClick={() => setFormCollapsed(true)}/>
                </div>
                
                <p>or</p>
                
                <div className={styles.previousQuoteSelector}>
                    <h2>See previous quotes</h2>
                    <AgeDropdown onOptionClicked={onOptionClicked}/>
                    <button onClick={() => {
                        onButtonClicked();
                        setFormCollapsed(true);
                    }}>
                        Apply filter!
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
