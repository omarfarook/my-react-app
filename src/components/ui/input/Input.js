import React from 'react';
import classes from './Input.css';

const input = (props) => {
    let inputElement = null;

    let inputClasses = [classes.InputElement];

    if(props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.invalid);
    }


    switch (props.elementType) {
        case ('input'):
            inputElement = <input className={inputClasses.join(" ")} {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea className={inputClasses.join(" ")} {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={inputClasses.join(" ")}
                    value={props.value} onChange={props.changed}>
                    {props.elementConfig.options.map(option => {
                        return <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    })}
                </select>
            );
            break;
        case ('checkbox'):
            inputElement = (
                <div>
                    <input
                        {...props.elementConfig.config}
                        value={props.value}
                        onChange={props.changed}
                        checked={props.value}
                    />{props.elementConfig.displayValue}
                </div>
            );
            break;
        case ('radio'):
            inputElement = (
                <div
                    value={props.value} onChange={props.changed}>
                    {props.elementConfig.options.map(option => {
                        return (
                            <div key={option.value}>
                                <input
                                    key={option.value}
                                    type='radio'
                                    name={option.name}
                                    value={option.value}
                                    onChange={props.changed} />
                                {option.displayValue}
                            </div>
                        )
                    })}
                </div>
            );
            break;
        default:
            inputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value} />;

    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
};

export default input;