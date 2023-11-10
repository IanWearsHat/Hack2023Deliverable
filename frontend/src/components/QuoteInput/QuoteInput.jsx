import { useState } from "react";

import { motion } from "framer-motion";

import StyledButton from '../StyledButton/StyledButton.jsx';

import AgeDropdown from "../AgeDropdown/AgeDropdown.jsx";
import QuoteForm from "../QuoteForm/QuoteForm.jsx";

import styles from './QuoteInput.module.css';

export default function QuoteInput({onQuoteSubmitted, onOptionClicked, onButtonClicked}) {

    const [formCollapsed, setFormCollapsed] = useState(false);

    return (
        <motion.div
            className={styles.quoteInput}
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
                    <div className={styles.quoteSelector}>
                        <AgeDropdown onOptionClicked={onOptionClicked}/>
                        <StyledButton onClick={() => {
                            onButtonClicked();
                            setFormCollapsed(true);
                        }}>
                            Apply filter
                        </StyledButton>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
