// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';



// const AddQuestion = () => {

//   return (
//     <div>
//       <label>Add A Question</label> <br />
//       <input type='text' placeholder='Add question' />
//     </div>
//   );
// };

// export default AddQuestion;



import React, { useState } from 'react'
import Modal from './Modal.jsx'

const AddQuestion = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }


  const renderContent = () => {

  }




  return (
    <div>
      <button onClick={openModal}>Add A Question</button>
      {showModal && <Modal closeModal={closeModal} />}
      {/* <div>
        <label>Add A Question</label> <br />
        <input type='text' placeholder='Add question' />
      </div> */}
    </div>
  )
}

export default AddQuestion;
