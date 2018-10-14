import React, {Component} from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom'
import Switch from 'react-router-dom/Switch';
import ChildCompOne from './lazy-child-comp/Child-comp-one';
import ChildCompTwo from './lazy-child-comp/Child-comp-two';
import NotFound from '../not-found/Not-found';

class LazyRouting extends Component {

    render() {
        return(
        <Router basename={'/lazyComp'}>
            <Switch>
                <Route path='/' exact component={ChildCompOne} />
                <Route path='/childTwo' component={ChildCompTwo} />
                <Route component={NotFound} />
            </Switch>
        </Router>
        )
    }
}

export default LazyRouting;