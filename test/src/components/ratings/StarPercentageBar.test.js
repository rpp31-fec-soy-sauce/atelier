/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom";

import StarPercentageBar from '../../../../client/src/components/ratings/StarPercentageBar';

//afterEach(cleanup);

it("renders ProgressBar without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<StarPercentageBar starPercentage={90}></StarPercentageBar>, div);
})

it("renders with correct stars filled", () => {
    const { getByTestId } = render(<StarPercentageBar starPercentage={90}></StarPercentageBar>);

    expect(getByTestId('star-filler')).toHaveStyle(`width: 90%`);    
})