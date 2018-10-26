import React, { Component } from 'react';
import classes from './App.css';
import Person from '..components/Persons/Person/Person';
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
     let btnClass = '';

        if (this.state.showPersons) {
          persons = (
            <div>
              {this.state.persons.map((person, index) => {
                return <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id }
                  changed={(event) => this.nameChangedHandler(event, person.id)}/>
              } )}
           </div>
          );

         btnClass = classes.Red;
        }

        const assignedClasses =[];
        if (this.state.persons.length <= 2) {
          assignedClasses.push(classes.red);
        }

        if (this.state.persons.length <= 1) {
          assignedClasses.push(classes.bold);
        }

    return (
    <div className={classes.App}>
      <h1>Hello there</h1>
      <p className={assignedClasses.join(' ')}>This is really far out man!</p>
      <button
        className={btnClass}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
    </div>
    );
  }
}

export default App;