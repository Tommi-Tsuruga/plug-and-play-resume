/**
 * LoginPage.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */
import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import AccountFrom from "./AccountFrom";

export const LoginPage = (props) => (
    <div className="container">
        <header className="header">
            <div className="header__title">
                <div className="header__title__text">
                    <h1>PlugAndPlayResume</h1>
                </div>
            </div>
                </header>
        <AccountFrom
            buttonText="Login"
            linkText="Don't have an account? Register"
            link="/register"
            onSubmit={({username, password}) => {
                props.dispatch(login(username, password))
            }}
        />
    </div>
);

const mapStateToProps = (state) => ({
        isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(LoginPage);
