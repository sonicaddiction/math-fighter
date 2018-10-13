import React, { Component } from 'react';
import './App.css';
import TopNavbar from './components/topNavbar/topNavbar';
import { BrowserRouter } from 'react-router-dom'
import { ContactContainer } from './pages/contact/contact';
import Home from './pages/home/home';
import { Switch, Route } from 'react-router-dom'
import { store } from './store';
import { Provider } from 'react-redux';

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <TopNavbar />
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/contact' component={ContactContainer}/>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
