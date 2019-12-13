/**
 * LoginPage.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */
import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import AccountFrom from "./AccountFrom";
import Loading from "../utils/Loading";
import { Container } from "react-bootstrap";

export const LoginPage = ({ dispatch }) => (
        <>
            <AccountFrom
                btnText="Login"
                link="/register"
                onSubmit={ ({ username, password }) => {
                    dispatch(login(username, password))
                } }
            />
        </>
);

export default connect()(LoginPage);
