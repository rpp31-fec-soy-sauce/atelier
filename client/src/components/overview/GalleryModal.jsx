import React from 'react';
import ModalBackground from './styles/Background.styled';
import ImageModal from './styles/ImageModal.styled';

const GalleryModal = ({ open, onClose }) => {
  return (
    <>
      {open ? (
        <>
          <ImageModal url="https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" />
          <ModalBackground onClick={onClose} />
        </>
      ) : null}
    </>
  );
};

export default GalleryModal;
