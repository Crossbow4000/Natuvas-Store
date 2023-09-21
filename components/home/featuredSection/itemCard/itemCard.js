import styles from './itemCard.module.css';

export default function ItemCard({ itemName, thumbnailUrl }) {
  return (
    <div className={styles.itemCard}>
      <div className={styles.itemCardImage} style={{backgroundImage: `url(${thumbnailUrl})`}} ></div>
      <p className={styles.itemCardName}>{itemName}</p>
    </div>
  )
}
