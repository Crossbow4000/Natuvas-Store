import styles from './welcomeSection.module.css';
import homeStyles from '../home.module.css';

export default function WelcomeSection() {
  return (
    <div className={styles.welcomeSection}>
      <h2 className={styles.welcomeSectionTitle}>Welcome</h2>
    </div>
  )
}