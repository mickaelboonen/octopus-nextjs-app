import { useEffect } from 'react';
import styles from './form.module.scss';
import classes from '../../utils/classnames';

export default function Textarea({ register, name, label, placeholder, required, constraint, error }) {
  const defineRows = () => {
    const bodyWidth = document.querySelector('body').offsetWidth;
    const textareaElement = document.querySelector('textarea');
    if (bodyWidth < 500) {
      textareaElement.rows = '3';
    }
    else {
      textareaElement.rows = '5';
    }
  }
  useEffect(() => {
    defineRows();
  }, [])
  return (
    <div className={styles.form__row}>
        <label
          className={classes(styles, 'form__row-label')}
          htmlFor={name}
        >
          {label}
        </label>
        <textarea
          id={name}
          placeholder={placeholder}
          type="text"
          rows="3"
          className={classes(styles, 'form__row-textarea')}
          {...register(name, {
            ...required,
            ...constraint            
          })}
        />
        {error[name] && <p className={classes(styles, 'form__row-error')}>{error[name].message} </p>}
    </div>
  );
};