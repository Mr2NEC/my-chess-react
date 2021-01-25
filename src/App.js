import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import MainPage from './page/MainPage';
import GamePage from './page/GamePage';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import NotFoundPage from './page/NotFoundPage';

import NavBar from './component/NavBar';
// import {socket} from './redux/socket';

function App() {
    // socket.on('connection')
    return (
        <>
            <NavBar />
            <Switch>
                <Route component={MainPage} path="/" exact />
                <Route component={GamePage} path="/game" exact />
                <Route component={LoginPage} path="/login" exact />
                <Route component={RegisterPage} path="/register" exact />
                <Route
                    render={({ location }) => (
                        <>
                            <NotFoundPage />
                        </>
                    )}
                />
            </Switch>
        </>
    );
}

export default App;
