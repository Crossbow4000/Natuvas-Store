import './itemCard.css';

export default function ItemCard({ itemImageURL, itemName }) {
  return (
    <div>
      <img src={itemImageURL} />
    </div>
  )
}