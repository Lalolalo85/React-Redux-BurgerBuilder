import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';



class App extends Component {
  state = {
    persons: [
      { id: "asdk", name: "Max", age: 23 },
      { id: "inldn", name: "Manu", age: 29 },
      { id: "aerae", name: "Espei", age: 26 }
    ],
    showPersons: false
  }

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

    this.setState({persons});
  }

 deletePersonHandler = (personIndex) => {
   //ES5
   // const persons = this.state.persons.slice();
   //ES6
   const persons = [...this.state.persons];
   persons.splice(personIndex, 1);
   this.setState({persons});
 }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render () {
     let persons = null;

        if (this.state.showPersons) {
          persons =  <Persons
           persons={this.state.persons}
           clicked={this.deletePersonHandler}
           changed={this.nameChangedHandler} />;
        }



    return (
    <div className={classes.App}>
      <Cockpit
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}/>
        {persons}
    </div>
    );
  }
}

export default App;
