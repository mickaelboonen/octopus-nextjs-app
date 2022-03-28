import { useRouter } from 'next/router'
import styles from './layout.module.css'
import Link from 'next/link'
import cn from 'classnames'

export default function Navbar() {
    const navbarArray = ['collectif', 'spectacles', 'agenda', 'galerie', 'contact']
    const { 
        header__nav,
        header__nav__list,
        header__nav__list__item,
        header__nav__list__link,
        header__nav__list__link__active,
    } = styles;
    const router = useRouter();
    const currentPage = router.pathname.slice(1, router.pathname.length)
  return (
    <nav className={header__nav}>
      <ul className={header__nav__list}>
        {navbarArray.map((item) => (
          <li key={item} className={header__nav__list__item}>
            <Link href={`/${item}`}>
              <a
                className={cn({
                  [header__nav__list__link]: true,
                  [header__nav__list__link__active]: currentPage === item,
                })}
              >
                {item}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}