import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import lavender from '../../public/images/random/lavender.jpg'
import muguet from '../../public/images/random/muguet.jpg'
import sakura from '../../public/images/random/sakura.jpg'

// Components
import Layout from '../../components/layout'
import PageTitle from '../../components/page_title';
import PageSubtitle from '../../components/page_subtitle';
import Tab from '../../components/tab';

import styles from './spectacle.module.scss';
import { useState } from 'react';

export default function Spectacles() {
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

  const bis = [
    {
      id: 1,
      name: 'VIOLENTES',
      picture: lavender,
    },
    {
      id: 2,
      name: 'TEST',
      picture: muguet,
    },
    // {
    //   id: 3,
    //   name: 'NUMBER THREE',
    //   picture: sakura,
    // },
    // {
    //   id: 3,
    //   name: 'NUMBER THREE',
    //   picture: sakura,
    // },
    // {
    //   id: 1,
    //   name: 'VIOLENTES',
    //   picture: lavender,
    // },
    // {
    //   id: 2,
    //   name: 'TEST',
    //   picture: muguet,
    // },
  ]

  // TODO : factoriser / selectoriser
  const toggleTabClassname = (currentTab) => {
    spectacles.forEach((spec) => {
      const tab = document.querySelector(`#${spec.name}-tab`);

      if (spec.name === currentTab)
      tab.classList.add(tab__active);
      else { 
        tab.classList.remove(tab__active);
      }
    })
  }

  const [spectacleToDisplay, setSpectacleToDisplay] = useState('VIOLENTES');

  const changeSpectacle = (newTab) => {
    toggleTabClassname(newTab);

    const newSpectacleToDisplay = spectacles.find((spec) => spec.name === newTab);
    setSpectacleToDisplay(newSpectacleToDisplay);

  }
  return (
    <Layout>
      <Head>
        <title>Les Spectacles</title>
      </Head>
      <div className={styles.spectacles}>
        <PageTitle>
          Spectacles
        </PageTitle>
        <div className={styles.spectacles__pictures}>
          {bis.map((spec) => (
            <Link href={`/spectacles/${spec.name}`}>
              <a>
                <div className={styles.spectacles__pictures__container} style={{'background-image': `url(${spec.picture.src})`}}>
                  <div className={styles.spectacles__pictures__container__name}>
                    {spec.name}
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}