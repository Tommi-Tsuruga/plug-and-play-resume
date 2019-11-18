import React from "react";
import { connect } from "react-redux";

const BasicInfoItem = ({basicInfo}) => {
    const { first_name, last_name, email } = basicInfo;
    return (
        <div className="container">
            <div className="list-item--basicInfo">
                  <div className="list-item__text">
                      <div className="list-item__title">
                          { ` ${ first_name } ${ last_name } ` }
                      </div>
                      <div className="list-item__data">
                          { email }
                      </div>
                  </div>
            </div>
        </div>

    );
};

const mapStateToProps = (state) => ({
    basicInfo: state.basicInfo
});

export default connect(mapStateToProps)(BasicInfoItem);