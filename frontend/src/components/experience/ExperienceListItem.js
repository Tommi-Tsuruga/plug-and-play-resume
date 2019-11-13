/**
 * ExperienceListItem.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import {Link} from 'react-router-dom';

const ExperienceListItem = ({id, title, description, company, start_date, end_date, experience_keywords}) => (
    <div className="list-item">
        <div className="list-item__text">
            <div className="list-item__title">
                {`${title} at ${company} (${start_date} - ${end_date}`})
            </div>
            <div className="list-item__data"> {`Keywords: ${experience_keywords}`}</div>
            <div className="list-item__data"> {`Description: ${description}`} </div>
        </div>
        <Link to={`/edit/${id}`}>
            <button className="list-item__button">Edit</button>
        </Link>
        <button className="list-item__button">Remove</button>
    </div>
);
export default ExperienceListItem;
