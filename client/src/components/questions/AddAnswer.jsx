import React, { useState, useEffect } from 'react'
import Button from '../styles/Button.styled.js';
import Modal from '../styles/Modal';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { loadProduct, loadQuestions } from '../../store/apiActions';
import { selectProduct } from '../../store/selectors';
import ErrorMessage from './ErrorMessage.jsx';
// import { actions } from '../../store/reducer';
// import { selectQuestions } from '../../store/selectors';

const headers = { Authorization: require('../../../../apiToken') };


const AddAnswer = ({ question }) => {

  const dispatch = useDispatch();

  useEffect(() => dispatch(loadProduct()), []);

  const product = useSelector(selectProduct);

  const [answerBody, setAnswerBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  }


  const submitAnswer = e => {

    e.preventDefault();

    //Validate user input
    const newErrors = {};
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // console.log(re.test(email))


    if (!answerBody) {
      newErrors.answerBody = 'Please Enter An Answer';
    }

    if (!nickname) {
      newErrors.nickname = 'Please Enter A Nickname';
    }

    if (!email) {
      newErrors.email = 'Please Enter An Email';
    } else if (!re.test(email)) {
      newErrors.email = 'Please Enter A Valid Email';
    }

    if (Object.keys(newErrors).length === 0) {

      const newAnswer = {
        body: answerBody,
        name: nickname,
        email: email,
        photo: []
      }

      axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${question.question_id}/answers`, newAnswer, { headers })
        .then(() => { dispatch(loadQuestions()) })
        .catch(function (error) {
          console.log(error);
        });

      //add the closeModal as a callback to the post request
      closeModal();
    } else {
      setErrors(newErrors);
    }

  }

  const renderContent = (
    <div>
      <h3>Submit your Answer</h3>
      <h4>{product && product.name}: {question.question_body}</h4>
      <div className="modal-btns">
        <Button type="button" onClick={closeModal}>Close</Button>
      </div>

      <form onSubmit={submitAnswer}>
        <ul className="wrapper">
          <li className="form-row">
            <label>Your Answer*</label> <br />
            <textarea
              maxLength="1000"
              type='text'
              value={answerBody}
              onChange={e => setAnswerBody(e.target.value)}
              placeholder='Add answer'
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
              placeholder='Example: jack543!'
              // required
            />
          </li>
          <li className="form-row">
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
              placeholder='Why did you like the product or not?'
              // required
            />
          </li>
          <li className="form-row">
            <p>For authentication reasons, you will not be emailed</p>
          </li>
          <div>
            {Object.keys(errors).length ? <ErrorMessage errors={errors} /> : null}
          </div>
        </ul>
        <div className="modal-btns">
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  )

  //Need to pass down closeModal and renderContent to the Modal style
  return (
    <div>
      <p onClick={() => setShowModal(true)} role='add-answer'>Add Answer</p>
      {showModal && <Modal closeModal={closeModal} renderContent={renderContent} />}
    </div>
  )
}

export default AddAnswer;