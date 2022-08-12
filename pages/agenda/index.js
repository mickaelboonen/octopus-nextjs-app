import Head from 'next/head'
import Layout from '../../components/layout'
import SpectacleDate from '../../components/spectacle_date';
import PageTitle from '../../components/page_title';
import PageSubtitle from '../../components/page_subtitle';
import collect from 'collect.js';

import { galeryArray } from '../../data/galerie';

import styles from './agenda.module.scss';
import { useEffect, useState } from 'react';



import { fetchAllDates, toggleSortingButton, sortArray } from '../../app/reducer/date'
import { useDispatch, useSelector } from 'react-redux'

export default function Galerie() {
  const dispatch = useDispatch();
  const { shows, spectacles, currentButton, yearsArray } = useSelector((state) => state.date);
  const {
    agenda, 
    agenda__dates,
    agenda__dates__buttons,
    agenda__data,
    agenda__data__title,

  } = styles;
 

  /**
   * Returns an array of the spectacles years, sorted by desc
   * @param {array} spectacles 
   * @returns array
   */
  const setYearsArray = (spectacles) => {
      const yearsArray = []
      spectacles.forEach((spec) => {
        if (yearsArray.indexOf(spec.year) === -1) {
          yearsArray.push(spec.year);
        }
      })

      const collection = collect(yearsArray);
      const sortedYearsArray = collection.sortByDesc('year');
      return sortedYearsArray.all();
  }

  // const yearsArray = setYearsArray(spectacles)

  /**
   * Adds the timestamp property to all spoectacles and returns an array sorted desc by timestamp
   * @param array
   * @returns array
   */
  // const addTimestampToSpectacles = (array) => {
  //   const newArray = array.map((spec) => {
  //     const newObject = {...spec};
  //     const date = new Date(spec.date).getTime();
  //     newObject.timestamp = date;
  //     return newObject;
  //   })

  //   const collection = collect(newArray);
  //   const sorted = collection.sortByDesc('timestamp')
  //   return sorted.all();
  // }

  /**
   * Handles the click on the sorting buttons and allows the display of the new array
   * Sets a new state for the spectacles array and the sorting buttons
   * @param event 
   */
  const handleSortingClick = (event) => {
    dispatch(sortArray(event.target.value));
    dispatch(toggleSortingButton(event.target.value));
  }

  // States
  // const [spectaclesYears, setSpectaclesYears] = useState(yearsArray);
  const [spectaclesArray, setSpectaclesArray] = useState(shows);
  // const [spectaclesArray, setSpectaclesArray] = useState(shows);


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    dispatch(fetchAllDates());
  }, [])


  const date = new Date(shows[0].datetime); // getDate, getMonth, getYear, getHours
console.log(shows);


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
            <h3 className={agenda__data__title}>{currentYear}</h3>
            {shows.map((spec) => {
              const year = new Date(spec.datetime).getFullYear();
              console.log(spec);
              // if (spec.year === Number(currentYear)) {
              if (year === Number(currentYear)) {
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