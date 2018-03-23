import React from 'react';
import ReactDOM from 'react-dom';
import AnalyticsFeatures from './AnalyticsFeatures';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AnalyticsFeatures/>, div);
});