import React from 'react';
import ReactDOM from 'react-dom';
import SubscriptionForm from './SubscriptionForm.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SubscriptionForm />, div);
});
