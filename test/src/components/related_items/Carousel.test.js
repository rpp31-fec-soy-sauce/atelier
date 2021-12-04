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

test('The images should have a fixed heigth', () => {
  const photo = screen.getAllByRole('images');
  expect(photo[0]).toHaveStyle({height: '170px'});
});

test('The product names should be displayed in bold', () => {
  const carousel = screen.getAllByRole('product-name');
  expect(carousel[1]).toHaveStyle({fontWeight: 'bold'});
});

test('The left arrow should not be visible on page load', () => {
  const leftArrow = screen.queryByRole('left-arrow');
  expect(leftArrow).toBeNull();
});

test('The right Arrow should not be visible after it is clicked', () => {
  const rightArrow = screen.getByRole('right-arrow');
  fireEvent.click(rightArrow);
  expect(rightArrow).not.toBeInTheDocument();
});

test('A modal should display when the star icon is clicked', () => {
  const star = screen.getAllByRole('modal-star');
  fireEvent.click(star[1]);
  const modalPopup = screen.getByRole('modal-window')
  expect(modalPopup).toBeInTheDocument();
});

test('Modal should not display after the user clicks the X icon', () => {
  const star = screen.getAllByRole('modal-star');
  fireEvent.click(star[1]);
  const modalPopup = screen.getByRole('modal-window')
  const closeModal = screen.getByRole('close-modal');
  fireEvent.click(closeModal);
  expect(modalPopup).not.toBeInTheDocument();
});



