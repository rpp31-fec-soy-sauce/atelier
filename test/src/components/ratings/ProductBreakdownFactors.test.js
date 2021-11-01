/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ProductBreakdownFactors from '../../../../client/src/components/ratings/ProductBreakdownFactors';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ProductBreakdownFactors productFactorValue={161}></ProductBreakdownFactors>, div);
})