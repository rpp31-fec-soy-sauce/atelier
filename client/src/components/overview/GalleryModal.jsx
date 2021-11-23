import React, { useState,  useRef } from 'react';
import ModalBackground from './styles/Background.styled';
import ImageModal from './styles/ImageModal.styled';

import Indicator from './styles/Indicator.styled';

const GalleryModal = ({
  open,
  onClose,
  url,
  photos,
  photoIndex,
  setPhotoIndex,
}) => {

  const [isZoomed, setIsZoomed] = useState(false);
  const imageModalRef = useRef();

  const onImageClick = e => {
    if (e.target === imageModalRef.current) setIsZoomed(!isZoomed);
  }

  return (
    <>
      {open ? (
        <>
          <ImageModal
            url={url}
            style={{ display: 'flex', flexDirection: 'column' }}
            isZoomed={isZoomed}
            onClick={onImageClick}
            ref={imageModalRef}
          >
            <div style={{ flex: 1, pointerEvents: 'none' }}></div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                marginBottom: '2rem',
              }}
            >
              {photos.map((photo, index) => (
                <Indicator
                  key={index}
                  onClick={() => setPhotoIndex(index)}
                  style={{
                    backgroundColor: index === photoIndex ? 'red' : 'white',
                  }}
                />
              ))}
            </div>
          </ImageModal>
          <ModalBackground onClick={onClose} />
        </>
      ) : null}
    </>
  );
};

export default GalleryModal;
