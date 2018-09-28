const formData = {
    contactForm: {
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
            },
            value: '',
            validation: {
                required: true,
                minLength: 5,
                maxLength: 20
            },
            isValid: false,
            touched: false
        },
        mailId: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'mail id'
            },
            value: '',
            validation: {
                required: true
            },
            isValid: false,
            touched: false
        },
        Gender: {
            elementType: 'radio',
            elementConfig: {
                
                options: [{ value: 'male', displayValue: 'Male', type: 'radio', name: 'gender' },
                { value: 'female', displayValue: 'Female', type: 'radio', name: 'gender' },]
            },
            value: 'male',
            validation: {
                required: true
            },
            isValid: false,
            touched: false
        },
        securityQn: {
            elementType: 'select',
            elementConfig: {
                options: [{ value: 'pet', displayValue: 'favourite pet' },
                { value: 'school', displayValue: 'first school' },]
            },
            value: 'pet',
            validation: {},
            isValid: false,
            touched: false
        },
        answer: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'your answer'
            },
            value: '',
            validation: {
                required: true
            },
            isValid: false,
            touched: false
        },
        comments: {
            elementType: 'textarea',
            elementConfig: {
                rows: '3',
                cols: '25',
                placeholder: 'your comments'
            },
            value: '',
            validation: {
                required: true
            },
            isValid: false,
            touched: false
        },
        confirmDetails: {
            elementType: 'checkbox',
            elementConfig: {
                displayValue: 'confirm above details',
                config: {
                    type: 'checkbox',
                    name: 'confirm'
                }
            },
            value: false,
            validation: {
                required: true
            },
            isValid: false,
            touched: false
        }
    }
}

export default formData;