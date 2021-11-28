import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import AnswerDetails from './AnswerDetails.jsx';
import Button from '../styles/Button.styled.js';

const AnswersList = ({ answers }) => {


  //Answers should appear in the order of ‘helpfulness’
  //any answers from the seller should appear at the top of the list

  const [numberOfAnswers, setNumberOfAnsers] = useState(2);


  const sortedList = [];

  if (answers) {
    Object.entries(answers)
      .sort((a, b) => b[1].helpfulness - a[1].helpfulness)
      .forEach(answer => {
        if (answer[1].answerer_name === 'Seller') {
          sortedList.unshift(answer)
        } else {
          sortedList.push(answer)
        }
      })
  }


  const displayMoreAnswers = () => {
    if (numberOfAnswers < sortedList.length) {
      sortedList.length - numberOfAnswers === 1 ? setNumberOfAnsers(numberOfAnswers + 1) : setNumberOfAnsers(numberOfAnswers + 2)
    } else {
      setNumberOfAnsers(2)
    }
  }

  const updateAnswers = () => {
    if (sortedList.length <= 2) {
      return null;
    } else {
      return (
        <Button
        onClick={displayMoreAnswers}
        data-element={'moreAnswersButton'}
        data-module={'questions'}
        >
          {numberOfAnswers < sortedList.length ? 'MORE ANSWERS' : 'COLLAPPSE ANSWERS'}
        </Button>
      )
    }
  }

  const renderContent = () => {
    const answerList = sortedList.slice(0, numberOfAnswers)
    return (
      <div>
        {answerList.map(answer => {
          return (
            <div key={answer[1].id}>
              <AnswerDetails answer={answer[1]} />
            </div>
          )
        })}
        {sortedList.length <= 2 ? null : updateAnswers()}
      </div>
    )
  }

  return (
    <div>{renderContent()} <br /> </div>
  )
};

export default AnswersList;