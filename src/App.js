import React from 'react';
import { Provider } from 'react-redux';

import Routes from './page/Routes';

import NavBarComponent from './component/NavBarComponent';
import store from './redux/store';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <NavBarComponent />
            <main>
                <Routes />
            </main>
        </Provider>
    );
}

export default App;
