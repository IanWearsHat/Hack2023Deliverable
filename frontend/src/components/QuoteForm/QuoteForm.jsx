import { useState } from "react";

import StyledButton from '../StyledButton/StyledButton.jsx';

import styles from './QuoteForm.module.css';

export default function QuoteForm({ onQuoteSubmitted, onButtonClick }) {

    const [inputNameText, setInputNameText] = useState('');
    const [inputQuoteText, setInputQuoteText] = useState('');

    /* Custom handle to prevent page from reloading */
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData
        });
        var returnName = inputNameText;
        var returnText = inputQuoteText;

        onQuoteSubmitted(returnName, returnText);
        onButtonClick();

        /* Set input fields to empty after submitting */
        setInputNameText('');
        setInputQuoteText('');
    };

    return (
        <form className={styles.quoteForm} onSubmit={handleSubmit} action="/api/quote" method="post">
            <label htmlFor="input-name">Name</label>
            <input
                type="text"
                name="name"
                id="input-name"
                placeholder="Input name..."
                value={inputNameText}
                onChange={e => setInputNameText(e.target.value)}
                required
            />
            <label htmlFor="input-message">Quote</label>
            <input
                type="text"
                name="message"
                id="input-message"
                placeholder="Input quote..."
                value={inputQuoteText}
                onChange={e => setInputQuoteText(e.target.value)}
                required
            />
            <StyledButton className={styles.submitButton} variant="contained" type="submit">Submit</StyledButton>
        </form>
    );
}