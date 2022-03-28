import styles from './layout.module.css'

export default function PageTitle({ children }) {
  return (
    <div className={styles.pages__titles}>
        <h2 className={styles.pages__titles__main}>{children}</h2>
    </div>
  )
}