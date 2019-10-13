/**
 * ExperienceListItem.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import {Link} from 'react-router-dom';

const ExperienceListItem = ({id, title, description, company, startDate, endDate}) => (
    <div>
        <p>Job Title: {title}</p>
        <p>Company: {company}</p>
        <p>{`${startDate} ${endDate}`} </p>
        <p>Description: {description}</p>
        <Link to={`/edit/${id}`}>
            <button>Edit</button>
        </Link>
    </div>
);
export default ExperienceListItem;
