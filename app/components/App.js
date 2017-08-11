import React, { Component } from 'react';
import amphtml from 'react-amphtml';

const ampScripts = [];
const addScript = script => ampScripts.push(script);
const AmpImg = amphtml('img', addScript);

export default class App extends Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
        <AmpImg height={300} width={100} src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/large/jab-harry-met-sejal-et00058252-09-06-2017-01-27-42.jpg" />
      </div>);
  }
}