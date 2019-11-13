/**
 * EductionListItems.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import {Link} from "react-router-dom";

const EducationListItem = ({id, school_name, start_date, end_date, onClick}) => (
    <div className="list-item">
        <div className="list-item__text">
            <div className="list-item__title">
                {`${school_name} (${start_date} - ${end_date})`}
            </div>
        </div>
        <Link to={`/education/${id}`}>
            <button className="list-item__button">Edit</button>
        </Link>
        <button
            className="list-item__button"
            value={ id }
            onClick={(e) => onClick(e.target.value)}>Remove</button>
    </div>
);

export default EducationListItem;