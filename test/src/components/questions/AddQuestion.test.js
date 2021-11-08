/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import { render, fireEvent, screen } from '../../../test-utils';
 import AddQuestion from '../../../../client/src/components/questions/AddQuestion.jsx';
 import initialState from '../../../initial-state';

 beforeEach(() => render(<AddQuestion />));


 describe('AddQuestion', () => {

   it('should render Add A Question button', () => {
     expect(
       screen.getByRole('button', { name: 'Add A Question' })
     ).toBeInTheDocument();
   });


 })