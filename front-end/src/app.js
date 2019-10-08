/**
 * app.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import {addExperience} from "./actions/experiences";
import { } from './actions/filters';
import getVisibleExperiences from './selectors/experiences';
import 'normalize.css/normalize.css';
import "./styles/styles.scss";

console.log('app.js is running');

const store = configureStore();

store.dispatch(addExperience({ title: 'Senior Manager', company: 'JPMorgan',
                               description: 'I hated this job',
                               startDate: '12/31/1969', endDate: '12/31/2008' }));

const state = store.getState();
const visibleExperience = getVisibleExperiences(state.experience, state.filters);
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

