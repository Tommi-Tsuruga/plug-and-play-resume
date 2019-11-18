/**
 * RegisterPage.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import AccountFrom from "./AccountFrom";
import Loading from "../Loading";

export const RegisterPage = ({ dispatch, userLoading }) =>
    userLoading ? <Loading/> : (
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
                dispatch(register(username, email, password));
            } }
        />
    </div>
);

const mapStateToProps = (state) => ({
    userLoading: state.auth.isLoading
});

export default connect(mapStateToProps)(RegisterPage)