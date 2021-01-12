import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';

import store from './redux/store';
import './App.css';

import MainPage from './page/MainPage';
import GamePage from './page/GamePage';
import LoginOrRegister from './component/LoginOrRegister';

function App() {
    return (
        <Provider store={store}>
            <>
                <LoginOrRegister />
                <main>
                    <Route path="/" component={MainPage} exact />
                    <Route path="/Game" component={GamePage} exact />
                </main>
            </>
        </Provider>
    );
}

export default App;
