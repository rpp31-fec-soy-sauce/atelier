import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AnswerDetails from './AnswerDetails.jsx';
import Button from '../styles/Button.styled.js';



const AnswersList = ({ answers }) => {

  const [isAnswerListExpanded, setIsAnswerListExpanded] = useState(false);

  // const answerId = Object.keys(answers)

  //Answers should appear in the order of ‘helpfulness’
  //any answers from the seller should appear at the top of the list
  const sortedList = [];

  Object.entries(answers)
    .sort((a, b) => b[1].helpfulness - a[1].helpfulness)
    .forEach(answer => {
      if (answer[1].answerer_name === 'Seller') {
        sortedList.unshift(answer)
      } else {
        sortedList.push(answer)
      }
    })

  // console.log('Sort: ', sortedList)

  const displayMoreAnswers = e => {
    if (isAnswerListExpanded === true) {
      setIsAnswerListExpanded(false);
    } else {
      setIsAnswerListExpanded(true);
    }

  }

  const renderContent = () => {
    // if (sortedList.length === 0) {
    //   console.log('Length:', sortedList.length)
    //   return (
    //     <div>
    //       <AddAnswer />
    //     </div>
    //   )
    // }

    if (isAnswerListExpanded === false) {
      return (
        <div>
          {sortedList[0] ? <AnswerDetails answer={sortedList[0][1]} /> : ''}
          {sortedList[1] ? <AnswerDetails answer={sortedList[1][1]} /> : ''}
          <Button onClick={e => displayMoreAnswers(e)}>
            {isAnswerListExpanded ? 'COLLAPPSE ANSWERS' : 'MORE ANSWERS'}
          </Button>

        </div>
      )
    } else if (isAnswerListExpanded) {
      return (
        <div>
          {sortedList.map(answer => {
            return (
              <div key={answer[1].id}>
                <AnswerDetails answer={answer[1]} />
              </div>
            )
          })}
          <Button onClick={e => displayMoreAnswers(e)}>
            {isAnswerListExpanded ? 'COLLAPPSE ANSWERS' : 'MORE ANSWERS'}
          </Button>

        </div>
      )
    }
  }


  return (
    <div>
      {renderContent()} <br />

    </div>
  )


};

export default AnswersList;