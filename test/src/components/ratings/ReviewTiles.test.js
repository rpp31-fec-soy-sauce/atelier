/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import { render, fireEvent, screen, within } from '../../../test-utils';
 import ReviewList from '../../../../client/src/components/ratings/ReviewList';
 import { waitFor } from '@testing-library/react';
 import axios from 'axios';
 

 beforeEach(() => render(<ReviewList displayCount={2}/>));

 describe("review tiles exist", () => {
  test('expect tiles to exist', () => {
    const review = screen.getByRole('1016925');
    expect(review).toBeInTheDocument();
  });
 })

 describe("review helpfulness can be clicked", () => {
  test('expect review helpfulness click to increase helpfulness', async () => {
    const reviewHelpfulButton = screen.getByRole('helpfulClick-1016925');
    fireEvent.click(reviewHelpfulButton);
    const reviewHelpfulButtonAfter = Number.parseInt(reviewHelpfulButton.attributes.reviewhelpfulness.value) + 1
    expect(reviewHelpfulButtonAfter).toEqual(18)
  });
 })