/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom";

import ProgressBar from '../../../../client/src/components/ratings/ProgressBar';

//afterEach(cleanup);

it("renders ProgressBar without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ProgressBar starPercentage={90}></ProgressBar>, div);
})

it("renders with correct stars filled", () => {
    const { getByTestId } = render(<ProgressBar starPercentage={90}></ProgressBar>);

    expect(getByTestId('star-filler')).toHaveStyle(`width: 90%`);    
})