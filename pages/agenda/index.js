import Head from 'next/head';
import { useEffect } from 'react';
import Layout from '../../components/layout';
import { useDispatch, useSelector } from 'react-redux';

// Import Components
import PageTitle from '../../components/page_title';
import PageSubtitle from '../../components/page_subtitle';
import SpectacleDate from '../../components/spectacle_date';

// Import Styles
import styles from './agenda.module.scss';

// Import Actions
import { fetchAllDates, toggleSortingButton, sortArray } from '../../app/reducer/date'

export default function Galerie() {

  const dispatch = useDispatch();
  const {
    shows,
    currentButton,
    yearsArray
  } = useSelector((state) => state.date);

  const {
    agenda,
    agenda__data,
    agenda__dates,
    agenda__data__title,
    agenda__dates__buttons,
  } = styles;
 
  /**
   * Handles the click on the sorting buttons and allows the display of the new array
   * Sets a new state for the spectacles array and the sorting buttons
   * @param event 
   */
  const handleSortingClick = (event) => {
    dispatch(sortArray(event.target.value));
    dispatch(toggleSortingButton(event.target.value));
  }
  
  useEffect(() => {
    dispatch(fetchAllDates());
  }, [])

  return (
    <Layout>
      <Head>
        <title>Galerie des Pieuvres</title>
      </Head>
      <div className={agenda}>
        <PageTitle>
          Agenda
        </PageTitle>
        <PageSubtitle>
        Dates des Représentations
        </PageSubtitle>
        <div className={agenda__dates}>
          <div className={agenda__dates__buttons}>
            {currentButton !== "all" && (
              <button type="button" value="all" onClick={handleSortingClick}>
                Afficher toutes les dates
            </button>
            )}
            {currentButton !== "past" && (
              <button type="button" value="past" onClick={handleSortingClick}>
              Afficher les dates passées
            </button>
            )}
            {currentButton !== "future" && (
              <button type="button" value="future" onClick={handleSortingClick}>
              Afficher les dates à venir
            </button>
            )}
          </div>
        </div>
        {yearsArray.map((currentYear) => (
          <div key={currentYear} className={agenda__data}>
            {shows.find((show) => new Date(show.datetime).getFullYear() === currentYear) !== undefined && <h3 className={agenda__data__title}>{currentYear}</h3>}
            {shows.map((spec) => {
              const year = new Date(spec.datetime).getFullYear();
              if (year === currentYear) {
                return (
                  <SpectacleDate {...spec} key={spec.id} />
                );
              }
            })}
          </div>
        ))}
        {yearsArray.length === 0 && (
          <div>Gérer un message d'erreur</div>
        )}
      </div>
    </Layout>
  )
}