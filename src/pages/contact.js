import React, { Component } from 'react';

export default class Contact extends Component {
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
				</div>
			</div>
		)
	}
}
