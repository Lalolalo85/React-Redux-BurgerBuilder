import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';



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
    const style = {
      backgroundColor: "green",
      color: 'white',
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer",
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

     let persons = null;

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
              })}
           </div>
          );

             style.backgroundColor = 'red';
             style[':hover'] = {
               backgroundColor: 'purple',
               color: 'black'
             }


        }

        const classes =[];
        if (this.state.persons.length <= 2) {
          classes.push('red');
        }

        if (this.state.persons.length <= 1) {
          classes.push('bold');
        }

    return (
      <StyleRoot>
    <div className="App">
      <h1>Hello there</h1>
      <p className={classes.join(' ')}>This is really far out man!</p>
      <button
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
    </div>
    </StyleRoot>
    );
  }
}

export default Radium(App);
