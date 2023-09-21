import styles from './featuredSection.module.css';
import ItemCard from '../featuredSection/itemCard/itemCard';

export default function FeaturedSection({ featuredItems }) {
  return (
    <div className={styles.featuredSection}>
      <h2 className={styles.featuredSectionTitle}>Featured</h2>
      {featuredItems.map(item => {
        return <ItemCard itemName={item.name} thumbnailUrl={item.thumbnailUrl}/>
      })}
    </div>
  )
}