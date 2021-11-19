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
    const addQuestion = screen.getByRole('button', { name: 'Add A Question' })
    expect(addQuestion).toBeInTheDocument();
  });


})


describe('AddQuestion and Modal Integration', () => {


  it('should render modal heading', () => {
    const addQuestion = screen.getByRole('button', { name: 'Add A Question' })
    fireEvent.click(addQuestion)
    expect(
      screen.getByRole('heading', { name: 'Ask Your Question' })
    ).toBeInTheDocument();
  });


  it('should render Close and Submit buttons', () => {
    const addQuestion = screen.getByRole('button', { name: 'Add A Question' })
    fireEvent.click(addQuestion)

    const closeButton = screen.getByRole('close-question-button')
    expect(closeButton).toBeInTheDocument();

    const submitButton = screen.getByRole('submit-question-button')
    expect(submitButton).toBeInTheDocument();

  });


  it('should be able to close the modal', () => {
    const addQuestion = screen.getByRole('button', { name: 'Add A Question' })
    fireEvent.click(addQuestion)

    const questionModal = screen.queryByRole('question-modal')
    const closeButton = screen.getByRole('close-question-button')
    fireEvent.click(closeButton)
    expect(questionModal).not.toBeInTheDocument();

  });


  it('should not render error message', () => {
    const addQuestion = screen.getByRole('button', { name: 'Add A Question' })
    fireEvent.click(addQuestion)
    const errorMsg = screen.queryByRole('error-question-msg');
    expect(errorMsg.firstChild).toBeNull();
  });



  it('should be able to type in valid questions', () => {
    const addQuestion = screen.getByRole('button', { name: 'Add A Question' })
    fireEvent.click(addQuestion)

    const submitButton = screen.getByRole('submit-question-button');
    const errorMsg = screen.queryByRole('error-question-msg');

    const questionBody = screen.getByPlaceholderText('What is your question?');
    // expect(questionBody).toBeInTheDocument();
    fireEvent.change(questionBody, { target: { value: 'test question' } })
    expect(questionBody.value).toBe('test question');

    fireEvent.change(questionBody, { target: { value: '' } })
    fireEvent.click(submitButton)
    expect(errorMsg).toHaveTextContent('Please Enter A Question');


    const questionName = screen.getByPlaceholderText('Example: jackson11!');
    // expect(questionName).toBeInTheDocument();
    fireEvent.change(questionName, { target: { value: 'test user' } })
    expect(questionName.value).toBe('test user');

    fireEvent.change(questionName, { target: { value: '' } });
    fireEvent.click(submitButton)
    expect(errorMsg).toHaveTextContent('Please Enter A Nickname');


    const questionEmail = screen.getByPlaceholderText('Example: jackson11!@gmail.com');
    // expect(questionEmail).toBeInTheDocument();
    fireEvent.change(questionEmail, { target: { value: 'test@gmail.com' } })
    expect(questionEmail.value).toBe('test@gmail.com');

    fireEvent.change(questionEmail, { target: { value: '' } })
    fireEvent.click(submitButton)
    expect(errorMsg).toHaveTextContent('Please Enter An Email');
    fireEvent.change(questionEmail, { target: { value: 'test' } })
    fireEvent.click(submitButton)
    expect(errorMsg).toHaveTextContent('Please Enter A Valid Email');

  });

})