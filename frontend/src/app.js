/**
 * app.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import "./styles/styles.scss";
import 'react-dates/initialize';
import LoadingPage from "./components/LoadingPage";
import {loadUser} from './actions/auth';
console.log('app.js is running');

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

