// ConfettiEffect.js
import React, { useEffect, useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

const ConfettiEffect = () => {
  const { width, height } = useWindowSize();
  const [confettiBursts, setConfettiBursts] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Add a new burst to the array
      setConfettiBursts((prev) => [
        ...prev,
        { id: Date.now() }, // Give each burst a unique ID
      ]);
    }, 1500); // Trigger every 2 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  // Array of emojis to use as confetti
//   const emojiArray = ["🎉", "🎂", "🎈", "🎊", "🎁", "🍰", "🥳", "🛩️"];

  return (
    <>
      {confettiBursts.map((burst) => (
        <Confetti
          key={burst.id} // Use unique ID for each burst
          width={width}
          height={height}
          recycle={false} // Do not recycle, create new confetti every time
          numberOfPieces={900}
          gravity={0.06}
        //   drawShape={(ctx) => {
        //     const emoji = emojiArray[Math.floor(Math.random() * emojiArray.length)];
        //     ctx.font = "30px serif";
        //     ctx.fillText(emoji, Math.random() * width, Math.random() * height);
        //   }}
        />
      ))}
    </>
  );
};

export default ConfettiEffect;
