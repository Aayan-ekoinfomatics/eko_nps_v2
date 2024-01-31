import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

  // Format the time in HH:mm:ss format
  const formattedTime = currentTime.toLocaleTimeString();

  // Format the date in a readable format (e.g., January 29, 2024)
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
