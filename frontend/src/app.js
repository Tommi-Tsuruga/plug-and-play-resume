/**
 * app.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import store from "./store/configureStore";
import {Provider} from 'react-redux';
import AppRouter from "./routers/AppRouter";
import 'normalize.css/normalize.css';
import "./styles/styles.scss";
import 'react-dates/initialize';
import LoadingPage from "./components/LoadingPage";
import {loadUser} from './actions/auth';
import LoginFrom from "./components/accounts/LoginFrom";

console.log('app.js is running');

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('app'));


