import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hashHistory } from 'react-router';
const PrivateRoute = ({ component: Component, authReducer, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (authReducer.isLoading) {
        return <h2>Loading...</h2>;
      } else if (!authReducer.isAuthenticated) {
        return <Redirect to='/login' />;
      } else {
        console.log(props);
        return <Component {...props} />;
      }
    }}
  />
);
const mapStateToProps = state => ({
  authReducer: state.authReducer
});

export default connect(mapStateToProps)(PrivateRoute);
