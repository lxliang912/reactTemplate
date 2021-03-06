import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

// antd design style lib
import 'antd/dist/antd.css';
// common style lib
import './style/index.css';

// import container
import App from './App';

import * as serviceWorker from './utils/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
