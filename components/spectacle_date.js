import styles from '../pages/agenda/agenda.module.scss';
import Link from 'next/link'

export default function SpectacleDate({ date, show, showUrl, place, placeWebsite, description }) {
    const { spectacleDate,
      spectacleDate__currentDate,
      spectacleDate__link,
      spectacleDate__show,
      spectacleDate__place,
      spectacleDate__description,
 } = styles;
  return (
    <div className={spectacleDate}>
      <p className={spectacleDate__currentDate}>
        {date}
      </p>
      <Link href={showUrl}>
        <a className={`${spectacleDate__link} ${spectacleDate__show}`}>
          {show}
        </a>
      </Link>
      à 
      <span className={spectacleDate__place}>{place}</span>
      <div className={spectacleDate__description}>
        <Link href={placeWebsite}>
          <a className={spectacleDate__link}>
            {description}
          </a>
        </Link>
      </div >
    </div>
  )
}