import React, { useEffect, useState } from 'react';

const Timer = ({ time, onTimeOut }) => {
  const [counter, setCounter] = useState(time);

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      onTimeOut();
    }
    return () => clearInterval(timer);
  }, [counter, onTimeOut]);

  return <div>Tempo restante: {counter} segundos</div>;
};

export default Timer;
