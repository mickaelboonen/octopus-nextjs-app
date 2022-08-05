import { useEffect } from 'react';
import styles from './layout.module.scss';

export default function Tab({ tabs, tabFunction }) {
  const { tab, tab__active, tab__container } = styles;
  const handleClick = (event) => {
    tabFunction(event.target.textContent)
  }


  return (
    <div className={tab__container}>
      {tabs.map((currentTab) => (
        <div className={tab} onClick={handleClick} id={`${currentTab.id}-tab`}>
          <span>{currentTab.name}</span>
        </div>
      ))}
    </div>
    
  )
}