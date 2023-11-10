import axios from "axios";

import React, { useState, useId } from 'react';

import "./App.css";
import Quote from "./components/Quote/Quote.jsx";
import QuoteInput from "./components/QuoteInput/QuoteInput.jsx";

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
		hidden: { },
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
			<QuoteInput
				className="quoteInput"
				onQuoteSubmitted={handleQuoteSubmitted}
				onOptionClicked={handleOptionClicked}
				onButtonClicked={() => {
					if (filter) setQuotesFromDatabase();
				}}
			/>
			
			<div className="previousQuotes">
				<h2>Previous Quotes</h2>
				{/* TODO: Display the actual quotes from the database */}
				{/* Button actually starts the animation and the axios call*/}
				
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
		</div>
	);

}

export default App;
