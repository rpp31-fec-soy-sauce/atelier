/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent, screen } from '../../../test-utils';
import { waitFor } from '@testing-library/react';
import AddAnswer from '../../../../client/src/components/questions/AddAnswer.jsx';
import initialState from '../../../initial-state';
import axios from 'axios';

jest.mock('axios');
let file;

beforeEach(() => render(<AddAnswer />));

beforeEach(() => {
  file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });

});

describe('AddAnswer', () => {

  it('should render Add Answer option', () => {
    const addAnswer = screen.getByRole('add-answer-button');
    expect(addAnswer).toHaveTextContent('Add Answer')
  });


})



describe('AddAnswer and Modal Integration', () => {


  it('should render modal heading', () => {
    const addAnswer = screen.getByRole('add-answer-button');
    fireEvent.click(addAnswer)

    expect(
      screen.getByRole('heading', { name: 'Submit your Answer' })
    ).toBeInTheDocument();
  });


  it('should render Close and Submit buttons', () => {
    const addAnswer = screen.getByRole('add-answer-button');
    fireEvent.click(addAnswer)

    const closeButton = screen.getByRole('close-answer-button')
    expect(closeButton).toBeInTheDocument();

    const submitButton = screen.getByRole('submit-answer-button')
    expect(submitButton).toBeInTheDocument();

  });


  it('should be able to close the modal', () => {
    const addAnswer = screen.getByRole('add-answer-button');
    fireEvent.click(addAnswer)

    const answerModal = screen.queryByRole('answer-modal')
    const closeButton = screen.getByRole('close-answer-button')
    fireEvent.click(closeButton)
    expect(answerModal).not.toBeInTheDocument();

  });


  it('should not render error message', () => {
    const addAnswer = screen.getByRole('add-answer-button');
    fireEvent.click(addAnswer)
    const errorMsg = screen.queryByRole('error-answer-msg');
    expect(errorMsg.firstChild).toBeNull();
  });


  it('should be able to type in valid answers', () => {
    const addAnswer = screen.getByRole('add-answer-button');
    fireEvent.click(addAnswer)

    const submitButton = screen.getByRole('submit-answer-button');
    const errorMsg = screen.queryByRole('error-answer-msg');

    const answerBody = screen.getByPlaceholderText('What is your answer?');
    fireEvent.change(answerBody, { target: { value: 'test answer' } })
    expect(answerBody.value).toBe('test answer');

    fireEvent.change(answerBody, { target: { value: '' } })
    fireEvent.click(submitButton)
    expect(errorMsg).toHaveTextContent('Please Enter An Answer');


    const answerName = screen.getByPlaceholderText('Example: jack543!');
    fireEvent.change(answerName, { target: { value: 'test user' } })
    expect(answerName.value).toBe('test user');

    fireEvent.change(answerName, { target: { value: '' } })
    fireEvent.click(submitButton)
    expect(errorMsg).toHaveTextContent('Please Enter A Nickname');


    const answerEmail = screen.getByPlaceholderText('Example: jack543!@gmail.com');
    fireEvent.change(answerEmail, { target: { value: 'test@gmail.com' } })
    expect(answerEmail.value).toBe('test@gmail.com');
    fireEvent.change(answerEmail, { target: { value: '' } })
    fireEvent.click(submitButton)
    expect(errorMsg).toHaveTextContent('Please Enter An Email');
    fireEvent.change(answerEmail, { target: { value: 'test' } })
    fireEvent.click(submitButton)
    expect(errorMsg).toHaveTextContent('Please Enter A Valid Email');

  });


  it('should not render image', () => {
    const addAnswer = screen.getByRole('add-answer-button');
    fireEvent.click(addAnswer)
    const image = screen.queryByRole('image');
    expect(image).toBeNull();
  });

});



describe('Upload images', () => {


  it('should render image upload', async () => {
    const addAnswer = screen.getByRole('add-answer-button');
    fireEvent.click(addAnswer)

    const imageUpload = screen.getByRole('image-upload');
    expect(imageUpload).toBeInTheDocument();

    axios.post.mockResolvedValue({
        data: {
            secure_url: "https://res.cloudinary.com/dtr701wqi/image/upload/v1636769349/cloudinary/o24njspkcyrhpp8od9mu.jpg",
        },
        status: 200,
        statusText: "OK",
        headers: {
            "cache-control": "max-age=0, private, must-revalidate",
            "content-length": "370",
            "content-type": "application/json; charset=utf-8"
        }
    });

    await waitFor(() =>
      fireEvent.change(imageUpload, {
        target: { files: [file] },
      })
    );

    expect(imageUpload.files[0].name).toBe('chucknorris.png');
    expect(imageUpload.files.length).toBe(1);


  });






})


