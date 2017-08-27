import React, { Component } from 'react';
import PropTypes from 'prop-types';

import _isEqual from 'lodash/isEqual'

import './game.css';

class Game extends Component {
	static propTypes = {
	  player: PropTypes.string
	}

	constructor(props) {
	  super(props);
	
	  this.randomIA = this.randomIA.bind(this);
	}

	state = {
		player: this.props.player,
		ia: null
	}

	result = {
		rock: {
			rock: 'equal',
			paper: 'lost',
			scissor: 'win'
		},
		paper: {
			rock: 'win',
			paper: 'equal',
			scissor: 'lost'
		},
		scissor: {
			rock: 'lost',
			paper: 'win',
			scissor: 'equal'
		}
	}

	color = {
		'equal': '#BDBDBD',
		'lost': '#FA5858',
		'win': '#00FF00'
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !(_isEqual(nextProps, this.props) &&
						_isEqual(nextState, this.state));
	}

	randomIA() {
		const random = Math.round(Math.random() * (3 - 1) + 1);
		switch (random) {
			case 1:
				this.setState({ia: 'rock'});
				break;
			case 2:
				this.setState({ia: 'paper'});
				break;
			case 3:
				this.setState({ia: 'scissor'});
				break;
		}
	}

  render() {
		if (this.state.ia === null) {
			this.randomIA();
		}

		return (
			<div className="game">
				<div
					className="textResult"
					style={{ color: this.color[this.result[this.state.player][this.state.ia]]}}>
					{this.result[this.state.player][this.state.ia]}
				</div>
				<div className="player">
					<p>Player</p>
					<div className={this.state.player}></div>
				</div>
				<div className="ia" style={{opacity: this.state.ia !== null ? 1 : 0 }}>
					<p>Computer</p>
					<div className={this.state.ia}></div>
				</div>
			</div>
    );
	} 
}

export default Game;
