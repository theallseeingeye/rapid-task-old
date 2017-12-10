import React from 'react';
import ReactDOM from 'react-dom';
// This imports the main complied css sass preprocessed from SCSS.
import './index.css';
import FrontPage from './containers/frontpage/frontpage.js';


import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<FrontPage />, document.getElementById('root'));
registerServiceWorker();
