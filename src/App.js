import React, { Component } from 'react';
import TopNavbar from './components/topNavbar/topNavbar';
import { BrowserRouter } from 'react-router-dom';
import { ContactContainer } from './pages/contact/contact';
import Home from './pages/home/home';
import { Switch, Route } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import Game from './pages/game/game';

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Provider store={store}>
          <BrowserRouter>
            <div className="App">
              <TopNavbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/game" component={Game} />
                <Route path="/contact" component={ContactContainer} />
              </Switch>
            </div>
          </BrowserRouter>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
