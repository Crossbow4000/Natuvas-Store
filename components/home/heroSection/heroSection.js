import Link from 'next/link';

import styles from './heroSection.module.css';

export default function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroSectionElementsWrapper}>
        <h1 className={styles.heroSectionTitle}>Natuvas</h1>
        <h2 className={styles.heroSectionSubtitle}>Hang the beauty of nature on your wall.</h2>
        <Link className={styles.heroSectionButton} href={"/store"}>Shop All</Link>
      </div>
    </div>
  )
}