/**
 * RegisterPage.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import AccountFrom from "./AccountFrom";

export const RegisterPage = ({ dispatch }) => (
    <>
        <AccountFrom
            btnText="Register"
            link="/login"
            onSubmit={ ({ username, email, password }) => {
                dispatch(register(username, email, password));
            } }
        />
    </>
);

export default connect()(RegisterPage)