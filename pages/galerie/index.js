import { useEffect } from 'react';
import Head from 'next/head';
import { fetchPhotos } from '../../app/reducer/galerie'
import { useDispatch, useSelector } from 'react-redux'

// Components
import Layout from '../../components/layout';
import Picture from '../../components/picture';
import Tab from '../../components/tab';
import PageTitle from '../../components/page_title';

// Styles
import styles from './galerie.module.scss';
import layoutStyles from '../../components/layout.module.scss';

export default function Galerie() {
  const {
    galerie,
    galerie__images,
    galerie__tabs,
  } = styles;

  const dispatch = useDispatch();
  const { spectacles, photosArray } = useSelector((state) => state.galerie);
  
  const toggleTabClassname = (currentTab) => {
    const tabParentElement = document.querySelector(`#tabs`);
    tabParentElement.childNodes.forEach((child) => {
      if (child.id.includes(currentTab)) {
        child.classList.add(layoutStyles.tab__active);
      }
      else { 
        child.classList.remove(layoutStyles.tab__active);
      }
    })
  }

  useEffect(() => {
    // Gets the id of the first tab to be displayed
    const { id } = spectacles[0];
    // So as to fetch the data matching the id
    dispatch(fetchPhotos(id));

    // Gets the parent element of the tabs
    const tabParentElement = document.querySelector(`#tabs`);
    // Applies the right class to the first child
    tabParentElement.firstChild.classList.add(layoutStyles.tab__active);
  }, [])

  const setNewPhotosArray = (currentTab) => {
    dispatch(fetchPhotos(currentTab));
    toggleTabClassname(currentTab);
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