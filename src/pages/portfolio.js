import React, { Component } from 'react';

import yourspace from '../../public/yourspace1.png'
import wanderlyst from '../../public/wanderlyst1.png'

export default class Portfolio extends Component {
	render() {
		return (
			<div className="portfolio-contents">
				{/* 'It\'s a Portfolio Page' */}
				<h1 className="page-title">Projects Portfolio</h1>
				<div className="project">
					<h2>wanderlyst</h2>
					<a href="http://wanderlyst.herokuapp.com/" target="_blank">
						<img src={wanderlyst} className="project-preview" />
					</a>
					<a href="http://wanderlyst.herokuapp.com/" className="external-link" target="_blank">
						<i className="material-icons">link</i>
						<h3 className="project-title">Website Link</h3>
					</a>
					<a href="https://github.com/vronnieli/wanderlyst" className="external-link" target="_blank">
						<i className="material-icons">code</i>
						<h3 className="project-title">Repo (React)</h3>
					</a>
					<a href="https://github.com/tonymaibox/wanderlyst-api" className="external-link" target="_blank">
						<i className="material-icons">code</i>
						<h3 className="project-title">Repo (Rails API)</h3>
					</a>
				</div>
				<div className="project">
					<h2>YourSpace</h2>
					<a href="http://yourspace-project.herokuapp.com/" target="_blank">
						<img src={yourspace} className="project-preview" />
					</a>
					<a href="http://your-space-project.herokuapp.com/" className="external-link" target="_blank">
						<i className="material-icons">link</i>
						<h3 className="project-title">Website Link</h3>
					</a>
					<a href="https://github.com/hoslersk/your-space-project" className="external-link" target="_blank">
						<i className="material-icons">code</i>
						<h3 className="project-title">Repo (Ruby on Rails)</h3>
					</a>
				</div>
			</div>
		)
	}
}
