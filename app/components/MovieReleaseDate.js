import React, { Component } from 'react';

export default class MovieReleaseDate extends Component {
	render(){
		return(
			<div className="releaseDateContainer">
				<span>{this.props.data.movieReleaseDate}</span>
			</div>	
		)
	}
}