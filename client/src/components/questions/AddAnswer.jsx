import React, { useState, useEffect } from 'react'
import Button from '../styles/Button.styled.js';
import Modal from '../styles/Modal';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { loadProduct } from '../../store/apiActions';
import { selectProduct } from '../../store/selectors';
import { actions } from '../../store/reducer';

const headers = { Authorization: require('../../../../apiToken') };


const AddAnswer = ({ question, setAnswers }) => {

  const dispatch = useDispatch();

  useEffect(() => dispatch(loadProduct()), []);

  const product = useSelector(selectProduct);

  const [answerBody, setAnswerBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');


  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  }


  const submitAnswer = e => {

    e.preventDefault()

    const newAnswer = {
      body: answerBody,
      // date: new Date().toString(),
      name: nickname,
      email: email,
      photo: []
    }

    // console.log('Submitting new answer!', newAnswer)
    // console.log('Answer List length:', Object.keys(question.answers).length)
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${question.question_id}/answers`, newAnswer, { headers })
      .then(() => {
        let answer_id = Object.keys(question.answers).length;
        let newAnswersList = { ...question.answers }
        let newDate = new Date();
        newAnswersList = Object.assign({
          answer_id: {
            id: answer_id,
            body: answerBody,
            date: newDate.toISOString().slice(0, 10),
            answerer_name: nickname,
            helpfulness: '0',
            reported: false,
            photos: []
          }
        }, newAnswersList)
        setAnswers(newAnswersList)
      })
      .catch(function (error) {
        console.log(error);
      });

    //add the closeModal as a callback to the post request
    closeModal();

  }

  //Need to refactor to controlled input

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
              required
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
              required
            />
          </li>
          <li className="form-row">
            <p>For privacy reasons, do not use your full name or email address</p><br />
          </li>
          <li className="form-row">
            <label>Your email*</label> <br />
            <input
              maxLength="60"
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Why did you like the product or not?'
              required
            />
          </li>
          <li className="form-row">
            <p>For authentication reasons, you will not be emailed</p><br />
          </li>
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