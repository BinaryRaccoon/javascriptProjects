/* Basic Idea */

import React from 'react';
import ReactDOM from 'react-dom';

var info = [
	'name1 ',
  'name2 ', 
  'name3 ', 
  'name4 ', 
  'name5 ', 
];

var infoLength = info.length; 
var message;

class App extends React.Component {
  constructor(props){
  	super(props);
    this.message='List of Names: ';
    for (let i=0; i<infoLength; i++) {
    	this.message += info[i];    
    }
  }
  render(){
  		return(
        <div>
          { this.message }
        </div>
      );
  }

}

ReactDOM.render(
	<App />,
	mountNode
);

/* Improved, more complicated version */

import React from 'react';
import ReactDOM from 'react-dom';

var info = [
	{name: 'name 1 ', color: 'color 1 '},
  {name: 'name 2 ', color: 'color 2 '},
  {name: 'name 3 ', color: 'color 3 '},
  {name: 'name 4 ', color: 'color 4 '},
  {name: 'name 5 ', color: 'color 5 '},
];

var infoLength = info.length; 
var message;

class App extends React.Component {
  constructor(props){
  	super(props);
    this.message='List of Names: ';
    for (let i=0; i<infoLength; i++) {
    	this.message += info[i].name;    
    }
    this.messageTwo='List of Colors: ';
    for (let i=0; i<infoLength; i++) {
    	this.messageTwo += info[i].color;    
    }
  }
  render(){
  		return(
        <div>
          { this.message }
          <br />
          { this.messageTwo }
        </div>
      );
  }

}

ReactDOM.render(
	<App />,
	mountNode
);