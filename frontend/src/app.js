/**
 * app.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from "./store/configureStore";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import 'normalize.css/normalize.css';
import "./styles/styles.scss";
import 'react-dates/initialize';
import { loadUser } from './actions/auth';

console.log('app.js is running');

const alertOptions = {
    timeout: 3000,
    position: "top center"
};

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={ store }>
                <AlertProvider template={ AlertTemplate } { ...alertOptions }>
                <AppRouter/>
                </AlertProvider>
            </Provider>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('app'));


