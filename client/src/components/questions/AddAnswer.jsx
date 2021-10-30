import React, { useState, useEffect } from 'react'
import Button from '../styles/Button.styled.js';
import Modal from '../styles/Modal';


import { useSelector, useDispatch } from 'react-redux';
import { loadProduct } from '../../store/apiActions';
import { selectProduct } from '../../store/selectors';



const AddAnswer = () => {

  const dispatch = useDispatch();

  useEffect(() => dispatch(loadProduct()), []);

  const product = useSelector(selectProduct);

  const [questionBody, setQuestionBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');


  const [showModal, setShowModal] = useState(false);


  const closeModal = () => {
    setShowModal(false);
  }


  const submitAnswer = e => {

    e.preventDefault()


    const newAnswer = {


    }

    console.log('Submitting new answer!', newAnswer)

    //add newQuestion to the state

  }

//Need to refactor to controlled input

  const renderContent = (
    <div>
      <h3>Submit your Answer</h3>
      <h4>{product.name}: {questionBody}</h4>
      <div className="modal-btns">
      <Button onClick={closeModal}>Close</Button>
      </div>

      <form onSubmit={submitAnswer}>
        <ul className="wrapper">
          <li className="form-row">
            <label>Your Answer*</label> <br />
            <textarea
              maxLength="1000"
              type='text'
              // value={questionBody}
              // onChange={e => setQuestionBody(e.target.value)}
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
        <Button onClick={closeModal}>Submit</Button>
        </div>
      </form>
    </div>
  )

  //Need to pass down closeModal and renderContent to the Modal style
  return (
    <div>
      <p onClick={() => setShowModal(true)}>Add Answer</p>
      {showModal && <Modal closeModal={closeModal} renderContent={renderContent} />}
    </div>
  )
}

export default AddAnswer;