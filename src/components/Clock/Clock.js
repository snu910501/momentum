import { useRef, useState } from 'react';
import styles from './Clock.module.css';

const Clock = () => {

  const [time, setTime] = useState(getClock());
  const [amPm, setAmPm] = useState('Good Morning')

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
    setTime(`${hour}:${minute}`)
  };

  function getAmPm() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    if(hour >= 12) {
      setAmPm('Good Afternoon');
    }
  }

  setInterval(getClockAuto, 10000);
  setInterval(getAmPm, 10000);

  return (
    <div className={styles.clock}>
      <div>
        {time}
      </div>
      <div className={styles.text}>
        {amPm} Have a nice day
      </div>
    </div>
  );
};

export default Clock;