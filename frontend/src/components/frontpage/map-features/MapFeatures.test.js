import React from 'react';
import ReactDOM from 'react-dom';
import MapFeatures from './MapFeatures';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MapFeatures/>, div);
});