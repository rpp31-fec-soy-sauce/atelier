/**
 * @jest-environment jsdom
 */


 import React from 'react';
 import ReactDOM from 'react-dom';
 import { render, cleanup } from '@testing-library/react';
 import { Provider } from 'react-redux'
 import configureStore from 'redux-mock-store'
 import { questions } from '../../../TestStates/InitialReduxStates';
 import AddQuestion from '../../../../client/src/components/questions/AddQuestion.jsx';
 import theme from '../../../../client/src/components/styles/theme';
 import { ThemeProvider } from 'styled-components';

 afterEach(cleanup);


 describe('AddQuestion', () => {
   const initialState = { questions: [questions] }
   const mockStore = configureStore()
   let store, wrapper

   it("renders without crashing", () => {
     store = mockStore(initialState);
     const div = document.createElement("div");
     ReactDOM.render(<Provider store={store}>
       <ThemeProvider theme={theme}>
         <AddQuestion />
       </ThemeProvider>
     </Provider>, div);
   })
 })


