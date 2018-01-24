import React from 'react';
import ReactDOM from 'react-dom';
import InventoryFeatures from './InventoryFeatures';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InventoryFeatures/>, div);
});