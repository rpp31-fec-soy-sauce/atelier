/**
 * @jest-environment jsdom
 */


 import React from 'react';
 import ReactDOM from 'react-dom';
 import { render, cleanup} from '@testing-library/react';
 import { Provider } from 'react-redux'
 import configureStore from 'redux-mock-store'
 import { question } from '../../TestStates/InitialReduxStates';
 import QuestionDetails from '../../../../client/src/components/questions/QuestionDetails.jsx';
 import theme from '../../../../client/src/components/styles/theme';
 import { ThemeProvider } from 'styled-components';

 afterEach(cleanup);


 describe('Questions', () => {

   const initialState = {question: [question]}
   const mockStore = configureStore()
   let store,wrapper

   it("renders without crashing", () => {
       store = mockStore(initialState);
       const div = document.createElement("div");
       ReactDOM.render(<Provider store={store}>
         <ThemeProvider theme={theme}>
         <QuestionDetails />
         </ThemeProvider>
         </Provider>, div);
   })
 })
