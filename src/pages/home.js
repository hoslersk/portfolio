import React, { Component } from 'react';

import TempBG from '../components/tempbg'
import Schyler from '../components/schyler'
import Construction from '../components/construction'

export default class Home extends Component {
	render() {
		return (
			<div>
			 <TempBG />
			 <Schyler />
			 <Construction />
			</div>
		)
	}
}
