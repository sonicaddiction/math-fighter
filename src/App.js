import React, { Component } from 'react';
import './App.css';
import TopNavbar from './components/topNavbar/topNavbar';
import { BrowserRouter } from 'react-router-dom'
import Contact from './pages/contact/contact';
import Home from './pages/home/home';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <TopNavbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
