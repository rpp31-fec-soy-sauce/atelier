import React, { useState, useEffect } from 'react'
import Button from '../styles/Button.styled.js';
import Modal from '../styles/Modal';
import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux';
import { loadProduct } from '../../store/apiActions';
import { selectProduct } from '../../store/selectors';
import { actions } from '../../store/reducer';

const headers = { Authorization: require('../../../../apiToken') };


const AddQuestion = () => {

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


  const submitQuestion = e => {

    e.preventDefault()

    const newQuestion = {

      product_id: product.id,
      body: questionBody,
      name: nickname,
      email: email
    }



    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${product.id}`, newQuestion, { headers })
      // .then(function (response) {
      //   console.log(response);
      // })
      .then(() => {
        dispatch(actions.questionAdded({
          answers: {},
          asker_name: nickname,
          question_body: questionBody,
          question_date: new Date().toISOString(),
          question_helpfulness: '0',
          reported: false
        }))
      })
      .catch(function (error) {
        console.log(error);
      });



    // console.log('Submitting new question!', newQuestion)
    //add the closeModal as a callback to the post request
    closeModal();

    //add newQuestion to the state.questions

  }



  const renderContent = (
    <div>
      <h3>Ask Your Question</h3>
      <h4 role='product-name'>About the {product && product.name}</h4>
      <div className="modal-btns">
        <Button onClick={closeModal}>Close</Button>
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
              placeholder='Add question'
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
              placeholder='Example: jackson11!'
              required
            />
          </li>
          <li className="form-row" style={{ paddingTop: '10px' }}>
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
          {/* <Button onClick={closeModal}>Submit</Button> */}
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  )

  //Need to passdown closeModal and renderContent to the Modal style
  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Add A Question</Button>
      {showModal && <Modal closeModal={closeModal} renderContent={renderContent} />}
    </div>
  )
}

export default AddQuestion;
