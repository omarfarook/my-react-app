import React, {Component} from 'react';
import { Route, Redirect, withRouter} from 'react-router-dom'
import Switch from 'react-router-dom/Switch';
import { connect } from 'react-redux';
// import { compose } from 'redux';
import Home from '../components/home/Home';
import Form from '../components/forms/Form';
import LazyComp from '../components/lazy-comps/Lazy-comp';
import AppPerson from '../components/persons/AppPerson';
import NotFound from '../components/not-found/Not-found';
import {auth} from '../store/action/sample-action';
import commonUtilityService from '../hoc/commonUtilityService';

const LazyComponent = LazyComp(() => {
    return import('../components/lazy-comps/Lazy-routing')
})

class AppRouter extends Component {

    authGuard() {
        return true;
    }

    componentDidMount() {
        console.log(this.props);
    }

    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    // componentWillMount() {
    //    // this.props.onAuth();
    // }
    componentWillMount = () => {
const {auth, history} = this.props;
        const loaders = auth();
       history.listen((location, action) => {
          console.log("on route change");
        });
      }
    

    render() {
        return(
            <div>
            <Switch>
                <Route path='/lazyComp' component={LazyComponent} />
                <Route path='/' exact component={Home} />
                <Route
                    path='/person/:id'
                    exact
                    render={(props) => <AppPerson {...props} data={{'isAuth': true}}/>}
                    />
                {this.authGuard() ? <Route path='/form' exact component={Form} />: <Redirect to='/'/>}
                <Route component={NotFound} />
            </Switch>
        </div>
        
        )
    }
}

const mapStateToProps = state => {
    return {
        loader: state.auth.loading
    };
  }

  const mapDispatchToProps = dispatch => {
    return {
        onAuth: () => dispatch( auth() ),
    };
};
 export default withRouter(connect(mapStateToProps,{auth})(commonUtilityService(AppRouter)));

 // not working
// export default compose(withRouter(connect(mapStateToProps, mapDispatchToProps)), commonUtilityService)(AppRouter);