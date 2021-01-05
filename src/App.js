import { useEffect, useState } from 'react';
import CardList from './components/CardList';
import './App.css';
import './components/card-list.css';
import SearchBox from './components/SearchBox';
import Test from './components/Test';

function App() {
	const [countries, setCountries] = useState([]);
	const [searchVal, setSearchVal] = useState('');

	useEffect(() => {
		fetch('https://restcountries.eu/rest/v2/all')
			.then((res) => res.json())
			.then((result) => {
				setCountries(result);
			});
		document.querySelector('.search-input').focus();
	}, []);

	const filteredCountries = countries.filter((country) =>
		country.name.toLowerCase().includes(searchVal.toLowerCase())
	);

	return (
		<div className="App">
			<h1>Searc for Country</h1>
			<Test />
			<SearchBox
				placeholder="Search..."
				handleInput={(e) => {
					setSearchVal(e.target.value);
				}}
			/>
			<div className="card-list">
				<CardList countries={filteredCountries} />
			</div>
		</div>
	);
}

export default App;
