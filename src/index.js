import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapProvider from '@bootstrap-styled/provider';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const myTheme = {
    '$btn-primary-bg': 'green',
    '$btn-primary-color': 'white'
  };

ReactDOM.render(
<BootstrapProvider theme={myTheme}>
    <Router>
        <App />
    </Router>
</BootstrapProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
