import styles from '../../pages/newsletter/news.module.scss';

export default function NewsletterResponse({ success, error }) {
  return (
    <div className={styles.newsletter__response}>
      {success !== '' && (
        <p className={styles.newsletter__response__success}>{success}</p>
      )}
      {error !== '' && (
        <p className={styles.newsletter__response__error}>{error}</p>
      )}
    </div>
  )
}