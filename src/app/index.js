import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
} from 'react-router-dom';

// import common util function
import './utils/util.js';

// import container
import App from './pages/Container/App';

// antd design style lib
import 'antd/dist/antd.css';

// common style lib
import './style/index.css';

import * as serviceWorker from './utils/serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
