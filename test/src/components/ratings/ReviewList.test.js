/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import { render, fireEvent, screen, within } from '../../../test-utils';
 import ReviewList from '../../../../client/src/components/ratings/ReviewList';
 import { waitFor } from '@testing-library/react';
 import axios from 'axios';
 

 beforeEach(() => render(<ReviewList />));

 describe("review filter", () => {
  test('expect filter dropdown to exist', () => {
    const filterDropdown = screen.getByRole('filter_drop_down');
    expect(filterDropdown).toBeInTheDocument();
  });

  test('filter drop down should change value and pull reviews', async () => {
    const filterDropdown = screen.getByRole('filter_drop_down');
    fireEvent.change(filterDropdown, { target: { value: 'newest'} } )
    

    expect(filterDropdown.value).toEqual('newest');
  });

 })

 describe("more reviews", () => {
  test('expect more reviews to dissappear when all reviews displayed', async () => {
    const moreReviewButton = screen.getByRole('moreReviews');
    expect(moreReviewButton).toBeInTheDocument();

    fireEvent.click(moreReviewButton);
    fireEvent.click(moreReviewButton);
    fireEvent.click(moreReviewButton);
    fireEvent.click(moreReviewButton);
    fireEvent.click(moreReviewButton);
    
    expect(moreReviewButton).not.toBeInTheDocument();
  });
 })