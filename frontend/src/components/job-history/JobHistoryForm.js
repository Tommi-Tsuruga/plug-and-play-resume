import React, { Component } from 'react';
import moment from 'moment';
import { DATE_FORMAT } from "../../actions/types";
import DateRangeSelector from "../DateRangeSelector";

export default class JobHistoryForm extends Component {
    constructor(props) {
        super(props);
        const jobHistory = props.jobHistory;
        this.state = {
            title: jobHistory ? jobHistory.title : '',
            company: jobHistory ? jobHistory.company : '',
            description: jobHistory ? jobHistory.description : '',
            start_date: jobHistory ? moment(jobHistory.start_date)
                                           .format(DATE_FORMAT) : moment(),
            end_date: jobHistory ? moment(jobHistory.end_date)
                                         .format(DATE_FORMAT) : moment(),
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
    onDatesChange = ({ startDate, endDate }) => {
        this.setState(() => ({ startDate, endDate }));
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
                                    start_date: moment(this.state.startDate)
                                        .format(DATE_FORMAT),
                                    end_date: moment(this.state.endDate)
                                        .format(DATE_FORMAT)
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
                        experience={ this.props.jobHistory }
                        onDatesChange={ ({ startDate, endDate }) => {
                            this.onDatesChange({ startDate, endDate })
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
