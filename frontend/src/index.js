import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './containers/tictactoe';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
