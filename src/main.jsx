// @flow
/* eslint-env browser */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import VisibleYouKnow from './VisibleYouKnow';
import YouKnowStore from './reducers';

let store = createStore(
    YouKnowStore,
    window.devToolsExtension && window.devToolsExtension(),
    applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        <VisibleYouKnow />
    </Provider>,
    document.getElementById('main')
);
