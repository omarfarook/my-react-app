import React, {Component} from 'react';

class AddPerson extends Component {

    state = {
        name: '',
        age: ''
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    onAgeChange = (event) =>  {
        this.setState({age: event.target.value});
    }

    render() {
        return (
            <div>
                <input 
                    type="text"
                    placeholder="your name"
                    onChange={this.onNameChange}
                    value={this.state.name}
                    />
                    <input 
                    type="number"
                    placeholder="your age"
                    onChange={this.onAgeChange}
                    value={this.state.age}
                    />
                <button onClick={() => this.props.addPersonHandler(this.state.name, this.state.age)}>Add Person</button>
            </div>
        )
    }
}

export default AddPerson;