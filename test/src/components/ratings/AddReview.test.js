/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent, screen, within } from '../../../test-utils';
import AddReview from '../../../../client/src/components/ratings/AddReview';

beforeEach(() => render(<AddReview />));

beforeEach(() => {
  const addReview = screen.getByRole('add-review-button');
  
  fireEvent.click(addReview);
});
 
test('expect form to exist', () => {
  expect(
    screen.getByRole('rating-form')
  ).toBeInTheDocument();
});

test('expect form to exist', () => {
  expect(
    screen.getByRole('rating-form')
  ).toBeInTheDocument();
});

