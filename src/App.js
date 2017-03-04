import React, { Component } from 'react';
import logo from './logo.svg';
import background from '../public/qinghill.jpg'
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					{/* <img src={background} className="background" alt="background" /> */}
				</div>
				<div className="schyler-container">
					<h1 className="schyler1">
						Schyler Hosler is
						<span>.</span>
						<span>.</span>
						<span>.</span>
					</h1>
					<h1 className="schyler2">
						Schyler Hosler is
						<span>.</span>
						<span>.</span>
						<span>.</span>
					</h1>
				</div>
				<div className="construction-container">
					<h2 className="construction1">
						UNDER CONSTRUCTION
					</h2>
					<h2 className="construction2">
						UNDER CONSTRUCTION
					</h2>
				</div>
			</div>
		);
	}
}

export default App;
