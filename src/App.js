// App.js
import React, { useState } from 'react';
import Password from './Password';
import Accomplishments from './Questions/Accomplishments';
import Qualities from './Questions/Qualities';
import Happiness from './Questions/Happiness';
import Gratitude from './Questions/Gratitude';
import Summary from './Summary';
import './App.css';

export default function App() {
  const [step, setStep] = useState(-1); // Start with the password screen
  const [accomplishments, setAccomplishments] = useState(Array(5).fill(''));
  const [qualities, setQualities] = useState(Array(5).fill(''));
  const [happiness, setHappiness] = useState(Array(5).fill(''));
  const [gratitude, setGratitude] = useState(Array(5).fill(''));

  const goToNextStep = () => setStep(step + 1);

  return (
    <div className="App">
      <header className="App-header">
        {step === -1 && <Password onCorrectPassword={() => setStep(0)} />}
        {step === 0 && (
          <Accomplishments answers={accomplishments} setAnswers={setAccomplishments} onNext={goToNextStep} />
        )}
        {step === 1 && (
          <Qualities answers={qualities} setAnswers={setQualities} onNext={goToNextStep} />
        )}
        {step === 2 && (
          <Happiness answers={happiness} setAnswers={setHappiness} onNext={goToNextStep} />
        )}
        {step === 3 && (
          <Gratitude answers={gratitude} setAnswers={setGratitude} onNext={goToNextStep} />
        )}
        {step === 4 && (
          <Summary accomplishments={accomplishments} qualities={qualities} happiness={happiness} gratitude={gratitude} />
        )}
      </header>
    </div>
  );
}
