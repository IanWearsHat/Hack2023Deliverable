import styles from './Quote.module.css';

export default function Quote({name, quote, date}) {
    return (
      <div className={styles.quote}>
        <p className={styles.quoteText}>"{quote}"</p>
        <p className={styles.quoteDetails}>-{name} {date}</p>
      </div>
    );
}
