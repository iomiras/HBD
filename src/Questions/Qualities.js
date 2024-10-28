import React, { useState } from 'react';
import './Questions.css'
import BlossomingFlower2 from '../Flowers/BlossomingFlower2';

const Qualities = ({ answers, setAnswers, onNext }) => {
  const hints = ["Ответственность", "Смелость", "Доброта", "Честность", "Умение поддержать"];

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
      <h2 className='question-text'>Назови 5 качеств, которые ты любишь в себе:</h2>
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
      <BlossomingFlower2/>
    </div>
  );
};

export default Qualities;
