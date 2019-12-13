/**
 * LoginForm.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga ](https://github.com/aishak7, https://github.com/Ks5810, https://github.com/tommi-tsuruga)
 */
import React from "react";
import { Link } from 'react-router-dom'

export default class AccountFrom extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        username: "",
        email: "",
        password: "",
    };
    onUsernameChange = (e) => {
        const username = e.target.value;
        this.setState(() => ({ username }));
    };
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    };
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!(this.state.username || this.state.password)) {
            this.setState(() => ({
                error: 'Please provide both username and password'
            }));
        } else {
            console.log(this.state.email);
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                                    username: this.state.username,
                                    email: this.state.email,
                                    password: this.state.password
                                })
        }
    };

    render = () => (
        <div className="container">
            <form  onSubmit={ this.onSubmit }>
                { this.state.error &&
                <p className="form-error">{ this.state.error }</p> }
                    <input
                        className="text-input__login"
                        type="text"
                        placeholder="Username"
                        value={ this.state.username }
                        onChange={ this.onUsernameChange }
                    />
                    { this.props.buttonText === "Register" &&
                    <input
                        className="text-input__login"
                        type="text"
                        placeholder="Email"
                        value={ this.state.email }
                        onChange={ this.onEmailChange }
                    /> }
                    <input
                        className="text-input__login"
                        type="password"
                        placeholder="Password"
                        value={ this.state.password }
                        onChange={ this.onPasswordChange }
                    />
                <button
                    className="button--full">{ this.props.buttonText }</button>
                <Link to={ this.props.link }>{ this.props.linkText }</Link>
            </form>
        </div>
    );
}