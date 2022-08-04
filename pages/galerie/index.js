import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Picture from '../../components/picture';
import Tab from '../../components/tab';
import PageTitle from '../../components/page_title';

import { galeryArray } from '../../data/galerie';

import styles from './galerie.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
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

  const [photosArray, setGaleryArray] = useState([])

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
  useEffect(() => {
    api.get('/api/pictures/4')
    .then((response) => {
      setGaleryArray(response.data);
    })
  }, [])

  const setNewPhotosArray = (currentTab) => {
    toggleTabClassname(currentTab);
    if (currentTab === "VIOLENTES") {
      // TODO : a améliorer
      api.get('/api/pictures/4')
        .then((response) => {
          setGaleryArray(response.data);
        })
    }
    else {
      // TODO : a améliorer
      api.get('/api/pictures/5')
        .then((response) => {
          setGaleryArray(response.data);
        })
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