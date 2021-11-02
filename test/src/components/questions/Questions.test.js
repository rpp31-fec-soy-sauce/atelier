/**
 * @jest-environment jsdom
 */


import React from 'react';
import ReactDOM from 'react-dom';
// import { render, cleanup} from '@testing-library/react';
import { render as rtlRender, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Questions from '../../../../client/src/components/questions/Questions.jsx';

const render = component => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>

)

// afterEach(cleanup);


describe('Questions', () => {
  test('test', () => {
    render(<Questions />)
    expect(screen.getByText('QUESTIONS')).toBeInTheDocument()
  })
  // const initialState = {questions: []}
  // const mockStore = configureStore()
  // let store,wrapper

  // it("renders without crashing", () => {
  //     store = mockStore(initialState);
  //     const div = document.createElement("div");
  //     ReactDOM.render(<Provider store={store}><Questions></Questions></Provider>, div);
  // })
})