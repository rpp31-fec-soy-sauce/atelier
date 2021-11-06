import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
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
  // console.log('QUESTIONS:', questions);

  const [numberOfQuestions, setNumberOfQuestions] = useState(2);


  const expandQuestions = () => {
    // console.log(questions.length)
    if (numberOfQuestions < questions.length) {
      questions.length - numberOfQuestions === 1 ? setNumberOfQuestions(numberOfQuestions + 1) : setNumberOfQuestions(numberOfQuestions + 2)
    } else {
      setNumberOfQuestions(2)
    }
  }


  const updateQuestions = () => {
    return (
      <Button onClick={expandQuestions}>
        {numberOfQuestions < questions.length ? 'More Questions' : 'Collapse Questions'}
      </Button>
    )
  }


  let renderContent = (
    <div
      style={{
        maxHeight: '50vh',
        padding: '15px',
        overflow: 'auto'
      }}
    >
      {questions
        .slice(0, numberOfQuestions)
        .map(question => {
          return (
            //test will return warning if set key={question.question_id}
            // <div key={question.question_id}>
            <div key={Math.random()}>
              <QuestionDetails question={question} /> <hr />
            </div>
          )
        })}
    </div >
  )


  //rendering first two questions

  //need to refactor again, clicking More Questions only load additional two questions

  return (
    <div>
      <h3>QUESTIONS & ANSWERS</h3>
      {/* <p>{JSON.stringify(questions)}</p> */}

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '1.5rem',
        }}
      >
        <input
          style={{
            marginLeft: '1rem',
            width: '90%',
            height: '50px',
          }}
          type="text"
          value={searchTerm}
          placeholder='Have a question? Search for answers...'
          onChange={e => setSearchTerm(e.target.value)}
        >
        </input>
        <FontAwesomeIcon icon={faSearch} size='lg' />

      </div>
      <div>
        {renderContent}
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '4rem',
        }}
      >
        {questions.length <= 2 ? null : updateQuestions()}
        <AddQuestion />
      </div>
    </div >

  );
};


// <Button onClick={expandQuestions}>
// {/* {numberOfQuestions < questions.length ? 'More Questions' : 'Collapse Questions'} */}

// </Button>



export default Questions;