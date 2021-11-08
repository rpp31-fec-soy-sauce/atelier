import React, { useState } from 'react';
import { PhotoGallery } from './styles/Container.style';
import { ReviewPicture } from './styles/Item.style';
import noPreview from '../../../assets/no-preview.jpg';

const ReviewTilePictures = (props) => {
  let reviewPhotos = props.reviewPhotos ? props.reviewPhotos : [];

  const addDefaultSrc = (e) => {
    e.target.src = noPreview;
  }

  let photoGallery = reviewPhotos.map( photo => {
    return <ReviewPicture 
      key={photo.id} 
      src={photo.url ? photo.url : noPreview}
      alt="product photo"
      onError={ (e) => { addDefaultSrc(e) }}
      >
    </ReviewPicture>
  })

  return (
    <PhotoGallery>
      {photoGallery}
    </PhotoGallery>
  )
};

export default ReviewTilePictures;