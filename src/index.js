import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store';
import { ReduxApp } from './ReduxApp/ReduxApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store= {store}>
        <App />
        <ReduxApp />
    </Provider>
);
