import styles from './layout.module.css'

export default function PageSubtitle({ children }) {
  return (
    <div className={styles.pages__titles}>
      <h3 className={styles.pages__titles__subtitle}>{children}</h3>
    </div>
  )
}