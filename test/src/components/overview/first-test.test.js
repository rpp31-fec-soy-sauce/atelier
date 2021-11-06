/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent, screen } from '../../../test-utils';
import OverView from '../../../../client/src/components/overview/OverView.jsx';

beforeEach(() => render(<OverView />));

test('Product title should exist', () => {
  expect(
    screen.getByRole('heading', { name: 'Camo Onesie' })
  ).toBeInTheDocument();
});

test('Back button should be disabled at the first rendering', () => {
  expect(
    screen.getByRole('button', { name: 'back' })
  ).toBeDisabled();
});

test('Next button should be disabled when there is no more photos', () => {
  const nextButton = screen.getByRole('button', { name: 'back' });
  for (let i = 0; i < 5; i += 1) {
    fireEvent.click(nextButton);
  }
  expect(nextButton).toBeDisabled();
});