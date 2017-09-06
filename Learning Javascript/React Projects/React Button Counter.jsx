import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props){
  	super(props);
    this.state={ timesClicked: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
  	this.setState(
    	(prevState) => ({
        timesClicked: prevState.timesClicked + 5
        }));
  }
  render() {
  	return(
    	<div>
        <button onClick={this.handleClick}></button>
        <h1>{this.state.timesClicked}</h1>
      </div>
    );
  };
}

ReactDOM.render(
	<App />,
	mountNode
);





