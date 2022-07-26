import Head from 'next/head'
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link'
import Image from 'next/image'
import lavender from '../../public/images/random/lavender.jpg'
import muguet from '../../public/images/random/muguet.jpg'
import sakura from '../../public/images/random/sakura.jpg'
import violentes from '../../public/images/photos/bnw1.jpg'

// import document from '../../data/test.pdf';

// Components
import Layout from '../../components/layout'
import PageTitle from '../../components/page_title';
import PageSubtitle from '../../components/page_subtitle';
import Tab from '../../components/tab';

import styles from './spectacle.module.scss';

export default function Spectacles() {
  const {
    spectacle,
    spectacle__container,
    spectacle__menu__container__button,
    spectacle__menu__container__dates__list,
    spectacle__menu__container__dates__list__item,
    spectacle__container__banner,
    // Styles for menu on the side
    spectacle__menu,
    spectacle__menu__open,
    spectacle__menu__container,
    spectacle__menu__container__dates,
  } = styles;
  const spectacles = [
    {
      id: 1,
      name: 'VIOLENTES',
      picture: '',
      synopsis: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id voluptate quasi aspernatur unde illum, suscipit distinctio! Soluta quas doloremque veniam delectus ut amet praesentium ipsa nam, id magnam dolorem, debitis distinctio nostrum iste repellat aliquid pariatur, voluptatum in earum atque saepe voluptas. Repellat, officiis aperiam amet neque illum deleniti quidem!',
      creation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cum, sit dolor id facere expedita reprehenderit qui commodi aspernatur dicta ipsum neque quod numquam sequi, nulla quam esse officiis vero quo quisquam tempore hic quidem. Doloremque, accusantium. Error, assumenda qui mollitia nemo non perferendis officiis corrupti, officia ipsum, unde neque!',
      distribution: [],
    },
    {
      id: 2,
      name: 'TEST',
      picture: '',
      synopsis: '',
      creation: '',
      disctribution: [],
    },
  ];

  // const [isAgendaOpen, setAgendaOpen] = useState(false);
  // useEffect(() => {}, [isAgendaOpen]);
  // const handleClick = () => {
  //   setAgendaOpen(!isAgendaOpen);
  // }
  const temporaryArray = [1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9 ,10 ,11,12, 13, 14 ,15 ,16 ,17 ,18 ,19 ,20 ,21, 22, 23, 24 , 25 , 26 , 27 ,28]

  // Menu when dates when on the side
  // const menu = (
  //   <div className={spectacle__menu__container}>
  //     <div className={spectacle__menu__container__dates}>
  //       <h3>Date des Représentations</h3>
  //       <ul className={spectacle__menu__container__dates__list}>
  //         {temporaryArray.map((tempId) => (
  //           <li
  //             key={tempId}
  //             className={spectacle__menu__container__dates__list__item}
  //           >
  //             Date - Lieu, Ville 
  //           </li>
  //         ))}
  //       </ul>
  //       <button className={spectacle__menu__container__button}>Dossier de Presse</button>
  //     </div>
  //   </div>
  // );
  return (
    <Layout>
      <Head>
        <title>Les Spectacles</title>
      </Head>
      <div className={spectacle}>
        {/* {isAgendaOpen && <div className={spectacle__menu__open} onClick={handleClick}>{menu}</div>}
        {!isAgendaOpen && <div className={spectacle__menu} onClick={handleClick}></div>} */}
        <div className={spectacle__container}>
          <PageTitle>
            Violentes
          </PageTitle>
          <div className={spectacle__container__banner}>
            <img src={violentes.src} alt="" />
            <p>Crédits : XXX</p>
          </div>
          
          <h3>Synopsis</h3>
          <p>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut temporibus ad a ex voluptates id?</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptate similique deserunt architecto reiciendis cumque, debitis saepe ullam, qui vero facilis reprehenderit nihil. Minus ducimus voluptatibus perspiciatis ullam quidem amet aperiam consequatur deleniti alias voluptas assumenda rem accusamus delectus eaque, ratione odit temporibus vitae corporis maiores quasi nostrum. Eius, sequi.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, non quasi nostrum deserunt, magni praesentium facere illo tenetur vitae incidunt sunt? Autem soluta velit aperiam porro esse obcaecati explicabo dicta animi. Hic consequatur vero magnam facilis earum quis, perferendis provident possimus enim? Ipsum voluptates magni odio pariatur doloribus dolore incidunt similique repudiandae, saepe animi vel vitae vero maxime id harum nihil odit. Molestiae provident officia ut sit delectus aut ullam corporis nisi voluptatibus error soluta magni incidunt blanditiis dolor quisquam, repellat tempore in eligendi commodi mollitia libero deleniti molestias. Debitis iste magnam assumenda nulla nobis aliquid laborum facilis cumque amet natus et labore rem, odio laudantium. Deserunt praesentium modi at sit. Quisquam magnam eos ipsa possimus saepe necessitatibus molestiae.
          </p>
          <h3>Création</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptate similique deserunt architecto reiciendis cumque, debitis saepe ullam, qui vero facilis reprehenderit nihil. Minus ducimus voluptatibus perspiciatis ullam quidem amet aperiam consequatur deleniti alias voluptas assumenda rem accusamus delectus eaque, ratione odit temporibus vitae corporis maiores quasi nostrum. Eius, sequi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa fugit pariatur laboriosam corporis amet, deleniti delectus quidem provident unde inventore esse et, vel a natus repellendus! Sapiente numquam earum non, inventore iste iusto, consequatur deleniti rerum placeat ab atque dignissimos tempora! Sint quas iusto rem eos in voluptatibus. Dolor nam ad illum fuga at odio, fugit facilis quo officia, eveniet vero deserunt, debitis excepturi minima? Itaque id pariatur quas autem voluptatibus, quis consequatur? Facere velit possimus assumenda rem voluptate qui officiis quo sit deserunt fugit aspernatur cumque aut delectus hic, accusantium recusandae unde laudantium officia. Alias ab debitis explicabo quidem cum reiciendis! At eum aliquam, accusamus, aliquid accusantium ipsa repellendus sit, eaque eligendi esse reprehenderit fugiat. Molestiae nesciunt maxime inventore? Repudiandae officia suscipit sapiente voluptatibus aliquam doloremque aspernatur adipisci quidem? Laudantium adipisci facere consequuntur culpa mollitia non earum aspernatur sit reiciendis, ut eligendi dicta. Quisquam, modi labore. Obcaecati amet nesciunt illum deserunt quis velit deleniti. Assumenda tempore eveniet expedita reiciendis, in voluptatem quasi alias sapiente voluptate delectus qui deleniti, unde molestiae soluta accusamus quibusdam illum eius eligendi! Ea ipsum minus sunt iste accusamus repudiandae a. Error aperiam delectus quisquam harum et, hic reprehenderit dignissimos ex saepe quam debitis placeat!
          </p>
          <h3>Distribution</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptate similique deserunt architecto reiciendis cumque, debitis saepe ullam, qui vero facilis reprehenderit nihil. Minus ducimus voluptatibus perspiciatis ullam quidem amet aperiam consequatur deleniti alias voluptas assumenda rem accusamus delectus eaque, ratione odit temporibus vitae corporis maiores quasi nostrum. Eius, sequi.</p> 
          <h3>Date des Représentations</h3>
          <ul className={spectacle__menu__container__dates__list}>
            {temporaryArray.map((tempId) => (
              <li
                key={tempId}
                className={spectacle__menu__container__dates__list__item}
              >
                Date - Lieu, Ville 
              </li>
            ))}
          </ul>
          <h3>Dossier de Presse</h3>
          <button className={spectacle__menu__container__button}>Dossier de Presse</button>
        </div>
      </div>
    </Layout>
  )
}