/**
 * ExperienceListItem.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import {Link} from 'react-router-dom';

const ExperienceListItem = ({id, title, description, company, startDate, endDate}) => (
    <div className="list-item">
        <div className="list-item__title">
            {`${title} at ${company} (${startDate} - ${endDate}`})
        </div>
        <p>{description} </p>
        <Link to={`/edit/${id}`}>
            <button className="button--link">Edit</button>
        </Link>
    </div>
);
export default ExperienceListItem;
