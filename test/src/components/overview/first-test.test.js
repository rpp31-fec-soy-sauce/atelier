/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '../../../test-utils';
import OverView from '../../../../client/src/components/overview/OverView.jsx';

beforeEach(() => render(<OverView />));

test('Product title should exist', () => {
  // should show no user initially, and not be fetching a user
  expect(
    screen.getByRole('heading', { name: 'Camo Onesie' })
  ).toBeInTheDocument();
});
