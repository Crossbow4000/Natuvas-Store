import styles from './splashText2.module.css';
import homeStyles from '../home.module.css';

export default function SplashText2() {
  return (
    <div className={styles.splashText2}>
      <div className={styles.splashText2Image}></div>
      <div className={styles.splashText2TextContainer}>
        <h2 className={styles.splashText2Text}>
          High
          <br />
          Quality
        </h2> 
      </div>
    </div>
  )
}