import styles from './featuredSection.module.css';
import homeStyles from '../home.module.css';

export default function FeaturedSection({ featuredItems }) {
  return (
    <div className={styles.featuredSection}>
      <h2 className={styles.featuredSectionTitle}>Featured</h2>
      {featuredItems.map(item => {
        return(
          <div>
            <p>{item.name}</p>
            <img src={item.thumbnail_url}/>
          </div>
        )
      })}
    </div>
  )
}