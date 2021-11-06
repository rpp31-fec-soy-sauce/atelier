import React from 'react';
import ModalBackground from './styles/Background.styled';
import ImageModal from './styles/ImageModal.styled';

const GalleryModal = ({ open, onClose, url }) => {
  return (
    <>
      {open ? (
        <>
          <ImageModal url={url} />
          <ModalBackground onClick={onClose} />
        </>
      ) : null}
    </>
  );
};

export default GalleryModal;
