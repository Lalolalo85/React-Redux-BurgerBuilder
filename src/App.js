import React, { Component } from 'react';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {id:"udu", name: "Luis", age: 33},
      {id:"kdk", name: "Lalo", age: 34},
      {id:"ksk", name: "Cristi", age: 43}
    ],
    otherState: "some other value",
    showPersons: false
  }

  state = {
    userInput: ""
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value})
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;


    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    //ES5
    //const  persons = this.state.persons.slice();
    //ES6
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
   const doesShow = this.state.showPersons;
   this.setState( { showPersons:!doesShow } );
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: " 1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

  /*  let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}   />
          })}
      </div>
    );
  }*/

    return (
   <div className="App">
      <h1>Well Hello there!</h1>
       <p>Hi there whats yo namee!</p>
      <button
        style={style}
        onClick ={this.togglePersonsHandler}>Switch Name</button>
        <input type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput} />
          <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
