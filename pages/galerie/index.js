import { useEffect } from 'react';
import Head from 'next/head';
import { fetchPhotos } from '../../app/reducer/galerie';
import { useDispatch, useSelector } from 'react-redux';

// Import Images
import chevronRight from '../../public/images/chevron-right.svg';
import chevronLeft from '../../public/images/chevron-left.svg';
import X from '../../public/images/grey-x.svg';

// Import Components
import Layout from '../../components/layout';
import Picture from '../../components/picture';
import Tab from '../../components/tab';
import PageTitle from '../../components/page_title';

// Import Styles
import styles from './galerie.module.scss';
import layoutStyles from '../../components/layout.module.scss';

// Import Actions
import { displayPicture, setNextPhoto,leaveShowroom } from '../../app/reducer/galerie';

export default function Galerie() {
  const {
    galerie,
    galerie__blurred,
    galerie__images,
    galerie__tabs,
    showroom,
    showroom__arrows,
    showroom__picture,
    showroom__picture__cross,
  } = styles;

  const {
    spectacles,
    photosArray,
    photoToDisplay
  } = useSelector((state) => state.galerie);
  const dispatch = useDispatch();
  
  /**
   * Adds and removes the tab__active classname to the different tabs
   * @param string currentTab 
   */
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

  /**
   * Fetches the newx array of pictures and sets style on the selected tab
   * @param string currentTab 
   */
  const setNewPhotosArray = (currentTab) => {
    dispatch(fetchPhotos(currentTab));
    toggleTabClassname(currentTab);
  }

  /**
   * Opens the showroom and displays the selected picture
   * Applies blur on the background
   * @param int id 
   */
  const handleClickOnPicture = (id) => {
    dispatch(displayPicture(id));

    const galerieContainer = document.querySelector('#galerie_container');
    galerieContainer.classList.add(galerie__blurred);
  }

  /**
   * Displays the next or the previous picture
   * @param {*} event 
   */
  const handleClickOnChevron = (event) => {
    const payload = {
      chevronId: event.currentTarget.id,
      pictureId: photoToDisplay.id,
    }
    dispatch(setNextPhoto(payload))
  };

  /**
   * Allows the user to leave the showroom and go back to the gallery page
   */
  const handleClickOnCross = () => {
    dispatch(leaveShowroom());

    // Takes off the blur on the gallery page
    const galerieContainer = document.querySelector('#galerie_container');
    galerieContainer.classList.remove(galerie__blurred);
  }
  
  return (
    <Layout>
      <Head>
        <title>Galerie des Pieuvres</title>
      </Head>
      <div className={galerie} id="galerie_container">
        <PageTitle>
          Galerie
        </PageTitle>
        <Tab classStyle={galerie__tabs} tabs={spectacles}  tabFunction={setNewPhotosArray} />
        <div className={galerie__images}>
          {photosArray.map((photo) => <Picture {...photo} handler={handleClickOnPicture} /> )}
        </div> 
      </div>
      {photoToDisplay !== null && (
        <div className={showroom}>
          <div className={showroom__arrows} id="left" onClick={handleClickOnChevron}>
            <img src={chevronLeft.src} alt="" />
          </div>
          <div className={showroom__picture}>
              <img src={`http://localhost:8000/${photoToDisplay.url}`} alt="" />
              <img src={X.src} alt="" className={showroom__picture__cross} onClick={handleClickOnCross}/>
          </div>
          <div className={showroom__arrows} id="right" onClick={handleClickOnChevron}>
            <img src={chevronRight.src} alt="" />
          </div>
        </div>
      )}
    </Layout>
  )
}