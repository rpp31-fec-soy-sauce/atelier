import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AnswerDetails from './AnswerDetails.jsx';
import Button from '../styles/Button.styled.js';



const AnswersList = ({ answers }) => {

  // const [isAnswerListExpanded, setIsAnswerListExpanded] = useState(false);

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

  const moreAnswersButton = () => {
    if (sortedList.length <= 2) {
      return null;
    } else {
      return (
        <Button onClick={displayMoreAnswers}>
          {numberOfAnswers < sortedList.length ? 'MORE ANSWERS' : 'COLLAPPSE ANSWERS'}
        </Button>
      )
    }

  }

  // console.log('Sort: ', sortedList)

  // const displayMoreAnswers = e => {
  //   if (isAnswerListExpanded === true) {
  //     setIsAnswerListExpanded(false);
  //   } else {
  //     setIsAnswerListExpanded(true);
  //   }

  // }

  // const renderContent = () => {

  //   if (isAnswerListExpanded === false) {
  //     return (
  //       <div>
  //         {sortedList[0] ? <AnswerDetails answer={sortedList[0][1]} /> : ''}
  //         {sortedList[1] ? <AnswerDetails answer={sortedList[1][1]} /> : ''}
  //         <Button onClick={e => displayMoreAnswers(e)}>
  //           {isAnswerListExpanded ? 'COLLAPPSE ANSWERS' : 'MORE ANSWERS'}

  //         </Button>

  //       </div>
  //     )
  //   } else if (isAnswerListExpanded) {
  //     return (
  //       <div>
  //         {sortedList.map(answer => {
  //           return (
  //             <div key={answer[1].id}>
  //               <AnswerDetails answer={answer[1]} />
  //             </div>
  //           )
  //         })}
  //         <Button onClick={e => displayMoreAnswers(e)}>
  //           {isAnswerListExpanded ? 'COLLAPPSE ANSWERS' : 'MORE ANSWERS'}
  //         </Button>

  //       </div>
  //     )
  //   }
  // }

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
        {moreAnswersButton()}
      </div>
    )
  }

  return (
    <div>{renderContent()} <br /> </div>
  )
};

export default AnswersList;