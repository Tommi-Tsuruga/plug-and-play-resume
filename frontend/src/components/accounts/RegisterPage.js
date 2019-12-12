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
        <>
            <h1>PlugAndPlayResume</h1>
            <AccountFrom
                buttonText="Register"
                linkText="Have an account? Login"
                link="/login"
                onSubmit={ ({ username, email, password }) => {
                    dispatch(register(username, email, password));
                } }
            />
        </>
    );

const mapStateToProps = (state) => ({
    userLoading: state.auth.isLoading
});

export default connect(mapStateToProps)(RegisterPage)