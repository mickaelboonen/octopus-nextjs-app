import styles from './footer.module.scss';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Fb from '../public/images/facebook.svg';

export default function Footer() {
    const {
      register,
      handleSubmit,
      formState: {
        errors,
      },
    } = useForm();
    const onSubmit = (data) => {
      localStorage.setItem('email', data);
      const newsletterElement = document.querySelector('#newsletter');
      newsletterElement.dataset.email = data;
      router.push('./newsletter');
    };
  const {
      footer,
      footer__nav,
      footer__nav__form,
      footer__nav__element,
      footer__nav__news,
      footer__nav__form__input,
      footer__nav__element__link,
      footer__nav__form__button,
  } = styles;
  const router = useRouter();

  return (
    <footer className={footer}>
      <nav className={footer__nav}>
        <div className={footer__nav__element}>
          <Link href="">
            <a>
              Mentions légales
            </a>
          </Link>
        </div>
        <div className={footer__nav__element}>
          {/* <a className={footer__nav__element__link}>
            <i className="fa fa-facebook-official" aria-hidden="true" />
          </a>
          <a href="" className={footer__nav__element__link}>
            <i className="fa fa-twitter-square" aria-hidden="true" />
          </a> */}
          <i className="fa fa-facebook-square" aria-hidden="true" />
          <i className="fa fa-twitter-square" aria-hidden="true" />
          <img src={Fb.src} alt="" />
        </div>
        <div className={footer__nav__news}>
          <Link href="">
            <a>
              S'abonner à la Newsletter
            </a>
          </Link>
        </div>
        <form className={footer__nav__form} onSubmit={handleSubmit(onSubmit)}>
          <input
            id="email"
            placeholder="Email"
            className={footer__nav__form__input}
            {...register('email', {
              required: "Il nous faut un email ici.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "L'adresse e-mail indiquée n'est pas valide.",
              },
            })}
          />
            {/* {errors.email && <p>{errors.email.message}</p>} */}
          <button className={footer__nav__form__button} type="submit">S'abonner à la Newsletter</button>
        </form>
        
      </nav>
    </footer>
  )
}