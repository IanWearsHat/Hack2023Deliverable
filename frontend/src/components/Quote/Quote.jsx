function Quote({name, quote, date}) {
    return (
      <div className="quote">
        <p className="quote-text">{quote}</p>
        <p className="quote-name">{name}</p>
        <p className="quote-date">{date}</p>
      </div>  
    );
}

export default Quote;
