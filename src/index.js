/*eslint-disable*/
import React from 'react';
import ReactDOM from 'react-dom';
import RouterComponent from './router';
import * as serviceWorker from './serviceWorker';
import "./assets/css/common/public.css"
//import "./assets/js/libs/zepto"
import 'babel-polyfill';
import 'url-search-params-polyfill'

ReactDOM.render(<RouterComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
