import { useWordContext } from '../context/useWordContext';

const Word = () => {
  const {
    word,
    hasFoundWinner,
    isGameOver,
    guessedLetters
  } = useWordContext();

  const hasRevealed = hasFoundWinner || isGameOver;

  return (
    <div className='word'>
      {word?.split('').map((letter, index) => {
        const isVisible = guessedLetters.has(letter) || hasRevealed;
        const isRed = !guessedLetters.has(letter) && hasRevealed;
        const letterClassName = `letter ${isVisible ? 'visible' : 'hidden'} ${isRed ? 'red' : 'black'}`;

        return (
          <span className='letter-container' key={index}>
            <span className={letterClassName}>
              {letter}
            </span>
          </span>
        )
      })}
    </div>
  )
}

export default Word