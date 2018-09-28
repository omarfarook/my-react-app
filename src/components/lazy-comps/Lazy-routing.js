import React, {Component} from 'react';
import { Route} from 'react-router-dom'
import Switch from 'react-router-dom/Switch';
import ChildCompOne from './lazy-child-comp/Child-comp-one';
import ChildCompTwo from './lazy-child-comp/Child-comp-two';
import NotFound from '../not-found/Not-found';

class LazyRouting extends Component {

    render() {
        return(
        <Switch>
          <Route path='/lazyComp/' exact component={ChildCompOne} />
          <Route path='/lazyComp/childTwo' component={ChildCompTwo} />
          <Route component={NotFound} />
        </Switch>
        )
    }
}

export default LazyRouting;