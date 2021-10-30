import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container1, Container2, Image, Card } from '../related_items/styles/style'


const AnswerDetails = ({ answer }) => {


  const renderPhoto = (photos) => {
    return (
      <div>
        <Container1>
          {photos.map(pic => {
            return (
              <Card key={pic}>
                <Image src={pic} alt="Photo"></Image>
              </Card>
            )
          })}
        </Container1>
      </div>
    )
  }


  // If the answer is from the seller, then the username should display “Seller” in bold.

  return (
    <div>
      <p> <b>A:</b> {answer.body}</p>
      <div>
        {/* {answer.photos.length === 0 ? null: (answer.photos.map(pic => <div key={pic}>{pic}<div>)) } */}
        {answer.photos.length === 0 ? null : renderPhoto(answer.photos)}
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
        <p>Yes ({answer.helpfulness | 0})</p>
        <p>|</p>
        <p>Report</p>
      </div>

      {/* {answer.photos.map(pic => <div key={pic} ></div>)} */}
    </div>
  )

};

export default AnswerDetails;



