import React, { Component } from 'react';
import Input from '../ui/input/Input';
import formData from './FormData';
import {ReactTitle} from 'react-meta-tags';

class Form extends Component {

    state = {
        contactForm: {...formData.contactForm},
        formValid: false
    }

    checkValidation(value, rules) {
        let isValid = true;
        
        if(rules.required) {
            isValid = (typeof(value) !== 'boolean')?(value.trim() !=='' && isValid):value;
        }

        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if(rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = {
            ...this.state.contactForm
        };
        const updatedFormElement = {
            ...updatedForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        updatedFormElement.isValid = this.checkValidation(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedForm[inputIdentifier] = updatedFormElement;
        let formIsvalid = true;
        for(let inputIdentifier in updatedForm) {
            formIsvalid = updatedForm[inputIdentifier].isValid && formIsvalid;
        }
        
        this.setState({ contactForm: updatedForm, formIsvalid: formIsvalid });
    }

    onSubmit(event) {
        event.preventDefault();
        const formData = {};

        for (let formElementIdentifier in this.state.contactForm) {
            formData[formElementIdentifier] = this.state.contactForm[formElementIdentifier].value;
        }

        console.log(formData);

    }

    render() {

        const formElementArray = [];

        for (let key in this.state.contactForm) {
            formElementArray.push({
                id: key,
                config: this.state.contactForm[key]
            })
        }

        const formStyle = {
            margin: '0 40px',
        };

        let form = (

            <form onSubmit={this.onSubmit.bind(this)} style={formStyle}>
                {formElementArray.map(formElement => {
                    return <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.value}
                        invalid={!formElement.config.isValid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                })}
                <button type="submit" disabled={!this.state.formValid}>Submit</button>
            </form>
        );

        return (
            <div>
            <ReactTitle title="FORM"/>
                {form}
            </div>
        )
    }
}

export default Form;