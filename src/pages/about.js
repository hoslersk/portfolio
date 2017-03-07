import React, { Component } from 'react';

import DevIcon from '../components/devicon'

import me1 from '../../public/me1.jpg'
import me2 from '../../public/me2.jpg'
import me3 from '../../public/me3.jpg'

export default class About extends Component {
	render() {
		return (
			<div className="page-contents">
				<h1 className="page-title">About Schyler</h1>
				{/* <div className="icon-container">
					<DevIcon value="github" />
					<DevIcon value="javascript" />
					<DevIcon value="html5" />
					<DevIcon value="heroku" />
					<DevIcon value="git" />
					<DevIcon value="css3" />
					<DevIcon value="sass" />
					<DevIcon value="postgres" />
					<DevIcon value="mongodb" />
					<DevIcon value="atom" />
					<DevIcon value="jquery" />
				</div> */}
				<div className="about-content">
					Interests:
					<ul>
						<li>Web Development</li>
						<li>Peanut Butter</li>
						<li>PlayStation</li>
						<li>Digimon</li>
						<li>JRPGs</li>
						<li>Horror</li>
						<li>Visual Novels</li>
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
				</div>
				<img src={me3} className="me-pic" />
				<img src={me2} className="me-pic" />

			</div>
		)
	}
}
