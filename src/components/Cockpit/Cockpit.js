import React from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => {
  const assignedClasses =[];
  let btnClass = '';
  btnClass = classes.Red;
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
  <div className={classes.Cockpit}>
    <h1>Hello there</h1>
    <p className={assignedClasses.join(' ')}>This is really far out man!</p>
    <button
      className={btnClass}
      onClick={props.clicked}>Toggle Persons</button>
  </div>

    );
};

export default cockpit;
