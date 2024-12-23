import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Loading from './Loading/Loading';
import SuperheroSummary from './Superhero/SuperheroSummary';
import Happiness from './Results/Happiness';
import Qualities from './Results/Qualities';
import Gratitude from './Results/Gratitude';
import Accomplishments from './Results/Accomplishments';
import FinalMessage from './FinalMessage/FinalMessage';
import './Summary.css';
import './Transitions.css'; // Import the transition styles

const Summary = ({ accomplishments, qualities, happiness, gratitude }) => {
  const [currentComponent, setCurrentComponent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const components = [
    <Happiness happiness={happiness} />,
    <Qualities qualities={qualities} />,
    <Gratitude gratitude={gratitude} />,
    <Accomplishments accomplishments={accomplishments} />
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // 2-second loading
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    if (currentComponent < components.length) {
      setCurrentComponent(currentComponent + 1);
    } else {
      setShowFinalMessage(true); // Show final message after last component
    }
  };

  if (isLoading) return <Loading />;
  if (currentComponent === 0) return <SuperheroSummary onNext={() => setCurrentComponent(1)} />;
  if (showFinalMessage) return <FinalMessage />;

  return (
    <div className="summary-container">
      <TransitionGroup>
        <CSSTransition
          key={currentComponent}
          timeout={500}
          classNames="fade"
        >
          <div className="transition-component">
            {components[currentComponent - 1]} {/* Adjusted to load after SuperheroSummary */}
          </div>
        </CSSTransition>
      </TransitionGroup>
      <button className="results-next-button" onClick={handleNext} disabled={currentComponent === components.length && showFinalMessage}>
        {currentComponent === components.length ? 'Готово!' : 'Дальше'}
      </button>
    </div>
  );
};

export default Summary;
