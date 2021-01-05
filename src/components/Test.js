import React, { Component } from 'react';

class Test extends Component {
	handleClick = () => {
		console.log(this);
	};

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>button</button>
			</div>
		);
	}
}

export default Test;
