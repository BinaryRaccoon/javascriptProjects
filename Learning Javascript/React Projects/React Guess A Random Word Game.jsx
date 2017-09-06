class Input extends React.Component {
	constructor(props){
  	super(props);
    this.state={ charactersEntered: "Guess a word" };
    this.handleCharactersEntered = this.handleCharactersEntered.bind(this);
  }
  handleCharactersEntered(e){
  	this.setState({ charactersEntered: e.target.value })
  }
	render(){
  	if (this.state.charactersEntered === "hello" || this.state.charactersEntered === "Hello") {
    return(
    	<div>
        <h1>Correct Word Guessed</h1>
      </div>
    )
    }
    else {
  	return(
      <div>
        <input onChange={this.handleCharactersEntered}></input>
        <h1>{this.state.charactersEntered}</h1>
      </div>
    );
    }
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


