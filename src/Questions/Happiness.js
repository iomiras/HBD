import React, { useState } from 'react';
import './Questions.css'
import BlossomingFlower3 from '../Flowers/BlossomingFlower3';

const Happiness = ({ answers, setAnswers, onNext }) => {
  const hints = ["Время в Америке", "Путешествие", "Успех в учебе", "Новые знакомства", "Личное развитие"];

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
      <h2 className='question-text'>Что принесло тебе наибольшее счастье в этом году?</h2>
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
      <BlossomingFlower3/>
    </div>
  );
};

export default Happiness;
