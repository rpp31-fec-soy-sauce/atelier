import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadQuestions } from '../../store/apiActions';
import { selectQuestions } from '../../store/selectors';


import QuestionDetails from './QuestionDetails.jsx';
import AddQuestion from './AddQuestion.jsx';
import Button from '../styles/Button.styled.js';



const Questions = () => {

  const dispatch = useDispatch();

  useEffect(() => dispatch(loadQuestions()), []);

  const [searchTerm, setSearchTerm] = useState('');
  // const [isQuestionListExpanded, setIsQuestionListExpanded] = useState(false);


  const questions = useSelector(selectQuestions(searchTerm));

  const [numberOfQuestions, setNumberOfQuestions] = useState(2);

  // const expandQuestions = () => {
  //   if (isQuestionListExpanded) {
  //     setIsQuestionListExpanded(false);
  //   } else {
  //     setIsQuestionListExpanded(true);
  //   }
  // }
  const expandQuestions = () => {
    if (numberOfQuestions < questions.length) {
      questions.length - numberOfQuestions === 1 ? setNumberOfQuestions(numberOfQuestions + 1) : setNumberOfQuestions(numberOfQuestions + 2)
    } else {
      setNumberOfQuestions(2)
    }
  }

  // const renderContent = () => {
  //   if (!isQuestionListExpanded) {
  //     return (
  //       <div>
  //         {questions[0] ? <QuestionDetails question={questions[0]} /> : ''} <hr />
  //         {questions[1] ? <QuestionDetails question={questions[1]} /> : ''}  <hr />
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div>
  //         {questions.map(question => {
  //           return (
  //             <div key={question.question_id}>
  //               <QuestionDetails question={question} /> <hr />
  //             </div>
  //           )
  //         })}
  //       </div>
  //     )
  //   }
  // }

  const renderContent = () => {

    const questionsList = questions.slice(0, numberOfQuestions)
    // console.log(questionsList)
    return (
      <div>
        {questionsList.map(question => {
          return (
            <div key={question.question_id}>
              <QuestionDetails question={question} /> <hr />
            </div>
          )
        })}
      </div>
    )

  }

  //rendering first two questions

  //need to refactor again, clicking More Questions only load additional two questions

  return (

    <div>
      <h3>QUESTIONS & ANSWERS</h3>
      {/* <p>{JSON.stringify(questions)}</p> */}
      <input
        style={{
          width: '90%',
          height: '50px',
          marginLeft: '1rem',
          display: 'flex',
          flexWrap: 'wrap',
          fontSize: '1rem'
        }}
        type="text"
        value={searchTerm}
        placeholder='Have a question? Search for answers...'
        onChange={e => setSearchTerm(e.target.value)}
      >
      </input>
      <br />
      <div>
        {renderContent()}
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '4rem',
        }}
      >
        <Button onClick={expandQuestions}>
          {/* {isQuestionListExpanded ? 'Collapse Questions' : 'More Questions'} */}
          {numberOfQuestions < questions.length ? 'More Questions' : 'Collapse Questions'}
        </Button>

        <AddQuestion />
      </div>

    </div >

  );
};


export default Questions;