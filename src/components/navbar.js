import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';

class Navbar extends Component {
	render() {
		return(
			<ul className={`navbar${this.props.tab === 'test' ? '-test' : ''}`}>
				{/* <li className={`navitem${this.props.tab === 'test' ? '-test' :''}${this.props.tab === 'test' ? '-active' : ''}`}>
					<Link to="/test" name="test" onClick={this.props.updateTab}>Test</Link>
				</li> */}
				<li className={`navitem${this.props.tab === 'test' ? '-test' :''}${this.props.tab === 'about' ? '-active' : ''}`}>
					<Link to="/about" name="about" onClick={this.props.updateTab}>About</Link>
				</li>
				<li className={`navitem${this.props.tab === 'test' ? '-test' :''}${this.props.tab === 'contact' ? '-active' : ''}`}>
					<Link to="/contact" name="contact" onClick={this.props.updateTab}>Contact</Link>
				</li>
				<li className={`navitem${this.props.tab === 'test' ? '-test' :''}${this.props.tab === 'portfolio' ? '-active' : ''}`}>
					<Link to="/portfolio" name="portfolio" onClick={this.props.updateTab}>Portfolio</Link>
				</li>
				<li className={`navitem${this.props.tab === 'test' ? '-test' :''}${this.props.tab === 'home' ? '-active' : ''}`}>
					<Link to="/" name="home" onClick={this.props.updateTab}>Home</Link>
				</li>
			</ul>
		)
	}
}

Navbar.Proptypes = {
	updateTab: PropTypes.func,
	tab: PropTypes.string,
}

export default Navbar
