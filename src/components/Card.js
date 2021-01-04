import React from 'react';
import './card-list.css';

function Card(props) {
	return (
		<div className="country">
			<h5>{props.country.name}</h5>
			<p>Capital: {props.capital}</p>
		</div>
	);
}

export default Card;
