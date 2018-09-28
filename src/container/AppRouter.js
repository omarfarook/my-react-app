import React, {Component} from 'react';
import { Route, Redirect, withRouter} from 'react-router-dom'
import Switch from 'react-router-dom/Switch';
import { connect } from 'react-redux';
import Home from '../components/home/Home';
import Form from '../components/forms/Form';
import LazyComp from '../components/lazy-comps/Lazy-comp';
import AppPerson from '../components/persons/AppPerson';
import NotFound from '../components/not-found/Not-found';
import Spinner from '../components/ui/Spinner/Spinner';
import * as action from '../store/action/sample-action';

const LazyComponent = LazyComp(() => {
    return import('../components/lazy-comps/Lazy-routing')
})

class AppRouter extends Component {

    authGuard() {
        return true;
    }

    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        this.props.onAuth();
    }

    render() {
        return(
            <div>
            {this.props.loader ? <Spinner />: null}
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
        onAuth: () => dispatch( action.auth() ),
    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppRouter));