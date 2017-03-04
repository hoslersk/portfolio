import React, { Component } from 'react';
import logo from './logo.svg';
import background from '../public/qinghill.jpg'
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={background} className="background" alt="background" />
					<h1 className="schyler2">
						Schyler Hosler is ...
					</h1>
					<h1 className="schyler1">
						Schyler Hosler is ...
					</h1>
				</div>
				<h2 className="headline2">
					UNDER CONSTRUCTION
				</h2>
				<h2 className="headline1">
					UNDER CONSTRUCTION
				</h2>
			</div>
		);
	}
}

export default App;
