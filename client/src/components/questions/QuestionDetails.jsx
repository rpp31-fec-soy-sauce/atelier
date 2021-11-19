import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import AnswersList from './AnswersList.jsx';
import AddAnswer from './AddAnswer.jsx';
// import { loadQuestions } from '../../store/apiActions';
import { actions } from '../../store/reducer';
const headers = { Authorization: require('../../../../apiToken') };


const QuestionDetails = ({ question }) => {

  const dispatch = useDispatch();

  var [helpfulCount, setHelpfulCount] = useState(question.question_helpfulness)

  const localReport = localStorage.getItem(`${question.question_body}isReported`);
  var [report, setReport] = useState(localReport);

  const localHelpful = localStorage.getItem(`${question.question_body}isHelpful`);

  const updateHelpfulQuestion = () => {

    if (!localHelpful) {
      setHelpfulCount(helpfulCount + 1)
      localStorage.setItem(`${question.question_body}isHelpful`, JSON.stringify(true))

      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${question.question_id}/helpful`, { question_helpfulness: helpfulCount }, { headers })
        .then(() => {
          dispatch(actions.questionHelpfulUpdated({ id: question.question_id }))
          // dispatch(loadQuestions())
        })
        .catch((err) => {
          console.log('Failed to update question helpfulness', err);
        });
    }
  }


  const updateReportQuestion = () => {

    if (!localReport) {
      setReport(true);
      localStorage.setItem(`${question.question_body}isReported`, JSON.stringify(true))

      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${question.question_id}/report`, { reported: true }, { headers })
        .then(() => {
          dispatch(actions.questionReported({ id: question.question_id }))
          // dispatch(loadQuestions())
        })
        .catch((err) => {
          console.log('Failed to report question', err);
        });
    }
  }


  if (question) {

    return (
      <div key={question.question_id}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-between',
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
              // cursor: 'pointer'
            }}
          >
            <p
              style={{ cursor: 'pointer' }}
              onClick={updateHelpfulQuestion}
              role='helpful-question'
            >Helpful?&nbsp;
            <span style={{ textDecoration: 'underline' }}>Yes</span>
            <span role='helpful-question-count'>({helpfulCount})</span>
            </p>
            <p>|</p>
            <p
            onClick={updateReportQuestion}
            role='report-question'
            style={{ cursor: 'pointer' }}
            >{report?'Reported': 'Report'}</p>
            <p>|</p>
            <AddAnswer question={question} />
            </div>
          </div>
          {question.answers && Object.keys(question.answers).length === 0 ? "This question hasn\'t been answered yet." : <AnswersList answers={question.answers} />}

        </div>
        );
  } else {
    return null
  }
};

        export default QuestionDetails;

