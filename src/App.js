import React, { Component } from 'react';

import Navbar from './components/navbar'
import Schyler from './components/schyler'
import Construction from './components/construction'

import './App.css';

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			tab: '',
		}

		this.updateTab = this.updateTab.bind(this)
	}

	updateTab(event) {
		this.setState({tab: event.target.name})
	}

	render() {
		return (
			<div className="App">
				<Navbar tab={this.state.tab} updateTab={this.updateTab} />
				<div className="view">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default App;
