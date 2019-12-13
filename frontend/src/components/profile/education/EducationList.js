/**
 * EducationList.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react"
import { connect } from "react-redux"
import EducationListItem from "./EducationListItem"
import { removeEducation } from "../../../actions/educations";
import { ListGroup } from "react-bootstrap";

class EducationList extends React.Component {
    render() {
        return (
            <ListGroup>
                { this.props.educations.map(education => {
                    return <EducationListItem
                        key={ education.id }
                        { ...education }
                        onClick={ (id) => this.props.dispatch(
                            removeEducation(id)) }/>;
                }) }
            </ListGroup>
        );
    }
}

const mapStateToProps = (state) => ({
    educations: state.educations.educations
});

export default connect(mapStateToProps)(EducationList);