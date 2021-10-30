import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AnswersList from './AnswersList.jsx';
import AddAnswer from './AddAnswer.jsx';




const QuestionsDetails = ({ question }) => {



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
          <p>Yes ({question.helpfulness | 0})</p>
          <p>|</p>
          <AddAnswer />
        </div>
      </div>
      {Object.keys(question.answers).length === 0? "This question hasn\'t been answered yet." : <AnswersList answers={question.answers} />}

    </div>
  );
};

export default QuestionsDetails;