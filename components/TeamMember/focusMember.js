import lavender from '../../public/images/portraits/fanny.jpg';
import styles from '../layout.module.scss';
import classes from '../../utils/classnames';

export default function focusMember({ name, pronouns, id, image, theaterRoles }) {
  console.log(image);
  return (
    <div className={classes(styles, 'focus-member')} id={id}>
      <img className={classes(styles, 'focus-member__image')} src={image} alt="" />
      <div className={classes(styles, 'focus-member__data')}>
        <p>{name}</p>
        <p>{pronouns}</p>
        <p>{theaterRoles.map((role) => role + ', ')}</p>
      </div>
    </div>
  )
}