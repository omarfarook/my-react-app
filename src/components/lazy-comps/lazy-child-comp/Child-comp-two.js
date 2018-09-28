import React, {Component} from 'react';
import { connect } from 'react-redux'; 

class ChildCompTwo extends Component {

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.prs !== this.props.prs) {
            // Do whatever you want
        }
    }


    render() {
        return(
            <div>ChildCompTwo Component works....</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        prs: state.spl.persons
    };
}

export default connect(mapStateToProps)(ChildCompTwo);