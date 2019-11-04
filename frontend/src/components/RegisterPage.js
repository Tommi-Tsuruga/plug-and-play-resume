/**
 * RegisterPage.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import {connect} from "react-redux";
import {Link} from 'react-router-dom'
import {startAddExperience} from "../actions/experiences";
import {login, register} from "../actions/auth";
import LoginFrom from "./LoginFrom";

export const RegisterPage = (props) => (
    <div className="container">
            <h1 className="header__title">PlugAndPlayResume</h1>
        <fieldset>
            {props.errors.length > 0 && (
                <ul>
                    {props.errors.map(error => (
                        <li key={error.field}>{error.message}</li>
                    ))}
                </ul>
            )}
        </fieldset>
        <LoginFrom
            buttonText="Register"
            linkText="Have an account? Login"
            link="/login"
            onSubmit={({username, password}) => {
                props.dispatch(register(username,password))
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

export default connect(mapStateToProps)(RegisterPage)