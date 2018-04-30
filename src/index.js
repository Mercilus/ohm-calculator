import React from 'react';
import ReactDOM from 'react-dom';
import './theme/index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Master from './components/master';


ReactDOM.render(<Master />, document.getElementById('root'));
registerServiceWorker();
