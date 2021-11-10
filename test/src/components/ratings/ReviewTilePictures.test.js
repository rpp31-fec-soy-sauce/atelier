/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import { render, fireEvent, screen, within } from '../../../test-utils';
 import ReviewTilePictures from '../../../../client/src/components/ratings/ReviewTilePictures.jsx';
 import noPreview from '../../../assets/no-preview.jpg';

const reviewWithPhotos = [
  {
    "id": 1984754,
    "url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
  },
  {
    "id": 1984755,
    "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
  },
  {
    "id": 1984756,
    "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
  }
]

const reviewWithBrokenPhotos = [
  {
    "id": 2061553,
    "url": "text2"
  },
  {
    "id": 2061554,
    "url": "text1"
  }
]

describe('when photos are present these tests should pass', () => {
  
  let photoGallery = render(<ReviewTilePictures reviewPhotos={reviewWithPhotos}/>);

  test('photo should exist', () => {
    let image = photoGallery.getByRole('1984754'); 
    expect(image).toHaveAttribute('src', "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80");
  });


})

describe('when photos are not present these tests should pass', () => {
  
    let photoGallery = render(<ReviewTilePictures reviewPhotos={reviewWithBrokenPhotos}/>);
  
    test('photo should not exist', () => {
      let image = photoGallery.queryByRole('2061553'); 
      expect(image).toBeNull()
    });
  
  
})