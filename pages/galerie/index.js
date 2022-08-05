import { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

// Components
import Layout from '../../components/layout';
import Picture from '../../components/picture';
import Tab from '../../components/tab';
import PageTitle from '../../components/page_title';

// Styles
import styles from './galerie.module.scss';
import layoutStyles from '../../components/layout.module.scss';

// Axios and API
const api = axios.create({
  baseURL: 'http://localhost:8000',
});
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

export default function Galerie() {
  const {
    galerie,
    galerie__images,
    galerie__tabs,
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
      tab.classList.add(layoutStyles.tab__active);
      else { 
        tab.classList.remove(layoutStyles.tab__active);
      }
    })
  }

  // On charging of the page, fetch the data for the first tap
  // todo : a améliorer
  useEffect(() => {
    api.get('/api/pictures/4')
    .then((response) => {
      setGaleryArray(response.data);
    })
    
    // Gets the id of the first tab to be displayed
    const { id } = spectacles[0];
    // So we can get the element of the first tab
    const firstTabElement = document.querySelector(`#${id}-tab`);
    // And apply the right class
    firstTabElement.classList.add(layoutStyles.tab__active);
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