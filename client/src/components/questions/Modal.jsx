import React, { useState, useEffect } from 'react';
import styled from 'styled-components';



import { useSelector, useDispatch } from 'react-redux';
import { loadProduct } from '../../store/apiActions';
import { selectProduct } from '../../store/selectors';



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

  .modal {
    width: 500px;
    height: 500px;
    box-shadow: 0 0 15px rgba(0, 0, 0, .1);
    background-color: #dee2e6;
    border-radius: 2px;
    position: relative;
    padding: 10px;

    animation-name: grow-modal;
    animation-duration: .4s;
    animation-timing-function: ease-in-out;

    @keyframes grow-modal {
      0% { opacity: .2; }
      25% { opacity: .4; }
      50% { opacity: .6; }
      75% { opacity: .8; }
      100% { width: 500px; height: 500px; opacity: .9; }
    }

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
  }
`;

const Modal = ({ closeModal }) => {


  const dispatch = useDispatch();

  useEffect(() => dispatch(loadProduct()), []);

  const product = useSelector(selectProduct);

  const [questionBody, setQuestionBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  //add new action to post the new question

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


  const submitQuestion = e => {

    e.preventDefault()
    console.log('Question body', questionBody)

    //how to get the question_id???


    const newQuestion = {
      answers: {},
      asker_name: nickname,
      question_body: questionBody,
      question_date: new Date().toISOString(),
      question_helpfulness: '0',
      question_id: '00000',
      reported: false
    }

    console.log('Submitting new question!', newQuestion)

    //add newQuestion to the state.questions

  }


  return (
    <StyledModal>
      <div ref={(node) => modalRef = node} className="modal">
        <h3>Ask Your Question</h3>
        <h4>About the {product.name}</h4>
        <div className="modal-btns">
          <button onClick={closeModal}>Close</button>
        </div>

        <div>
          {/* <form onSubmit={setState()}> */}
          <form onSubmit={submitQuestion}>
            <label>Your Question*</label> <br />
            <textarea
              maxLength="1000"
              type='text'
              value={questionBody}
              onChange={e => setQuestionBody(e.target.value)}
              placeholder='Add question'
              required
            />
            <br />
            <br />

            <label> What is your nickname*</label> <br />
            <input
              maxLength="60"
              type='text'
              value={nickname}
              onChange={e => setNickname(e.target.value)}
              placeholder='Example: jackson11!'
              required
            />
            <p>For privacy reasons, do not use your full name or email address</p><br />

            <label>Your email*</label> <br />
            <input
              maxLength="60"
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Why did you like the product or not?'
              required
            />
            <br />
            <br />

            <button>Submit</button>
          </form>

        </div>
      </div>
    </StyledModal>
  )
}

export default Modal;
