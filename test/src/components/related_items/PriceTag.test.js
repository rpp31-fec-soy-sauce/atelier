/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import { render, fireEvent, screen } from '../../../test-utils';
 import PriceTag from '../../../../client/src/components/related_items/PriceTag.jsx';


beforeEach(() => render(<PriceTag price={[40, 50]}/>));

test('If a product has a sales price it should display in red', () => {
  expect(
    screen.getByRole('sale-price')
  ).toHaveStyle({color: 'red'});
});

test('If a product has a sales price, the original price should have a line over it', () => {
  const originalPrice = screen.getAllByRole('original-price');
  expect(originalPrice[0]).toHaveStyle({textDecoration: 'line-through'});
});

test('The prices should have dollar signs and 2 decimals', () => {
  const originalPrice = screen.getAllByRole('original-price');
  expect(originalPrice[0]).toHaveTextContent('$50.00');
});

beforeEach(() => render(<PriceTag price={[60]}/>));

test('If a product does not have a sales price it should display in grey', () => {
  const originalPrice = screen.getAllByRole('original-price');
  expect(originalPrice[1]).toHaveStyle({color: 'rgb(173, 182, 188)'});
});

