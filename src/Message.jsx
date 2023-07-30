import React from 'react'

const Message = ({ 
  hasFoundWinner,
  isGameOver,
  onClickNextButton
}) => {

  return (
    <div className='message-container'>

      <p className='message'>
        Please press "Enter" to start next word or click this button
      </p>
      <button 
        className='next'
        onClick={onClickNextButton}
      >
        Next Word
      </button>
      <p className={`win ${hasFoundWinner ? 'visible' : 'hidden'}`}>Congratulations</p>
      <p className={`lose ${!hasFoundWinner && isGameOver ? 'visible' : 'hidden'}`}>Too bad. Try Again</p>
    </div>
  )
}

export default Message;
