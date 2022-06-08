import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Picture from '../../components/picture';
import Tab from '../../components/tab';
import PageTitle from '../../components/page_title';

import { galeryArray } from '../../data/galerie';

import styles from './galerie.module.scss';
import { useState } from 'react';

export default function Galerie() {
  const {
    galerie,
    galerie__images,
    galerie__tabs,
    tab__active,
  } = styles;
  const spectacles = [
    {
      id: 'VIOLENTES',
      name: 'VIOLENTES'
    },
    {
      id: 'TEST',
      name: 'TEST'
    },
  ];

  const [photosArray, setGaleryArray] = useState(galeryArray)

  const toggleTabClassname = (currentTab) => {
    spectacles.forEach((spec) => {
      const tab = document.querySelector(`#${spec.name}-tab`);
      console.log(spec.name);
      if (spec.name === currentTab)
      tab.classList.add(tab__active);
      else { 
        tab.classList.remove(tab__active);
      }
    })
  }

  const setNewPhotosArray = (currentTab) => {
    toggleTabClassname(currentTab);
    if (currentTab === "VIOLENTES") {
      setGaleryArray(galeryArray);
    }
    else {
      setGaleryArray([]);
    }
  }
  return (
    <Layout>
      <Head>
        <title>Galerie des Pieuvres</title>
      </Head>
      <div className={galerie}>
        <PageTitle>
          Galerie
        </PageTitle>
        <Tab classStyle={galerie__tabs} tabs={spectacles}  tabFunction={setNewPhotosArray} />
        <div className={galerie__images}>
          {photosArray.map((photo) => <Picture {...photo} /> )}
        </div> 
      </div>
    </Layout>
  )
}