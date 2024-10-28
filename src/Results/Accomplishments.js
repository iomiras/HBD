import React from 'react';
import './Results.css'; // Create this CSS file for styling

const Accomplishments = ({ accomplishments }) => {
  return (
    <div className='accomplishments result'>
      <p className='result-title accomplishments-title text'>Твои Победы</p>
      <p className='result-desc accomplishments-desc text'>
        Каждое достижение для тебя — это победа, отражающая твою силу и решимость. За этот год ты:
      </p>
      <ol className='accomplishments-desc result-desc list'>
        {accomplishments.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      <p className='result-desc accomplishments-desc text'>
        Эти победы символизируют твою готовность покорять новые вершины, укрепляя тебя и приближая к воплощению всех твоих мечтаний.
      </p>
    </div>
  );
};

export default Accomplishments;
