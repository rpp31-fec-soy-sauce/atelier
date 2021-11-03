/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import ReactDOM from 'react-dom';
 import { render , cleanup} from '@testing-library/react';
 import { Provider } from 'react-redux'
 import configureStore from 'redux-mock-store'

 import ProductBreakdown from '../../../../client/src/components/ratings/ProductBreakdown';
 import { reviewAggregates } from './TestStates/InitialReduxStates'

 //afterEach(cleanup);

 describe('With React Testing Library', () => {
    const initialState = {reviewAggregates: [reviewAggregates]}
    const mockStore = configureStore()
    let store,wrapper

    it("renders without crashing", () => {
        store = mockStore(initialState);
        const div = document.createElement("div");
        ReactDOM.render(<Provider store={store}><ProductBreakdown></ProductBreakdown></Provider>, div);
    })
 })