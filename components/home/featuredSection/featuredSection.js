import styles from './featuredSection.module.css';
import homeStyles from '../home.module.css';

export default function FeaturedSection({ featuredItems }) {
  return (
    <div className={styles.featuredSection}>
      <h2 className={styles.featuredSectionTitle}>Featured</h2>
      <p className={styles.p}>{featuredItems[0].name}</p>
      <p className={styles.p}>{featuredItems[1].name}</p>
    </div>
  )
}