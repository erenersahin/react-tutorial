import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p>This is really working!</p>
       <Person name="Gül" age="56" />
       <Person name="Eren" age="25" >My Hobbies: Music Production</Person>
       <Person name="Kübra" age="24" />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi, I\'m a React App!!!!'))
  }
}

export default App;
