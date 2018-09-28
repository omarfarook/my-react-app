import React, {Component} from 'react';
import Person from './person/person';
import classes from './person.css'

class Persons extends Component {

    goBack() {
        this.props.propContext.history.push('/');
    }

    render() {
        return (
        <div>
        <ul className={classes.personContainer}>
            {this.props.persons.map((person, index) => {
                return <Person 
                             key={index} 
                             name={person.name} 
                             age={person.age}/>
            })
        }
        </ul>
        <button onClick={this.goBack.bind(this)}>Go Back</button>
        </div>)
        
            
    }
}

// const persons = (props) => props.persons.map((person,index) => {
//     return <Person 
//             key={index} 
//             name={person.name} 
//             age={person.age}/>
// });

export default Persons;