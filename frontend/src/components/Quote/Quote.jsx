import './quote.css';

export default function Quote({name, quote, date}) {
    return (
      <div className="quote">
        <p className="quote-text">"{quote}"</p>
        <p className="quote-details">-{name} {date}</p>
      </div>
    );
}
