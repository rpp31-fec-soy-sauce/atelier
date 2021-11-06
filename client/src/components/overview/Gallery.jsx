import React, { useState } from 'react';

import ImageFrame from './styles/ImageFrame.styled.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

const isLastIndex = (index, array) => {
  if (index === undefined || array === undefined) return false;
  return index === array.length - 1;
};

const Gallery = ({ currentStyle }) => {
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleClickBack = () => setPhotoIndex(photoIndex - 1);
  const handleClickNext = () => setPhotoIndex(photoIndex + 1);

  return (
    <ImageFrame url={currentStyle?.photos[photoIndex].url}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {currentStyle?.photos.map((photo, index) => (
          <div
            key={photo.thumbnail_url}
            style={{
              height: '4rem',
              width: '4rem',
              backgroundImage: `url(${photo.thumbnail_url})`,
              backgroundSize: 'cover',
              marginBottom: '1rem',
              border: `solid ${index === photoIndex ? 'red' : 'black'}`,
              display: 'inline-block',
            }}
            onClick={() => setPhotoIndex(index)}
          />
        ))}
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <button
            onClick={handleClickBack}
            disabled={photoIndex === 0}
            aria-label="back"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={handleClickNext}
            disabled={isLastIndex(photoIndex, currentStyle?.photos)}
            aria-label="next"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </ImageFrame>
  );
};

export default Gallery;
