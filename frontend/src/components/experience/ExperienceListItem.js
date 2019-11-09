/**
 * ExperienceListItem.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import {Link} from 'react-router-dom';

const ExperienceListItem = ({id, title, description, company, start_date, end_date, experience_keywords}) => (
    <div className="list-item">
        <div className="list-item__title">
            {`${title} at ${company} (${start_date} - ${end_date}`})
        </div>
        <p>Description: {description} </p>
        <p>Keywords: {experience_keywords}</p>
        <Link to={`/edit/${id}`}>
            <button className="button--link">Edit</button>
        </Link>
    </div>
);
export default ExperienceListItem;
