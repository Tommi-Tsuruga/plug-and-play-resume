/**
 * app.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import {addExperience} from "./actions/experiences";
import 'normalize.css/normalize.css';
import "./styles/styles.scss";
import 'react-dates/initialize';

console.log('app.js is running');

const store = configureStore();

// store.dispatch(addExperience({
//     title: 'Student', company: 'Hunter College',
//     description: 'Studied Computer Science',
//     startDate: '12/31/1969', endDate: "12/31/2008"
// }));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

