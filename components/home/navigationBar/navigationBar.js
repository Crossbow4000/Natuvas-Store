import Link from 'next/link';

import styles from './navigationBar.module.css';

export default function NavigationBar() {
  return (
    <div className={styles.navigationBar}>
      <Link className={styles.navigationBarTitle} href={"/"}>Natuvas</Link>
    </div>
  )
}
