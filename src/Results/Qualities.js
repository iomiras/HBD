import React from 'react';
import './Results.css'; // Create this CSS file for styling

const Qualities = ({ qualities }) => {
  return (
    <div className='qualities result'>
      <p className='result-title qualities-title text'>Броня</p>
      <p className='result-desc qualities-desc text'>
        Твоя броня — это уверенность в себе и любовь к своим качествам, которые ты несешь с гордостью:
      </p>
      <ol className='qualities-desc result-desc list'>
        {qualities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      <p className='result-desc qualities-desc text'>
        В этой броне ты защищена от сомнений и всегда готова быть собой, поддерживая тех, кто тебе дорог.
      </p>
    </div>
  );
};

export default Qualities;
