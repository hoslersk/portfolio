import React, { Component } from 'react';

import TempBG from '../components/tempbg'
import Schyler from '../components/schyler'
import Construction from '../components/construction'

import arrow from '../../public/arrow.png'
import circled from '../../public/circled.png'
import stillOpen from '../../public/stillopen.png'

export default class Home extends Component {
	render() {
		return (
			<div>
				<TempBG />
				<Schyler />
				<Construction />
				<img src={arrow} className="arrow" />
				<img src={circled} className="circled" />
				<img src={stillOpen} className="stillOpen" />
			</div>
		)
	}
}
