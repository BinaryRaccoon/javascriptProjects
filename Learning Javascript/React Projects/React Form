import React from 'react';
import ReactDom from 'react-dom';

class FirstName extends React.Component {
	constructor(props){
  	super(props);
    this.state={
    	firstNameInput: ""
    }
    this.handleFirstName = this.handleFirstName.bind(this);
  }
  handleFirstName(e){
  	this.setState({
    	firstNameInput: e.target.value
    })
  }
	render(){
  	return (
    	<div>
        <input onBlur={this.handleFirstName} placeholder="First Name"/>
        <h6>{this.state.firstNameInput}</h6>
      </div>
    );
  }
}

class LastName extends React.Component {
	constructor(props){
  	super(props);
    this.state={
    	lastNameInput: ""
    }
    this.handleLastName = this.handleLastName.bind(this);
  }
  handleLastName(e){
  	this.setState({
    	lastNameInput: e.target.value
    })
  }
	render(){
  	return (
    	<div>
        <input onBlur={this.handleLastName} placeholder="Last Name"/>
        <h6>{this.state.lastNameInput}</h6>
      </div>
    );
  }
}

class Email extends React.Component {
	constructor(props){
  	super(props);
    this.state={
    	emailInput: ""
    }
    this.handleEmail = this.handleEmail.bind(this);
  }
  handleEmail(e){
  	this.setState({
    	emailInput: e.target.value
    })
  }
	render(){
  	return (
    	<div>
        <input onBlur={this.handleEmail} placeholder="Email"/>
        <h6>{this.state.emailInput}</h6>
      </div>
    );
  }
}

class CellPhoneNumber extends React.Component {
	constructor(props){
  	super(props);
    this.state={
    	cellPhoneInput: ""
    }
    this.handleCellPhone = this.handleCellPhone.bind(this);
  }
  handleCellPhone(e){
  	this.setState({
    	cellPhoneInput: e.target.value
    })
  }
	render(){
  	return (
    	<div>
        <input onBlur={this.handleCellPhone} placeholder="Cell Phone Number"/>
        <h6>{this.state.cellPhoneInput}</h6>
      </div>
    );
  }
}

class Submit extends React.Component {
	constructor(props){
  	super(props);
    this.state={
    	sumbitClicked: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
	handleSubmit(e){
  	this.setState({
    	submitClicked: "Thank You!"
    })
  }
	render() {
  	return(
      <div>
        <FirstName />
        <LastName />
        <Email />
        <CellPhoneNumber />
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
        <div>
          <h6>{this.state.submitClicked}</h6>
        </div>
      </div>
    );
  }
}

class Content extends React.Component {
	render() {
  	return(
    	<div>
        <Submit />
      </div>
    );
  }
}

class App extends React.Component {
	render() {
  	return (
    	<Content />
    );
  }
}

ReactDOM.render(
	<App />,
  mountNode
);

