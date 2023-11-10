import { motion } from "framer-motion";

import AgeDropdown from "../AgeDropdown/AgeDropdown.jsx";
import QuoteForm from "../QuoteForm/QuoteForm.jsx";
import { useState } from "react";

export default function QuoteInput({onQuoteSubmitted, onOptionClicked, onButtonClicked}) {

    const [formCollapsed, setFormCollapsed] = useState(false);
    
    return (
        <motion.div
            className="quoteInput"
            initial={{ width: formCollapsed ? "50vw": "100vw" }}
            animate={{ width: formCollapsed ? "50vw": "100vw" }}
            transition={{
                duration: 1.5,
                ease: [.04, .71, .32, 1]
            }}
        >
            
            {/* TODO: include an icon for the quote book */}
            <h1>Hack @ UCI Tech Deliverable</h1>

            <h2>Submit a quote</h2>
            <QuoteForm onQuoteSubmitted={onQuoteSubmitted} onButtonClick={() => setFormCollapsed(true)}/>

            <AgeDropdown onOptionClicked={onOptionClicked}/>

            {/* TODO: Make this button prettier */}
            <button onClick={() => {
                onButtonClicked();
                setFormCollapsed(true);
            }}>See Previous Quotes!</button>
        </motion.div>
    );
}
