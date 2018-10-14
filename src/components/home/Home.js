import React, {Component} from 'react';
import { compose } from 'redux';
import scriptLoader from 'react-async-script-loader';

import commonUtilityService from '../../hoc/commonUtilityService';

class Home extends Component {
    render() {
        return (
            <div>Home component works...
                {this.props.titleAndMetaTags('Home', 'Welcome to home page')}
            </div> 
        )
    }
}
// const home = () => {
//     return <div>Home component works...
//     {this.props.titleAndMetaTags('Home', 'Welcome to home page')}
//     </div> 
// }

Home.displayName = 'home-comp'

export default compose(scriptLoader('https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js'), commonUtilityService)(Home);