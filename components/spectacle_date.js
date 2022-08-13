import styles from '../pages/agenda/agenda.module.scss';
import Link from 'next/link'

export default function SpectacleDate({ datetime, placeName, placeUrl, description }) {
    const { spectacleDate,
      spectacleDate__currentDate,
      spectacleDate__link,
      spectacleDate__show,
      spectacleDate__place,
      spectacleDate__description,
 } = styles;
 
 const date = new Date(datetime).toLocaleDateString();
 
  return (
    <div className={spectacleDate}>
      <p className={spectacleDate__currentDate}>
        {date}
      </p>
      <Link href={placeUrl}>
        <a className={`${spectacleDate__link} ${spectacleDate__show}`}>
          VIOLENTES
        </a>
      </Link>
      à 
      <span className={spectacleDate__place}>{placeName}</span>
      <div className={spectacleDate__description}>
        <Link href={placeUrl}>
          <a className={spectacleDate__link}>
            {description !== undefined ? description : 'Lien vers la salle pour réserver les tickets'}
          </a>
        </Link>
      </div >
    </div>
  )
}