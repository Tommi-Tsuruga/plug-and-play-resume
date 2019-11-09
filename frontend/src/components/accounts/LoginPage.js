/**
 * LoginPage.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */
import React from "react";
import {connect} from "react-redux";
import {Link} from 'react-router-dom'
import {addExperience} from "../../actions/experiences";
import {login} from "../../actions/auth";
import LoginFrom from "./LoginFrom";

export const LoginPage = (props) => (
    <div className="container">
        <h1 className="header__title">PlugAndPlayResume</h1>
        <LoginFrom
            buttonText="Login"
            linkText="Don't have an account? Register"
            link="/register"
            onSubmit={({username, password}) => {
                props.dispatch(login(username, password))
            }}
        />
    </div>
);

const mapStateToProps = (state) => {
    let errors = [];
    if (state.auth.errors) {
        errors = Object.keys(state.auth.errors).map((field) => ({
            field, message: state.auth.errors[field]
        }));
    }
    return {
        errors,
        isAuthenticated: state.auth.isAuthenticated
    }
};

export default connect(mapStateToProps)(LoginPage);
