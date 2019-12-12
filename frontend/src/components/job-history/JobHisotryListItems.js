import React from 'react';
import { Link } from 'react-router-dom';

const JobHistoryListItems = ({
    id, title, description, company, start_date,
    end_date, job_history_keywords, onClick
}) => (
    <>
        { `${ title } at ${ company } (${ start_date } - ${ end_date }` } <br/>
        { `Keywords: ${ job_history_keywords }` } <br/>
        { `Description: ${ description }` }
        <button className="list-item__button">
            <Link to={ `/jobhistory/${ id }` }
                  className="link--text">Edit
            </Link>
        </button>
        <button
            className="list-item__button"
            value={ id }
            onClick={ e => onClick(e.target.value) }>Remove
        </button> <br/>
    </>
);
export default JobHistoryListItems;
