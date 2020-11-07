import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Gül', age: 56},
      {name: 'Eren', age: 25},
      {name: 'Kübra', age: 24}
    ]
  }

  // switchName - Handler: we add Handler to name of method 
  // due to being event Handler and not using actively (over&over)!
  switchNameHandler = () => {
    // we do this to see button works if clicked!
    console.log('Was clicked');
    // to see this, in browser go Inspect/Console!
  }
  

  render() {
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p>This is really working!</p>
       <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Music Production</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi, I\'m a React App!!!!'))
  }
}

export default App;
