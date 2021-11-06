// /**
//  * @jest-environment jsdom
//  */


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { render, cleanup } from '@testing-library/react';
// import { Provider } from 'react-redux'
// import configureStore from 'redux-mock-store'
// import { questions } from '../../../TestStates/InitialReduxStates';
// import AnswerDetails from '../../../../client/src/components/questions/AnswerDetails.jsx';
// import theme from '../../../../client/src/components/styles/theme';
// import { ThemeProvider } from 'styled-components';


// afterEach(cleanup);


// describe('AnswerDetails', () => {
//   const initialState = { questions: [questions] }
//   const mockStore = configureStore()
//   let store, wrapper

//   const answer = questions.results[2].answers["4811970"]

//   it("renders without crashing", () => {
//     store = mockStore(initialState);
//     const div = document.createElement("div");
//     ReactDOM.render(<Provider store={store}>
//       <ThemeProvider theme={theme}>
//         <AnswerDetails answer={answer} />
//       </ThemeProvider>
//     </Provider>, div);
//   })
// })























