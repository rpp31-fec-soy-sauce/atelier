import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadQuestions } from '../../store/apiActions';
import { selectQuestions } from '../../store/selectors';


import QuestionDetails from './QuestionDetails.jsx';
import AddQuestion from './AddQuestion.jsx';



const Questions = () => {

  const dispatch = useDispatch();

  useEffect(() => dispatch(loadQuestions()), []);

  const [searchTerm, setSearchTerm] = useState('');
  const [isQuestionListExpanded, setIsQuestionListExpanded] = useState(false);


  const questions = useSelector(selectQuestions(searchTerm));

  // console.log('Search term', searchTerm)
  // console.log('Questions', questions)



  const expandQuestions = () => {
    if (isQuestionListExpanded === true) {
      setIsQuestionListExpanded(false);
    } else {
      setIsQuestionListExpanded(true);
    }
  }

  const renderContent = () => {

    if (!isQuestionListExpanded) {
      return (
        <div>
          {questions[0] ? <QuestionDetails question={questions[0]} /> : ''} <hr />
          {questions[1] ? <QuestionDetails question={questions[1]} /> : ''}  <hr />
        </div>
      )
    } else {
      return (
        <div>
          {questions.map(question => {
            return (
              <div key={question.question_id}>
                <QuestionDetails question={question} /> <hr />
              </div>
            )
          })}
        </div>
      )
    }
  }

  //rendering first two questions
  return (

    <div>
      <h2>Questions and Answers</h2>
      {/* <p>{JSON.stringify(questions)}</p> */}
      <div>
        <input
          type="text"
          style={{ display: 'flex', padding: '0.5rem'}}
          value={searchTerm}
          placeholder='Have a question? Search for answers...'
          onChange={e => setSearchTerm(e.target.value)}
        >
        </input>
      </div>
      <div>
        {renderContent()}
      </div>
      <div>
        <button
          style={{ display: 'flex',  border: '1px solid black', borderRadius: '5px', padding: '0.5rem'}}
          onClick={expandQuestions}
          >
          {isQuestionListExpanded ? 'Collapse Questions' : 'More Questions'}
        </button>
      </div> <br />

      <AddQuestion />

    </div >

  );
};


export default Questions;