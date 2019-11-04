/**
 * AppRouter.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import {Router, Route, Switch, Link, NavLink} from "react-router-dom";
import {connect} from "react-redux";
import PlugResumePage from "../components/PlugResumePage";
import LoginPage from "../components/LoginPage";
import RegisterPage from "../components/RegisterPage";
import ExperiencePage from "../components/ResumePage";
import EditExperiencePage from "../components/experience/EditExperiencePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import {createBrowserHistory} from "history";
import {PublicRoute} from "./PublicRoute";
import {PrivateRoute} from "./PrivateRoute";
import {loadUser} from "../actions/auth";

export const history = createBrowserHistory();

export class AppRouter extends React.Component {
    componentDidMount() {
        this.props.loadUser();
    }

    render() {
        const isAuthenticated = this.props.auth.isAuthenticated;
        console.log(isAuthenticated);
        return (
            <Router history={history}>
                <div>
                    <Switch>
                        <PrivateRoute
                            isAuthenticated={isAuthenticated}
                            path="/"
                            component={PlugResumePage}
                            exact={true} />
                        <PublicRoute
                            isAuthenticated={isAuthenticated}
                            path="/login"
                            component={LoginPage} />
                        <PublicRoute
                            isAuthenticated={isAuthenticated}
                            path="/register"
                            component={RegisterPage}/>
                        <PrivateRoute
                            isAuthenticated={isAuthenticated}
                            path="/resume"
                            component={ExperiencePage}/>
                        <PrivateRoute
                            isAuthenticated={isAuthenticated}
                            path="resume/edit/:id"
                            component={EditExperiencePage}/>
                        <PrivateRoute
                            isAuthenticated={isAuthenticated}
                            path="/help" component={HelpPage}/>
                        <Route component={NotFoundPage}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch => ({
    loadUser: () => {
        return dispatch(loadUser());
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);