import React from 'react';
import ReactDOM from 'react-dom';
import CareersPage from './CareersPage.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CareersPage />, div);
});
