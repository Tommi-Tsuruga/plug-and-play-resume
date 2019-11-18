/**
 * ExperienceForm.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */
import React from 'react';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import DateRangeSelector from "../DateRangeSelector";
import { DATE_FORMAT } from "../../actions/types";

export default class ExperienceForm extends React.Component {
    constructor(props) {
        super(props);
        const experience = props.experience;
        this.state = {
            title: experience ? experience.title : '',
            company: experience ? experience.company : '',
            description: experience ? experience.description : '',
            start_date: experience ? moment(experience.start_date,DATE_FORMAT) : moment(),
            end_date: experience ? moment(experience.end_date, DATE_FORMAT) : moment(),
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
    onCompanyChange = (e) => {
        const company = e.target.value;
        this.setState(() => ({ company }))
    };
    onDatesChange = ({ start_date, end_date }) => {
        this.setState(() => ({ start_date, end_date }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.title || !this.state.description || !this.state.company) {
            this.setState(() => ({
                error: 'Please provide Job Title, Institution and' +
                    ' Description'
            }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                                    title: this.state.title,
                                    company: this.state.company,
                                    description: this.state.description,
                                    start_date: moment(this.state.start_date).format(DATE_FORMAT),
                                    end_date: moment(this.state.end_date).format(DATE_FORMAT)
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
                        placeholder="Job Title"
                        value={ this.state.title }
                        onChange={ this.onTitleChange }
                    />
                    <input
                        className="text-input"
                        type="text"
                        placeholder="Institution"
                        value={ this.state.company }
                        onChange={ this.onCompanyChange }
                    />
                    <DateRangeSelector
                        className="input-group__item"
                        type="experience"
                        experience={ this.props.experience }
                        onDatesChange={ ({ start_date, end_date }) => {
                            this.onDatesChange({ start_date, end_date })
                        } }
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
