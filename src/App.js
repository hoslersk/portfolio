import React, { Component } from 'react';

import Navbar from './components/navbar'
import Schyler from './components/schyler'
import Construction from './components/construction'

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Schyler />
				<Construction />
			</div>
		);
	}
}

export default App;
