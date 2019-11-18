/**
 * LoginPage.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */
import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import AccountFrom from "./AccountFrom";
import Loading from "../Loading";

export const LoginPage = ({ dispatch, userLoading }) => (
    userLoading ? <Loading/> : (
        <div className="container">
            <header className="header">
                <div className="container">
                    <div className="header__title">
                        <div className="header__title__text">
                            <h1 className="header__title__text">PlugAndPlayResume</h1>
                        </div>
                    </div>
                </div>
            </header>
            <AccountFrom
                buttonText="Login"
                linkText="Don't have an account? Register"
                link="/register"
                onSubmit={ ({ username, password }) => {
                    dispatch(login(username, password))
                } }
            />
        </div>
    )
);

const mapStateToProps = (state) => ({
    userLoading: state.auth.isLoading
});

export default connect(mapStateToProps)(LoginPage);
