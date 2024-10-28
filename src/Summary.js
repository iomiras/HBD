import React from 'react';

const Summary = ({ accomplishments, qualities, happiness, gratitude }) => {
  return (
    <div>
      <h2>Поздравляем!</h2>
      <p>Вот что вы достигли и чем гордитесь:</p>
      <ul>
        {accomplishments.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>Ваши прекрасные качества:</p>
      <ul>
        {qualities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>Что сделало вас счастливой:</p>
      <ul>
        {happiness.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>За что вы благодарны:</p>
      <ul>
        {gratitude.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Смотрите, какой замечательный год у вас был!</h3>
    </div>
  );
};

export default Summary;
