import React from 'react';
import { render } from './utils/test-utils';
import App from './App';

describe('App.tsx', () => {
  it('should render the app', () => {
    const { getByText } = render(<App />);

    expect(getByText('This is a Div')).toBeTruthy();
  });
});
