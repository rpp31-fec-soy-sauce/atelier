import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadQuestions } from '../../store/apiActions';
import { selectQuestions } from '../../store/selectors';


// import QuestionsList from './QuestionsList.jsx';
// import SearchQuestions from './SearchQuestions.jsx';


import QuestionDetails from './QuestionDetails.jsx';
import AddQuestion from './AddQuestion.jsx';



const Questions = () => {

  const dispatch = useDispatch();

  useEffect(() => dispatch(loadQuestions()), []);

  const questions = useSelector(selectQuestions);

  const [questionsList, setQuestionsList] = useState([])

  //re-render once the questions are updated
  useEffect(() => {
    setQuestionsList(questions)
  }, [questions])


  const searchTerm = (term) => {

    if (term.length > 2) {

      const newList = questions.filter(question => question.question_body.toLowerCase().includes(term.toLowerCase()));
      setQuestionsList(newList);

    } else {
      setQuestionsList(questions)
    }

  }

  //   return (
  //     <div>

  //       <h2>Questions and Answers</h2>
  //       {/* <p>{JSON.stringify(questions)}</p> */}
  //       <div>
  //         {/* <SearchQuestions /> */}

  //         <input type="text" placeholder='Have a question? Search for answers...' onChange={e => searchTerm(e.target.value)}></input>

  //         <QuestionsList questions={questionsList} />

  //       </div>

  //     </div>
  //   );
  // };


  const [expandQuestions, setExpandQuestions] = useState(false);


  const moreQuestions = e => {
    if (expandQuestions === true) {
      setExpandQuestions(false);
      e.target.innerText = 'More Answered Questions';
    } else {
      setExpandQuestions(true);
      e.target.innerText = 'Collapse questions';
    }
  }

  const renderContent = () => {
    if (expandQuestions === false) {
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
        {/* <SearchQuestions /> */}

        <input type="text" placeholder='Have a question? Search for answers...' onChange={e => searchTerm(e.target.value)}></input>
      </div>
      <div>
        {renderContent()}
      </div>
      <div>
        {/* <button onClick={() => setExpandQuestions(expandQuestions === true ? false : true)}>More Answered Questions</button> */}
        <button onClick={e => moreQuestions(e)}>More Answered Questions</button>

      </div>
      <AddQuestion />

    </div>

  );
};


export default Questions;