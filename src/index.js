import React from 'react';
import ReactDOM from 'react-dom';
import './theme/index.css';
import registerServiceWorker from './registerServiceWorker';
//import Master from './components/master';
import Master from './components/master';


ReactDOM.render(<Master />, document.getElementById('root'));
registerServiceWorker();
