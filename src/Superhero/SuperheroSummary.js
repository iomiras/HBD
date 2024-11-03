import React from 'react';
import './SuperheroSummary.css';

const SuperheroSummary = ({ onNext }) => {
  return (
    <div className="superhero-summary">
      <p className="result-title superhero-title">Ты Настоящий Супергерой!</p>
      <p className="result-desc super-desc">На основе твоих ответов, можно с уверенностью сказать, что в этом году ты была супергероем! Твои победы, качества, моменты счастья и благодарности вдохновляют и делают тебя поистине уникальной личностью.</p>
      <p className="result-desc super-desc">Продолжай быть собой, и пусть этот год станет лишь началом новых достижений и счастья.</p>

      <p className="result-desc super-desc">
        Эта <span style={{ fontWeight: 'bold' }}>песня</span> поистине отражает тебя и твое 19-летие.
        </p>

      <iframe allow="autoplay *; encrypted-media *;" 
      frameborder="0" height="250" 
      style={{ width: '90%', maxWidth: '600px', overflow: 'hidden', background: 'transparent' }} // Adjusted width
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/kz/album/supergirl/712743007?i=712743105"></iframe>


      <button className="superhero-next-button" onClick={onNext}>
        Перейти к разбору результатов
      </button>
    </div>
  );
};

export default SuperheroSummary;
