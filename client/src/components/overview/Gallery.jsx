import React, { useState } from 'react';

import ImageFrame from './styles/ImageFrame.styled.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

const Gallery = ({ currentStyle }) => {
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleClickBack = () =>
    setPhotoIndex(photoIndex === 0 ? 0 : photoIndex - 1);
  const handleClickNext = () => {
    const lastIndex = currentStyle.photos.length - 1;
    if (photoIndex === lastIndex) return;
    setPhotoIndex(photoIndex + 1);
  };

  return (
    <>
      <button onClick={handleClickBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <ImageFrame url={currentStyle?.photos[photoIndex].url} />
      <button onClick={handleClickNext}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <div>
      {currentStyle?.photos.map(photo => (
        <div
          key={photo.thumbnail_url}
          style={{
            height: '50px',
            width: '50px',
            backgroundImage: `url(${photo.thumbnail_url})`,
            backgroundSize: 'cover',
          }}
        />
      ))}
      </div>
    </>
  );
};

export default Gallery;
