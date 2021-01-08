import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './HomePage';
import NotFoundPage from './NotFoundPage';
import LoginPage from './LoginPage';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <LoginPage />
            </Route>

            <Route>
                <NotFoundPage />
            </Route>
        </Switch>
    );
}
