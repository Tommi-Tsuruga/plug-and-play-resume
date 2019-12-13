/**
 * app.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga ](https://github.com/aishak7, https://github.com/Ks5810, https://github.com/tommi-tsuruga)
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from "./store/configureStore";
import { Provider as AlertProvider } from "react-alert";
import { Provider } from 'react-redux';
import { loadUser } from './actions/auth';
import AlertTemplate from "react-alert-template-basic";
import AppRouter from "./routers/AppRouter";
import 'react-dates/initialize';
import 'normalize.css/normalize.css';
import "./styles/styles.scss";

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


