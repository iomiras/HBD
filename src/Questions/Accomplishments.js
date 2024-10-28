import React from 'react';
import './Questions.css'
import BlossomingFlower1 from '../Flowers/BlossomingFlower1';

const Accomplishments = ({ answers, setAnswers, onNext }) => {
  const hints = ["Участвовала в исследований", "Успешно съездила в Америку", "Научилась новому навыку", "Помогла друзьям", "Достигла личной цели"];

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
      <h2 className='question-text'>Назови 5 достижений, которыми ты гордишься в этом году:</h2>
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
      <button onClick={onNext} className='next-button button'>Дальше</button>
      <BlossomingFlower1/>
    </div>
  );
};

export default Accomplishments;
