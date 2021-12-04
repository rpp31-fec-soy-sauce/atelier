/**
 * @jest-environment jsdom
 */

//  import { getByRole } from '@testing-library/dom';
 import React from 'react';
 import YourOutfit from '../../../../client/src/components/related_items/YourOutfit';
 import { render, fireEvent, screen } from '../../../test-utils';

 beforeEach(() => render(<YourOutfit />));

 test('An add button should be visible at all times', () => {
  const button = screen.getByRole('add-outfit');
  expect(button).toBeInTheDocument();
 });

 test('On initial page load there should be no outfits under the your outfits section', () => {
  const card = screen.queryByRole('your-outfit-card');
  expect(card).toBeNull();
 });

 test('User should be able to add the current product to their outfits', () => {
  const outfits = screen.getAllByRole('outfit-container');
  const button = screen.queryByRole('add-outfit');
  fireEvent.click(button)
  expect(outfits.length).toBe(1);
 });



