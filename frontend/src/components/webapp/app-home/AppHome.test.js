import React from 'react';
import ReactDOM from 'react-dom';
import AppHome from './AppHome.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppHome />, div);
});
