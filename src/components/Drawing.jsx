import { useWordContext } from '../context/useWordContext';
import BODY_PARTS from '../utils/body';

const Drawing = () => {
  const {
    numOfIncorrectGuess
  } = useWordContext();

  return (
    <div className='drawing-container'>
      {BODY_PARTS.slice(0, numOfIncorrectGuess).map((bodyPart, i) => {
        return <div key={i} className={`drawing-${bodyPart}`} />
      })}
      <div className='drawing-left' />
      <div className='drawing-top' />
      <div className='drawing-vertical' />
      <div className='drawing-base' />
    </div>
  )
}

export default Drawing;
