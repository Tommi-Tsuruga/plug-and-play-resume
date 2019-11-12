import React from "react";

const BasicInfoListItem = ({first_name, last_name, email}) => {
    return(
        <div className="list-item">
            <div className="list-item__text">
                <div className="list-item__title">
                    { `${first_name}  ${last_name}  ${email}`}
                </div>
            </div>
        </div>
    );
};

export default BasicInfoListItem;
