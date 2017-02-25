import React, { Component } from 'react';
import './Announcement.css';

export default class Announcement extends Component {
	render() {
		if(this.props.winner === 'null'){
			return (
				<div>
				</div>
			)
		} else {
			return (
				<div className='visible' >
					<h2>Game Over - {this.props.winner} Wins!</h2>
				</div>
			)
		}
	}
}

