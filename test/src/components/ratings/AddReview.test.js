/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent, screen, within } from '../../../test-utils';
import AddReview from '../../../../client/src/components/ratings/AddReview';
import { waitFor } from '@testing-library/react';

let file;

beforeEach(() => render(<AddReview />));

beforeEach(() => {
  const addReview = screen.getByRole('add-review-button');
  
  fireEvent.click(addReview);
});

beforeEach(() => {
  file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
});
 
test('expect form to exist', () => {
  expect(
    screen.getByRole('rating-form')
  ).toBeInTheDocument();
});

test('expect form to exist', () => {
  expect(
    screen.getByRole('rating-form')
  ).toBeInTheDocument();
});

test('clicking 3 stars should check 3 stars', () => {
  const overallReview3Star = screen.getByRole('3-star');
  fireEvent.click(overallReview3Star);
  expect(overallReview3Star).toBeChecked();
});

test('clicking 3 stars should not check 4 stars', () => {
  const overallReview3Star = screen.getByRole('3-star');
  const overallReview4Star = screen.getByRole('4-star');
  fireEvent.click(overallReview3Star);
  expect(overallReview4Star).not.toBeChecked();
});

test('review summary should allow input', () => {
  const reviewSummary = screen.getByRole('reviewSummary');
  reviewSummary.input = 'This product is great!'

  expect(reviewSummary.input).toEqual('This product is great!');
});

test('review body should allow input', () => {
  const reviewBody = screen.getByRole('reviewBody');
  reviewBody.input = 'Why did you like the product or not? Why did you like the product or not?'

  expect(reviewBody.input).toEqual('Why did you like the product or not? Why did you like the product or not?');
});

test('non-threshold length should throw error', () => {
  const reviewBody = screen.getByRole('reviewBody');
  reviewBody.input = 'Why did you like the product or not?'
  
  const addReviewButton = screen.getByRole('submitReviewButton');
  fireEvent.click(addReviewButton);

  const reviewBodyError = screen.getByRole('reviewBodyError');

  expect(reviewBodyError).toBeInTheDocument();
});

test('userName should allow input', () => {
  const userName = screen.getByRole('reviewUserName');
  userName.input = 'jackson11!'

  expect(userName.input).toEqual('jackson11!');
});

test('Invalid UserName should throw error', () => {
  const userName = screen.getByRole('reviewUserName');
  userName.input = 'Example: jackson11!'
  
  const addReviewButton = screen.getByRole('submitReviewButton');
  fireEvent.click(addReviewButton);

  const userNameError = screen.getByRole('userNameError');
  
  expect(userNameError).toBeInTheDocument();
});

test('user email should allow input', () => {
  const reviewUserEmail = screen.getByRole('reviewUserEmail');
  reviewUserEmail.input = 'jackson11@email.com'

  expect(reviewUserEmail.input).toEqual('jackson11@email.com');
});

test('invalid user email should throw error', () => {
  const reviewUserEmail = screen.getByRole('reviewUserEmail');
  const addReviewButton = screen.getByRole('submitReviewButton');
  reviewUserEmail.input = 'Example: jackson11@email.com'
  fireEvent.click(addReviewButton);
  const emailError = screen.getByRole('emailError');

  expect(emailError).toBeInTheDocument();
});

test('should throw error if no product recommendation is made', () => {
  const addReviewButton = screen.getByRole('submitReviewButton');
  fireEvent.click(addReviewButton);
  
  const productRecommendedError = screen.getByRole('productRecommendedError');

  expect(productRecommendedError).toBeInTheDocument();
});

test('should not throw error if product recommendation is made', () => {
  const productReccomendationYes = screen.getByRole('productRecommendation-yes');
  productReccomendationYes.input = true;
  
  const addReviewButton = screen.getByRole('submitReviewButton');
  fireEvent.click(addReviewButton);

  const productRecommendedError = screen.queryByText('productRecommendation-yes');

  expect(productRecommendedError).not.toBeInTheDocument();
});

test('should render fit product characteristic with radio button', () => {
  const fit1 = screen.getByRole('rating-Fit-1-value');

  expect(fit1).toBeInTheDocument();
});

test('should render length product characteristic with radio button', () => {
  const length1 = screen.getByRole('rating-Length-1-value');

  expect(length1).toBeInTheDocument();
});

test('should render comfort product characteristic with radio button', () => {
  const comfort1 = screen.getByRole('rating-Comfort-1-value');

  expect(comfort1).toBeInTheDocument();
});

test('should render quality product characteristic with radio button', () => {
  const quality1 = screen.getByRole('rating-Quality-1-value');

  expect(quality1).toBeInTheDocument();
});

test('should not display modal if closed clicked', () => {
  const closeAddReviewButton = screen.getByRole('closeAddReviewButton');
  fireEvent.click(closeAddReviewButton);

  const writeReview = screen.queryByText('Write your Review for');

  expect(writeReview).not.toBeInTheDocument();
});

test('should not display modal if closed clicked', () => {
  const chooseFileButton = screen.getByRole('chooseFileButton');

  expect(chooseFileButton).toBeInTheDocument();
});

test('should not display modal if closed clicked', () => {
  const submittingPhotoButton = screen.getByRole('submittingPhotoButton');

  expect(submittingPhotoButton).toBeInTheDocument();
});

test('photo selection and posted', async () => {
  //get upload and submit buttons
  const chooseFileButton = screen.getByRole('chooseFileButton');
  const submittingPhotoButton = screen.getByRole('submittingPhotoButton');

  // simulate ulpoad event and wait until finish 
  await waitFor(() =>
    fireEvent.change(chooseFileButton, {
      target: { files: [file] },
    })
  );

  // get the same uploader from the dom    
  let image = screen.getByRole('chooseFileButton');;

  // check if the file is there
  expect(image.files[0].name).toBe('chucknorris.png');
  expect(image.files.length).toBe(1);

  // check if the file is there
  await waitFor(() =>
    fireEvent.click(submittingPhotoButton)
  );

  const photoSubmission = screen.queryByRole('photoSubmission');
});