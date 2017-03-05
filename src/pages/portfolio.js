import React, { Component } from 'react';

import yourspace from '../../public/yourspace1.png'
import wanderlyst from '../../public/wanderlyst1.png'
import semisen from '../../public/semisen1.png'

import Project from '../components/project'

export default class Portfolio extends Component {
	render() {
		return (
			<div className="page-contents">
				<h1 className="page-title">Schyler's Portfolio</h1>
				<Project
					title="YourSpace"
					image={yourspace}
					weblink="http://your-space-project.herokuapp.com/"
					github="https://github.com/hoslersk/your-space-project"
				/>
				<Project
					title="wanderlyst"
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
					title="Semi-Sentient Schoolmate"
					image={semisen}
					weblink="https://semisen.herokuapp.com"
					github="https://github.com/hoslersk/semi-sentient-schoolmate"
				/>
			</div>
		)
	}
}
