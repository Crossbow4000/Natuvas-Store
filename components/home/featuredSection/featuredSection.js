import styles from './featuredSection.module.css';
import ItemCard from '../featuredSection/itemCard/itemCard';

export default function FeaturedSection({ featuredItems }) {
  return (
    <div className={styles.featuredSection}>
      <h2 className={styles.featuredSectionTitle}>Featured</h2>
      <div className={styles.featuredSectionItemsContainer}>
        {featuredItems.map(item => {
          return <ItemCard itemName={item.name} image={item.image}/>
        })}
      </div>
    </div>
  )
}
