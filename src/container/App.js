import React, { PureComponent } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import logo from '../logo.svg';
import classes from './App.css';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';
import AppRouter from './AppRouter';
import ChildCompTwo from '../components/lazy-comps/lazy-child-comp/Child-comp-two';
// import styles from '../style.scss';
import { connect } from 'react-redux';
import Spinner from '../components/ui/Spinner/Spinner';

// import axios from '../axios';

class App extends PureComponent {

  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/todos/1')
  //        .then(response => {
  //          console.log(response);
  //        })
  //        .catch(error => {
  //          console.log(error);
  //        })
  // }
// componentDidMount() {
// console.log(this.props.prs)
// }
  
  render() {

    

    return (
      <BrowserRouter>
      
      <Aux classes={classes.App}>
        <header className={classes.App_header}>
          <img src={logo} className={[classes.App_logo,'App_logo_global', 'col-12'].join(' ')} alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className={classes.App_intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ChildCompTwo />
        <nav>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/person/1234'}>Person</Link></li>
            <li><Link to={'/form'}>Form</Link></li>
            <li><Link to={'/lazyComp'}>lazy Comp</Link></li>
          </ul>
        </nav>
      <AppRouter></AppRouter>
      </Aux>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
      prs: state.spl.persons
  };
}

export default connect(mapStateToProps)(withClass(App,classes.App));
