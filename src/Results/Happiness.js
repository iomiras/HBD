import React from 'react';
import './Results.css'; // Create this CSS file for styling

const Happiness = ({ happiness }) => {
  return (
    <div className='happiness result'>
      <p className='result-title happiness-title text'>Сила Источника</p>
      <p className='result-desc happiness-desc text'>
        Твоя величайшая сила — это Счастье, питающее тебя энергией и вдохновением. В этом году твою искру зажгли такие моменты, как:
      </p>
      <ol className='happiness-desc result-desc list'>
        {happiness.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      <p className='result-desc happiness-desc text'>
        Благодаря этим событиям твой дух становится крепче, и с такой силой ты готова преодолеть все, что встретится на пути.
      </p>
    </div>
  );
};

export default Happiness;
