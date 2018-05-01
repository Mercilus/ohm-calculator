import React from 'react';
import ReactDOM from 'react-dom';
import './theme/index.css';
import registerServiceWorker from './registerServiceWorker';
//import Master from './components/master';
import Panel from './components/panel';


ReactDOM.render(<Panel />, document.getElementById('root'));
registerServiceWorker();
