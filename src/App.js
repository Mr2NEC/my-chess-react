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
import GameBar from './component/GameBar';
import ErrorModal from './component/ErrorModal';

const wrapperDiv = {
    minHeight: '100vh',
};

function App() {
    const dbGame = useSelector((state) => state.gameDbReducer);
    const auth = useSelector( ( state ) => state.authReducer );
    const realGame = useSelector( ( state ) => state.gameReducer )
    const props = {
        color: dbGame.color,
        turn: realGame.turn,
    };
    return (
        <div className="d-flex w-100 flex-column " style={wrapperDiv}>
            <header className="flex-grow-0 flex-shrink-0 w-100">
                {dbGame.gameId ? <GameBar {...props}/> : <NavBar />}
            </header>
            <main className="flex-grow-1 flex-shrink-0 w-100 ">
                <ErrorModal />
                <Switch>
                    <Route exact path="/">
                        {dbGame.gameId ? <Redirect to={`/game/${dbGame.gameId}`} />: <MainPage />}
                    </Route>
                    <Route exact path="/login">
                        {auth.token ? <Redirect to="/" /> : <LoginPage />}
                    </Route>
                    <Route exact path="/register">
                        {auth.token ? <Redirect to="/" /> : <RegisterPage />}
                    </Route>
                    <Route exact path="/game/:id">
                        {!dbGame.gameId ? <Redirect to="/" />: <GamePage />}
                    </Route>
                    <Route component={NotFoundPage} path='*' />
                </Switch>
            </main>
            <footer className="bg-dark text-light text-center text-lg-start flex-shrink-0 flex-grow-0 w-100 py-2">
            </footer>
        </div>
    );
}

export default App;
