/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import { render, fireEvent, screen } from '../../../test-utils';
 import AnswersList from '../../../../client/src/components/questions/AnswersList.jsx';

 import initialState from '../../../initial-state';

const answers = initialState.questions[1].answers;
// console.log(answers);

 beforeEach(() => render(<AnswersList answers={answers}/>));


 describe('AnswersList', () => {

   it('should render more answers button', () => {
     expect(
       screen.getByRole('button')
     ).toBeInTheDocument();
   });

 })