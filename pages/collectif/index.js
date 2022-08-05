import Head from 'next/head'
import { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import Layout from '../../components/layout'
import Tab from '../../components/tab';
import PageTitle from '../../components/page_title';
import TeamMember from '../../components/team_member';

// Styles
import styles from './collectif.module.scss';
import compStyles from '../../components/layout.module.scss';

// Defining axios and the api
const api = axios.create({
  baseURL: 'http://localhost:8000',
});
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

export default function Collectif() {
  const {
    collectif,
    tab__active,
    collectif__team,
    collectif__team__list,
    collectif__team__display,
    collectif__team__display__container,
  } = styles;

  const tabs = [
    {
      name: 'Collectif',
      id: 'collectif',
    },
    {
      name: 'Équipe artistique',
      id: 'team',
    },
  ]
  const [tabDisplay, setTabDisplay] = useState('collectif')
  const [memberToDisplay, setMemberToDisplay] = useState(null)
  const [artists, setArtists] = useState([])
  const [isFormer, setIsFormer] = useState(false)

  const toggleTabClassname = (currentTab) => {
    console.log(currentTab);
    tabs.forEach((tabElement) => {
      const tab = document.querySelector(`#${tabElement.id}-tab`);
      if (tabElement.name === currentTab) 
        tab.classList.add(tab__active);
      else { 
        tab.classList.remove(tab__active);
      }
    })
  }
  const setNewTab = (currentTab) => {
    toggleTabClassname(currentTab);
    if (currentTab === 'Collectif') {
      setTabDisplay('collectif');
    }
    else { 
      setTabDisplay('team');
    }
  };
  const handleClick = (event) => {
    const newMemberToDisplay = teamMembers.find((member) => member.name === event.currentTarget.id);
    setMemberToDisplay(newMemberToDisplay);
  }
  
  useEffect(() => {
    api.get('/api/artists')
      .then((response) => {

        let artistsArray = response.data.filter((artist) => artist.isFormer === isFormer);
        console.log(artistsArray);

        artistsArray = artistsArray.map((artist) => {
          artist.theaterRoles = artist.theaterRoles.split(',');
          return artist;
        })
        setArtists(artistsArray);
      })
    // Gets the id of the first tab to be displayed
    const { id } = tabs[0];
    // So we can get the element of the first tab
    const firstTabElement = document.querySelector(`#${id}-tab`);
    // And apply the right class
    firstTabElement.classList.add(tab__active);
  }, [])

  const handleClickOnSeeFormerMembers = () => {
    api.get('/api/artists')
      .then((response) => {
        setIsFormer(!isFormer);

        let artistsArray = response.data.filter((artist) => artist.isFormer === !isFormer)

        artistsArray = artistsArray.map((artist) => {
          artist.theaterRoles = artist.theaterRoles.split(',');
          return artist;
        })
        setArtists(artistsArray);
      })
  }
  return (
    <Layout>
      <Head>
        <title>Galerie des Pieuvres</title>
      </Head>
      <div className={collectif}>
        <PageTitle>
          Les Pieuvres
        </PageTitle>
        <Tab tabs={tabs}  tabFunction={setNewTab} />
        {tabDisplay ==='collectif' && (
          <div className={collectif__team__display__container}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati culpa quibusdam dolorem dolore nulla hic, quia esse inventore beatae! Reprehenderit eos quaerat consequuntur nemo corporis veniam quidem, nisi numquam maxime rerum quas exercitationem quia totam? Explicabo alias quas possimus consectetur delectus, dolores, aperiam unde est debitis placeat, ex corrupti ad. Natus doloribus labore dolores quaerat distinctio. Nam quo ad earum molestias similique adipisci impedit aut ut dolorem facilis fuga corporis quam atque molestiae veritatis, veniam magnam rem quidem voluptates ipsam. Ut illum voluptas rerum repudiandae quasi veniam! Id officiis fugiat tempore eos libero. Illo, quos maiores? Veniam inventore, accusamus iusto consequatur eaque praesentium sit pariatur quis exercitationem magni ipsum, quisquam perferendis, nostrum illo aspernatur nobis. Eius dolores, tempora harum placeat eos, quae, ut eveniet quos saepe illo architecto quo quaerat cupiditate mollitia voluptatibus fuga. Asperiores fugiat excepturi ex deleniti voluptas enim ipsam reiciendis possimus, culpa obcaecati facere nostrum doloribus pariatur corrupti, fugit modi debitis natus recusandae aliquid esse voluptatibus? Possimus facere necessitatibus officia excepturi maxime ipsam optio obcaecati eveniet magni ad magnam sit, distinctio cumque non neque voluptatum recusandae esse soluta minima ex veniam tempore laborum vel iste? Nemo exercitationem sequi consectetur error debitis natus ab ad molestiae ex libero.</p>
          </div>
        )}
        {tabDisplay ==='team' && (
          <div className={collectif__team}>
            <div className={collectif__team__display}>
              {memberToDisplay === null && (
                <div className={collectif__team__display__container}>
                  <p>
                    Parce qu'un collectif ne se définit pas seulement par ses représentations et ses valeurs, nous vous invitons à survoler et cliquer les photos de celles et ceux qui font le coeur du <span>Collectif Les Pieuvres</span> afin d'en apprendre plus sur elleux.
                  </p>
                </div>
              )}
              {memberToDisplay !== null && <TeamMember member={memberToDisplay} />}
            </div>
            <div className={collectif__team__list} id="members-list">
              {artists.map((member) => (
                <TeamMember key={member.id} {...member} handler={handleClick} />
              ))}
                <div className={compStyles.teammember} style={{'background-image': `url()`}} onClick={handleClickOnSeeFormerMembers}>
                    <span>{!isFormer ? 'Voir les anciens membres...' : 'Voir les membres actuels'}</span>
                </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}