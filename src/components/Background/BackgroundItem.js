import styles from './BackgroundItem.module.css';
import Clock from '../Clock/Clock';

const BackgroundItem = () => {
  return (
    <div className={styles['background-item']}>
      <div className={styles['background-top']}></div>
      <div className={styles['background-mid']}>
        <Clock></Clock>
      </div>
      <div className={styles['background-bottom']}></div>


    </div>
  );
};

export default BackgroundItem