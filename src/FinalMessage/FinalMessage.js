// FinalMessage.js
import React from 'react';
import ConfettiEffect from '../ConfettiEffect';
import './FinalMessage.css';

const FinalMessage = () => {
  return (
    <div className="final-message-container">
      <ConfettiEffect /> {/* Confetti effect component */}
      <div className="letter-content">
        <p className="letter-title">HBD, Sabinka</p>
        <p className="letter-body">
          Туған күніңмен құттықтаймын! Саған тек жақсылықты тілеймін. Өмірде қандай қиын жағдайлар болса да, ешқашан берілме!
        </p>
        <p className="letter-body">
          Несмотря, что мы знакомы вот уже <strong>ровно</strong> 7 месяцев, я каждый раз с радостью жду разговора с тобой. 
          Хоть и не получается это делать каждый день из-за расстояния, я рад, что ты есть у меня.
        </p>
        <p className="letter-body">Жақсы көрем сені, <strong>Supergirl</strong>!</p>
        <p className="letter-signature">-М</p>
        <p className="letter-ps">
          P.S. Надеюсь, тебе понравились цветы, а главный подарок я вручу лично.
        </p>
      </div>
    </div>
  );
};

export default FinalMessage;
