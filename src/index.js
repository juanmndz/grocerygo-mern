import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import history from './utils/history';
import configureStore from './configureStore';
import globalStyles from './styles/globalStyles'
import resetStyles from './styles/resetStyles'
const initialState = {};
const store = configureStore(initialState, history);

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <resetStyles />
        <globalStyles />
        <App />
      </ConnectedRouter>
    </Provider>,  
    document.getElementById('root')
);
