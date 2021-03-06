import React, { Component } from 'react';

export default class Test extends Component {
	render() {
		return (
			<div className="page-contents">
				<h1 className="test-title">Test</h1>
				<div className="test-content">
					<div contenteditable>
						Ransom note with Google fonts.
					</div>
					Interests:
					<ul>
						<li>Peanut Butter</li>
						<li>JRPGs</li>
						<li>Horror</li>
					</ul>
					Experience:
					<ul>
						<li>React and Redux (Node.js)</li>
						<li>Ruby on Rails/Rails API/Sinatra</li>
						<li>HTML5</li>
						<li>CSS and SCSS</li>
						<li>Postgres and SQLite</li>
						<li>MongoDB</li>
						<li>jQuery and AJAX</li>
						<li>Bootstrap</li>
						<li>git</li>
						<li>Heroku</li>
						<li>Trello</li>
						<li>Github</li>
						<li>JIRA</li>
					</ul>
					<div className="rotated" />
				</div>
			</div>
		)
	}
}
