import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// class App extends Component
const app = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Gül', age: 56 },
      { name: 'Eren', age: 25 },
      { name: 'Kübra', age: 24 }
    ]
  });

  const [otherState, setOtherState] = useState({otherState: 'set other value'});
  
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // we do this to see button works if clicked!
    //console.log('Was clicked');
    // to see this, in browser go Inspect/Console!

    // DONT DO THIS: this.state.persons[0].name = 'Güler';
    setPersonsState({
      persons: [
        { name: 'Mehmet', age: 61 },
        { name: 'Ebru', age: 30 },
        { name: 'Kübranur', age: 24 }
      ]
    })
  }

  
  return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p>This is really working!</p>
       <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Music Production</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi, I\'m a React App!!!!'))
  
}

export default app;
