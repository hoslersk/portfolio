import React, { Component } from 'react'

import tempBG from '../../public/qinghill.jpg'

export default class TempBG extends Component {
	render() {
		return(
			<img src={tempBG} className="background" />
		)
	}
}
