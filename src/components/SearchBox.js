import React from 'react';
import './card-list.css';

function SearchBox(props) {
	return (
		<form action="#" className="search-form" onSubmit={(e) => e.preventDefault()}>
			<input className="search-input" placeholder={props.placeholder} onChange={props.handleInput} />
		</form>
	);
}

export default SearchBox;
