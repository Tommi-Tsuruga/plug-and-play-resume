import React from 'react';
import { Button, ButtonGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"

const JobHistoryListItems = ({
    id, title, description, company, start_date,
    end_date, job_history_keywords, onClick
}) => (
    <ListGroupItem>
        <b>{ title }</b> at <b>{ company }</b> { `(${ start_date } - ${ end_date })`} <br/>
        { `Keywords: ${ job_history_keywords }` } <br/>
        { `Description: ${ description }` } <br/>
        <ButtonGroup size="sm" className="btn-full">
        <LinkContainer to={ `/jobhistory/${ id }` }>
            <Button variant="secondary">Edit</Button>
        </LinkContainer>
        <Button
            variant="danger"
            value={ id }
            onClick={ e => onClick(e.target.value) }>Remove
        </Button>
    </ButtonGroup>
    </ListGroupItem>
);
export default JobHistoryListItems;
