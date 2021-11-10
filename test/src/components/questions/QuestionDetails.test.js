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


  it('should report question when report is clicked', () => {
    const reportQuestion = screen.getByRole('report-question')
    fireEvent.click(reportQuestion)
    expect(reportQuestion.textContent).toBe('Reported');
  });


})
