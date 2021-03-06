import React, { useState, useEffect } from 'react'
import Button from '../styles/Button.styled.js';
import Modal from '../styles/Modal';
import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux';
import { loadProduct, loadQuestions } from '../../store/apiActions';
import { selectProduct } from '../../store/selectors';
import { actions } from '../../store/reducer';
import ErrorMessage from './ErrorMessage.jsx';
import makeApiCall from '../../store/api.js'


const AddQuestion = () => {

  const dispatch = useDispatch();

  useEffect(() => dispatch(loadProduct()), []);

  const product = useSelector(selectProduct);
  const [questionBody, setQuestionBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});


  const closeModal = () => {
    setShowModal(false);
  }


  const submitQuestion = e => {

    e.preventDefault();

    //Validate user input
    const newErrors = {};
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // console.log(re.test(email))


    if (!questionBody) {
      newErrors.questionBody = 'Please Enter A Question';
    }

    if (!nickname) {
      newErrors.nickname = 'Please Enter A Nickname';
    }

    if (!email) {
      newErrors.email = 'Please Enter An Email';
    } else if (!re.test(email)) {
      newErrors.email = 'Please Enter A Valid Email';
    }


    // console.log('Errors State', newErrors)
    if (Object.keys(newErrors).length === 0) {

      const newQuestion = {
        product_id: product.id,
        body: questionBody,
        name: nickname,
        email: email
      }

      makeApiCall('POST', `/qa/questions?product_id=${product.id}`, newQuestion)
        .then(() => { dispatch(loadQuestions()) })
        .catch(function (error) {
          console.log(error);
        });

      closeModal();

    } else {
      setErrors(newErrors);
    }

  }


  const renderContent = (
    <div role='question-modal'>
      <h3>Ask Your Question</h3>
      <h4 role='product-name'>About the {product && product.name}</h4>
      <div className="modal-btns">
        <Button
          type="button"
          onClick={closeModal}
          role='close-question-button'
          data-element={'closeAddQuestionButton'}
          data-module={'questions'}
        >Close
        </Button>
      </div>
      <form onSubmit={submitQuestion} >
        <ul className="wrapper">
          <li className="form-row">
            <label>Your Question*</label> <br />
            <textarea
              maxLength="1000"
              type='text'
              value={questionBody}
              onChange={e => setQuestionBody(e.target.value)}
              placeholder='What is your question?'
              data-element={'questionBodyInput'}
              data-module={'questions'}
            // required
            />
          </li>
          <li className="form-row">
            <label> What is your nickname*</label> <br />
            <input
              maxLength="60"
              type='text'
              value={nickname}
              onChange={e => setNickname(e.target.value)}
              placeholder='Example: jackson11!'
              data-element={'questionNicknameInput'}
              data-module={'questions'}
            // required
            />
          </li>
          <li className="form-row" style={{ paddingTop: '10px' }}>
            <p>For privacy reasons, do not use your full name or email address</p><br />
          </li>
          <li className="form-row">
            <label>Your email*</label> <br />
            <input
              maxLength="60"
              // type='email'
              type='text'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Example: jackson11!@gmail.com'
              data-element={'questionEmailInput'}
              data-module={'questions'}
            // required
            />
          </li>
          <li className="form-row">
            <p>For authentication reasons, you will not be emailed</p>
          </li>
          <div role='error-question-msg'>
            {Object.keys(errors).length ? <ErrorMessage errors={errors} /> : null}
          </div>
        </ul>
        <div className="modal-btns">
          <Button
          role='submit-question-button'
          data-element={'submitQuestionButton'}
          data-module={'questions'}
          >Submit</Button>
        </div>
      </form>
    </div>
  )

  //Need to passdown closeModal and renderContent to the Modal style
  return (
    <div>
      <Button
      onClick={() => setShowModal(true)}
      data-element={'addQuestionButton'}
      data-module={'questions'}
      >Add A Question</Button>
      {showModal && <Modal closeModal={closeModal} renderContent={renderContent} />}
    </div>
  )
}

export default AddQuestion;
