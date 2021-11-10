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

  //  it('should render search bar', () => {
  //    const inputElement = screen.getByPlaceholderText('Have a question? Search for answers...');
  //    expect(inputElement).toBeInTheDocument();
  //  });


  //  it('should be able to type in input', () => {
  //    const inputElement = screen.getByPlaceholderText('Have a question? Search for answers...');
  //    fireEvent.change(inputElement, { target: { value: 'fabric' } })
  //    expect(inputElement.value).toBe('fabric');
  //  });

 })