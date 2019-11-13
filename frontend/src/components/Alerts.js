import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if (error !== prevProps.error) {
            if (error.msg.name) {
                alert.error(`Name: ${ error.msg.name.join() }`)
            }
            if (error.msg.email) {
                alert.error(`Email: ${ error.msg.email.join() }`)
            }
            if (error.msg.education) {
                alert.error(`Education: ${ error.msg.education.join() }`);
            }
        }
        //login errors here
        if (message !== prevProps.message) {
            if (message.listingError) {alert.error((message.listingError))}
            if (message.infoDeleted) {alert.success(message.infoDeleted)}
            if (message.infoAdded) {alert.success(message.infoAdded)}

            if (message.passwordNotMatch) {
                alert.error(
                    message.passwordNotMatch);
            }
        }
    }
}

const mapStateToProps = state => ({
        error: state.errors,
        message: state.messages.message
    });
export default connect(mapStateToProps)(withAlert()(Alerts));
