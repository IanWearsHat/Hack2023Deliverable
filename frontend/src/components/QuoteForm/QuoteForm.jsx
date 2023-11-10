import { useState } from "react";

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import styles from './QuoteForm.module.css';

export default function QuoteForm({onQuoteSubmitted, onButtonClick}) {

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

    const StyledButton = styled(Button)(({ theme }) => ({
        fontSize: '16px',
        marginTop: '1rem',
        color: '#DAE2ED',
        backgroundColor: '#303740',
        '&:hover': {
            color: '#303740',
            backgroundColor: '#E5EAF2',
        },
    }));


    return (
        <form className={styles.quoteForm} onSubmit={handleSubmit} action="/api/quote" method="post">
            <label htmlFor="input-name">Name</label>
            <input
                type="text"
                name="name"
                id="input-name"
                value={inputNameText}
                onChange={e => setInputNameText(e.target.value)}
                required
            />
            <label htmlFor="input-message">Quote</label>
            <input
                type="text"
                name="message"
                id="input-message"
                value={inputQuoteText}
                onChange={e => setInputQuoteText(e.target.value)}
                required
            />
            <StyledButton className={styles.submitButton} variant="contained" type="submit">Submit</StyledButton>
        </form>
    );
}