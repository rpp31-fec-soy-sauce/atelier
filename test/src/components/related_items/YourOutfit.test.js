/**
 * @jest-environment jsdom
 */

 import { getByRole } from '@testing-library/dom';
import React from 'react';
 import YourOutfit from '../../../../client/src/components/related_items/YourOutfit';
 import { render, fireEvent, screen } from '../../../test-utils';

 beforeEach(() => render(<YourOutfit />));

 test('An add button should be visible at all times', () => {
  const button = screen.getByRole('add-outfit');
  expect(button).toBeInTheDocument();
 });


