/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent, screen } from '../../../test-utils';
import Questions from '../../../../client/src/components/questions/Questions.jsx';

beforeEach(() => render(<Questions />));


describe('Questions', () => {

  it('should render component heading', () => {
    expect(
      screen.getByRole('heading', { name: 'QUESTIONS & ANSWERS' })
    ).toBeInTheDocument();
  });

  it('should render search bar', () => {
    const inputElement = screen.getByPlaceholderText('Have a question? Search for answers...');
    expect(inputElement).toBeInTheDocument();
  });


  it('should be able to type in input', () => {
    const inputElement = screen.getByPlaceholderText('Have a question? Search for answers...');
    fireEvent.change(inputElement, { target: { value: 'fabric' } })
    expect(inputElement.value).toBe('fabric');
  });

})


