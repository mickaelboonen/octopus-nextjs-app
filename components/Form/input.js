import styles from './form.module.scss';
import classes from '../../utils/classnames';

export default function Input({ error, register, constraint, type, label, name, placeholder, required, classname }) {
  return (
    <div className={styles.form__row}>
        <label
          className={classes(styles, 'form__row-label')}
          htmlFor={name}
        >
          {label}
        </label>
        <input
          id={name}
          placeholder={placeholder}
          type={type}
          className={classes(styles, 'form__row-input')}
          {...register(name, {
            ...required,
            ...constraint            
          })}
        />
        {error[name] && <p className={classes(styles, 'form__row-error')}>{error[name].message} </p>}
    </div>
  )
}