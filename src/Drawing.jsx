import React from 'react'
const bodyParts = ['head', 'body',  'left-arm', 'right-arm', 'left-leg', 'right-leg'];

const Drawing = ({ numOfIncorrectGuess }) => {
  
  return (
    <div className='drawing-container'>
      {bodyParts.slice(0, numOfIncorrectGuess).map((bodyPart, i) => {
        return <div key={i} className={`drawing-${bodyPart}`} />
      })}
      <div className='drawing-left' />
      <div className='drawing-top' />
      <div className='drawing-vertical' />
      <div className='drawing-base' />
    </div>
  )
}

export default Drawing
