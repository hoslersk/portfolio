import React, { Component, PropTypes } from 'react'

class Project extends Component {

	get repoLinks() {
		if (typeof this.props.github !== 'string') {
			return this.props.github.map((link, i) => {
				return(
					<a key={i} href={link.url} className="external-link" target="_blank">
						<i className="material-icons">code</i>
						<h3 className="project-title">{link.title}</h3>
					</a>
				)
			})
		}

		return (
			<a href={this.props.github} className="external-link" target="_blank">
				<i className="material-icons">code</i>
				<h3 className="project-title">Repo</h3>
			</a>
		)
	}

	render() {
		return(
			<div className="project">
				<h2>{this.props.title}</h2>
				<h4>{this.props.desc}</h4>
				<a href={this.props.weblink} target="_blank">
					<mask className="image-mask">
						<img src={this.props.image} className="project-preview"/>
					</mask>
				</a>

				<a href={this.props.weblink} className="external-link" target="_blank">
					<i className="material-icons">link</i>
					<h3 className="project-title">Website Link</h3>
				</a>

				{this.repoLinks}
			</div>
		)
	}
}

Project.Proptypes = {
	title: PropTypes.string,
	desc: PropTypes.string,
	image: PropTypes.string,
	weblink: PropTypes.string,
	github: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
	])
}

export default Project
