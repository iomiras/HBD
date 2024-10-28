import React, { useEffect, useRef, useState } from 'react';
import './Hangman.css';

function HangmanGame() {
  const russianAlphabet = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];
  const word = "аэропорт".toUpperCase().split('');
  const [guesses, setGuesses] = useState([]);
  const [lives, setLives] = useState(10);
  const [correctGuesses, setCorrectGuesses] = useState(Array(word.length).fill('_'));
  const [message, setMessage] = useState(""); // State for game status message
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!correctGuesses.includes('_')) {
      setMessage('You win! 🎉');
    } else if (lives <= 0) {
      setMessage('Game over! Try again.');
    } else {
      setMessage(""); // Clear message when the game is ongoing
    }
  }, [correctGuesses, lives]);

  useEffect(() => {
    drawHangman();
  }, [lives]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const drawHangman = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing

    const parts = [
      () => { ctx.moveTo(150, 200); ctx.lineTo(300, 200); ctx.stroke(); }, // base
      () => { ctx.moveTo(225, 200); ctx.lineTo(225, 50); ctx.stroke(); }, // pole
      () => { ctx.moveTo(225, 50); ctx.lineTo(275, 50); ctx.stroke(); },   // top
      () => { ctx.moveTo(275, 50); ctx.lineTo(275, 75); ctx.stroke(); },   // rope
      () => { ctx.beginPath(); ctx.arc(275, 90, 15, 0, Math.PI * 2); ctx.stroke(); }, // head
      () => { ctx.moveTo(275, 105); ctx.lineTo(275, 150); ctx.stroke(); }, // body
      () => { ctx.moveTo(275, 110); ctx.lineTo(250, 130); ctx.stroke(); }, // left arm
      () => { ctx.moveTo(275, 110); ctx.lineTo(300, 130); ctx.stroke(); }, // right arm
      () => { ctx.moveTo(275, 150); ctx.lineTo(250, 180); ctx.stroke(); }, // left leg
      () => { ctx.moveTo(275, 150); ctx.lineTo(300, 180); ctx.stroke(); }  // right leg
    ];

    for (let i = 0; i < parts.length - lives; i++) {
      parts[i]?.();
    }
  };

  const handleGuess = (letter) => {
    if (guesses.includes(letter) || lives <= 0 || !correctGuesses.includes('_')) return;
    setGuesses([...guesses, letter]);

    if (word.includes(letter)) {
      const updatedGuesses = correctGuesses.map((guess, index) => (word[index] === letter ? letter : guess));
      setCorrectGuesses(updatedGuesses);
    } else {
      setLives(lives - 1);
    }
  };

  const resetGame = () => {
    setGuesses([]);
    setLives(10);
    setCorrectGuesses(Array(word.length).fill('_'));
    setMessage(""); // Clear the message on reset
    clearCanvas(); // Clear the canvas on reset
  };

  return (
    <div className="hangman-wrapper">
      <h1>Игра Виселица</h1>
      <p>Угадайте слово: {correctGuesses.join(' ')}</p>
      <p>Осталось жизней: {lives}</p>
      <canvas ref={canvasRef} width="400" height="250" className="hangman-canvas"></canvas>
      <div className="alphabet">
        {russianAlphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => handleGuess(letter)}
            disabled={guesses.includes(letter)}
            className={`letter ${guesses.includes(letter) ? 'guessed' : ''}`}
          >
            {letter}
          </button>
        ))}
      </div>
      {message && <p className="message">{message}</p>} {/* Display the message */}
      <button onClick={resetGame} className="reset-button">Начать заново</button>
    </div>
  );
}

export default HangmanGame;
