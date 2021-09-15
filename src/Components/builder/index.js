import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import Builder from './Builder';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Builder />, document.getElementById('root'));
registerServiceWorker();
