import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';



const AddQuestion = () => {

  return (
    <div>
      <label>Add A Question</label> <br />
      <input type='text' placeholder='Add question'/>
    </div>
  );
};

export default AddQuestion;