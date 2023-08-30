import { useWordContext } from '../context/useWordContext';

const Word = () => {
  const {
    word,
    hasFoundWinner,
    isGameOver,
    isLoading,
    isError,
    guessedLetters
  } = useWordContext();

  const hasRevealed = hasFoundWinner || isGameOver;

  if (isLoading) {
    return <p> Loading ...</p>
  }

  if (isError) {
    return <p> Something goes wrong. Please try again </p>
  }


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