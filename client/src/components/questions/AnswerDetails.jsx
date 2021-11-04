import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../styles/Modal';
import Button from '../styles/Button.styled.js';
import { Container1, Container2, Image, Card } from '../styles/Card'

const AnswerDetails = ({ answer }) => {

  const [showModal, setShowModal] = useState(false);
  const [zoomedPic, setZoomedPic] = useState(null);
  const [isHelpful, setIsHelpful] = useState(false);
  const [report, setReport] = useState(false);
  const [photoUrl, setPhotoUrl] = useState(null)


  const submitAnswerHelpfulness = (id) => {
    isHelpful ? setIsHelpful(false) : setIsHelpful(true);
    localStorage.setItem(`${id}IsHelpful`, JSON.stringify(isHelpful))
    //add put request & send to api

  }

  const reportAnswer = (id) => {
    report ? setReport(false) : setReport(true);
    localStorage.setItem(`${id}IsReported`, JSON.stringify(report))
    //add put request & send to api

  }


  const closeModal = e => {
    //stopPropgation prevents further propagation of the current event in the capturing and bubbling phases
    e.stopPropagation();

    setShowModal(false);
  }



  const zoomedPhoto = (
    <div>
      <div className="modal-btns">
        <Button onClick={closeModal}>Close</Button>
      </div><br />
      <div>
        <Image style={{ width: '500px', height: '500px' }} src={photoUrl} />
      </div>
    </div>
  )

  const renderZoomedPhoto = (url) => {
    setShowModal(true);
    // console.log('Render Zoomed Photo')
    setPhotoUrl(url);
  }


  const showGallery = (photos) => {
    return (
      <div>
        <Container1>
          {photos.map(pic => {
            return (
              <div key={pic}>
                <Card onClick={() => renderZoomedPhoto(pic)}>
                  <Image src={pic} alt="Photo"></Image>
                  {showModal && <Modal closeModal={closeModal} renderContent={zoomedPhoto} />}
                </Card>
              </div>
            )
          })}
        </Container1>
      </div>
    )
  }

  // If the answer is from the seller, then the username should display “Seller” in bold.


  if (answer) {
    return (
      <div data-testid='answerDetails'>
        <p> <b>A:</b> {answer && answer.body}</p>
        <div>
          {answer.photos.length === 0 ? null : showGallery(answer.photos)}
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'start',
            gap: '1rem',
          }}
        >
          <p>by {answer.answerer_name === 'Seller' ? <b>Seller</b> : answer.answerer_name}, {answer.date.slice(0, 10)}</p>
          <p>|</p>
          <p>Helpful?</p>
          <p onClick={() => submitAnswerHelpfulness(answer.id)}>Yes ({answer.helpfulness | 0})</p>
          <p>|</p>
          <p onClick={() => reportAnswer(answer.id)}>Report</p>
        </div>

      </div>
    )
  } else {
    return null
  }

};

export default AnswerDetails;



