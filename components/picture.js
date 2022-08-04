
import styles from '../pages/galerie/galerie.module.scss';

export default function Picture({ url, credits }) {
    // console.log(picture);
    const divStyle = {
        backgroundImage: `url(http://localhost:8000/${url})`,
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