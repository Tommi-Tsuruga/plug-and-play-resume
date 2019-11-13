/**
 * RegisterPage.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import AccountFrom from "./AccountFrom";

export const RegisterPage = (props) => (
    <div className="container">
        <header className="header">
            <div className="header__title">
                <div className="header__title__text">
                    <h1>PlugAndPlayResume</h1>
                </div>
            </div>
        </header>
        <AccountFrom
            buttonText="Register"
            linkText="Have an account? Login"
            link="/login"
            onSubmit={ ({ username, email, password }) => {
                props.dispatch(register(username, email, password));
            } }
        />
    </div>
);

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
};

export default connect(mapStateToProps)(RegisterPage)