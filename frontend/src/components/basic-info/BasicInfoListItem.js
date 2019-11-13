import React from "react";
import {Link} from "react-router-dom";

const BasicInfoListItem = ({id, first_name, last_name, email, created_at}) => {
    return(
        <div className="list-item">
            <div className="list-item__text">
                <div className="list-item__title">
                    {`${first_name}  ${last_name}  ${email}`}
                </div>
                <Link to={` / edit /${id}`}>
            <button className="list-item__button">Edit</button>
        </Link>
            </div>
        </div>
    );
};

export default BasicInfoListItem;
