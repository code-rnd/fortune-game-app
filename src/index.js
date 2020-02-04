import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {store} from "./store";
import {WidjetContainer} from "./containers/WidjetContainer";

import './styles/style.scss';

ReactDOM.render(
    <Provider store={store}>
        <WidjetContainer/>
    </Provider>,
    document.getElementById('root'));

