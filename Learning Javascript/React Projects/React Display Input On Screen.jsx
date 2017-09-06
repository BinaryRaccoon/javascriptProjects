React Display Input On Screen

class Input extends React.Component {
	constructor(props){
  	super(props);
    this.state={ charactersEntered: "Enter Text" };
    this.handleCharactersEntered = this.handleCharactersEntered.bind(this);
  }
  handleCharactersEntered(e){
  	this.setState({ charactersEntered: e.target.value })
  }
	render(){
  	return(
      <div>
        <input onChange={this.handleCharactersEntered}></input>
        <h1>{this.state.charactersEntered}</h1>
      </div>
    );
  }
}

class App extends React.Component {
	render() {
  	return (
    	<div>
        <Input />
      </div>
    );
  }
}

ReactDOM.render(
	<App />,
  mountNode	
);


