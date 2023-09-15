import styles from './heroSection.module.css';
import homeStyles from '../home.module.css';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroSectionElementsWrapper}>
        <h1 className={styles.heroSectionTitle}>Natuvas</h1>
        <h2 className={styles.heroSectionSubtitle}>Hang the beauty of nature on your wall.</h2>
        <Link className={styles.heroSectionButton} href="/store">Shop All</Link>
      </div>
    </div>
  )
}