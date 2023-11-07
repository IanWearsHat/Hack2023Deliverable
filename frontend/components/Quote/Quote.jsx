function Quote({name, quote, date}) {
    return (
      <div className="quote">
        <p>{quote}</p>
        <p>{name}</p>
        <p>{date}</p>
      </div>  
    );
}

export default Quote;
