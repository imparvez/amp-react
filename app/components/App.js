import React, { Component } from 'react';
import axios from 'axios';
import amphtml from 'react-amphtml';
// import MovieReleaseDate from './MovieReleaseDate';

const ampScripts = [];
const addScript = script => ampScripts.push(script);
const AmpImg = amphtml('img', addScript);

export default class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			movieData : []
		}
	}

	componentDidMount(){
		const movieURL = 'https://api.themoviedb.org/3/movie/popular?api_key=68aaaf4f13ecd54e10a7fbd76b2bdb45';
		axios.get(movieURL)
			.then(res => {
				// console.log(res);
				const movieData = res.data.results;
				if(typeof movieData === 'object') {
					this.setState({movieData})
				}
			})

	}

  	render() {
  		if(this.state.movieData != "") {
	    	return (
	    		<div className="appContainer">
	    			<div className="movieCards">
	    				<div className="upperDetails">
	    					<span className="releaseDate">{this.stata.movieData}</span>
	    				</div>
	    			</div>
	    		</div>
	    	);  			
  		} else {
  			return(<div>LOADING...</div>)
  		}
  	}
}