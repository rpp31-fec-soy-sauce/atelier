import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AnswersList from './AnswersList.jsx';
import AddAnswer from './AddAnswer.jsx';




const QuestionsDetails = ({ question }) => {

  const [isHelpful, setIsHelpful] = useState(false);

  const submitQuestionHelpfulness = (id) => {

    isHelpful? setIsHelpful(false) : setIsHelpful(true);
    localStorage.setItem(`${id}IsHelpful`, JSON.stringify(isHelpful))


    //add put request & send to api

  }




  return (
    <div key={question.question_id}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '3rem',
        }}
      >
        <div>
          <p><b>Q: {question.question_body}</b></p>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
            gap: '1rem',
          }}
        >
          <p>Helpful?</p>
          <p onClick={() => submitQuestionHelpfulness(question.question_id)}>Yes ({question.helpfulness | 0})</p>
          <p>|</p>
          <AddAnswer question={question.question_body} />
        </div>
      </div>
      {Object.keys(question.answers).length === 0 ? "This question hasn\'t been answered yet." : <AnswersList answers={question.answers} />}

    </div>
  );
};

export default QuestionsDetails;