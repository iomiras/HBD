import React, { useState } from 'react';

const Gratitude = ({ answers, setAnswers, onNext }) => {
  const hints = ["Учеба", "Опыт", "Друзья", "Возможности", "Личное развитие"];

  const handleHintClick = (index) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[index] = hints[index];
      return newAnswers;
    });
  };

  const handleChange = (index, value) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[index] = value;
      return newAnswers;
    });
  };

  return (
    <div>
      <h2>Назовите 5 вещей, за которые вы благодарны:</h2>
      {answers.map((answer, index) => (
        <div key={index}>
          <input
            type="text"
            value={answer}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder="Ваш ответ..."
          />
          <button onClick={() => handleHintClick(index)}>Подсказка</button>
        </div>
      ))}
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Gratitude;
