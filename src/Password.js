import React, { useState } from 'react';
import './Password.css';
import BlossomingFlower1 from './Flowers/BlossomingFlower1';

export default function Password({ onCorrectPassword }) {
  const [passwordInput, setPasswordInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const correctPassword1 = 'белоснежка';
  const correctPassword2 = 'snowwhite';
  const correctPassword3 = 'snow white';

  const handlePasswordSubmit = () => {
    if (passwordInput === correctPassword1 || passwordInput === correctPassword2 || 
        passwordInput === correctPassword3) {
      onCorrectPassword();
    } else {
      alert('Попробуй снова!');
    }
  };

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  return (
    <div className="password-screen">
        <div className='Form'>
            <h2 className='passwordText'>Введите пароль!</h2>
            <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value.toLowerCase())}
                placeholder="Пароль"
                className="password-input"
            />
            <button onClick={handlePasswordSubmit} className="start-button">
                Ответить
            </button>
            <button onClick={toggleHint} className="hint-button">
                {showHint ? 'Скрыть подсказку' : 'Показать подсказку'}
            </button>
            {showHint && <p className="hint-text">Принцесса</p>}
        </div>
      {/* <BlossomingFlower1/> */}
    </div>
  );
}
