import styles from './itemCard.module.css';
import homeStyles from '../../home.module.css';

export default function ItemCard({ itemName, thumbnailUrl }) {
  return (
    <div className={styles.itemCard}>
      <img className={styles.itemCardImage} src={thumbnailUrl} alt={`An image of ${itemName}`} />
      <p className={styles.itemCardName}>{itemName}</p>
    </div>
  )
}