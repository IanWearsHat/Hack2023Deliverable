import axios from "axios";

import React, { useState } from 'react';

import "./App.css";
import Quote from "./components/Quote/Quote.jsx";

function App() {

	const [quotes, setQuotes] = useState([]);

	let getQuotesParams = {
		time_cutoff: "all"
	};

	const onButtonClick = () => {
		let res = axios.get("/api/quote", { params: getQuotesParams })
			.then((response) => {
				setQuotes(response.data);
				console.log(response.data);
			})
	};

	return (
		<div className="App">
			<div className="quote-input">
				{/* TODO: include an icon for the quote book */}
				<h1>Hack @ UCI Tech Deliverable</h1>

				<h2>Submit a quote</h2>
				{/* TODO: implement custom form submission logic to not refresh the page */}
				<form action="/api/quote" method="post">
					<label htmlFor="input-name">Name</label>
					<input type="text" name="name" id="input-name" required />
					<label htmlFor="input-message">Quote</label>
					<input type="text" name="message" id="input-message" required />
					<button type="submit">Submit</button>
				</form>

				<button onClick={onButtonClick}>See Previous Quotes!</button>
			</div>
			
			<div className="previous-quotes">
				<h2>Previous Quotes</h2>
				{/* TODO: Display the actual quotes from the database */}
				{/* Button actually starts the animation and the axios call*/}
				
				<div className="messages">
					{
						quotes.map( (quoteItem, index) => (
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
