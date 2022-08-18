import Head from 'next/head'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Layout from '../../components/layout'
import Tab from '../../components/tab';
import PageTitle from '../../components/page_title';
import TeamMember from '../../components/TeamMember/team_member';
import FocusMember from '../../components/TeamMember/focusMember';

// Styles
import styles from './collectif.module.scss';
import compStyles from '../../components/layout.module.scss';

// Actions
import {
  fetchArtists,
  toggleTab,
  displayMember,
  getFormerArtists
} from '../../app/reducer/team';

export default function Collectif() {
  // Classnames
  const {
    collectif,
    tab__active,
    collectif__team,
    collectif__team__list,
    collectif__team__display,
    collectif__team__display__container,
  } = styles;

  // State
  const {
    tabs,
    artists,
    memberToDisplay,
    isFormer,
    currentTab,
  } = useSelector((state) => state.team);

  // Dispatch to be used when we need to dispatch the actions
  const dispatch = useDispatch();
  
  /**
   * Allows to display the right data according to the selected tab
   * @param string currentTab 
   */
  const setNewTab = (currentTab) => {
    let id = '';
    if (currentTab === 'c') {
      id = 'collectif-tab';
      dispatch(toggleTab('collectif'));
    }
    else { 
      id = 'team-tab';
      dispatch(toggleTab('team'));
    }

    // Changes the classname of the tabs
    const tabParentElement = document.querySelector(`#tabs`);
    tabParentElement.childNodes.forEach((child) => {

      // if the current tab child has the same id as the one that's been chosen
      if (child.id === id) {
        // We apply the tab_active class to the child
        document.querySelector(`#${id}`).classList.add(tab__active);
      }

      // If the id is different from the one that's been chosen
      else {
        // We remove the tab__active class from the child
        document.querySelector(`#${child.id}`).classList.remove(tab__active);
      }
    });
  };
  
  const handleClick = (event) => {
    dispatch(displayMember(event.currentTarget.id));
  }
  
  useEffect(() => {
    dispatch(fetchArtists());

    // Gets the id of the first tab to be displayed
    const { id } = tabs[0];
    // So we can get the element of the first tab
    const firstTabElement = document.querySelector(`#${id}-tab`);
    // And apply the right class
    firstTabElement.classList.add(tab__active);
  }, [])

  const handleClickOnSeeFormerMembers = () => {
    if (isFormer) {
      dispatch(fetchArtists());
    }
    else {
      dispatch(getFormerArtists());
    }
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
        {currentTab ==='collectif' && (
          <div className={collectif__team__display__container}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati culpa quibusdam dolorem dolore nulla hic, quia esse inventore beatae! Reprehenderit eos quaerat consequuntur nemo corporis veniam quidem, nisi numquam maxime rerum quas exercitationem quia totam? Explicabo alias quas possimus consectetur delectus, dolores, aperiam unde est debitis placeat, ex corrupti ad. Natus doloribus labore dolores quaerat distinctio. Nam quo ad earum molestias similique adipisci impedit aut ut dolorem facilis fuga corporis quam atque molestiae veritatis, veniam magnam rem quidem voluptates ipsam. Ut illum voluptas rerum repudiandae quasi veniam! Id officiis fugiat tempore eos libero. Illo, quos maiores? Veniam inventore, accusamus iusto consequatur eaque praesentium sit pariatur quis exercitationem magni ipsum, quisquam perferendis, nostrum illo aspernatur nobis. Eius dolores, tempora harum placeat eos, quae, ut eveniet quos saepe illo architecto quo quaerat cupiditate mollitia voluptatibus fuga. Asperiores fugiat excepturi ex deleniti voluptas enim ipsam reiciendis possimus, culpa obcaecati facere nostrum doloribus pariatur corrupti, fugit modi debitis natus recusandae aliquid esse voluptatibus? Possimus facere necessitatibus officia excepturi maxime ipsam optio obcaecati eveniet magni ad magnam sit, distinctio cumque non neque voluptatum recusandae esse soluta minima ex veniam tempore laborum vel iste? Nemo exercitationem sequi consectetur error debitis natus ab ad molestiae ex libero.</p>
          </div>
        )}
        {currentTab ==='team' && (
          <div className={collectif__team}>
            <div className={collectif__team__display}>
              {memberToDisplay === null && (
                <div className={collectif__team__display__container}>
                  <p>
                    Parce qu'un collectif ne se définit pas seulement par ses représentations et ses valeurs, nous vous invitons à survoler et cliquer les photos de celles et ceux qui font le coeur du <span>Collectif Les Pieuvres</span> afin d'en apprendre plus sur elleux.
                  </p>
                </div>
              )}
              {memberToDisplay !== null && <FocusMember {...memberToDisplay} />}
            </div>
            <div className={collectif__team__list} id="members-list">
              {artists.map((member) => (
                <TeamMember key={member.id} {...member} handler={handleClick} />
              ))}
              <div className={compStyles.teammember} onClick={handleClickOnSeeFormerMembers}>
                  <span>{!isFormer ? 'Voir les anciens membres...' : 'Voir les membres actuels'}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}