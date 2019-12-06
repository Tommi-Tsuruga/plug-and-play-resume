import React from 'react';
import { Link } from 'react-router-dom';

const JobHistoryListItems = ({
    id, title, description, company, start_date,
    end_date, job_history_keywords, onClick
}) => (
    <div className="list-item">
        <div className="list-item__text">
            <div className="list-item__title">
                { `${ title } at ${ company } (${ start_date } - ${ end_date }` })
            </div>
            <div
                className="list-item__data"> { `Keywords: ${ job_history_keywords }` }</div>
            <div
                className="list-item__data"> { `Description: ${ description }` } </div>
        </div>
        <button className="list-item__button">
            <Link to={ `/jobhistory/${ id }` }
                  className="link--text">Edit
            </Link>
        </button>
        <button
            className="list-item__button"
            value={ id }
            onClick={ e => onClick(e.target.value) }>Remove
        </button>
    </div>
);
export default JobHistoryListItems;
