/**
 * EductionListItems.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import {Link} from "react-router-dom";

const EducationListItem = ({id, school_name, start_date, end_date}) => (
    <div className="list-item">
        <div className="list-item__text">
            <div className="list-item__title">
                {`${school_name} (${start_date} - ${end_date})`}
            </div>
        </div>
        <Link to={` / edit /${id}`}>
            <button className="list-item__button">Edit</button>
        </Link>
    </div>
);

export default EducationListItem;