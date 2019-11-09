import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchListing, deleteListing, addResume} from "../../actions/listings";
import ListingItems from "./ListingItems";

class ListingSections extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(fetchListing());
    }
    submitResume(resume) {
        console.log("i in this submit function", resume);
        this.props.dispatch(addResume({resume}));
    }
    onSubmit = e => {
    };
    render() {
        return (
            <div className="container">
                <h2 className="page-header__title">Your listing</h2>
                <div className="container">
                    {this.props.listingInfo.map(listingInfo => {
                        return <ListingItems
                            key={listingInfo.id}
                            onClick={this.submitResume(listingInfo.id)}
                        />
                    })}
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    listingInfo: state.listings.listingInfo
});
export default connect(mapStateToProps)(ListingSections);