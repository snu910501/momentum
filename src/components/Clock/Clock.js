import { useRef, useState } from 'react';
import styles from './Clock.module.css';

const Clock = () => {

  const [time, setTime] = useState(getClock());

  function getClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    return `${hour}:${minute}`
  };

  function getClockAuto() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    console.log('hi');
    setTime(`${hour}:${minute}`)
  };

  setInterval(getClockAuto, 1000);

  return (
    <div className={styles.clock}>
      <div>
        {time}
      </div>
      <div className={styles.text}>
        Good Morning, Have a nice day
      </div>
    </div>
  );
};

export default Clock;