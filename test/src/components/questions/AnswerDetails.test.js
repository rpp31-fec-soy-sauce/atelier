/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent, screen } from '../../../test-utils';
import AnswerDetails from '../../../../client/src/components/questions/AnswerDetails.jsx';
import initialState from '../../../initial-state';

const answer = initialState.questions[2].answers['4811970'];
// console.log(answer)

beforeEach(() => render(<AnswerDetails answer={answer} />));


describe('AnswerDetails', () => {

   it('should render answer body', () => {
     expect(
       screen.getByRole('answer-body')
     ).toHaveTextContent('It runs small');
   });

   it('should render answerer_name and date', () => {
     expect(
       screen.getByRole('answerer')
     ).toHaveTextContent('dschulman');

     expect(
      screen.getByRole('answerer')
    ).toHaveTextContent('2019-11-17');

   });


  it('should render all the photos', () => {
    const photos = screen.getAllByRole('photos');
    expect(photos.length).toBe(2);
  });


   it('should report answer when report is clicked', async () => {
     const reportAnswer = await screen.getByRole('report-answer')
     fireEvent.click(reportAnswer)
     expect(reportAnswer.textContent).toBe('Reported');
   });


})
