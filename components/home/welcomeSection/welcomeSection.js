import styles from './welcomeSection.module.css';
import homeStyles from '../home.module.css';

export default function WelcomeSection() {
  return (
    <div className={styles.welcomeSection}>
      <h2 className={styles.welcomeSectionTitle}>Welcome</h2>
      <p className={styles.welcomeSectionParagraph}>
        Treat yourself to a high-quality canvas with a stunning nature print.​
        <br />
        <br />
        <br />
        Whatever part of nature you love, whether that's the ocean, a forest, or the mountains, our selection of over 100 high quality nature canvases is sure to have a print that will express your special place's beauty.
      </p>
    </div>
  )
}