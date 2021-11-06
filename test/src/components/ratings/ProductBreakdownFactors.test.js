/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom";

import ProductBreakdownFactors from '../../../../client/src/components/ratings/ProductBreakdownFactors';

//afterEach(cleanup);

it("renders ProductBreakdownFactors without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ProductBreakdownFactors productFactorValue={161}></ProductBreakdownFactors>, div);
})

it("renders at correct position", () => {
    const { getByTestId } = render(<ProductBreakdownFactors productFactorValue={161}></ProductBreakdownFactors>);

    expect(getByTestId('trianglePointer')).toHaveStyle(`left: 7396px`);
})