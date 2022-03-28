import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Picture from '../../components/picture';
import SpectacleDate from '../../components/spectacle_date';
import Tab from '../../components/tab';
import PageTitle from '../../components/page_title';
import PageSubtitle from '../../components/page_subtitle';
import collect from 'collect.js';

import { galeryArray } from '../../data/galerie';

import styles from './agenda.module.scss';
import { useEffect, useState } from 'react';

export default function Galerie() {
  const {
    agenda, 
    agenda__dates,
    agenda__dates__buttons,
    agenda__data,
    agenda__data__title,

  } = styles;
  const spectacles = [
    {
      id: 1,
      year: 2021,
      date: '11/12/2021',
      show: 'VIOLENTES',
      showUrl: '#',
      place: 'LYON',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 2,
      year: 2021,
      date: '11/17/2021',
      show: 'VIOLENTES',
      showUrl: '#',
      place: 'PARIS',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 3,
      year: 2021,
      date: '12/18/2021',
      show: 'VIOLENTES',
      showUrl: '#',
      place: 'NIMES',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 4,
      year: 2021,
      date: '12/30/2021',
      show: 'VIOLENTES',
      showUrl: '#',
      place: 'MONTPELLIER',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 5,
      year: 2022,
      date: '01/05/2022',
      show: 'VIOLENTES',
      showUrl: '#',
      place: 'BORDEAUX',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 6,
      year: 2022,
      date: '01/18/2022',
      show: 'VIOLENTES',
      showUrl: '#',
      place: 'STRASBOURG',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 7,
      year: 2022,
      date: '02/01/2022',
      show: 'VIOLENTES',
      showUrl: '#',
      place: 'MULHOUSE',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 8,
      year: 2022,
      date: '02/06/2022',
      show: 'VIOLENTES',
      showUrl: '#',
      place: 'NICE',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 9,
      year: 2022,
      date: '02/07/2022',
      show: 'VIOLENTES',
      showUrl: '#',
      place: 'MARSEILLE',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 10,
      year: 2022,
      date: '02/14/2022',
      show: 'VIOLENTES',
      showUrl: '#',
      place: 'LYON',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
  ];

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

  const yearsArray = setYearsArray(spectacles)

  /**
   * Adds the timestamp property to all spoectacles and returns an array sorted desc by timestamp
   * @param array
   * @returns array
   */
  const addTimestampToSpectacles = (array) => {
    const newArray = array.map((spec) => {
      const date = new Date(spec.date).getTime();
      spec.timestamp = date;
      return spec;
    })

    const collection = collect(newArray);
    const sorted = collection.sortByDesc('timestamp')
    return sorted.all();
  }

  /**
   * Handles the click on the sorting buttons and allows the display of the new array
   * Sets a new state for the spectacles array and the sorting buttons
   * @param event 
   */
  const handleSortingClick = (event) => {
    const spectaclesWithTimestamps = addTimestampToSpectacles(spectacles);

    let filteredSpectacles = spectaclesWithTimestamps;
    if (event.target.value === 'past') {
      filteredSpectacles = spectaclesWithTimestamps.filter((spec) => spec.timestamp < Date.now())
    }
    else if (event.target.value === 'future') {
      filteredSpectacles = spectaclesWithTimestamps.filter((spec) => spec.timestamp > Date.now())
    }

    setSpectaclesArray(filteredSpectacles);
    setButtonSorting(event.target.value);
    
  }

  // States
  const [spectaclesYears, setSpectaclesYears] = useState(yearsArray);
  const [buttonSorting, setButtonSorting] = useState("future");
  const [spectaclesArray, setSpectaclesArray] = useState(addTimestampToSpectacles(spectacles));

  return (
    <Layout>
      <Head>
        <title>Galerie des Pieuvres</title>
      </Head>
      <div className={agenda}>
        <PageTitle>
          Agenda
        {/* <h3 className="agenda__titles-subtitle">Dates des Représentations</h3>  */}
        </PageTitle>
        <PageSubtitle>
        Dates des Représentations
        </PageSubtitle>
        <div className={agenda__dates}>
          <div className={agenda__dates__buttons}>
            {buttonSorting !== "all" && (
              <button type="button" value="all" onClick={handleSortingClick}>
                Afficher toutes les dates
            </button>
            )}
            {buttonSorting !== "past" && (
              <button type="button" value="past" onClick={handleSortingClick}>
              Afficher les dates passées
            </button>
            )}
            {buttonSorting !== "future" && (
              <button type="button" value="future" onClick={handleSortingClick}>
              Afficher les dates à venir
            </button>
            )}
          </div>
        </div>
        {spectaclesYears.map((currentYear) => (
          <div key={currentYear} className={agenda__data}>
            <h3 className={agenda__data__title}>{currentYear}</h3>
            {spectaclesArray.map((spec) => {
              if (spec.year === Number(currentYear)) {
                return (
                  <SpectacleDate {...spec} key={spec.id} />
                );
              }
            })}
          </div>
        ))}
      </div>
    </Layout>
  )
}