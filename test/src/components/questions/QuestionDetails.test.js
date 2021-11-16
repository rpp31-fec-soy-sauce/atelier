/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent, screen } from '../../../test-utils';
import QuestionDetails from '../../../../client/src/components/questions/QuestionDetails.jsx';
import initialState from '../../../initial-state';

const question = initialState.questions[1];
// console.log(question)

beforeEach(() => render(<QuestionDetails question={question} />));


describe('QuestionDetails', () => {

  it('should render question body', () => {
    expect(
      screen.getByText('Q: Can I wash it?')
    ).toBeInTheDocument();
  });


  it('should report question when report is clicked', async () => {
    const reportQuestion = await screen.getByRole('report-question')
    fireEvent.click(reportQuestion)
    expect(reportQuestion.textContent).toBe('Reported');
  });

  it('should increase helpful when helpful is clicked', async () => {
    const helpfulQuestion = await screen.getByRole('helpful-question')
    fireEvent.click(helpfulQuestion)
    const helpfulCount = await screen.getByRole('helpful-question-count')
    expect(helpfulCount.textContent).toBe('(9)');
  });


})
