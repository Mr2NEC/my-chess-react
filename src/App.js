import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';

import MainPage from './page/MainPage';
import GamePage from './page/GamePage';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import NotFoundPage from './page/NotFoundPage';

import NavBar from './component/NavBar';

function App() {
    const game = useSelector((state) => state.gameReducer);
    return (
        <>
        {game.gameId?<Redirect to={`/game/${game.gameId}`} />:<NavBar />}
            <Switch>
                <Route component={MainPage} path="/" exact />
                <Route path="/game/:id" component={GamePage} exact />
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
