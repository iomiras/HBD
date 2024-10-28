import React from 'react';
import './Results.css'; // Create this CSS file for styling

const Gratitude = ({ gratitude }) => {
  return (
    <div className='gratitude result'>
      <p className='result-title gratitude-title text'>Свет Вдохновения</p>
      <p className='result-desc gratitude-desc text'>
        Твой Свет Вдохновения — это благодарность за те моменты и опыт, что сделали тебя сильнее. Ты осознаешь, что на твоем пути встречались:
      </p>
      <ol className='gratitude-desc result-desc list'>
        {gratitude.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      <p className='result-desc gratitude-desc text'>
        Этот свет ведет тебя вперед и освещает твой путь, направляя к новым свершениям и радостям, которые ты приносишь в мир.
      </p>
    </div>
  );
};

export default Gratitude;
