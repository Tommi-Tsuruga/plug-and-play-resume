import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
const PrivateRoute = ({ component: Component, authReducer, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      {
        console.log('private route');
      }

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
