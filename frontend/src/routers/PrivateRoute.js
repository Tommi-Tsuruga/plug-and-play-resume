import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import Header from '../components/Header';
import LoadingPage from "../components/LoadingPage";

const PrivateRoute = ({
    isAuthenticated,
    isLoading,
    component: Component,
    ...rest
    }) => (
            <Route { ...rest } component={ (props) => (
                isAuthenticated ? (
                    <div>
                        <Header/>
                        <Component { ...props } />
                    </div>
                ) : (
                    <Redirect to="/login"/>
                )
            ) }/>
        );

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading,
});

export default connect(mapStateToProps)(PrivateRoute);
