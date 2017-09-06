import React from 'react';
import ReactDOM from 'reactDOM';

var speech;

class App extends React.Component {
  constructor(props){
  super(props);
  this.speech='asdf';
  	for (let i=0; i < 10; i++) {
      this.speech += '.';
    }
  }
  render(){
  	return(
    	<div>
        { this.speech }
      </div>
    );
  }
}

ReactDOM.render(
	<App />,
  mountNode
);