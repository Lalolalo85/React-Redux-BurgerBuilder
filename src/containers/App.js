import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

export const AuthContext = React.createContext(false);




class App extends PureComponent {
  constructor (props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: "asdk", name: "Max", age: 23 },
        { id: "inldn", name: "Manu", age: 29 },
        { id: "aerae", name: "Espei", age: 26 }
      ],
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    };
  }

  componentWillMount() { //create life cycle hook 
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() { //create life cycle hook
    console.log('[App.js] Inside componentDidMount()');
  }

  

  componentWillUpdate(nextProps, nextState) { //update life cycle hook depreciated
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[UPDATE App.js] Inside getDerivedStateFromProps', nextProps, prevState);
    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log('[UPDATE App.js] Inside getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() { //update life cycle hook
    console.log('[UPDATE App.js] Inside componentDidUpdate')
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

    this.setState( { persons } );
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
    this.setState( ( prevState, props ) => { 
      return {
        showPersons: !doesShow, 
        toggleClicked: prevState.toggleClicked + 1 
      }
      
    } );
  }

  loginHandler = () => {
   this.setState({authenticated: true});
  }

  render () {
    console.log('[App.js] Inside render()');
     let persons = null;

        if (this.state.showPersons) {
          persons =  (
          <Persons
           persons={this.state.persons}
           clicked={this.deletePersonHandler}
           changed={this.nameChangedHandler} 
           />
          );
        }



    return (
    <div className={classes.App}>
      <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
      <Cockpit
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        login={this.loginHandler}
        clicked={this.togglePersonsHandler}/>
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
    </div>
    );
  }
}

export default App;
