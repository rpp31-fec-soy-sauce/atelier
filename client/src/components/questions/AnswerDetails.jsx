import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../styles/Modal';
import Button from '../styles/Button.styled.js';
import { Container1, Container2, Image, Card } from '../styles/Card'
import { actions } from '../../store/reducer';
import makeApiCall from '../../store/api.js'

const AnswerDetails = ({ answer }) => {

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [zoomedPic, setZoomedPic] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null)

  const localReport = localStorage.getItem(`${answer.body}isReported`);
  const [report, setReport] = useState(localReport)

  var [helpfulCount, setHelpfulCount] = useState(answer.helpfulness)



  const localHelpful = localStorage.getItem(`${answer.body}isHelpful`);

  const updateHelpfulAnswer = () => {

    if (!localHelpful) {
      setHelpfulCount(helpfulCount++)
      localStorage.setItem(`${answer.body}isHelpful`, JSON.stringify(true))


      makeApiCall('PUT', `/qa/answers/${answer.id}/helpful`, { question_helpfulness: helpfulCount })
        .then(() => {
          dispatch(actions.answerHelpfulUpdated({ id: answer.id }))
        })
        .catch((err) => {
          console.log('Failed to update question helpfulness', err);
        });
    }
  }





  const updateReportAnswer = () => {

    if (!localReport) {
      setReport(true);
      localStorage.setItem(`${answer.body}isReported`, JSON.stringify(true))

      makeApiCall('PUT', `/qa/answers/${answer.id}/report`, { reported: true })
        .then(() => {
          dispatch(actions.answerReported({ id: answer.id }))
          // dispatch(loadQuestions())
        })
        .catch((err) => {
          console.log('Failed to report answer', err);
        });
    }

  }


  const closeModal = e => {
    //stopPropgation prevents further propagation of the current event in the capturing and bubbling phases
    e.stopPropagation();

    setShowModal(false);
  }



  const zoomedPhoto = (
    <div role='photo-modal'>
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
                <Card
                  onClick={() => renderZoomedPhoto(pic)}
                  style={{ border: 'none' }}
                >
                  <Image style={{ cursor: 'pointer' }} role='photos' src={pic} alt="Photo"></Image>
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
      <div>
        <p role='answer-body'> <b>A:</b> {answer.body}</p>
        <div>
          {answer.photos.length === 0 ? null : showGallery(answer.photos)}
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'start',
            gap: '1rem',
            // cursor:'pointer'
          }}
        >
          <p role='answerer'>by {answer.answerer_name === 'Seller' ? <b>Seller</b> : answer.answerer_name}, {answer.date.slice(0, 10)}</p>
          <p>|</p>
          <p
            onClick={updateHelpfulAnswer}
            style={{ cursor: 'pointer' }}
            role='helpful-answer'
          >Helpful?&nbsp;
            <span style={{ textDecoration: 'underline' }}>Yes</span>
            <span role='helpful-answer-count'>({helpfulCount})</span>
          </p>
          <p>|</p>
          <p
            onClick={updateReportAnswer}
            role='report-answer'
            style={{ cursor: 'pointer' }}
          >{report ? 'Reported' : 'Report'}</p>
        </div>

      </div>
    )
  } else {
    return null
  }

};

export default AnswerDetails;



