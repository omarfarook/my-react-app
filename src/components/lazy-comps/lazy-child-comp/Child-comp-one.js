import React, {Component} from 'react';
import { connect } from 'react-redux';

import AddPerson from './person/AddPerson';
import Person from './person/Person';
import { compose } from 'redux';
import commonUtilityService from '../../../hoc/commonUtilityService'

class ChildCompOne extends Component {
    render() {
        return(
            <div>
                {this.props.titleAndMetaTags('Lazy', 'Welcome to Lazy component')}
                <AddPerson addPersonHandler={this.props.onAddedPerson}/>
                {this.props.prs.map(person => {
                    return <Person
                            name={person.name}
                            age={person.age}
                            key={person.id} 
                            clicked={() => this.props.onRemovedPerson(person.id)}           
                    />
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        prs: state.spl.persons
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddedPerson: (name, age) => dispatch({type: 'ADD_PERSON', personData: {name: name, age: age}}),
        onRemovedPerson: (id) => dispatch({type: 'REMOVE_PERSON', personId: id})
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), commonUtilityService)(ChildCompOne);