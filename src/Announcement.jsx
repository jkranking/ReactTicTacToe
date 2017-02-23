import React, { Component } from 'react';
import './Announcement.css';

export default class Announcement extends Component {
	render() { console.log(this.props.winner)

		if(this.props.winner === 'null'){

			return (
				<div className='hidden' >
					<h2>Game Over</h2>
				</div>
			)
		} else {
			return (
				<div className='visible' >
					<h2>Game Over</h2>
				</div>
			)
		}
	}
}

