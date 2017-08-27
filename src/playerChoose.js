import React, { Component } from 'react';
import Game from './game.js'

class PlayerChoose extends Component {
	state = {
		choosePlayer: null
	}

	handleChoose(choose) {
		switch (choose) {
			case 1:
				this.setState({choosePlayer: 'rock'});
				break;
			case 2:
				this.setState({choosePlayer: 'paper'});
				break;
			case 3:
				this.setState({choosePlayer: 'scissor'});
				break;
		}
	}

	render() {
		console.log(this.state)
		return (
			<div>
				<button onClick={() => this.handleChoose(1)}>Rock</button>
				<button onClick={() => this.handleChoose(2)}>Paper</button>
				<button onClick={() => this.handleChoose(3)}>Scissor</button>
		  	{/*<Game player={this.state.choosePlayer} />*/}
		  </div>
		);
	}
}

export default PlayerChoose;
