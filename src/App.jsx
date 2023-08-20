import { useCallback, useEffect, useMemo, useState } from 'react';
import Drawing from './Drawing';
import Word from './Word';
import Keyboard from './Keyboard';
import Message from './Message';
import './App.css';


function App() {
  const [word, setWord] = useState('');
  
  const [guessedLetters, setGuessedLetters] = useState(new Set());

  const [correctLetters, incorrectLetters, isGameOver] = useMemo(() => {
    const wordSet = new Set(word);
    const correctLetters = new Set();
    const incorrectLetters = new Set();

    for (const guessLetter of guessedLetters) {
      if (wordSet.has(guessLetter)) {
        correctLetters.add(guessLetter);
      } else {
        incorrectLetters.add(guessLetter);
      }
    }
    const isGameOver = incorrectLetters.size >= 6;
    
    return [correctLetters, incorrectLetters, isGameOver];
  }, [guessedLetters]);

  const hasFoundWinner = useMemo(() => {
    if (word === '') {
      return false;
    }
    
    for (let letter of word) {
      if (!guessedLetters.has(letter)) {
        return false;
      }
    }
    return true;
  }, [guessedLetters]);

  const addGuessedLetter = useCallback((letter) => {
    if (guessedLetters.has(letter) || isGameOver || hasFoundWinner) {
      return;
    }
    setGuessedLetters((prevGuessedLetters) => {
      return new Set([...prevGuessedLetters, letter]);
    })
    
  }, [guessedLetters, isGameOver, hasFoundWinner]);

  const setRandomWord = () => {
    fetch('https://random-word-api.herokuapp.com/word')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Invalid Https request');
        }
        return res.json();

      }).then((data) => {
        const [word] = data;
        setWord(word);
        
      }).catch((err) => {
        console.error(err);
      })
  }

  useEffect(() => {
    setRandomWord();
  }, []);

  // Handle Key(letters) Press  Event
  useEffect(() => {
    const handler = (e) => {
      const { key } = e;
      // only a to z is valid
      if (!key.match(/^[a-z]$/) && !key.match(/^[A-Z]$/)) {
        return;
      }

      addGuessedLetter(key.toLowerCase());
    }

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    }
  }, [guessedLetters]);


  // Handle Key(Enter) Press Event - get new word to start new game
  useEffect(() => {
    const handler = (e) => {
      const { key } = e;
      if (key !== 'Enter') {
        return;
      };

      setRandomWord();
      setGuessedLetters(new Set());
    }

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    }
  }, [])


  const handleNextButtonClick = () => {
    setRandomWord();
    setGuessedLetters(new Set());
  };

  return (
    <div className='container'>
      <Drawing
        numOfIncorrectGuess={incorrectLetters.size} 
      />

      <Word
        word={word}
        hasRevealed={hasFoundWinner || isGameOver}
        guessedLetters={guessedLetters}
      />
      
      <Keyboard
        isDisabled={ hasFoundWinner || isGameOver}
        onClickKey={addGuessedLetter}
        activeKeys={correctLetters}
        inactiveKeys={incorrectLetters} 
      />
      <Message
        hasFoundWinner={hasFoundWinner} 
        isGameOver={isGameOver}
        onClickNextButton={handleNextButtonClick}
      />
    </div>
  )
}

export default App;
