import styles from './itemCard.module.css';

export default function ItemCard({ itemImageURL, itemName }) {
  return (
    <div class={style.itemCard}>
      <img src={itemImageURL} alt={"An image of " + itemName} class={style.itemCardImage} />
      <p class={style.itemCardName}>{itemName}</p>
      <button class={style.itemCardButton}>Add To Cart</button>
    </div>
  )
}