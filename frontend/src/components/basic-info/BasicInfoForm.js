/**
 * BasicInfoForm.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga ](https://github.com/aishak7, https://github.com/Ks5810, https://github.com/tommi-tsuruga)
 */

import React from 'react';
import { connect } from 'react-redux'

class BasicInfoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: props.basicInfo ? props.basicInfo.first_name : '',
            last_name: props.basicInfo ? props.basicInfo.last_name : '',
            email: props.basicInfo ? props.basicInfo.email : ''
        };
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        const { first_name, last_name, email } = this.props.basicInfo;
        if (prevProps.basicInfo !== this.props.basicInfo) {
            this.setState(() =>({ first_name, last_name, email }))
        }
    }

    onFirstNameChange = (e) => {
        const first_name = e.target.value;
        this.setState(() => ({ first_name }));
    };
    onLastNameChange = (e) => {
        const last_name = e.target.value;
        this.setState(() => ({ last_name }));
    };
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        const {first_name, last_name, email}=this.state;
        if (!(first_name && last_name && email)) {
            this.setState(() => ({ error: 'Please provide all fields' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({ first_name, last_name, email });
        }
    };

    render() {
        return (
            <div className="container">
                <form className="form" onSubmit={ this.onSubmit }>
                    { this.state.error &&
                    <p className="form-error">{ this.state.error }</p> }
                    <input
                        className="text-input"
                        type="text"
                        placeholder="First Name"
                        value={ this.state.first_name }
                        onChange={ this.onFirstNameChange }
                    />
                    <input
                        className="text-input"
                        type="text"
                        placeholder="Last Name"
                        value={ this.state.last_name }
                        onChange={ this.onLastNameChange }
                    />
                    <input
                        className="text-input"
                        type="text"
                        placeholder="email"
                        value={ this.state.email }
                        onChange={ this.onEmailChange }
                    />
                    <button
                        className="button--full">Save your profile
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    basicInfo: state.basicInfo
});

export default connect(mapStateToProps)(BasicInfoForm);