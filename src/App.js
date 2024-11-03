import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Password from './Password';
import Countdown from './Countdown';
import Accomplishments from './Questions/Accomplishments';
import Qualities from './Questions/Qualities';
import Happiness from './Questions/Happiness';
import Gratitude from './Questions/Gratitude';
import Summary from './Summary';
import './App.css';
import './Transitions.css'; // Import the transition styles

export default function App() {
  const [step, setStep] = useState(-2);
  const [accomplishments, setAccomplishments] = useState(Array(5).fill(''));
  const [qualities, setQualities] = useState(Array(5).fill(''));
  const [happiness, setHappiness] = useState(Array(5).fill(''));
  const [gratitude, setGratitude] = useState(Array(5).fill(''));

  const goToNextStep = () => setStep(step + 1);

  const renderStepComponent = () => {
    switch (step) {
      case -2:
        return <Countdown onCountdownComplete={() => setStep(-1)} />;
      case -1:
        return <Password onCorrectPassword={() => setStep(0)} />;
      case 0:
        return <Accomplishments answers={accomplishments} setAnswers={setAccomplishments} onNext={goToNextStep} />;
      case 1:
        return <Qualities answers={qualities} setAnswers={setQualities} onNext={goToNextStep} />;
      case 2:
        return <Happiness answers={happiness} setAnswers={setHappiness} onNext={goToNextStep} />;
      case 3:
        return <Gratitude answers={gratitude} setAnswers={setGratitude} onNext={goToNextStep} />;
      case 4:
        return <Summary accomplishments={accomplishments} qualities={qualities} happiness={happiness} gratitude={gratitude} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <TransitionGroup>
          <CSSTransition
            key={step} // Triggers transition when `step` changes
            timeout={500}
            classNames="fade"
          >
            <div className="transition-container">
              {renderStepComponent()}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </header>
    </div>
  );
}
