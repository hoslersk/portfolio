import React, { Component } from 'react'

export default class Navbar extends Component {
	render() {
		return(
			<ul className="navbar">
				<li className="navitem">
					<span className="navbutton">About</span>
				</li>
				<li className="navitem">
					<span className="navbutton">Contact</span>
				</li>
				<li className="navitem">
					<span className="navbutton">Portfolio</span>
				</li>
				<li className="navitem">
					<span className="navbutton">Home</span>
				</li>
			</ul>
		)
	}
}
