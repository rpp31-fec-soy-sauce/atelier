/**
 * @jest-environment jsdom
 */

import React from 'react';
import Carousel from '../../../../client/src/components/related_items/Carousel';
import { render, fireEvent, screen } from '../../../test-utils';


// Testing Related Products that has a length of 5

beforeEach(() => render(<Carousel />));

test('Only 4 related products should be visible within the carousel', () => {
  const carousel = screen.getAllByRole('card');
  expect(carousel.length).toBe(4);
});

// test('Image should not change its height', () => {
//   const photo = screen.getByRole('images');
//   expect(photo).toHaveStyle({height: '170px'})
// });

test('The left arrow should not be visible on page load', () => {
  const leftArrow = screen.queryByRole('left-arrow');
  expect(leftArrow).toBeNull();
});

test('The right Arrow should not be visible after it is clicked', () => {
  const rightArrow = screen.getByRole('right-arrow');
  fireEvent.click(rightArrow);
  expect(rightArrow).not.toBeInTheDocument();
});


