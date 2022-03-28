import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import frontPageStyles from '../styles/test.module.css'
import Link from 'next/link'

export default function Home() {
  const nav = ['collectif', 'agenda', 'spectacles', 'galerie', 'contact' ];
  return (
    <div>
      <Head>
        <title>Collectif Les Pieuvres</title>
      </Head>
    <header className={frontPageStyles.header}>
        <h1 className={frontPageStyles.header__title}>Les Pieuvres</h1>
        <h2 className={frontPageStyles.header__subtitle}>
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
        <nav className={frontPageStyles.header__nav}>
            <ul className={frontPageStyles.header__nav__list}>
              {nav.map((el) => (
                <li key={el} className={frontPageStyles.header__nav__list__item}>
                  <Link href={`/${el}`}>
                    <a className={frontPageStyles.header__nav__list__link}>
                      {el}
                    </a>
                  </Link>
                </li>
                ))}
            </ul>
        </nav>
    </header>
    <main className={frontPageStyles.main}>
    </main>
    <footer className={frontPageStyles.footer}>
        <nav className={frontPageStyles.footer__nav}>
            <div className={frontPageStyles.footer__nav__element}>Mentions légales</div>
            <div className={frontPageStyles.footer__nav__element}>ICONS</div>
            <form className={frontPageStyles.footer__nav__form} action="">
                <input type="email" name="" id="" placeholder="Email" />
                <button type="submit">Recevoir les news</button>
            </form>
        </nav>
    </footer>
    </div>
  )
}