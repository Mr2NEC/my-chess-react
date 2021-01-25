import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './redux/reducer/rootReducer';
import { Provider } from 'react-redux';
import WebSocketProvider from './redux/WebSocket';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <WebSocketProvider>
                <App />
            </WebSocketProvider>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
reportWebVitals();
