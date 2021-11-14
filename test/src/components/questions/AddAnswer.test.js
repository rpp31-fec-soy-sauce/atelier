/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent, screen } from '../../../test-utils';
import AddAnswer from '../../../../client/src/components/questions/AddAnswer.jsx';
import initialState from '../../../initial-state';

beforeEach(() => render(<AddAnswer />));


describe('AddAnswer', () => {

  it('should render Add Answer option', async () => {
    const addAnswer = await screen.findByRole('add-answer');
    expect(addAnswer).toHaveTextContent('Add Answer')
  });


})