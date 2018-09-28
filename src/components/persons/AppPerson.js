import React, { Component } from 'react';
import Persons from './persons';

export const PropsContext = React.createContext(false);

class AppPerson extends Component {

    constructor() {
        super();
        this.state = {
            persons: [
                { 'name': 'umar', 'age': 24 },
                { 'name': 'farook', 'age': 25 },
                { 'name': 'nasar', 'age': 26 }
            ],
            showPerson: true
        }
    }

    componentDidMount() {
        //  console.log(this.props);
    }

    togglePerson() {

        //  const personFlag = this.state.showPerson;
        // this.setState({
        //   showPerson: !personFlag
        // })

        this.setState((preState, props) => {
            return { showPerson: !preState.showPerson }
        })
    }

    goBack() {
        this.props.history.replace('/');
    }

    render() {
        let person = null;

        if (this.state.showPerson) {
            person = <ul>
                <Persons persons={this.state.persons} propContext={this.props} />
            </ul>
        }
        return (
            <div>
                <button onClick={this.togglePerson.bind(this)}>Toggle</button>
                <PropsContext.Provider value={this.props}>{person}</PropsContext.Provider>
                {/* <button onClick={this.goBack.bind(this)}>Go Back</button> */}
            </div>
        )
    }
}

export default AppPerson;