import styles from './_member.module.scss';
import classes from '../../utils/classnames';

console.log(styles);

export default function focusMember({ name, pronouns, id, image, description, theaterRoles }) {
  return (
    <div className={classes(styles, 'focus-member')} id={id}>
      <img className={classes(styles, 'focus-member__image')} src={image} alt="" />
      <div className={classes(styles, 'focus-member__data')}>
        <p><span className={classes(styles, 'focus-member__data-name')}>{name}</span> ( <span className={classes(styles, 'focus-member__data-pronouns')}>{pronouns}</span> )</p>
        <p className={classes(styles, 'focus-member__data-roles')}>{theaterRoles.map((role) => role + ', ')}</p>
        <p className={classes(styles, 'focus-member__data-description')}>{description}</p>
      </div>
    </div>
  )
}