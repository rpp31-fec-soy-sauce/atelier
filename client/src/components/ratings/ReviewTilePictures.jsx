import React from 'react';
import { PhotoGallery } from './styles/Container.style';
import { ReviewPicture } from './styles/Item.style';

const ReviewTilePictures = (props) => {
    let reviewPhotos = props.reviewPhotos ? props.reviewPhotos : [];

    let photoGallery = reviewPhotos.map( photo => {
        return <ReviewPicture key={photo.id} src={photo.url} alt="product photo"></ReviewPicture>
    })

    return (
      <PhotoGallery>
        {photoGallery}
      </PhotoGallery>
    )
};

export default ReviewTilePictures;