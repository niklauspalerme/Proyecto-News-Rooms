import React, { Component, Fragment } from 'react';
import {BrowserRouter, Route, Redirect, Link, Switch} from 'react-router-dom';
import Header from './components/Header';
import News from './components/News';
import Home from './components/Home';
import NewsSearch from './components/NewsSearch'



import './App.css';

class App extends Component {


  render() {

    //console.log(this.state.news)

    return (
     <Fragment>
       <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path='/' component={Home}/>
            {/*Colocar aqui un redirect cuando la busqueda sea */}
            <Route exact path='/category/:query' component={News}/>
            <Route exact path='/search/:query2' component={NewsSearch}/>
        </Switch>
      </BrowserRouter>
     </Fragment>
    );
  }
}

export default App;
