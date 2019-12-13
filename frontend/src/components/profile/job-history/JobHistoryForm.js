import React, { Component } from 'react';
import moment from 'moment';
import { DATE_FORMAT } from "../../../actions/types";
import DateRangeSelector from "../../utils/DateRangeSelector";
import { Alert, Button, Form } from "react-bootstrap";

export default class JobHistoryForm extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            title: props.jobHistory ? props.jobHistory.title : '',
            company: props.jobHistory ? props.jobHistory.company : '',
            description: props.jobHistory ? props.jobHistory.description : '',
            start_date: props.jobHistory ? moment(props.jobHistory.start_date)
                .format(DATE_FORMAT) : moment(),
            end_date: props.jobHistory ? moment(props.jobHistory.end_date)
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
                <Form onSubmit={ this.onSubmit }>
                    { this.state.error &&
                    <Alert variant="danger">{ this.state.error }</Alert> }
                    <Form.Control
                        size="md"
                        type="text"
                        placeholder="Job Title"
                        value={ this.state.title }
                        onChange={ this.onTitleChange }
                    />
                    <Form.Control
                        size="md"
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
                    <Form.Control
                        as="textarea"
                        rows="8"
                        placeholder="Detailed description"
                        value={ this.state.description }
                        onChange={ this.onDescriptionChange }
                    />
                    <Button
                        className="btn-full"
                        type="submit">
                        { this.props.buttonText }
                    </Button>
                </Form>
        )
    }
}
