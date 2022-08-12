import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import logo from '../public/images/octopus.png'
import Burger from '../public/images/menu.svg'
import X from '../public/images/x.svg'
import Navbar from './navbar'
import { useState } from 'react';
import NavbarBurger from './navbar__burger'
import Link from 'next/link'
import Footer from './footer'
import { useEffect } from 'react'

const name = 'Lestrarcher'
export const siteTitle = 'Les pieuvres'

export default function Layout({ children, home }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <script src="https://use.fontawesome.com/52a2a011b5.js"></script>
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <a>
            <img className={styles.header__logo} src={logo.src} alt="" />
          </a>
        </Link>
        <div className={styles.header__burger} onClick={handleBurgerClick}>
          {!isOpen && <img className={styles.header__burger__icon} src={Burger.src} alt="" />}
          {isOpen && <img className={styles.header__burger__icon} src={X.src} alt="" />}
        </div>
        <Navbar />
    </header>
    <NavbarBurger isOpen={isOpen} />
    <main className={styles.main}>
      {children}
    </main>
    <Footer />
    </div>
  )
}