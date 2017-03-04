import React, { Component } from 'react'
import { Link } from 'react-router';

export default class Navbar extends Component {
	render() {
		return(
			<ul className="navbar">
				<li className="navitem">
					<Link to="/about">About</Link>
				</li>
				<li className="navitem">
					<Link to="/contact">Contact</Link>
				</li>
				<li className="navitem">
					<Link to="/portfolio">Portfolio</Link>
				</li>
				<li className="navitem">
					<Link to="/">Home</Link>
				</li>
			</ul>
		)
	}
}
