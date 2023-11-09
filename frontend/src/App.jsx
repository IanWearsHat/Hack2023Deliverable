import axios from "axios";

import React, { useState } from 'react';

import "./App.css";
import Quote from "./components/Quote/Quote.jsx";
import AgeDropdown from "./components/AgeDropdown/AgeDropdown.jsx";
import QuoteForm from "./components/QuoteForm/QuoteForm.jsx";

function App() {
	const [filter, setFilter] = useState("");

	const handleOptionClicked = (optionFilter) => {
		setFilter(optionFilter);
	};


	const [quotes, setQuotes] = useState([]);

	let getQuotesParams = {
		time_cutoff: filter
	};

	const onButtonClick = () => {
		// only works if the filter is not an empty string i.e. no option clicked
		if (filter) {
			axios.get("/api/quote", { params: getQuotesParams })
			.then((response) => {
				setQuotes(response.data);
				console.log(response.data);
			});
		}
	};

	const handleQuoteSubmitted = (newName, newQuote) => {
		setQuotes([
			...quotes,
			{
				name: newName,
				message: newQuote,
				time: new Date().toISOString().split('.')[0]
			}
		]);
	}


	return (
		<div className="App">
			<div className="quoteInput">
				{/* TODO: include an icon for the quote book */}
				<h1>Hack @ UCI Tech Deliverable</h1>

				<h2>Submit a quote</h2>
				<QuoteForm onQuoteSubmitted={handleQuoteSubmitted}/>

				<AgeDropdown onOptionClicked={handleOptionClicked}/>
				{/* TODO: Make this button prettier */}
				<button onClick={onButtonClick}>See Previous Quotes!</button>
			</div>
			
			<div className="previousQuotes">
				<h2>Previous Quotes</h2>
				{/* TODO: Display the actual quotes from the database */}
				{/* Button actually starts the animation and the axios call*/}
				
				<div className="quoteList">
					{
						quotes.toReversed().map( (quoteItem, index) => (
							<Quote
								key={index}
								name={quoteItem.name}
								quote={quoteItem.message}
								date={quoteItem.time}
							/>
						))
					}
				</div>
			</div>
		</div>
	);

}

export default App;
