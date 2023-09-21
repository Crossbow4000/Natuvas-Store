import styles from './itemCard.module.css';

export default function ItemCard({ itemName, image }) {
  return (
    <div className={styles.itemCard}>
      <div className={styles.itemCardImage} style={{backgroundImage: `url(${image})`}} ></div>
      <p className={styles.itemCardName}>{itemName}</p>
    </div>
  )
}
