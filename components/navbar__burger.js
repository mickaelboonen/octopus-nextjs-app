import { useRouter } from 'next/router'
import styles from './burger.module.scss'
import Link from 'next/link'
import cn from 'classnames'

export default function NavbarBurger({ isOpen }) {
    const navbarArray = ['collectif', 'spectacles', 'agenda', 'galerie', 'contact']
    const { 
        burger__nav,
        burger__nav__open,
        burger__nav__list,
        burger__nav__list__item,
        burger__nav__list__link,
        burger__nav__list__link__active,
    } = styles;
    const router = useRouter();
    const currentPage = router.pathname.slice(1, router.pathname.length)
  return (
    <nav
      className={cn({
        [burger__nav]: true,
        [burger__nav__open]: isOpen,
      })}
    >
      <ul className={burger__nav__list}>
        {navbarArray.map((item) => (
          <li key={item} className={burger__nav__list__item}>
            <Link href={`/${item}`}>
              <a className={burger__nav__list__link} >
                {item}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}