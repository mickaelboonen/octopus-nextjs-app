import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import frontPageStyles from '../styles/test.module.scss'
import Link from 'next/link'
import Facebook from '../public/images/facebook.svg';

export default function Home() {
  const nav = ['collectif', 'agenda', 'spectacles', 'galerie', 'contact' ];
  const {
    header,
    header__title,
    header__subtitle,
    header__nav,
    header__nav__list,
    header__nav__list__item,
    header__nav__list__link,
    main,
    footer,
    footer__nav,
    footer__nav__element,
  } = frontPageStyles;
  return (
    <div>
      <Head>
        <title>Collectif Les Pieuvres</title>
      </Head>
      <header className={header}>
        <h1 className={header__title}>Les Pieuvres</h1>
        <h2 className={header__subtitle}>
            <span>C</span>
            <span>O</span>
            <span>L</span>
            <span>L</span>
            <span>E</span>
            <span>C</span>
            <span>T</span>
            <span>I</span>
            <span>F</span>
        </h2>
        <nav className={header__nav}>
            <ul className={header__nav__list}>
              {nav.map((el) => (
                <li key={el} className={header__nav__list__item}>
                  <Link href={`/${el}`}>
                    <a className={header__nav__list__link}>
                      {el}
                    </a>
                  </Link>
                </li>
                ))}
            </ul>
        </nav>
    </header>
    <main className={main} />
    <footer className={footer}>
        <nav className={footer__nav}>
            <div className={footer__nav__element}>Mentions légales</div>
            <div className={footer__nav__element}></div>
            <img src={Facebook.src} alt="" style={{'color': 'white',}}/>
            {/* <form className={footer__nav__form} action="">
                <input type="email" name="" id="" placeholder="Email" />
                <button type="submit">Recevoir les news</button>
            </form> */}
        </nav>
    </footer>
    </div>
  )
}