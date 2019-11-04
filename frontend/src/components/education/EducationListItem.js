/**
 * EductionListItems.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import {Link} from "react-router-dom";

const EducationListItem = ({schoolName, startDate, endDate}) => (
        <div className="list-item">
        <div className="list-item__title">
            {`${schoolName} (${startDate} - ${endDate}`})
        </div>
        <Link to={`/edit/${id}`}>
            <button className="button--link">Edit</button>
        </Link>
    </div>
);

export default EducationListItem;