
import styles from '../pages/galerie/galerie.module.scss';

export default function Picture({ picture, credits }) {
    const divStyle = {
        backgroundImage: `url(${picture.src})`,
    }
    const { galerie__images__photo, galerie__images__photo__credit } = styles;
  return (
    <div style={divStyle} className={galerie__images__photo}>
        <div className={galerie__images__photo__credit}>
            Crédits : {credits}
        </div>
    </div>
  )
}