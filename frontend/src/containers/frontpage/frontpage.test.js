import React from 'react';
import ReactDOM from 'react-dom';
import FrontPage from './frontpage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FrontPage />, div);
});
