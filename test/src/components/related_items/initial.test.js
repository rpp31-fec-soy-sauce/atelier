/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent, screen } from '../../../test-utils';
import RelatedItems from '../../../../client/src/components/related_items/RelatedItems.jsx';
import initialState from '../../../initial-state';

beforeEach(() => render(<RelatedItems />));

test('Related Products heading should exist on every render', () => {
  expect(
    screen.getByRole('heading', { name: 'RELATED PRODUCTS' })
  ).toBeInTheDocument();
});

test('Your Outfit heading should exist on every render', () => {
  expect(
    screen.getByRole('heading', { name: 'YOUR OUTFIT' })
  ).toBeInTheDocument();
});

