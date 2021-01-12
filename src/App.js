import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';

import store from './redux/store';
import './App.css';

import MainPage from './page/MainPage';
import GamePage from './page/GamePage';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';

import NavBar from './component/NavBar';

function App() {
    return (
        <Provider store={store}>
            <>
                <NavBar />
                <main>
                    <Route path="/" component={MainPage} exact />
                    <Route path="/game" component={GamePage} exact />
                    <Route path="/login" component={LoginPage} exact />
                    <Route path="/register" component={RegisterPage} exact />
                </main>
            </>
        </Provider>
    );
}

export default App;
