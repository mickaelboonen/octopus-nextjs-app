import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
// import frontPageStyles from '../styles/test.module.scss'
import frontPageStyles from '../components/layout.module.scss'
import Link from 'next/link'
import Facebook from '../public/images/facebook.svg';
import Footer from '../components/footer.js';

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
    <Footer />
    </div>
  )
}