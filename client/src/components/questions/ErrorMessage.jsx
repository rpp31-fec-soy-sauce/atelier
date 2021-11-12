import React from 'react'

const ErrorMessage = ({ errors }) => {
  // console.log(Object.keys(errors))
  return (
    <div
    style={{textAlign: 'center'}}
    >
      <h4 style={{ color: 'red' }}>You must enter the following:</h4>
      {Object.keys(errors).map(type => <p key={errors[type]}>{errors[type]}</p>)}
    </div>
  )
}

export default ErrorMessage;