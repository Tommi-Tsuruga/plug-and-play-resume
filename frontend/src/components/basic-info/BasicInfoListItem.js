import React from "react";

const BasicInfoListItem = ({first_name, last_name, email}) => (
    <div className="list-item">
        <div className="list-item__title">
                { `${first_name} ${last_name}  ${email}`})}}
            </div>
        </div>
);

export default BasicInfoListItem;
