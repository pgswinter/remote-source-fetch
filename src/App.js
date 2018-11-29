import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from './_helpers/store';
import { history } from './_helpers/history';
import './App.scss';
import Menuleft from "./_pages/MenuLeft"
import Header from "./_pages/Header";
import Footer from "./_pages/Footer";
import Home from "./_containers/home.container";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router history={history}>
            <div>
              <Route path="/" component={Menuleft} />
              <div className="page-container">
                <Route path="/" component={Header} />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
              </div>
              <Route path="/" component={Footer} />
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
