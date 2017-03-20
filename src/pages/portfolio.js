import React, { Component } from 'react';

import yourspace from '../../public/yourspace1.png'
import wanderlyst from '../../public/wanderlyst1.png'
import polyglot from '../../public/polyglot1.png'
import stockpile from '../../public/stockpile1.png'
import semisen from '../../public/semisen1.png'

import Project from '../components/project'

export default class Portfolio extends Component {
	render() {
		return (
			<div className="page-contents">
				<h1 className="page-title">{"Schyler's Portfolio"}</h1>
				<Project
					title="YourSpace"
					desc="A platform that connects venues with prospective renters for event hosting"
					image={yourspace}
					weblink="http://your-space-project.herokuapp.com/"
					github="https://github.com/hoslersk/your-space-project"
				/>
				<Project
					title="wanderlyst"
					desc="Review itineraries from other users before planning and sharing your next trip"
					image={wanderlyst}
					weblink="http://wanderlyst.herokuapp.com/"
					github={[
						{
							url: 'https://github.com/vronnieli/wanderlyst',
							title: 'Repo (React)'
						},
						{
							url: 'https://github.com/tonymaibox/wanderlyst-api',
							title: 'Repo (Rails API)',
						},
					]}
				/>
				<Project
					title="Polyglot"
					desc="More coming soon..."
					image={polyglot}
					weblink="https://github.com/hoslersk/polyglot"
					github="https://github.com/hoslersk/polyglot"
				/>
				<Project
					title="Semi-Sentient Schoolmate"
					desc="More coming soon..."
					image={semisen}
					weblink="https://semisen.herokuapp.com"
					github="https://github.com/hoslersk/semi-sentient-schoolmate"
				/>
				<Project
					title="Stockpile"
					desc="More coming soon..."
					image={stockpile}
					weblink="https://github.com/hoslersk/stockpile"
					github="https://github.com/hoslersk/stockpile"
				/>
			</div>
		)
	}
}
