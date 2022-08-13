
import styles from '../pages/galerie/galerie.module.scss';

export default function Picture({ id, url, credits, handler }) {

    const { galerie__images__photo, galerie__images__photo__credit } = styles;

  return (
    <div style={{'backgroundImage': `url(http://localhost:8000/${url})`}} className={galerie__images__photo} onClick={() => { handler(id)}}>
        <div className={galerie__images__photo__credit}>
            Crédits : {credits}
        </div>
    </div>
  )
}