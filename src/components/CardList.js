import React from 'react';
import Card from './Card';

function CardList(props) {
	return props.countries.map((country, idx) => {
		return <Card key={idx} country={country} capital={country.capital} />;
	});
}

export default CardList;
