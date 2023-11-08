import { useState } from "react";

export default function QuoteForm() {

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

        /* Set input fields to empty after submitting */
        setInputNameText('');
        setInputQuoteText('');
    };


    return (
        <form onSubmit={handleSubmit} action="/api/quote" method="post">
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
            <button type="submit">Submit</button>
        </form>
    );
}