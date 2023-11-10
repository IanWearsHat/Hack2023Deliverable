import axios from "axios";

import React, { useState } from 'react';

import "./App.css";
import QuoteInput from "./components/QuoteInput/QuoteInput.jsx";
import PreviousQuotes from "./components/PreviousQuotes/PreviousQuotes.jsx";


function App() {
	const [filter, setFilter] = useState("");

	const handleOptionClicked = (optionFilter) => {
		setFilter(optionFilter);
	};


	const [quotes, setQuotes] = useState([]);

	let getQuotesParams = {
		time_cutoff: filter
	};

	const setQuotesFromDatabase = () => {
		// only works if the filter is not an empty string i.e. no option clicked
		axios.get("/api/quote", { params: getQuotesParams })
			.then((response) => {
				setQuotes(response.data);
			})
			.catch(function (error) {
				console.log(error.message);
			});
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
	};

	return (
		<div className="App">
			<img src="./quotebook.png" />

			<QuoteInput
				className="quoteInput"
				onQuoteSubmitted={handleQuoteSubmitted}
				onOptionClicked={handleOptionClicked}
				onButtonClicked={() => {
					if (filter) setQuotesFromDatabase();
				}}
			/>
			<PreviousQuotes quotes={quotes} />
		</div>
	);

}

export default App;
