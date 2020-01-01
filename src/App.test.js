import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Adam's Wonderful Wild Weekend in Walla Walla Washington/i);
  expect(linkElement).toBeInTheDocument();
});
