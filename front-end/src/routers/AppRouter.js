/**
 * AppRouter.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import {BrowserRouter, Link, NavLink, Route, Switch} from "react-router-dom";
import PlugResumePage from "../components/PlugResumePage";
import LoginPage from "../components/LoginPage";
import ExperiencePage from "../components/ExperiencePage";
import EditExperiencePage from "../components/EditExperiencePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={PlugResumePage} exact={true}/>
                <Route path="/login" component={LoginPage} />
                <Route path="/experience/" component={ExperiencePage} />
                <Route path="/edit/:id" component={EditExperiencePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;