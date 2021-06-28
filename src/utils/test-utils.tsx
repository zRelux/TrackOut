import React from 'react';
import { ThemeProvider } from 'react-native-magnus';

import { render } from '@testing-library/react-native';

const AllTheProviders: React.FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (ui: JSX.Element, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };
