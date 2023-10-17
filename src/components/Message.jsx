import { memo, useMemo } from 'react';
import { useWordContext } from '../context/useWordContext';

const Message = () => {
  const {
    hasFoundWinner,
    isGameOver,
    handleNextButtonClick
  } = useWordContext();

  const message = useMemo(() => {
    if (hasFoundWinner) {
      return 'Congratulations';
    }

    if (!hasFoundWinner && isGameOver) {
      return 'Too bad. Try Again';
    }
    
  }, [hasFoundWinner, isGameOver]);

  

  return (
    <div className='message-container'>
      <p className='prompt'>
        Please press "Enter" to start next word or click this button
      </p>
      <button 
        className='next'
        onClick={handleNextButtonClick}
      >
        Next Word
      </button>
      <p className='message'>{message}</p>
    </div>
  )
}

export default Message;
