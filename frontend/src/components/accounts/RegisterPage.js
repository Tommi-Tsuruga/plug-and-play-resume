/**
 * RegisterPage.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import {connect} from "react-redux";
import {Link, Redirect} from 'react-router-dom'
import {addExperience} from "../../actions/experiences";
import {login, register} from "../../actions/auth";
import LoginFrom from "./LoginFrom";

export const RegisterPage = (props) => {
    return (
        <div className="container">
            <h1 className="header__title">PlugAndPlayResume</h1>
            <LoginFrom
                buttonText="Register"
                linkText="Have an account? Login"
                link="/login"
                onSubmit={({username, email, password}) => {
                    props.dispatch(register(username, email, password));
                }}
            />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
};

export default connect(mapStateToProps)(RegisterPage)