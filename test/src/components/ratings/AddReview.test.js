/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent, screen, within } from '../../../test-utils';
import AddReview from '../../../../client/src/components/ratings/AddReview';
import { waitFor } from '@testing-library/react';
import axios from 'axios';

jest.mock('axios');

let file;

beforeEach(() => render(<AddReview />));

beforeEach(() => {
  const addReview = screen.getByRole('add-review-button');
  
  fireEvent.click(addReview);
});

beforeEach(() => {
  file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
  
});

describe("modal rendering and functionality", () => {
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
})

describe("overall rating", () => {
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
})

describe("review summary and body", () => {
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
});

describe("username and email", () => {

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

  test('user email should allow input', async () => {
    const reviewUserEmail = screen.getByRole('reviewUserEmail');
    fireEvent.change(reviewUserEmail, { target: { value: 'jackson11@email.com' } })
    expect(reviewUserEmail.value).toEqual('jackson11@email.com');
  });

  test('user email should throw error if no @ symbol', async () => {
    const reviewUserEmail = screen.getByRole('reviewUserEmail');
    fireEvent.change(reviewUserEmail, { target: { value: 'jackson11email.com' } })
    const addReviewButton = screen.getByRole('submitReviewButton');
    fireEvent.click(addReviewButton);
    const emailError = screen.getByRole('emailError');
    expect(emailError).toBeInTheDocument()
  });

  test('invalid user email should throw error', () => {
    const reviewUserEmail = screen.getByRole('reviewUserEmail');
    const addReviewButton = screen.getByRole('submitReviewButton');
    reviewUserEmail.input = 'Example: jackson11@email.com'
    fireEvent.click(addReviewButton);
    const emailError = screen.getByRole('emailError');
    expect(emailError).toBeInTheDocument();
  });
})

describe("recommendation required", () => {

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
})

describe("characteristic radios", () => {


  test('should render fit product characteristic with radio button', () => {
    const fit1 = screen.getByRole('rating-Fit-1-value');

    expect(fit1).toBeInTheDocument();
  });

  test('should change  qual descriptive value if product characteristic radio button is selected', async () => {
    const fit2 = screen.getByRole('rating-Fit-2-value');

    await waitFor(() =>
      fireEvent.click(fit2)
    );

    const qualText = screen.getByText('Runs slightly tight');


    expect(qualText).toBeInTheDocument();
  });

  test('should change radio value to true if product characteristic radio button is clicked', async () => {
    const fit3 = screen.getByRole('rating-Fit-3-value');

    await waitFor(() =>
      fireEvent.click(fit3)
    );

    expect(fit3.checked).toEqual(true);
  });

  test('should change radio value to true if product characteristic radio button is clicked', async () => {
    const length3 = screen.getByRole('rating-Length-3-value');

    await waitFor(() =>
      fireEvent.click(length3)
    );

    expect(length3.checked).toEqual(true);
  });

  test('should change radio value to true if product characteristic radio button is clicked', async () => {
    const comfort3 = screen.getByRole('rating-Comfort-3-value');

    await waitFor(() =>
      fireEvent.click(comfort3)
    );

    expect(comfort3.checked).toEqual(true);
  });

  test('should change radio value to true if product characteristic radio button is clicked', async () => {
    const quality3 = screen.getByRole('rating-Quality-3-value');

    await waitFor(() =>
      fireEvent.click(quality3)
    );

    expect(quality3.checked).toEqual(true);
  });

  test('should change qual descriptive value if product characteristic radio button is selected', async () => {
    const fit4 = screen.getByRole('rating-Fit-4-value');

    await waitFor(() =>
      fireEvent.click(fit4)
    );

    const qualText = screen.getByText('Runs slightly long');


    expect(qualText).toBeInTheDocument();
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

})

describe("photo submission", () => {

  test('photo selection and posted', async () => {
    axios.post.mockResolvedValue({
        data: {
            secure_url: "https://res.cloudinary.com/dcuxezkzp/image/upload/v1638513344/lrsitfehxunungwycy8i.png",
        },
        status: 200,
        statusText: "OK",
        headers: {
            "cache-control": "max-age=0, private, must-revalidate",
            "content-length": "370",
            "content-type": "application/json; charset=utf-8"
        }
    });



    //get upload and submit buttons
    const chooseFileButton = screen.getByRole('chooseFileButton');

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
    
    fireEvent.click(screen.getByRole('submittingPhotoButton'))

    const photoCard = await screen.findByRole('photoCard');
    expect(photoCard).toBeInTheDocument();

    const photoSubmission = await screen.findByRole('photoSubmission');
    expect(photoSubmission).toBeInTheDocument();
  });

});