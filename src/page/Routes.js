import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { actionLogin } from "../redux/actions";

import Home from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import LoginPage from "./LoginPage";

const CLoginPage = connect(null, { onLogin: actionLogin })(LoginPage);

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <CLoginPage />
            </Route>

            <Route>
                <NotFoundPage />
            </Route>
        </Switch>
    );
}
