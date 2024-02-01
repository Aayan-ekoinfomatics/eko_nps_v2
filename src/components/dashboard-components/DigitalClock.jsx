import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className='w-full max-w-[250px] flex flex-col items-end'>
      <p className='text-3xl font-[500] text-gray-800'>{formattedTime}</p>
      <p className='text-lg font-[500] text-gray-800'>{formattedDate}</p>
    </div>
  );
};

export default DigitalClock;
