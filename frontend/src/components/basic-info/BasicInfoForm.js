/**
 * BasicInfoForm.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import moment from 'moment';

export default class BasicInfoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: props.basicInfo.basicInfo ? props.basicInfo.firstName : '',
            lastName: props.basicInfo.basicInfo ? props.basicInfo.lastName : '',
            email: props.basicInfo.basicInfo ? props.basicInfo.email : ''
        };
    }
    onFirstNameChange = (e) => {
        const firstName  = e.target.value;
        this.setState(() => ({firstName}));
    };
    onLastNameChange = (e) => {
        const lastName  = e.target.value;
        this.setState(() => ({lastName}));
    };
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState({email})
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!(this.state.firstName&&this.state.lastName&&this.state.email)) {
            this.setState(() => ({ error: 'Please provide all fields' }));
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email
            });
        }
    };
    render() {
        return (
            <div className="container">
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error &&
                    <p className="form-error">{this.state.error}</p>}
                    <input
                        className="text-input"
                        type="text"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={this.onFirstNameChange}
                    />
                    <input
                        className="text-input"
                        type="text"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={this.onLastNameChange}
                    />
                    <input
                        className="text-input"
                        type="text"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.onEmailChange}
                    />
                    <button
                        className="button--full">Save your profile</button>
                </form>
            </div>
        )
    }
}