import styles from './navigationBar.module.css';
import homeStyles from '../home.module.css';

export default function NavigationBar() {
  return (
    <div className={styles.navigationBar}>
      <h1 className={styles.navigationBarTitle}>Natuvas</h1>
    </div>
  )
}
