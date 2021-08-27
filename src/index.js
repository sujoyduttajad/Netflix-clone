import React from 'react';
import { render } from 'react-dom';
import App from './App.js';
import 'normalize.css';
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod';

render( <>
    <React.StrictMode>
        <GlobalStyles />
        <App />
    </React.StrictMode>
    </> 
    ,document.getElementById('root'))

