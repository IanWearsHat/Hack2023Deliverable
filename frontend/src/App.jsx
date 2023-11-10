import axios from "axios";

import React, { useState } from 'react';

import "./App.css";
import QuoteInput from "./components/QuoteInput/QuoteInput.jsx";
import PreviousQuotes from "./components/PreviousQuotes/PreviousQuotes.jsx";

import { motion } from "framer-motion";


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

	const container = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 0.08
			}
		}
	};

	const item = {
		hidden: {
			opacity: 0,
			y: 60
		},
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.9,
				ease: [0, 0.71, 0.2, 1.01]
			}
		}
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
