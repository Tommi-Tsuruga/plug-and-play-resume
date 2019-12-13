/**
 * ExperienceForm.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga ](https://github.com/aishak7, https://github.com/Ks5810, https://github.com/tommi-tsuruga)
 */
import React, { Component } from 'react';
import 'react-dates/lib/css/_datepicker.css';

export default class ExperienceForm extends Component {
    constructor(props) {
        super(props);
        const experience = props.experience;
        this.state = {
            title: experience ? experience.title : '',
            description: experience ? experience.description : '',
            error: '',
            buttonText: this.props.buttonText
        };
    }

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!(this.state.title && this.state.description)) {
            this.setState(() => ({
                error: 'Please provide Experience Title, Description'
            }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                title: this.state.title,
                description: this.state.description
            });
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
                        placeholder="Experience Title"
                        value={ this.state.title }
                        onChange={ this.onTitleChange }
                    />
                    <textarea
                        className="textarea"
                        placeholder="Detailed description"
                        value={ this.state.description }
                        onChange={ this.onDescriptionChange }
                    />
                    <button
                        className="button--full">{ this.props.buttonText }</button>
                </form>
            </div>
        )
    }
}
