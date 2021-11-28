/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import ReactDOM from 'react-dom';
 import { render, cleanup } from '@testing-library/react';
 import { Provider } from 'react-redux'
 import { ThemeProvider } from 'styled-components';
 import configureStore from 'redux-mock-store'
 import "@testing-library/jest-dom";

 import Ratings from '../../../../client/src/components/ratings/Ratings';
//  import theme from '../../../../client/src/components/styles/theme';
 import {lightTheme} from '../../../../client/src/components/styles/theme';

 import {
     reviewsAggregates,
     reviewsMeta,
     averageRating,
     percentRecommend,
     reviewCountTotals,
     starPercentage,
     calculatePercentRecommended
} from '../../../TestStates/InitialReduxStates';

 afterEach(cleanup);

describe('With React Testing Library', () => {
  const initialState = {
      reviewsAggregates: reviewsAggregates,
      reviewsMeta: reviewsMeta,
      averageRating: averageRating,
      percentRecommend: percentRecommend,
      reviewCountTotals: reviewCountTotals,
      starPercentage: starPercentage,
      calculatePercentRecommended: calculatePercentRecommended,
      reviewsMeta: reviewsMeta
    }
  const mockStore = configureStore()
  let store, wrapper

  it("renders Ratings without crashing", () => {
    store = mockStore(initialState);
    const div = document.createElement("div");
    ReactDOM.render(
        <Provider store={store}>
            <ThemeProvider theme={lightTheme}>
                <Ratings />
            </ThemeProvider>
        </Provider>, div);
  })
})