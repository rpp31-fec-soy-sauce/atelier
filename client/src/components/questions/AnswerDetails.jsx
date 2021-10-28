import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


const AnswerDetails = ({ answer }) => {

  //pic hasn't been tested
  // const pics = () => {
  //   if (answer.photos.length === 0) {
  //     return null
  //   } else {
  //     return answer.photos.map((pic, key) => {
  //       return <div key={key}>{pic}</div>
  //     })
  //   }
  // }


  // If the answer is from the seller, then the username should display “Seller” in bold.

  return (
    <div>
      <p> <b>A:</b> {answer.body}</p>
      <p>by {answer.answerer_name === 'Seller' ? <b>Seller</b> : answer.answerer_name}, {answer.date.slice(0, 10)}</p>
      <p>Helpful?  Yes {answer.helpfulness}</p>
      <p>Report</p>

      {/* {answer.photos.map(pic => <div key={pic} ></div>)} */}
    </div>
  )

};

export default AnswerDetails;



