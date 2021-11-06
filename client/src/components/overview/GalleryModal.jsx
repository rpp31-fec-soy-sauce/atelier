import React from 'react';
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
  return (
    <>
      {open ? (
        <>
          <ImageModal
            url={url}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ flex: 1 }}></div>
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
