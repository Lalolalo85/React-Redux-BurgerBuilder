import React, { Component } from 'react';
import Person from './Person/Person';
import Useroutput from './User/UserOutput';

class App extends Component {
  state = {
    persons: [
      {name: "Luis", age: 33},
      {name: "Lalo", age: 34},
      {name: "Cristi", age: 43}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log("Was clicked!");
    //DONT DO THIS!!: this.state.persons[0].name = "Luis";
    this.setState({
      persons: [
        {name: newName, age: 33},
        {name: "Lalo", age: 34},
        {name: "O hell no", age: 3}
      ]
    })
  }
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Luis", age: 33},
        {name: event.target.value, age: 34},
        {name: "O hell no", age: 3}
      ]
    })
  }
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: " 1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
      <h1>Well Hello there!</h1>
      <p>Hi there whats yo namee!</p>
      <button
        style={style}
        onClick ={() => this.switchNameHandler("Josey")}>Switch Name</button>
      <Person
      name={this.state.persons[0].name}
      age={this.state.persons[0].age} />
      <Person
      name={this.state.persons[1].name}
      age={this.state.persons[1].age}
      click={this.switchNameHandler.bind(this, "Felicia")}
      changed={this.nameChangedHandler}>My Hobbies are to knock you out</Person>
      <Person
      name={this.state.persons[2].name}
      age={this.state.persons[2].age} />
      <Useroutput />
      </div>
    );
  }
}

export default App;
