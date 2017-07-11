
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import YouKnow from './YouKnow';
import YouKnowStore from './reducers';

const store = createStore(YouKnowStore);

render(
    <Provider store={store}>
        <YouKnow />
    </Provider>,
    document.getElementById('main')
);
