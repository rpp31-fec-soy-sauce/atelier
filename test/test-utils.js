import React from 'react';
// import { render as rtlRender } from '@testing-library/react';
import { render as rtlRender, within } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import reducer from '../client/src/store/reducer';
import initialState from './initial-state';
// import theme from '../client/src/components/styles/theme';
import theme, { lightTheme } from '../client/src/components/styles/theme';


import App from '../client/src/components/App.jsx';

function render(
  ui,
  {
    preloadedState = initialState,
    store = configureStore({
      reducer,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }),
      preloadedState
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
