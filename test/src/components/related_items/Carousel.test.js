/**
 * @jest-environment jsdom
 */

import React from 'react';
import Carousel from '../../../../client/src/components/related_items/Carousel';
import OverView from '../../../../client/src/components/overview/OverView';
import { render, fireEvent, screen } from '../../../test-utils';

beforeEach(() => render(<OverView />));
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

test('After the right arrow is clicked the left arrow should be visible', () => {
  const rightArrow = screen.getByRole('right-arrow');
  fireEvent.click(rightArrow);
  const leftArrow = screen.getByRole('left-arrow');
  expect(leftArrow).toBeInTheDocument();
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

test('After a user clicks one of the items inside the carousel that product should be displayed as the main product on the page', () => {
  const product = screen.getAllByRole('images');
  fireEvent.click(product[0]);
  const name = screen.getAllByRole('heading');
  expect(name[1]).toHaveTextContent('Camo Onesie');
});




