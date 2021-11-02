import React, { useEffect } from 'react';
import styled from 'styled-components';


const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, .8);
  z-index: 10000;

  .modal {
    list-style-type: none;
    border-radius: 3px;
    box-shadow: 0 0 15px rgba(0, 0, 0, .1);
    background-color: #dee2e6;
    position: relative;
    padding: 10px;

    // animation-name: grow-modal;
    // animation-duration: .4s;
    // animation-timing-function: ease-in-out;

    // @keyframes grow-modal {
    //   0% { opacity: .2; }
    //   25% { opacity: .4; }
    //   50% { opacity: .6; }
    //   75% { opacity: .8; }
    //   100% { width: 500px; height: 500px; opacity: .9; }
    // }

    h3 {
      text-align: center;
      color: #444;
      font-size: 1.5rem;
    }

    h4 {
      text-align: center;
      color: #444;
      font-size: 1rem;
    }

    .modal-btns {
      display: flex;
      justify-content: center;
    }

    .wrapper {
      background-color: whitesmoke;
      list-style-type: none;
      padding: 0;
      border-radius: 3px;
    }

    .form-row {
      display: flex;
      justify-content: flex-end;
      padding: .5em;
    }

    .form-row > label {
      padding: .5em 1em .5em 0;
      flex: 1;
    }

    .form-row > p {
      padding: .5em;
      flex: 1;
    }

    .form-row > input {
      flex: 2;
    }

    .form-row > textarea {
      flex: 2;
    }

    .form-row > input,
    .form-row > button {
      padding: .5em;
    }

    .form-row > button {
     background: gray;
     color: white;
     border: 0;
    }

  }
`;

const Modal = ({ closeModal, renderContent }) => {


  let modalRef;

  const hideModal = (e) => {
    if (modalRef && !modalRef.contains(e.target)) {
      closeModal();
    }
  }

  useEffect(() => {
    document.addEventListener('click', hideModal)
    return () => {
      document.removeEventListener('click', hideModal);
    }
  }, []);


  return (
    <StyledModal>
      <div ref={(node) => modalRef = node} className="modal">
       {renderContent}
      </div>
    </StyledModal >
  )
}

export default Modal;
