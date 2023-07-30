import React from 'react'

const Word = ({ word, guessedLetters, hasRevealed }) => {
  // console.log('has revealed ', hasRevealed);
  return (
    <div className='word'>
      
      {word.split('').map((letter, index) => {

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