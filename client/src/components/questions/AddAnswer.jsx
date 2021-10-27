import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


//Need to add answerer name, time

const AddAnswer = () => {

  return (
    <div>
      <label>Add An Answer</label> <br />
      <input type='text' placeholder='Add answer'/>
    </div>
  );
};

export default AddAnswer;