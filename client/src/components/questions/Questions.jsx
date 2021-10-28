import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadQuestions } from '../../store/apiActions';
import { selectQuestions } from '../../store/selectors';


import QuestionDetails from './QuestionDetails.jsx';
import AddQuestion from './AddQuestion.jsx';



const Questions = () => {

  const dispatch = useDispatch();

  useEffect(() => dispatch(loadQuestions()), []);

  const questions = useSelector(selectQuestions);
  // console.log('Questions', questions)

  const [questionsList, setQuestionsList] = useState([])

  //re-render once the questions are updated
  useEffect(() => {
    setQuestionsList(questions)
  }, [questions])



  //refactor to controlled input!
  const [searchTerm, setSearchTerm] = useState('');


  //this func needs to be refactored after selectQuestions is updated
  const searchQuestion = (term) => {

    setSearchTerm(term);

    if (term.length > 2) {

      //this filter function will be refactored to the selector
      const newList = questions.filter(question => question.question_body.toLowerCase().includes(term.toLowerCase()));
      setQuestionsList(newList);

    } else {
      setQuestionsList(questions)
    }

  }


  const [isQuestionListExpanded, setIsQuestionListExpanded] = useState(false);


  const expandQuestions = e => {
    if (isQuestionListExpanded === true) {
      setIsQuestionListExpanded(false);
      // e.target.innerText = 'More Answered Questions';
    } else {
      setIsQuestionListExpanded(true);
      // e.target.innerText = 'Collapse questions';
    }
  }

  const renderContent = () => {
    if (!isQuestionListExpanded) {
      return (
        <div>
          {questionsList[0] ? <QuestionDetails question={questionsList[0]} /> : ''} <hr />
          {questionsList[1] ? <QuestionDetails question={questionsList[1]} /> : ''}  <hr />
        </div>
      )
    } else {
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
  }

  //rendering first two questions
  return (

    <div>
      <h2>Questions and Answers</h2>
      {/* <p>{JSON.stringify(questions)}</p> */}
      <div>
        <input
          type="text"
          value={searchTerm}
          placeholder='Have a question? Search for answers...'
          onChange={e => searchQuestion(e.target.value)}
        >
        </input>
      </div>
      <div>
        {renderContent()}
      </div>
      <div>
        <button
          onClick={e => expandQuestions(e)}>
          {isQuestionListExpanded ? 'Collapse Questions' : 'More Questions'}
        </button>
      </div> <br/>

      <AddQuestion />

    </div>

  );
};


export default Questions;