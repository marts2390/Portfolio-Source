import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';

const jsx = (
    <AppRouter />
)

ReactDOM.render(jsx, document.getElementById('app'));

// serviceWorker.unregister();
