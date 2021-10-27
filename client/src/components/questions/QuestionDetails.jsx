import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AnswersList from './AnswersList.jsx';




const QuestionsDetails = ({ question }) => {


  return (
    <div key={question.question_id}>
      <p><b>Q:</b> {question.question_body}</p>
      <AnswersList answers={question.answers} />
    </div>
  );
};

export default QuestionsDetails;