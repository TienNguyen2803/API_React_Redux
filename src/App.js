import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Menu from '././components/Menu/Menu';
import './App.css';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <div className="container">
            {this.showContentMenu(routes)}
          </div>
        </div>
      </Router>
    );
  }
  showContentMenu = (routes) => {
    var result = null;
    result = routes.map((route, index) => {
      return <Route key={index} path={route.path} exact={route.exact} component={route.main} />
    })
    return <Switch>{result}</Switch>;
  }
}

export default App;