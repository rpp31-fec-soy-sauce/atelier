import React, { useState, useEffect } from 'react'
import Button from '../styles/Button.styled.js';
import Modal from '../styles/Modal';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { loadProduct, loadQuestions } from '../../store/apiActions';
import { selectProduct } from '../../store/selectors';
import ErrorMessage from './ErrorMessage.jsx';
import { Container1, Container2, Image, Card } from '../styles/Card'
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
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [validPhoto, setValidPhoto] = useState(true);

  const closeModal = () => {
    setShowModal(false);
    setAnswerBody('');
    setNickname('');
    setEmail('')
    setImages([]);
    setErrors({});
    setValidPhoto(true);
  }



  const validateImage = () => {

    images.forEach(url => {
      if (url.match(/\.(jpeg|jpg|gif|png)$/) == null) {
        return setValidPhoto(false)
      }
    })
    // return setValidPhoto(true);
  }


  const uploadImage = e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'cloudinaryUpload')
    setLoading(true);

    axios.post('https://api.cloudinary.com/v1_1/dtr701wqi/image/upload', data, { headers: { "X-Requested-With": "XMLHttpRequest" } })
      .then(res => {
        setImages([...images, res.data.secure_url])
        setLoading(false);
      })
      .catch(err => {
        setValidPhoto(false);
        setLoading(false);
      })
  }


  const submitAnswer = e => {

    e.preventDefault();
    validateImage();

    //Validate user input
    const newErrors = {};
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


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

    if (!validPhoto) {
      newErrors.images = 'Please Upload A Valid Image';
    }


    if (Object.keys(newErrors).length === 0) {

      const newAnswer = {
        body: answerBody,
        name: nickname,
        email: email,
        photos: images,
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
    <div role='answer-modal'>
      <h3>Submit your Answer</h3>
      <h4>{product && product.name}: {question ? question.question_body : null}</h4>
      <div className="modal-btns">
        <Button
        type="button"
        onClick={closeModal}
        role='close-answer-button'
        >Close
        </Button>
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
              placeholder='What is your answer?'
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
              placeholder='Example: jack543!@gmail.com'
            />
          </li>
          <li className="form-row">
            <p>For authentication reasons, you will not be emailed</p>
          </li>

          <li className="form-row">
            <label>Upload your photos</label> <br />
            {images.length < 5 ?
              <input
                role='image-upload'
                type='file'
                // name='file'
                placeholder='Upload an image'
                onChange={uploadImage}
              /> : null

            }
          </li>
          <div >
            <Container1>
              {images.map(pic => {
                return (
                  <div key={pic} >
                    <Card style={{ border: 'none' }}>
                      <Image role='image' style={{ height: '70px', width: '70px' }} src={pic} alt="Image"></Image>
                    </Card>
                  </div>
                )
              })}
            </Container1>
          </div>
          <li>
            {loading ? (<h4>Loading . . .</h4>) : null}
          </li>

          <div role='error-answer-msg'>
            {Object.keys(errors).length ? <ErrorMessage errors={errors} /> : null}
          </div>
        </ul>
        <div className="modal-btns">
          <Button role='submit-answer-button'>Submit</Button>
        </div>

      </form>
    </div>
  )

  //Need to pass down closeModal and renderContent to the Modal style
  return (
    <div>
      <p
        style={{ cursor: 'pointer', textDecoration: 'underline' }}
        onClick={() => setShowModal(true)}
        role='add-answer-button'
      >
        Add Answer</p>
      {showModal && <Modal closeModal={closeModal} renderContent={renderContent} />}
    </div>
  )
}

export default AddAnswer;


