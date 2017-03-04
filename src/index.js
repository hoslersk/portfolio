// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import Routes from './routes'

ReactDOM.render(
	<Router history={browserHistory} routes={Routes} />,
	document.getElementById('root')
);
