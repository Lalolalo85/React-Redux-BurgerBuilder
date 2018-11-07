import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  constructor (props) { //creation life cycle hook
    super(props);
    console.log('[Persons.js] Inside Constructor', props);
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() { //creation life cycle hook
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount() { //creation life cycle hook
    console.log('[Persons.js] Inside componentDidMount()');
    this.lastPersonRef.current.focus();
  }

  componentWillReceiveProps( nextProps ) { //update life cycle hook
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps',nextProps);
  }

  

  componentWillUpdate(nextProps, nextState) { //update life cycle hook
    console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() { //update life cycle hook
    console.log('[UPDATE Persons.js] Inside componentDidUpdate')
  }

  render () { //creation life cycle, update life cycle
    console.log('[Persons.js] Inside render()')
       return  this.props.persons.map((person, index) => {
        return <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          ref={this.lastPersonRef}
          changed={( event ) => this.props.changed( event, person.id )}/>
      } );

  }
} 

export default Persons;
