import styles from './itemCard.module.css';
import homeStyles from '../../home.module.css';

export default function ItemCard({ itemName, thumbnailUrl }) {
  return (
    <div>
      <img src={thumbnailUrl} alt={`An image of ${itemName}`} />
      <p>{itemName}</p>
    </div>
  )
}