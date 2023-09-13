import styles from './itemCard.module.css';

export default function ItemCard({ itemImageURL, itemName }) {
  return (
    <div class={styles.itemCard}>
      <img src={itemImageURL} alt={"An image of " + itemName} class={styles.itemCardImage} />
      <p class={styles.itemCardName}>{itemName}</p>
      <button class={styles.itemCardButton}>Add To Cart</button>
    </div>
  )
}
