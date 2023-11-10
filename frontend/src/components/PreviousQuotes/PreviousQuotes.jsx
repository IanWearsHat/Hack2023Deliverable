import styles from './PreviousQuotes.module.css';
import Quote from '../Quote/Quote.jsx';

export default function PreviousQuotes({ quotes }) {
    return (
        <div className={styles.previousQuotes}>
            <h2 id={styles.previousQuotesHeader}>Previous Quotes</h2>
            <div className="quoteList">
                {
                    quotes.toReversed().map((quoteItem, index) => {
                        let unformatted = new Date(quoteItem.time);
                        
                        let formattedDate = unformatted.toLocaleDateString('en-US', {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        });
                        return (
                            <Quote
                                key={index}
                                name={quoteItem.name}
                                quote={quoteItem.message}
                                date={formattedDate}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}
