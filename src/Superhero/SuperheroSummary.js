import React from 'react';
import './SuperheroSummary.css';

const SuperheroSummary = ({ onNext }) => {
  return (
    <div className="superhero-summary">
      <p className="result-title superhero-title">Ты Настоящий Супергерой!</p>
      <p className="result-desc super-desc">На основе твоих ответов, можно с уверенностью сказать, что в этом году ты была супергероем! Твои победы, качества, моменты счастья и благодарности вдохновляют и делают тебя поистине уникальной личностью.</p>
      <p className="result-desc super-desc">Продолжай быть собой, и пусть этот год станет лишь началом новых достижений и счастья.</p>
      
      <iframe
        allow="autoplay *; encrypted-media *;"
        frameBorder="0"
        height="300" // Adjusted height for a more compact view
        style={{ width: '90%', maxWidth: '600px', overflow: 'hidden', background: 'transparent' }} // Adjusted width
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/kz/playlist/super-hero/pl.u-MDAWk9juAmRqqRE"
        title="Superhero Playlist"
      ></iframe>


      <button className="superhero-next-button" onClick={onNext}>
        Перейти к разбору результатов
      </button>
    </div>
  );
};

export default SuperheroSummary;
