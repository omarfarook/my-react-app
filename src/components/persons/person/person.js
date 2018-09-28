import React, {Component} from 'react';
import propTypes from 'prop-types';
import classes from '../person.css';
// import {PropsContext} from '../AppPerson';

class Person extends Component {

    state = {
        propsData: ''
    }

    componentDidMount() {
      //  console.log(this.state);
    }

    render() {

    return(
        <div>
       {/* <PropsContext.Consumer>
        {(context) => {this.setState({propsData:context})}}
        </PropsContext.Consumer>  */}
        <li className={classes.person} key={this.props.index}>
            <span>{this.props.name} </span>
            <span> {this.props.age}</span>
        </li>
        </div>
    )
    }
}

// const person = (props) => {
//     return(
//         <li key={props.index}>
//             <span>{props.name} </span>
//             <span> {props.age}</span>
//         </li>
//     )
// };
Person.propTypes = {
    index: propTypes.number,
    name: propTypes.string,
    age: propTypes.number
}

export default Person;