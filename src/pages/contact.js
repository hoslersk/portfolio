import React, { Component } from 'react';

import snapchat from '../../public/snapchat.jpg'

export default class Contact extends Component {
	constructor(props) {
		super(props)

		this.state = {
			snapchat: false,
		}

		this.toggleQR = this.toggleQR.bind(this)
	}

	toggleQR() {
		this.setState({snapchat: !this.state.snapchat})
	}

	render() {
		return (
			<div className="page-contents">
				<h1 className="page-title">Contact Schyler</h1>
				<div className="contact-content">
					<img
						src="https://media.giphy.com/media/dcLwBDsjZHjl6/giphy.gif"
						className="ppg-phone"
					/>
					<a
						href="https://github.com/hoslersk"
						target="_blank"
						className="external-link"
					>Github</a>
					<a
						href="https://www.linkedin.com/in/schyler-hosler-a282aa27"
						target="_blank"
						className="external-link"
					>LinkedIn</a>
					<a
						href="https://my.playstation.com/digivotary"
						target="_blank"
						className="external-link"
					>PlayStation</a>
					<a
						href="https://twitter.com/schylerhosler"
						target="_blank"
						className="external-link"
					>Twitter</a>
					<span onClick={this.toggleQR}><a className="external-link">SnapChat</a></span>
					<img src={snapchat} className={`snapchat${this.state.snapchat ? '' : 'Hidden'}`}/>
				</div>
			</div>
		)
	}
}
