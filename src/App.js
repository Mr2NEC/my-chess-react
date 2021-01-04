import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import BoardPage from './page/BoardPage';
import MainPage from './page/MainPage';
import store from './redux/store';
import './App.css';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <main>
                    <Route path="/" component={MainPage} exact />
                    <Route path="/BoardPage" component={BoardPage} exact />
                </main>
            </Router>
        </Provider>
    );
}

export default App;
