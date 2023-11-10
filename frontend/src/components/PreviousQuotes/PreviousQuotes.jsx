import styles from './PreviousQuotes.module.css';
import Quote from '../Quote/Quote.jsx';

export default function PreviousQuotes({quotes}) {
    return (
        <div className={styles.previousQuotes}>
            <h2>Previous Quotes</h2>
            <div className="quoteList">
                {
                    quotes.toReversed().map( (quoteItem, index) => ((
                        <Quote
                            key={index}
                            name={quoteItem.name}
                            quote={quoteItem.message}
                            date={quoteItem.time}
                        />
                    )))
                }
            </div>
        </div>
    );
}
