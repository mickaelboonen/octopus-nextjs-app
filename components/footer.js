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
      footer__nav__element,
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
          <img src={Fb.src} alt="" />
        </div>
        <div className={footer__nav__element}>
          <Link href="/newsletter">
            <a>
              Newsletter
            </a>
          </Link>
        </div>       
      </nav>
    </footer>
  )
}