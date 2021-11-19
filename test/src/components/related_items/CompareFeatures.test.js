/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import CompareFeatures from '../../../../client/src/components/related_items/CompareFeatures.jsx';
 import { render, fireEvent, screen } from '../../../test-utils';

 const current = [
  {feature: 'Sole', value: 'Rubber'},
  {feature: 'Material', value: 'FullControlSkin'},
  {feature: 'Stitching', value: 'Double Stitch'}
 ]

 const clicked = [
  {feature: 'Sole', value: 'Rubber'},
  {feature: 'Material', value: 'FullControlSkin'},
  {feature: 'Mid-Sole', value: 'ControlSupport Arch Bridge'},
  {feature: 'Stitching', value: 'Double Stitch'}
 ]


 beforeEach(() => render(<CompareFeatures currentFeatures={current} clickedFeatures={clicked}/>));

 test('Each row should have 10px spacing in between', () => {
   const row = screen.getAllByRole('rowSame');
   expect(row[0]).toHaveStyle({margin: '10px 0'})
 });
