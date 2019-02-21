import React from 'react';
import ReactDOM from 'react-dom';
import AppMap from './AppMap.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppMap />, div);
});
