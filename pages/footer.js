import { useState, useEffect } from 'react';

const Footer = () => {
	const [quote, setQuote] = useState("Paradise doesn't have to be warm.");
	const [data, setData] = useState([]);

	const getQuote = () => {
		const url =
			'https://cdn.contentful.com/spaces/ufp3nek4dw5s/environments/master/entries?access_token=rBiZxjRuyHU4OOKrLse8wycqYGkbMdH-IEhC4lDaxY4';

		let arr = data.items;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setData(data));
		if (Array.isArray(arr)) {
			let index = arr[Math.floor(Math.random() * arr.length)];
			console.log(index);
			let newQuote = index.fields.quote;
			setQuote(newQuote);
		}
	};

	useEffect(() => {
		getQuote();
	}, [quote]);

	return <div className='footer'>{quote}</div>;
};

export default Footer;
