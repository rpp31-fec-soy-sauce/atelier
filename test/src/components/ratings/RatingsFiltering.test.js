/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent, screen, within } from '../../../test-utils';
import RatingsFiltering from '../../../../client/src/components/ratings/RatingsFiltering';
import { waitFor } from '@testing-library/react';

beforeEach(() => render(<RatingsFiltering />));


describe("modal rendering and functionality", () => {
  test('expect filters to exist', () => {
    expect(
      screen.getByRole('ratingsFilterBreakDownButton-1')
    ).toBeInTheDocument();
  });

  test('expect filter to display what is filtered when clicked', () => {
    const starFilter = screen.getByRole('ratingsFilterBreakDownButton-1')
    fireEvent.click(starFilter);
    const filtersApplied = screen.getByText('Filters Applied: 1')
    expect(filtersApplied).toBeInTheDocument();
  });


})