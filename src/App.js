import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './game.js'
import _isEqual from 'lodash/isEqual'

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  state = {
    player: null,
    start: false,
    restart: false
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(_isEqual(nextProps, this.props) &&
            _isEqual(nextState, this.state));
  }

  handleClick(type) {
    if (type === 0) {
      this.setState({ start: true, restart: false })
    } 
    if (type === 1) {
      this.setState({ start: false, restart: true })
    }
  }

  handleChoose(choose) {
    switch (choose) {
      case 1:
        this.setState({player: 'rock'});
        break;
      case 2:
        this.setState({player: 'paper'});
        break;
      case 3:
        this.setState({player: 'scissor'});
        break;
    }
  }

  render() {
    let game = null
    let button = (
        <button
          style={{ display: this.state.player !== null ? 'block' : 'none' }}
          onClick={() => { this.handleClick(0) }}>
          Start
        </button>
      )
    let playerSelect = (
      <div>
        <p className="App-intro">Make your choice</p>
        <div className="playerChoice">
          <div className={`rock ${this.state.player === 'rock' ? ' active' : ''}`} onClick={() => this.handleChoose(1)} />
          <div className={`paper ${this.state.player === 'paper' ? ' active' : ''}`} onClick={() => this.handleChoose(2)} />
          <div className={`scissor ${this.state.player === 'scissor' ? ' active' : ''}`} onClick={() => this.handleChoose(3)} />
        </div>
      </div>
    )

    if (this.state.start) {
      playerSelect = null
      game = <Game player={this.state.player} />
      button = (
        <button
          style={{ display: this.state.player !== null ? 'block' : 'none' }}
          onClick={() => { this.handleClick(1) }}>
          Recommencer
        </button>
      )
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            <span className="shi">Shi</span>
            <span className="fu">fu</span>
            <span className="mi">mi</span>
          </h2>
        </div>
        {playerSelect}
        <br />
        {button}
        {game}
      </div>
    );
  }
}

export default App;
