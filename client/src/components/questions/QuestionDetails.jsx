import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AnswersList from './AnswersList.jsx';
import AddAnswer from './AddAnswer.jsx';
import { reportQuestion } from '../../store/apiActions';
// import { selectQuestions } from '../../store/selectors';


const QuestionDetails = ({ question }) => {

  const dispatch = useDispatch();

  const [isHelpful, setIsHelpful] = useState(false);
  const [report, setReport] = useState(false);

  // useEffect(() => dispatch(reportQuestion(question)), [report]);

  const submitQuestionHelpfulness = (id) => {

    isHelpful ? setIsHelpful(false) : setIsHelpful(true);
    localStorage.setItem(`${id}IsHelpful`, JSON.stringify(isHelpful))

    //add put request & send to api

  }


  const updateReportQuestion = () => {
    report ? null: setReport(true);
    localStorage.setItem(`${question.question_id}IsReported`, JSON.stringify(report))
    //add put request & send to api
    console.log('Report question')

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
              cursor: 'pointer'
            }}
          >
            {/* <p>Helpful?</p> */}
            <p onClick={() => submitQuestionHelpfulness(question.question_id)}>Helpful?&nbsp;Yes ({question.helpfulness | 0})</p>
            <p>|</p>
            <p onClick={updateReportQuestion} role='report-question'>{report? 'Reported' : 'Report'}</p>
            <p>|</p>
            <AddAnswer question={question.question_body} />
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