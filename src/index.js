import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// $FlowSuppress: Fix typing errors
import { unregister } from './serviceWorker';

const root: ?Element = document.getElementById('root');

if (root != null) {
    ReactDOM.render(<App/>, root);

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    unregister();
}

