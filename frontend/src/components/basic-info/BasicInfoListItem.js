import React from "react";

const BasicInfoListItem = ({id, first_name, last_name, email, ...basicInfo}) => (
    <div className="list-item">
        <div className="list-item__text">
        <div className="list-item__title">
                { `${first_name}  ${last_name}  ${email}`}
            </div>
        </div>
    </div>
);

export default BasicInfoListItem;
