/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import CompareFeatures from '../../../../client/src/components/related_items/CompareFeatures.jsx';
 import { render, fireEvent, screen } from '../../../test-utils';

 beforeEach(() => render(<CompareFeatures />));

 test('', () => {
   const carousel = screen.getAllByRole('card');
   expect(carousel.length).toBe(4);
 });