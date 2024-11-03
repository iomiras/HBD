// Countdown.js
import './Countdown.css';

import React, { useState, useEffect } from 'react';

const Countdown = ({ onCountdownComplete }) => {
  const calculateTimeLeft = () => {
    const targetDate = new Date(Date.UTC(2024, 10, 7, 19, 0, 0)); // 8th November, 12 am UTC+5
    // const targetDate = new Date(Date.UTC(2024, 10, 3, 16, 50, 0)); // November 3rd, 9:50 pm UTC+5

    const now = new Date();
    const difference = targetDate - now;
    
    if (difference <= 0) {
      return null;
    }

    const formatTime = (time) => (time < 10 ? `0${time}` : time);

    return {
      days: formatTime(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: formatTime(Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: formatTime(Math.floor((difference / 1000 / 60) % 60)),
      seconds: formatTime(Math.floor((difference / 1000) % 60)),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!timeLeft) {
      onCountdownComplete(); // Trigger once countdown completes
      return;
    }
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeLeft, onCountdownComplete]);

  if (!timeLeft) {
    return null;
  }

  return (
    <div className="countdown-container">
      <p className='timer'>
        {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}
      </p>
    </div>
  );
};

export default Countdown;
