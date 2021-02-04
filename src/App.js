import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';

import MainPage from './page/MainPage';
import GamePage from './page/GamePage';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import NotFoundPage from './page/NotFoundPage';

import NavBar from './component/NavBar';
import ErrorModal from './component/ErrorModal';

const wrapperDiv = {
    minHeight: '100vh',
};

function App() {
    const game = useSelector((state) => state.gameDbReducer);
    const auth = useSelector((state) => state.authReducer);
    return (
        <div className="d-flex w-100 flex-column " style={wrapperDiv}>
            <header className="flex-grow-0 flex-shrink-0 w-100">
                {game.gameId ? (
                    <Redirect to={`/game/${game.gameId}`} />
                ) : (
                    <>
                        {auth.token !== undefined &&
                        auth.token === localStorage.token ? (
                            <>
                                <NavBar />
                                <Redirect to="/" />
                            </>
                        ) : (
                            <NavBar />
                        )}
                    </>
                )}
            </header>
            <main className="flex-grow-1 flex-shrink-0 w-100 ">
                <ErrorModal />
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
            </main>
            <footer className="bg-dark text-light text-center text-lg-start flex-shrink-0 flex-grow-0 w-100">
                <div className="text-center p-3 ">
                    created by Vladyslav Shpylka Project on GitHub:
                    <a
                        className="text-light px-1"
                        href="https://github.com/Mr2NEC/my-chess-react"
                        target="_blank"
                        rel="noreferrer"
                    >
                        React
                    </a>
                    <a
                        className="text-light px-1"
                        href="https://github.com/Mr2NEC/my-chess-node"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Node
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default App;
