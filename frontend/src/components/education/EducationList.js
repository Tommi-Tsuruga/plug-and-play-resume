/**
 * EducationList.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react"
import {connect} from "react-redux"
import EducationListItem from "./EducationListItem"
import {fetchGenerated} from "../../actions/generated";

class EducationList extends React.Component {
    render = () => (
        <div className="section">
            <h3 className="list-header">Education</h3>
            <div className="container">
                <div className="list-body">
                    {this.props.educations.map(education => {
                        return <EducationListItem
                            key={education.id} {...education} />;
                    })}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
        educations: state.educations.educations
    });

export default connect(mapStateToProps)(EducationList);