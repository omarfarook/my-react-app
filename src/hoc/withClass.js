
import React, {Component} from 'react';

//Functional component
// const withClass = (WrapperComponent, classes) => {
//     return(props) => (
//         <div className={classes}><WrapperComponent {...props}/></div>
//     )
// }

//CLASS COMPONENT
const withClass = (WrapperComponent, classes) => {
    return class extends Component {
        render () {
            return(<div className={classes}><WrapperComponent {...this.props}/></div>)
        }
    }  
}

export default withClass;