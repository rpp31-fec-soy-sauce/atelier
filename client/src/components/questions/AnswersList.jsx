import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AnswerDetails from './AnswerDetails.jsx';
import AddAnswer from './AddAnswer.jsx';



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
      // e.target.innerText = 'See more answers';
    } else {
      setIsAnswerListExpanded(true);
      // e.target.innerText = 'Collapse answers';
    }

  }

  const renderContent = () => {
    if (sortedList.length === 0) {
      return <div>This question is not answered</div>
    } else if (isAnswerListExpanded === false) {
      return (
        <div>
          {sortedList[0] ? <AnswerDetails answer={sortedList[0][1]} /> : ''}
          {sortedList[1] ? <AnswerDetails answer={sortedList[1][1]} /> : ''}
        </div>
      )
    } else if (expandAnswers === true) {
      return (
        <div>
          {sortedList.map(answer => {
            return (
              <div key={answer[1].id}>
                <AnswerDetails answer={answer[1]} />
              </div>
            )
          })}
        </div>
      )

    }
  }


  return (
    <div>
      <div>
        {renderContent()} <br />
      </div>
      <button onClick={e => displayMoreAnswers(e)}>{isAnswerListExpanded ? 'Collapse Answers' : 'More Answers'}</button> <br />
      <AddAnswer />
    </div>
  )


};

export default AnswersList;