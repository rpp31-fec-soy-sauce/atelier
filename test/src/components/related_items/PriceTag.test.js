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
  expect(
    screen.getByRole('original-price')
  ).toHaveStyle({textDecoration: 'line-through'});
});

test('The prices should have dollar signs and 2 decimals', () => {
  expect(
    screen.getByRole('original-price')
  ).toHaveTextContent('$50.00');
});

