import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';
import Layout from '../../components/layout'
import Tab from '../../components/tab';
import PageTitle from '../../components/page_title';
import styles from './collectif.module.scss';
import lavender from '../../public/images/photos/bnw1.jpg'
import TeamMember from '../../components/team_member';

export default function Collectif() {
  const {
    collectif,
    collectif__tabs,
    tab__active,
    collectif__team,
    collectif__team__list,
    collectif__team__list__item,
    collectif__team__list__item__info,
    collectif__team__display,
    collectif__team__display__container,
    collectif__team__display__container__image,
  } = styles;
  const teamMembers = [
    {
      id: 1,
      name: 'Sol',
      pronouns: 'He / Him',
      role: 'Acteur',
      picture: lavender,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dicta officia aut, aliquid similique nesciunt veritatis atque sequi natus illum quasi iste provident voluptatibus, nostrum explicabo? Adipisci autem nemo unde officia natus ratione quas est odit! Delectus ad ut esse distinctio officiis alias officia dolor deserunt, quae id nisi eligendi?',
    },
    {
      id: 2,
      name: 'X',
      pronouns: 'She / Her / He / Him / They / Their',
      role: 'Y',
      picture: lavender,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dicta officia aut, aliquid similique nesciunt veritatis atque sequi natus illum quasi iste provident voluptatibus, nostrum explicabo? Adipisci autem nemo unde officia natus ratione quas est odit! Delectus ad ut esse distinctio officiis alias officia dolor deserunt, quae id nisi eligendi?',
    },
    {
      id: 3,
      name: 'X',
      pronouns: 'She / Her / He / Him / They / Their',
      role: 'Y',
      picture: lavender,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dicta officia aut, aliquid similique nesciunt veritatis atque sequi natus illum quasi iste provident voluptatibus, nostrum explicabo? Adipisci autem nemo unde officia natus ratione quas est odit! Delectus ad ut esse distinctio officiis alias officia dolor deserunt, quae id nisi eligendi?',
    },
    {
      id: 4,
      name: 'X',
      pronouns: 'She / Her / He / Him / They / Their',
      role: 'Y',
      picture: lavender,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dicta officia aut, aliquid similique nesciunt veritatis atque sequi natus illum quasi iste provident voluptatibus, nostrum explicabo? Adipisci autem nemo unde officia natus ratione quas est odit! Delectus ad ut esse distinctio officiis alias officia dolor deserunt, quae id nisi eligendi?',
    },
    {
      id: 5,
      name: 'X',
      pronouns: 'She / Her / He / Him / They / Their',
      role: 'Y',
      picture: lavender,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dicta officia aut, aliquid similique nesciunt veritatis atque sequi natus illum quasi iste provident voluptatibus, nostrum explicabo? Adipisci autem nemo unde officia natus ratione quas est odit! Delectus ad ut esse distinctio officiis alias officia dolor deserunt, quae id nisi eligendi?',
    },
    {
      id: 6,
      name: 'X',
      pronouns: 'She / Her / He / Him / They / Their',
      role: 'Y',
      picture: lavender,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dicta officia aut, aliquid similique nesciunt veritatis atque sequi natus illum quasi iste provident voluptatibus, nostrum explicabo? Adipisci autem nemo unde officia natus ratione quas est odit! Delectus ad ut esse distinctio officiis alias officia dolor deserunt, quae id nisi eligendi?',
    },
    {
      id: 7,
      name: 'X',
      pronouns: 'She / Her / He / Him / They / Their',
      role: 'Y',
      picture: lavender,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dicta officia aut, aliquid similique nesciunt veritatis atque sequi natus illum quasi iste provident voluptatibus, nostrum explicabo? Adipisci autem nemo unde officia natus ratione quas est odit! Delectus ad ut esse distinctio officiis alias officia dolor deserunt, quae id nisi eligendi?',
    },
    {
      id: 8,
      name: 'X',
      pronouns: 'She / Her / He / Him / They / Their',
      role: 'Y',
      picture: lavender,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dicta officia aut, aliquid similique nesciunt veritatis atque sequi natus illum quasi iste provident voluptatibus, nostrum explicabo? Adipisci autem nemo unde officia natus ratione quas est odit! Delectus ad ut esse distinctio officiis alias officia dolor deserunt, quae id nisi eligendi?',
    },
    {
      id: 9,
      name: 'X',
      pronouns: 'She / Her / He / Him / They / Their',
      role: 'Y',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dicta officia aut, aliquid similique nesciunt veritatis atque sequi natus illum quasi iste provident voluptatibus, nostrum explicabo? Adipisci autem nemo unde officia natus ratione quas est odit! Delectus ad ut esse distinctio officiis alias officia dolor deserunt, quae id nisi eligendi?',
      picture: lavender,
    },
    {
      id: 10,
      name: 'X',
      pronouns: 'She / Her / He / Him / They / Their',
      role: 'Y',
      picture: lavender,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dicta officia aut, aliquid similique nesciunt veritatis atque sequi natus illum quasi iste provident voluptatibus, nostrum explicabo? Adipisci autem nemo unde officia natus ratione quas est odit! Delectus ad ut esse distinctio officiis alias officia dolor deserunt, quae id nisi eligendi?',
    },
    {
      id: 1,
      name: 'Sol',
      pronouns: 'He / Him',
      role: 'Acteur',
      picture: lavender,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dicta officia aut, aliquid similique nesciunt veritatis atque sequi natus illum quasi iste provident voluptatibus, nostrum explicabo? Adipisci autem nemo unde officia natus ratione quas est odit! Delectus ad ut esse distinctio officiis alias officia dolor deserunt, quae id nisi eligendi?',
    },
    {
      id: 2,
      name: 'X',
      pronouns: 'She / Her / He / Him / They / Their',
      role: 'Y',
      picture: lavender,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dicta officia aut, aliquid similique nesciunt veritatis atque sequi natus illum quasi iste provident voluptatibus, nostrum explicabo? Adipisci autem nemo unde officia natus ratione quas est odit! Delectus ad ut esse distinctio officiis alias officia dolor deserunt, quae id nisi eligendi?',
    },
    {
      id: 3,
      name: 'X',
      pronouns: 'She / Her / He / Him / They / Their',
      role: 'Y',
      picture: lavender,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dicta officia aut, aliquid similique nesciunt veritatis atque sequi natus illum quasi iste provident voluptatibus, nostrum explicabo? Adipisci autem nemo unde officia natus ratione quas est odit! Delectus ad ut esse distinctio officiis alias officia dolor deserunt, quae id nisi eligendi?',
    },
    {
      id: 4,
      name: 'X',
      pronouns: 'She / Her / He / Him / They / Their',
      role: 'Y',
      picture: lavender,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dicta officia aut, aliquid similique nesciunt veritatis atque sequi natus illum quasi iste provident voluptatibus, nostrum explicabo? Adipisci autem nemo unde officia natus ratione quas est odit! Delectus ad ut esse distinctio officiis alias officia dolor deserunt, quae id nisi eligendi?',
    },
    {
      id: 5,
      name: 'X',
      pronouns: 'She / Her / He / Him / They / Their',
      role: 'Y',
      picture: lavender,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dicta officia aut, aliquid similique nesciunt veritatis atque sequi natus illum quasi iste provident voluptatibus, nostrum explicabo? Adipisci autem nemo unde officia natus ratione quas est odit! Delectus ad ut esse distinctio officiis alias officia dolor deserunt, quae id nisi eligendi?',
    },
    {
      id: 6,
      name: 'X',
      pronouns: 'She / Her / He / Him / They / Their',
      role: 'Y',
      picture: lavender,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dicta officia aut, aliquid similique nesciunt veritatis atque sequi natus illum quasi iste provident voluptatibus, nostrum explicabo? Adipisci autem nemo unde officia natus ratione quas est odit! Delectus ad ut esse distinctio officiis alias officia dolor deserunt, quae id nisi eligendi?',
    },
    {
      id: 7,
      name: 'X',
      pronouns: 'She / Her / He / Him / They / Their',
      role: 'Y',
      picture: lavender,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dicta officia aut, aliquid similique nesciunt veritatis atque sequi natus illum quasi iste provident voluptatibus, nostrum explicabo? Adipisci autem nemo unde officia natus ratione quas est odit! Delectus ad ut esse distinctio officiis alias officia dolor deserunt, quae id nisi eligendi?',
    },
    {
      id: 8,
      name: 'X',
      pronouns: 'She / Her / He / Him / They / Their',
      role: 'Y',
      picture: lavender,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dicta officia aut, aliquid similique nesciunt veritatis atque sequi natus illum quasi iste provident voluptatibus, nostrum explicabo? Adipisci autem nemo unde officia natus ratione quas est odit! Delectus ad ut esse distinctio officiis alias officia dolor deserunt, quae id nisi eligendi?',
    },
    {
      id: 9,
      name: 'X',
      pronouns: 'She / Her / He / Him / They / Their',
      role: 'Y',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dicta officia aut, aliquid similique nesciunt veritatis atque sequi natus illum quasi iste provident voluptatibus, nostrum explicabo? Adipisci autem nemo unde officia natus ratione quas est odit! Delectus ad ut esse distinctio officiis alias officia dolor deserunt, quae id nisi eligendi?',
      picture: lavender,
    },
    {
      id: 10,
      name: 'X',
      pronouns: 'She / Her / He / Him / They / Their',
      role: 'Y',
      picture: lavender,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dicta officia aut, aliquid similique nesciunt veritatis atque sequi natus illum quasi iste provident voluptatibus, nostrum explicabo? Adipisci autem nemo unde officia natus ratione quas est odit! Delectus ad ut esse distinctio officiis alias officia dolor deserunt, quae id nisi eligendi?',
    },
  ]
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
  const toggleTabClassname = (currentTab) => {
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
    console.log(currentTab);
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
  return (
    <Layout>
      <Head>
        <title>Galerie des Pieuvres</title>
      </Head>
      <div className={collectif}>
        <PageTitle>
          Les Pieuvres
        </PageTitle>
        <Tab classStyle={collectif__tabs} tabs={tabs}  tabFunction={setNewTab} />
        {tabDisplay ==='collectif' && (
          <div className={collectif__team__display__container}>
            colectif Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati culpa quibusdam dolorem dolore nulla hic, quia esse inventore beatae! Reprehenderit eos quaerat consequuntur nemo corporis veniam quidem, nisi numquam maxime rerum quas exercitationem quia totam? Explicabo alias quas possimus consectetur delectus, dolores, aperiam unde est debitis placeat, ex corrupti ad. Natus doloribus labore dolores quaerat distinctio. Nam quo ad earum molestias similique adipisci impedit aut ut dolorem facilis fuga corporis quam atque molestiae veritatis, veniam magnam rem quidem voluptates ipsam. Ut illum voluptas rerum repudiandae quasi veniam! Id officiis fugiat tempore eos libero. Illo, quos maiores? Veniam inventore, accusamus iusto consequatur eaque praesentium sit pariatur quis exercitationem magni ipsum, quisquam perferendis, nostrum illo aspernatur nobis. Eius dolores, tempora harum placeat eos, quae, ut eveniet quos saepe illo architecto quo quaerat cupiditate mollitia voluptatibus fuga. Asperiores fugiat excepturi ex deleniti voluptas enim ipsam reiciendis possimus, culpa obcaecati facere nostrum doloribus pariatur corrupti, fugit modi debitis natus recusandae aliquid esse voluptatibus? Possimus facere necessitatibus officia excepturi maxime ipsam optio obcaecati eveniet magni ad magnam sit, distinctio cumque non neque voluptatum recusandae esse soluta minima ex veniam tempore laborum vel iste? Nemo exercitationem sequi consectetur error debitis natus ab ad molestiae ex libero.
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
            <div className={collectif__team__list}>
              {teamMembers.map((member) => (
                <div key={member.id} className={collectif__team__list__item} style={{'background-image': `url(${member.picture.src})`}} onClick={handleClick} id={member.name}>
                  <div className={collectif__team__list__item__info}>
                    <span>{member.name}</span>
                    <span>{member.pronouns}</span>
                    <span>{member.role}</span>
                  </div>
                </div>
                
              ))}
              
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}