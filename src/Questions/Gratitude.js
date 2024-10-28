import React, { useState } from 'react';
import './Questions.css'
import BlossomingFlower4 from '../Flowers/BlossomingFlower4';

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
    <div className='QuestionForm'>
      <h2 className='question-text'>Назови 5 вещей, за которые ты благодарна:</h2>
      {answers.map((answer, index) => (
        <div key={index}>
          <input
            type="text"
            value={answer}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder="Ваш ответ..."
            className='AnswerInput'
          />
          <button className='hints-button button' onClick={() => handleHintClick(index)}>?</button>
        </div>
      ))}
      <button className='next-button button' onClick={onNext}>Дальше</button>
      <BlossomingFlower4/>
    </div>
  );
};

export default Gratitude;
