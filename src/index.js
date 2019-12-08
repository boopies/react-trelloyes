import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
//import the name of the js with the OBJECT
import STORE from './STORE';

//pass it onto the app. let the name of the props (store=) be the name
//of the object JS file. this way it can be rendered.
//callback = ReactDOM.render(<App store={STORE}/>, document.getElementById('root'));

ReactDOM.render(<App store = {STORE}/>, document.getElementById('root'));
