
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import VisibleYouKnow from './VisibleYouKnow';
import YouKnowStore from './reducers';

let store = createStore(YouKnowStore, window.devToolsExtension && window.devToolsExtension());

render(
    <Provider store={store}>
        <VisibleYouKnow />
    </Provider>,
    document.getElementById('main')
);
