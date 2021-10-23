import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadQuestions } from '../../store/apiActions';
import { selectQuestions } from '../../store/selectors';

const Questions = () => {

  const dispatch = useDispatch();
  useEffect(() => dispatch(loadQuestions()), []);

  const questions = useSelector(selectQuestions);

  return (
    <div>
      <h1>Questions</h1>
      <p>{JSON.stringify(questions)}</p>
    </div>
  );
};

export default Questions;