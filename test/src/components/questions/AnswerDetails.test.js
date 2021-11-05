/**
 * @jest-environment jsdom
 */


import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
// import { render as rtlRender, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { answer } from '../../TestStates/InitialReduxStates';
import AnswerDetails from '../../../../client/src/components/questions/AnswerDetails.jsx';
import theme from '../../../../client/src/components/styles/theme';
import { ThemeProvider } from 'styled-components';


afterEach(cleanup);


describe('AnswerDetails', () => {

  const initialState = { answer }
  const mockStore = configureStore()
  let store, wrapper

  it("renders without crashing", () => {
    store = mockStore(initialState);
    const div = document.createElement("div");
    ReactDOM.render(<Provider store={store}>
      <ThemeProvider theme={theme}>
        <AnswerDetails />
      </ThemeProvider>
    </Provider>, div);
  })
})























